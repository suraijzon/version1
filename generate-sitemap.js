const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, readFileSync } = require("fs");
const path = require("path");

const baseUrl = "https://zonzoctech.com";

// read the React router file
const appFile = readFileSync(path.join(__dirname, "src/App.js"), "utf8");

// extract all Route paths
const routeMatches = [...appFile.matchAll(/path="([^"]+)"/g)];

let routes = routeMatches.map(match => match[1]);

// remove private routes
const excluded = [
  "/login",
  "/signup",
  "/admin-dashboard",
  "/user-profile"
];

routes = routes.filter(route => !excluded.includes(route));

// add homepage
routes.push("/");

// remove duplicates
routes = [...new Set(routes)];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

const today = new Date().toISOString();

routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: "monthly",
    priority: route === "/" ? 1.0 : 0.8,
    lastmod: today
  });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Dynamic sitemap generated from App.js routes!");
});