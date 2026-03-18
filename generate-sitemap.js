const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, readFileSync, statSync } = require("fs");
const path = require("path");

const baseUrl = "https://zonzoctech.com";

// read React routes
const appFile = readFileSync(path.join(__dirname, "src/App.js"), "utf8");

// extract routes
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

/* 🔥 AUTO LASTMOD FROM FILE SYSTEM */
const getLastModified = (route) => {
try {
let fileName;


if (route === "/") {
  fileName = "Home.jsx"; // change if your home file name is different
} else {
  // convert route → file name
  // /ai-seo → AiSeo.jsx
  const clean = route.replace("/", "");
  const parts = clean.split("-");
  const formatted = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  fileName = `${formatted}.jsx`;
}

const filePath = path.join(__dirname, "src/pages", fileName);

const stats = statSync(filePath);

return stats.mtime.toISOString();


} catch (error) {
// fallback if file not found
return new Date().toISOString();
}
};

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach(route => {

const lastmod = getLastModified(route);

sitemap.write({
url: route,
changefreq: "monthly",
priority: route === "/" ? 1.0 : 0.8,
lastmod: lastmod
});

});

sitemap.end();

streamToPromise(sitemap).then(() => {
console.log("🔥 Fully automatic sitemap generated!");
});
