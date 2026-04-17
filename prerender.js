'use strict';
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://zonzoctech.com';

const routes = [
  {
    path: '/ai-seo',
    title: 'AI SEO Services | Intelligent Search Optimization',
    description: 'Leverage artificial intelligence to optimize content, technical SEO, and entity authority for next-generation search engines.',
  },
  {
    path: '/seo-services',
    title: 'SEO Services That Drive Traffic, Leads & Revenue',
    description: 'Professional SEO services including technical SEO, content strategy, AI SEO, and link building.',
  },
  {
    path: '/google-search-console',
    title: 'Google Search Console Optimization Services',
    description: 'Professional Google Search Console setup, indexing fixes, performance tracking, and advanced search visibility insights.',
  },
  {
    path: '/seo-ai-search-optimization',
    title: 'AI Search Optimization Services | Future of SEO',
    description: 'Optimize for AI search engines, voice queries, and generative results. Advanced strategies for visibility beyond traditional rankings.',
  },
  {
    path: '/ai-software-development',
    title: 'AI Software Development Solutions | Smart Systems',
    description: 'Build intelligent AI software solutions for automation, predictive analytics, and scalable digital transformation.',
  },
  {
    path: '/full-stack-web-development',
    title: 'Full Stack Web Development Company | Scalable Apps',
    description: 'Modern full-stack development using scalable architecture, API integrations, and performance-first coding standards.',
  },
  {
    path: '/ai-website-design-development',
    title: 'AI Website Design & Development Company',
    description: 'Conversion-focused AI websites designed for performance, automation, and intelligent user engagement across modern search platforms.',
  },
  {
    path: '/ai-web-application-development',
    title: 'AI Web Application Development Company | Zonzoctech',
    description: 'Custom AI web applications built for automation, scalability, and intelligent user experiences. Future-ready development powered by data and innovation.',
  },
  {
    path: '/ecommerce-development-optimization',
    title: 'Ecommerce Development & Conversion Optimization',
    description: 'Build and optimize ecommerce stores for speed, AI search visibility, and higher conversion rates across competitive markets.',
  },
  {
    path: '/website-maintenance-performance-security',
    title: 'Website Maintenance, Performance & Security Services',
    description: 'Keep your website fast, secure, and up-to-date with proactive maintenance, performance audits, and security monitoring.',
  },
  {
    path: '/about',
    title: 'About Zonzoctech | AI & Digital Growth Experts',
    description: 'Discover how Zonzoctech combines AI, SEO, and web engineering to build high-performance digital ecosystems.',
  },
  {
    path: '/case-studies',
    title: 'Case Studies | Proven SEO & AI Results',
    description: 'Explore real-world success stories showcasing measurable growth through AI-driven SEO and advanced web strategies.',
  },
  {
    path: '/contact',
    title: 'Contact Zonzoctech | Start Your Digital Growth',
    description: 'Speak with our AI and SEO experts to discuss your project and start your digital growth journey today.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Zonzoctech Data Protection Standards',
    description: 'Learn how Zonzoctech collects, protects, and manages user data in compliance with global privacy standards and secure web practices.',
  },
  {
    path: '/terms-conditions',
    title: 'Terms & Conditions | Zonzoctech Services Agreement',
    description: "Review Zonzoctech's service terms, project policies, intellectual property rights, and legal agreements.",
  },
];

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectMeta(template, { path: routePath, title, description }) {
  const canonical = `${SITE_URL}${routePath}`;
  const t = esc(title);
  const d = esc(description);
  const c = esc(canonical);

  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta[^>]*name=["']description["'][^>]*>/i,
      `<meta name="description" content="${d}"/>`)
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${c}"/>`)
    .replace(/<meta[^>]*property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${t}"/>`)
    .replace(/<meta[^>]*property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${d}"/>`)
    .replace(/<meta[^>]*property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${c}"/>`)
    .replace(/<meta[^>]*name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${t}"/>`)
    .replace(/<meta[^>]*name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${d}"/>`);
}

const buildDir = path.join(__dirname, 'build');
const templatePath = path.join(buildDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('ERROR: build/index.html not found. Run the build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

for (const route of routes) {
  const html = injectMeta(template, route);
  const dir = path.join(buildDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ ${route.path}`);
}

console.log(`\nPre-rendered ${routes.length} routes.`);
