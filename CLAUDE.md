# ZonzocTech Project Guidelines

## Project
- Framework: Next.js 14 App Router
- Deployed on: Vercel
- Live URL: zonzoctech.com

## Rules
- Never change CSS or styling unless explicitly told
- Only update text content when asked
- Always push with clean commits (no .next folder)
- .next/ is in .gitignore — never commit it

## Design System (added this session)
- Font: Inter (loaded via Google Fonts in app/layout.jsx)
- CSS variables defined in src/index.css (:root)
- Primary: #00448f | Dark: #003070 | Light: #e8f0fb
- Black: #0a0a0a | Grey: #6b7280 | Border: #e2e8f0 | Bg light: #f8faff
- Border radius: 8px (sm) / 16px (md) / 24px (lg)
- Transition: 0.2s ease | Container: 1200px | Section padding: 100px

## Completed Pages — Content Rewritten
- ✅ Homepage
- ✅ About
- ✅ SEO Services
- ✅ AI Web Application Development
- ✅ Full Stack Web Development
- ✅ AI Website Design & Development
- ✅ Ecommerce Development & Optimization
- ✅ Website Maintenance & Security
- ✅ AI SEO & Search Optimization
- ✅ AI Software Development
- ✅ Contact page

## Deleted Pages
- ❌ /ai-seo → redirected to /seo-ai-search-optimization
- ❌ /google-search-console → redirected to /seo-services

## Completed Styling Work

### Homepage Components
- ✅ Global CSS variables + Inter font (src/index.css)
- ✅ Topbar — new topbar.css, class names updated in Navbar.jsx
- ✅ Navbar — new navbar.css, JSX class names updated, scroll detection added
- ✅ Hero — dark gradient #003070→#00448f, white text, 90vh
- ✅ TrustBar — white bg, border, stats row, blue numbers
- ✅ Services/Solution — #f8faff bg, white cards, blue active tabs
- ✅ Process — #003070 dark bg, white numbered cards
- ✅ Why Choose — white bg, Inter, blue accents, stats grid
- ✅ Tech Stack (WhoWeAre) — #f8faff bg, white cards, 5-col grid
- ✅ Portfolio (SuccessSection) — static 3-col grid, white cards, #e2e8f0 border
- ✅ Reviews — #f8faff bg, white cards, blue rating number
- ✅ Contact CTA — #003070 bg, white text, white form card
- ✅ Footer — #0a0a0a bg, clean link columns
- ✅ GrowNow — #f8faff bg, blue gradient box

### Service Pages (full design system pass — commit adff27d)
- ✅ SEOServices.css
- ✅ AIWebAppPage.css
- ✅ FullStackWebDev.css
- ✅ AIWebsiteDesign.css
- ✅ AISoftwareServices.css
- ✅ EcommercePage.css
- ✅ WebsiteMaintenance.css
- ✅ AIOptimizationPage.css
- ✅ AboutUs.css
- ✅ ContactPage.css

### Service Page Design System Applied
- Font: Inter everywhere (was Poppins)
- Hero: linear-gradient(135deg, #003070, #00448f), H1 52px 800 white
- Hero p: rgba(255,255,255,0.85) 20px line-height 1.7
- Hero CTA: white bg, #00448f text, border-radius 8px
- Section H2: 40px 800 #0a0a0a
- Body text: 16px #6b7280 line-height 1.7
- Cards: white bg, border 1px solid #e2e8f0, radius 16px, shadow 0 4px 24px rgba(0,0,0,0.06)
- FAQ cards: white bg, border #e2e8f0, radius 12px
- CTA sections: linear-gradient(135deg, #003070, #00448f), white button #00448f text
- Section padding: 100px 0 desktop / 60px 0 mobile
- Mobile H1: 36px, single-column grids

## Still To Do
- ⬜ Case Studies page — check and update
- ⬜ Schema markup / structured data
- ⬜ Google Search Console submission
