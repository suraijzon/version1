const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/seo-services", changefreq: "weekly", priority: 0.9 },
  { url: "/ai-seo", changefreq: "monthly", priority: 0.9 },
  { url: "/ai-software-development", changefreq: "monthly", priority: 0.9 },
  { url: "/ai-web-application-development", changefreq: "monthly", priority: 0.9 },
  { url: "/ai-website-design-development", changefreq: "monthly", priority: 0.9 },
  { url: "/seo-ai-search-optimization", changefreq: "monthly", priority: 0.9 },
  { url: "/full-stack-web-development", changefreq: "monthly", priority: 0.9 },
  { url: "/ecommerce-development-optimization", changefreq: "monthly", priority: 0.9 },
  { url: "/website-maintenance-performance-security", changefreq: "monthly", priority: 0.9 },
  { url: "/case-studies", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.4 },
  { url: "/terms-conditions", changefreq: "yearly", priority: 0.4 }
];

const sitemap = new SitemapStream({
  hostname: "https://yourdomain.com"
});

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated successfully!");
});