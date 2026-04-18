# ZonzocTech — Project Context

## Project
- **Name:** ZonzocTech
- **Domain:** zonzoctech.com
- **Repo:** github.com/suraijzon/version1
- **Target market:** UK and US clients

## Stack
- **Current:** React 18 (Create React App)
- **Migrating to:** Next.js 14 (App Router) for SSR and AI crawlability
- **Hosting:** Vercel
- **Styling:** Plain CSS (no Tailwind)
- **Routing:** react-router-dom v6 (to be replaced by Next.js file-based routing)
- **SEO:** react-helmet-async + prerender.js (meta-tag injection at build time)

## Vercel Settings
- Framework Preset: Create React App
- All other settings: Vercel defaults
- vercel.json: minimal SPA rewrite only (`/(.*) → /`)

## Current Status
The site renders and works correctly for human visitors. It is **not crawlable by AI tools or search bots** because it is a client-side-only SPA — crawlers see an empty `#root` div. The prerender.js script injects per-page meta tags (title, description, canonical, OG/Twitter) into static HTML shells at build time, but page body content is not pre-rendered.

## Next Task
**Migrate to Next.js 14** using the App Router. Every page needs `generateMetadata()` for per-page SEO and server-side rendering so crawlers receive full HTML. The migration should preserve all existing routes, components, and content.

## Known Bugs (fix during or after migration)
1. **WhatsApp number** — has an extra digit somewhere in the component
2. **`src/utils/api.js`** — baseURL is hardcoded to `http://localhost:5000`; must use an environment variable
3. **Contact form env vars** — email credentials are not wired up via Vercel environment variables
4. **ExpertPopup** — the popup in `src/components/ExpertPopup.jsx` never opens; trigger logic is broken
5. **Budget slider** — value is stored as a string instead of a number

## Key Files
- `src/App.js` — all routes defined here (to become Next.js `app/` directory)
- `src/components/SEO.jsx` — helmet-based SEO wrapper (replace with `generateMetadata`)
- `src/utils/api.js` — axios instance with hardcoded localhost URL
- `prerender.js` — build-time meta injector (redundant after Next.js migration)
- `generate-sitemap.js` — runs before build to write `public/sitemap.xml`

## Routes
| Path | Page component |
|------|---------------|
| `/` | HomePage (inline in App.js) |
| `/about` | AboutUs.jsx |
| `/ai-seo` | AiSeoServices.jsx |
| `/seo-services` | SEOServices.jsx |
| `/google-search-console` | GoogleSearchConsole.jsx |
| `/seo-ai-search-optimization` | AIOptimizationPage.jsx |
| `/ai-software-development` | AISoftwareServices.jsx |
| `/full-stack-web-development` | FullStackWebDev.jsx |
| `/ai-website-design-development` | AIWebsiteDesign.jsx |
| `/ai-web-application-development` | AIWebAppPage.jsx |
| `/ecommerce-development-optimization` | EcommercePage.jsx |
| `/website-maintenance-performance-security` | WebsiteMaintenance.jsx |
| `/case-studies` | CaseStudies.jsx |
| `/contact` | ContactPage.jsx |
| `/privacy-policy` | PrivacyPolicy.jsx |
| `/terms-conditions` | TermsConditions.jsx |
| `/login` | Login.jsx |
| `/signup` | Signup.jsx |
| `/user-profile` | UserProfile.jsx |
| `/admin-dashboard` | AdminDashboard.jsx |
| `/project/:id` | ProjectDetails.jsx |
