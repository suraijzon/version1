'use strict';
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://zonzoctech.com';

// ---------------------------------------------------------------------------
// Route definitions – meta + full static body content for AI/crawler visiblity
// ---------------------------------------------------------------------------
const routes = [
  // ── HOMEPAGE ──────────────────────────────────────────────────────────────
  {
    path: '/',
    title: 'ZonzocTech \u2013 AI Web Development, Full-Stack &amp; SEO Experts',
    description: 'Boost your business with AI-powered web apps, full-stack development, SEO &amp; automation. Fast, secure, and growth-focused digital solutions.',
    body: `<main>
<h1>Turn Your Website Into a Lead-Generating Machine</h1>
<p>We build high-converting websites, drive targeted traffic, and automate your business with AI to help you grow faster.</p>

<section>
<h2>Solutions Designed to Grow Your Business</h2>
<p>From generating leads and building high-converting websites to automating workflows with AI, our services are focused on delivering real, measurable results.</p>

<h3>SEO Services</h3>
<p>We help you attract and convert high-quality leads consistently.</p>
<ul>
<li>SEO Strategy &amp; Consulting</li>
<li>Keyword Research &amp; Mapping</li>
<li>Competitor &amp; Market Analysis</li>
<li>On-Page &amp; Content Optimization</li>
<li>Enterprise SEO Solutions</li>
<li>Google Search Console Setup &amp; Insights</li>
<li>Google Analytics &amp; GA4 Tracking</li>
<li>Rank Tracking &amp; Performance Monitoring</li>
<li>Ecommerce SEO Strategy</li>
<li>Product &amp; Shopping Feed Optimization</li>
<li>Conversion Rate Optimization (CRO)</li>
</ul>

<h3>High-Converting Websites</h3>
<p>We design and develop websites that turn visitors into customers.</p>
<ul>
<li>User Interface (UI) Design</li>
<li>User Experience (UX) Design</li>
<li>Wireframing &amp; Prototyping</li>
<li>Frontend Development</li>
<li>Backend Development</li>
<li>Full Stack Development</li>
<li>Web Application Development</li>
<li>API &amp; Third-Party Integration</li>
<li>Responsive &amp; Mobile-First Design</li>
</ul>

<h3>AI Automation Systems</h3>
<p>We automate your business processes to save time and increase efficiency.</p>
<ul>
<li>Machine Learning Solutions</li>
<li>Custom AI Model Development</li>
<li>Predictive &amp; Smart Analytics</li>
<li>Natural Language Processing (NLP)</li>
<li>LLM &amp; AI API Integration</li>
<li>AI Agents &amp; Autonomous Systems</li>
<li>Chatbot &amp; Virtual Assistant Development</li>
<li>Business Process Automation</li>
<li>Marketing Automation</li>
<li>Workflow Optimization</li>
</ul>
</section>

<section>
<h2>Who We Are &amp; Why Choose Zonzoctech</h2>
<p>At Zonzoctech, we're more than just a digital agency&mdash;we're your growth partner. With over a decade of experience, we specialize in building modern websites, boosting visibility through smart SEO, and integrating cutting-edge AI technologies to future-proof your business.</p>
</section>

<section>
<h2>Proven Process &ndash; How It Works</h2>
<p>Our 5-Step Success Blueprint</p>
<ol>
<li><strong>Discovery</strong> &ndash; We listen to your goals and gather key requirements</li>
<li><strong>Design</strong> &ndash; UI/UX designs and system architecture tailored to your needs</li>
<li><strong>Development</strong> &ndash; Agile development of web, mobile, and desktop solutions</li>
<li><strong>Launch</strong> &ndash; Final testing, deployment, and go-live across platforms</li>
<li><strong>Support</strong> &ndash; Continuous maintenance and updates to ensure success</li>
</ol>
</section>

<section>
<h2>Why Businesses Trust Us</h2>
<ul>
<li><strong>11+ Years of Experience</strong> &ndash; Over a decade of delivering exceptional digital solutions to businesses worldwide.</li>
<li><strong>End-to-End Services</strong> &ndash; From web development to SEO and AI we handle everything your business needs.</li>
<li><strong>Custom Solutions</strong> &ndash; Tailored, scalable solutions designed specifically for your unique business needs.</li>
<li><strong>Transparent Pricing</strong> &ndash; Clear communication and honest pricing with no hidden fees or surprises.</li>
<li><strong>Ongoing Support</strong> &ndash; Reliable maintenance and support to keep your digital presence running smoothly.</li>
<li><strong>Results-Driven</strong> &ndash; We focus on delivering measurable results that drive your business forward.</li>
</ul>
</section>
</main>`,
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  {
    path: '/about',
    title: 'About Zonzoctech | AI &amp; Digital Growth Experts',
    description: 'Discover how Zonzoctech combines AI, SEO, and web engineering to build high-performance digital ecosystems.',
    body: `<main>
<h1>About ZonzocTech</h1>
<p>Building Intelligent Digital Solutions That Drive Real Growth</p>
<p>ZonzocTech is a technology-driven digital solutions company specializing in AI-powered web applications, software development, full-stack development, SEO, and AI search optimization.</p>
<p>We help businesses move beyond outdated websites and disconnected tools by building scalable, intelligent, and performance-focused digital systems that generate traffic, leads, and revenue.</p>

<section>
<h2>Who We Are</h2>
<p>ZonzocTech was founded with a clear mission: to help businesses grow using modern technology, AI, and data-driven strategies &mdash; not hype or shortcuts.</p>
<p>We work with startups, growing companies, and established brands that want:</p>
<ul>
<li>Better online visibility</li>
<li>Smarter automation</li>
<li>High-performing websites</li>
<li>Measurable ROI from digital investments</li>
</ul>
<p>We don't just "build websites" or "do SEO" &mdash; we solve business problems with technology.</p>
</section>

<section>
<h2>What Makes Us Different</h2>
<p>Most agencies focus on either marketing or development. We bridge both.</p>
<ul>
<li>AI + Engineering + SEO under one roof</li>
<li>Strong technical foundation</li>
<li>Strategy-first execution</li>
<li>Built for both Google and AI-driven search engines</li>
</ul>
<p>Every solution we deliver is designed to be faster, secure, scalable, search-optimized, and conversion-focused.</p>
</section>

<section>
<h2>What We Do</h2>
<h3>Our Core Services</h3>
<ul>
<li>AI Web Application Development</li>
<li>AI Software Development</li>
<li>Full-Stack Web Development</li>
<li>AI Website Design &amp; Development</li>
<li>SEO Services</li>
<li>AI Search Optimization (GEO)</li>
<li>E-commerce Development &amp; Optimization</li>
<li>AI Automation &amp; Integrations</li>
<li>Website Performance, Security &amp; Maintenance</li>
</ul>
<p>Each service is built around real-world business outcomes, not just technical delivery.</p>
</section>

<section>
<h2>Our Approach</h2>
<ol>
<li><strong>Understand the Business</strong> &ndash; We start by understanding your goals, challenges, and market.</li>
<li><strong>Design the Right Solution</strong> &ndash; We choose the right technologies, AI models, and strategies &mdash; not overengineering.</li>
<li><strong>Build &amp; Optimize</strong> &ndash; We develop, test, and optimize for performance, SEO, and scalability.</li>
<li><strong>Measure &amp; Improve</strong> &ndash; We track results and continuously improve based on data.</li>
</ol>
</section>

<section>
<h2>Built for the Future of Search &amp; AI</h2>
<p>Search is changing. AI-generated answers, voice search, and generative engines are redefining visibility. ZonzocTech helps businesses prepare for:</p>
<ul>
<li>Google Search evolution</li>
<li>AI Overviews</li>
<li>Generative Engine Optimization (GEO)</li>
<li>AI-powered customer journeys</li>
</ul>
<p>We don't chase trends &mdash; we build future-ready digital foundations.</p>
</section>

<section>
<h2>Who We Work With</h2>
<ul>
<li>Startups launching new products</li>
<li>E-commerce brands scaling sales</li>
<li>Service businesses generating leads</li>
<li>Agencies needing technical execution</li>
<li>Companies modernizing legacy systems</li>
</ul>
</section>

<section>
<h2>Our Values</h2>
<ul>
<li><strong>Transparency</strong> &ndash; Clear communication, no hidden tactics</li>
<li><strong>Quality</strong> &ndash; Clean code, ethical SEO, scalable systems</li>
<li><strong>Results</strong> &ndash; Traffic, leads, conversions, and ROI</li>
<li><strong>Innovation</strong> &ndash; AI where it adds value, not buzzwords</li>
</ul>
</section>

<section>
<h2>Why ZonzocTech?</h2>
<ul>
<li>Technical expertise + marketing strategy</li>
<li>AI-ready development approach</li>
<li>SEO built into everything</li>
<li>Business-focused solutions</li>
<li>Long-term partnerships, not one-off projects</li>
</ul>
</section>
</main>`,
  },

  // ── AI SEO ────────────────────────────────────────────────────────────────
  {
    path: '/ai-seo',
    title: 'AI SEO Services | Intelligent Search Optimization',
    description: 'Leverage artificial intelligence to optimize content, technical SEO, and entity authority for next-generation search engines.',
    body: `<main>
<h1>Grow Organic Traffic on Auto-Pilot</h1>
<p>Grow your organic traffic and outrank competitors with SEO-optimized blog content. Powered by live research and link exchange that Google rewards.</p>
<p>Community of 400+ smart businesses in 18 countries. Rated 4.7/5 on Trustpilot.</p>

<section>
<h2>How It Works &ndash; 3 Simple Steps</h2>
<p>Start ranking faster with automation that works 24/7.</p>
<ol>
<li><strong>Connect Your Website</strong> &ndash; Add your domain and let our system scan technical SEO, keywords and rankings instantly.</li>
<li><strong>Generate AI-Optimized Content</strong> &ndash; Get SEO-ready articles based on real-time search data and competitor analysis.</li>
<li><strong>Publish &amp; Grow</strong> &ndash; Publish directly to your CMS and watch your organic traffic grow automatically.</li>
</ol>
</section>

<section>
<h2>Publish with Just One Click</h2>
<p>Publish articles directly to your favorite platforms including WordPress, Webflow, Wix, Shopify, and via API with just one click.</p>
</section>

<section>
<h2>And So Much More</h2>
<ul>
<li><strong>Uses real, current data</strong> &ndash; Article content is backed by real-time Google results, fresh insights from Reddit, Quora, academic papers, news portals and more. Stuff that Google rewards.</li>
<li><strong>Free backlinks</strong> &ndash; We automatically exchange backlinks with other niche-relevant customers in our network to boost your domain authority and rankings.</li>
<li><strong>Customized tone and voice</strong> &ndash; We analyze your existing content and write the article in the same tone and voice. No more generic content.</li>
<li><strong>JSON-LD Schema</strong> &ndash; Each article is enriched with JSON-LD Schema, ensuring your content is properly marked up for search engines and LLMs.</li>
<li><strong>People Also Ask data</strong> &ndash; Our articles incorporate People Also Ask data, ensuring you address the most common questions users have, thereby satisfying their search intent.</li>
<li><strong>Search Console integration</strong> &ndash; By integrating Google Search Console, we get detailed insights of how your page performs, helping us tailor the content.</li>
<li><strong>Multi-user access</strong> &ndash; Invite multiple editors to your organization and collaborate seamlessly to generate impactful content together.</li>
<li><strong>Support</strong> &ndash; Get expert assistance 24/7, ensuring smooth operation of all platform features.</li>
</ul>
</section>

<section>
<h2>Grow Smarter, Faster &ndash; Like a Smart CEO</h2>
<p>Use AI-powered SEO that generates content, boosts rankings, and brings real business growth &mdash; without spending hours writing.</p>
</section>
</main>`,
  },

  // ── SEO SERVICES ──────────────────────────────────────────────────────────
  {
    path: '/seo-services',
    title: 'SEO Services That Drive Traffic, Leads &amp; Revenue',
    description: 'Professional SEO services including technical SEO, content strategy, AI SEO, and link building.',
    body: `<main>
<h1>SEO Services That Drive Traffic, Leads &amp; Revenue</h1>
<p>Rank Higher. Get More Leads. Grow Faster.</p>
<p>We help businesses dominate Google and AI-powered search with strategies focused on real results &mdash; not vanity metrics.</p>

<section>
<h2>Our SEO Services</h2>

<h3>Technical SEO</h3>
<ul>
<li>Speed Optimization</li>
<li>Mobile Optimization</li>
<li>Crawl &amp; Index Fixes</li>
<li>Structured Data</li>
</ul>

<h3>On-Page SEO</h3>
<ul>
<li>Keyword Targeting</li>
<li>Content Optimization</li>
<li>Meta Tags &amp; Headings</li>
<li>Internal Linking</li>
</ul>

<h3>Content SEO</h3>
<ul>
<li>Blog Strategy</li>
<li>Landing Pages</li>
<li>Topic Clusters</li>
<li>Authority Content</li>
</ul>

<h3>Link Building</h3>
<ul>
<li>Outreach Campaigns</li>
<li>Authority Backlinks</li>
<li>Niche Links</li>
</ul>
</section>

<section>
<h2>AI-Enhanced SEO</h2>
<p>We use AI to accelerate SEO performance with smarter data-driven strategies.</p>
<ul>
<li>Keyword Clustering</li>
<li>Search Intent Prediction</li>
<li>Content Scaling</li>
</ul>
</section>

<section>
<h2>Why Choose Us?</h2>
<ul>
<li>Proven SEO for US &amp; UK markets</li>
<li>Transparent reporting</li>
<li>Focus on leads &amp; revenue</li>
<li>AI + Traditional SEO combined</li>
</ul>
</section>

<section>
<h2>Results You Can Expect</h2>
<ul>
<li>Increase Traffic</li>
<li>Higher Rankings</li>
<li>More Leads</li>
<li>Long-term Growth</li>
</ul>
</section>

<section>
<h2>Get Your Free SEO Audit</h2>
<p>We'll show you exactly what's holding your site back.</p>
</section>
</main>`,
  },

  // ── GOOGLE SEARCH CONSOLE ─────────────────────────────────────────────────
  {
    path: '/google-search-console',
    title: 'Google Search Console Optimization Services',
    description: 'Professional Google Search Console setup, indexing fixes, performance tracking, and advanced search visibility insights.',
    body: `<main>
<h1>Google Search Console Services</h1>
<p>Loved by 200+ clients across the world</p>

<section>
<h2>What is Google Search Console?</h2>
<p>Google Search Console is a free tool from Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results. It provides valuable insights into how Google views your website and helps you optimize your visibility.</p>
</section>

<section>
<h2>Why Your Business Needs Google Search Console</h2>
<ul>
<li><strong>Accurate Search Data</strong> &ndash; Get precise insights into how Google sees and ranks your website in search results.</li>
<li><strong>Identify &amp; Fix Issues</strong> &ndash; Discover crawl errors, indexing problems, and security issues before they impact rankings.</li>
<li><strong>Track Performance</strong> &ndash; Monitor clicks, impressions, CTR, and position for every page and query.</li>
<li><strong>Improve Page Speed</strong> &ndash; Analyze Core Web Vitals and optimize for better user experience and SEO.</li>
<li><strong>Manage Backlinks</strong> &ndash; See who links to your site and disavow harmful or spammy backlinks.</li>
<li><strong>Mobile Optimization</strong> &ndash; Ensure your site works perfectly on mobile devices with usability reports.</li>
</ul>
</section>

<section>
<h2>Our Google Search Console Services</h2>

<h3>Search Performance Analysis</h3>
<p>Track your website's search visibility, click-through rates, and keyword rankings over time.</p>
<ul>
<li>Query analysis and keyword insights</li>
<li>Page-level performance metrics</li>
<li>Geographic and device breakdowns</li>
<li>Click and impression trends</li>
</ul>

<h3>Index Coverage Monitoring</h3>
<p>Ensure all your important pages are properly indexed and discoverable by Google.</p>
<ul>
<li>Index status reports</li>
<li>Crawl error identification</li>
<li>Sitemap submission and monitoring</li>
<li>URL inspection tool</li>
</ul>

<h3>Technical SEO Audit</h3>
<p>Identify and resolve technical issues that may be holding back your search performance.</p>
<ul>
<li>Core Web Vitals assessment</li>
<li>Mobile usability testing</li>
<li>Structured data validation</li>
<li>Security issue detection</li>
</ul>

<h3>Link Analysis &amp; Management</h3>
<p>Monitor your backlink profile and manage links pointing to your website.</p>
<ul>
<li>External links analysis</li>
<li>Internal linking structure</li>
<li>Disavow toxic backlinks</li>
<li>Link building opportunities</li>
</ul>
</section>

<section>
<h2>Ready to Optimize Your Search Performance?</h2>
<p>Let our experts help you unlock the full potential of Google Search Console.</p>
</section>
</main>`,
  },

  // ── AI SEARCH OPTIMIZATION ────────────────────────────────────────────────
  {
    path: '/seo-ai-search-optimization',
    title: 'AI Search Optimization Services | Future of SEO',
    description: 'Optimize for AI search engines, voice queries, and generative results. Advanced strategies for visibility beyond traditional rankings.',
    body: `<main>
<h1>AI Search Optimization That Helps Your Brand Appear in Google, AI Answers &amp; Voice Search</h1>
<p>We provide AI search optimization services that help businesses stay visible in a world where search is no longer limited to blue links. Our strategies optimize your website for Google Search, AI Overviews, generative engines, voice search, and answer-based platforms.</p>

<section>
<h2>What Is AI Search Optimization?</h2>
<p>AI search optimization is the process of optimizing websites so they are understood, trusted, and surfaced by AI-powered search systems. This includes Google's AI-driven results, answer engines, and conversational search platforms.</p>
<p>Unlike traditional SEO, AI search optimization focuses on:</p>
<ul>
<li>Structured understanding</li>
<li>Clear topical authority</li>
<li>Entity recognition</li>
<li>Answer-ready content</li>
</ul>
</section>

<section>
<h2>Who Needs AI Search Optimization?</h2>
<p>This service is ideal for:</p>
<ul>
<li>Businesses experiencing declining organic visibility</li>
<li>Brands affected by AI Overviews or zero-click searches</li>
<li>Companies relying on organic leads</li>
<li>Websites publishing expert or service-based content</li>
<li>Businesses wanting future-proof search visibility</li>
</ul>
<p>If search traffic is changing for your business, AI search optimization is no longer optional.</p>
</section>

<section>
<h2>Problems We Solve with AI Search Optimization</h2>
<ul>
<li>Reduced clicks due to AI answers</li>
<li>Content not appearing in AI summaries</li>
<li>Poor topical authority signals</li>
<li>Weak entity recognition</li>
<li>Traditional SEO strategies losing effectiveness</li>
</ul>
</section>

<section>
<h2>Our AI Search Optimization Services</h2>
<p>We deliver end-to-end AI search optimization solutions, including:</p>
<ul>
<li>Generative Engine Optimization (GEO)</li>
<li>Entity-Based SEO &amp; Knowledge Graph Optimization</li>
<li>AI-Friendly Content Structuring</li>
<li>Topical Authority Development</li>
<li>Schema &amp; Structured Data Optimization</li>
<li>Search Intent &amp; Answer Mapping</li>
<li>Technical SEO for AI Crawling</li>
<li>Voice &amp; Conversational Search Optimization</li>
</ul>
</section>

<section>
<h2>Our AI Search Optimization Process</h2>
<ol>
<li><strong>AI Search Audit</strong> &ndash; We analyze how your site appears in AI-generated answers and search features.</li>
<li><strong>Content &amp; Entity Mapping</strong> &ndash; We align your content with clear entities, topics, and search intent.</li>
<li><strong>Technical &amp; Schema Optimization</strong> &ndash; We implement structured data and technical fixes for AI readability.</li>
<li><strong>Content Optimization for Answers</strong> &ndash; We optimize content for concise, authoritative responses.</li>
<li><strong>Monitoring &amp; Continuous Improvement</strong> &ndash; We track AI visibility and adapt strategies as search evolves.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for AI Search Optimization?</h2>
<ul>
<li>Early-mover expertise in AI-driven search</li>
<li>Strong foundation in technical SEO</li>
<li>Business-focused visibility strategy</li>
<li>Clear reporting &amp; measurable impact</li>
<li>Future-proof optimization approach</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Is AI search optimization the same as SEO?</dt>
<dd>No. AI search optimization extends SEO by optimizing for how AI systems understand, summarize, and recommend content.</dd>
<dt>Will AI search replace traditional SEO?</dt>
<dd>Not completely &mdash; but it is changing how visibility works. Both should work together.</dd>
<dt>Can existing websites be optimized for AI search?</dt>
<dd>Yes. We optimize existing sites with content, structure, and technical improvements.</dd>
<dt>How do you measure success?</dt>
<dd>We track AI visibility, brand mentions, featured answers, and organic performance.</dd>
</dl>
</section>
</main>`,
  },

  // ── AI SOFTWARE DEVELOPMENT ───────────────────────────────────────────────
  {
    path: '/ai-software-development',
    title: 'AI Software Development Solutions | Smart Systems',
    description: 'Build intelligent AI software solutions for automation, predictive analytics, and scalable digital transformation.',
    body: `<main>
<h1>Custom AI Software Development That Automates, Scales, and Delivers Results</h1>
<p>We provide AI software development services that help businesses automate operations, improve decision-making, and build intelligent systems tailored to their unique workflows. From internal AI tools to advanced automation platforms, we develop reliable, secure, and scalable AI-powered software solutions.</p>

<section>
<h2>What Is AI Software Development?</h2>
<p>AI software development involves creating custom software solutions powered by artificial intelligence to analyze data, automate processes, and enhance business efficiency. Unlike off-the-shelf tools, custom AI software is designed around your specific data, systems, and goals.</p>
</section>

<section>
<h2>Who Needs AI Software Development?</h2>
<ul>
<li>Businesses looking to automate complex processes</li>
<li>Companies with large data sets needing intelligent insights</li>
<li>Enterprises building internal AI tools</li>
<li>Startups developing AI-powered products</li>
<li>Organizations replacing manual or inefficient systems</li>
</ul>
</section>

<section>
<h2>Problems We Solve with AI Software</h2>
<ul>
<li>Manual workflows consuming time and resources</li>
<li>Disconnected systems and data silos</li>
<li>Limited insights from existing data</li>
<li>Human-dependent processes that don't scale</li>
<li>Software that cannot adapt to growth</li>
</ul>
</section>

<section>
<h2>Our AI Software Development Services</h2>
<ul>
<li>Custom AI Software Solutions</li>
<li>Business Process Automation with AI</li>
<li>AI-Powered Data Analysis &amp; Insights</li>
<li>GPT &amp; LLM-Based Software Systems</li>
<li>Predictive Analytics &amp; Forecasting Tools</li>
<li>AI Decision-Support Systems</li>
<li>Integration with Existing Business Software</li>
<li>Secure APIs &amp; Data Pipelines</li>
</ul>
</section>

<section>
<h2>Our AI Software Development Process</h2>
<ol>
<li><strong>Business &amp; Data Analysis</strong> &ndash; We identify high-impact AI opportunities based on your workflows and data.</li>
<li><strong>Solution Design</strong> &ndash; We design software architecture, AI logic, and integrations aligned with your goals.</li>
<li><strong>Development &amp; Integration</strong> &ndash; We build the AI software and integrate it with your existing systems.</li>
<li><strong>Testing &amp; Optimization</strong> &ndash; We test for accuracy, performance, security, and real-world usage.</li>
<li><strong>Deployment &amp; Support</strong> &ndash; We deploy, monitor, and continuously optimize your AI software.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for AI Software Development?</h2>
<ul>
<li>Proven AI-first development approach</li>
<li>Strong engineering &amp; automation expertise</li>
<li>Business-focused problem solving</li>
<li>Secure and scalable software architecture</li>
<li>Transparent communication &amp; long-term support</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What types of AI software do you develop?</dt>
<dd>We develop custom AI software including automation systems, analytics platforms, internal tools, and AI-powered business applications.</dd>
<dt>Can AI software integrate with existing systems?</dt>
<dd>Yes. We specialize in integrating AI software with CRMs, ERPs, databases, and third-party platforms.</dd>
<dt>Is AI software development secure?</dt>
<dd>Security is built into every stage &mdash; from data handling to access control and deployment.</dd>
<dt>Do you provide ongoing maintenance?</dt>
<dd>Yes. We offer ongoing optimization, monitoring, and enhancements after launch.</dd>
</dl>
</section>
</main>`,
  },

  // ── FULL STACK WEB DEV ────────────────────────────────────────────────────
  {
    path: '/full-stack-web-development',
    title: 'Full Stack Web Development Company | Scalable Apps',
    description: 'Modern full-stack development using scalable architecture, API integrations, and performance-first coding standards.',
    body: `<main>
<h1>Scalable, Secure Full-Stack Web Development Built for Growth</h1>
<p>We provide full-stack web development services that cover everything from frontend user experience to backend logic, databases, APIs, and integrations. Whether you need a business website, web application, or SaaS platform, we build reliable, high-performance solutions that scale with your business.</p>

<section>
<h2>What Is Full-Stack Web Development?</h2>
<p>Full-stack web development involves building both the frontend and backend of a website or web application. It ensures seamless communication between user interfaces, servers, databases, and third-party systems &mdash; resulting in faster, more secure, and easier-to-maintain products.</p>
</section>

<section>
<h2>Who Needs Full-Stack Web Development?</h2>
<ul>
<li>Startups building MVPs or SaaS platforms</li>
<li>Businesses needing custom web applications</li>
<li>Companies replacing outdated or slow websites</li>
<li>E-commerce brands requiring advanced functionality</li>
<li>Organizations needing scalable backend systems</li>
</ul>
</section>

<section>
<h2>Problems We Solve</h2>
<ul>
<li>Slow or unstable websites</li>
<li>Poor frontend user experience</li>
<li>Inefficient backend systems</li>
<li>Data and integration issues</li>
<li>Applications that can't scale</li>
</ul>
</section>

<section>
<h2>Our Full-Stack Web Development Services</h2>
<ul>
<li>Custom Website &amp; Web Application Development</li>
<li>Frontend UI/UX Development</li>
<li>Backend &amp; API Development</li>
<li>Database Design &amp; Optimization</li>
<li>Third-Party &amp; System Integrations</li>
<li>E-commerce Functionality</li>
<li>Authentication &amp; User Management</li>
<li>Performance Optimization &amp; Security</li>
</ul>
</section>

<section>
<h2>Our Technology Stack</h2>
<p>We work with modern, proven technologies including:</p>
<ul>
<li>Frontend frameworks (React, Next.js, etc.)</li>
<li>Backend systems and APIs</li>
<li>Databases and cloud infrastructure</li>
<li>Secure authentication &amp; authorization</li>
<li>DevOps &amp; deployment pipelines</li>
</ul>
</section>

<section>
<h2>Full-Stack Development + AI</h2>
<p>When required, we enhance full-stack applications with:</p>
<ul>
<li>AI-powered features</li>
<li>GPT integrations</li>
<li>Automation workflows</li>
<li>Intelligent dashboards</li>
</ul>
</section>

<section>
<h2>Our Full-Stack Development Process</h2>
<ol>
<li><strong>Requirements &amp; Planning</strong> &ndash; We define features, architecture, and timelines clearly.</li>
<li><strong>Design &amp; Architecture</strong> &ndash; We design UI, backend structure, and data flow.</li>
<li><strong>Development</strong> &ndash; Frontend and backend are built together for efficiency.</li>
<li><strong>Testing &amp; Quality Assurance</strong> &ndash; We test performance, security, and real-world usage.</li>
<li><strong>Deployment &amp; Support</strong> &ndash; We launch, monitor, and support your application long-term.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for Full-Stack Web Development?</h2>
<ul>
<li>Strong engineering foundations</li>
<li>Experience across frontend &amp; backend</li>
<li>Clean, maintainable codebases</li>
<li>Security-first development</li>
<li>Long-term scalability mindset</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What types of projects do you handle?</dt>
<dd>We build websites, web applications, internal tools, SaaS platforms, and e-commerce systems.</dd>
<dt>Can you work with existing systems?</dt>
<dd>Yes. We can improve, refactor, or extend existing full-stack applications.</dd>
<dt>Is full-stack development scalable?</dt>
<dd>Yes. Our systems are designed to scale as traffic, data, and features grow.</dd>
<dt>Do you provide ongoing support?</dt>
<dd>Yes. We offer maintenance, optimization, and feature enhancements.</dd>
</dl>
</section>
</main>`,
  },

  // ── AI WEBSITE DESIGN ─────────────────────────────────────────────────────
  {
    path: '/ai-website-design-development',
    title: 'AI Website Design &amp; Development Company',
    description: 'Conversion-focused AI websites designed for performance, automation, and intelligent user engagement across modern search platforms.',
    body: `<main>
<h1>AI-Powered Website Design &amp; Development That Converts Visitors into Customers</h1>
<p>We provide AI website design and development services that combine modern design, intelligent automation, and performance optimization to help businesses generate more leads, improve engagement, and grow faster. Our websites are not just visually appealing &mdash; they are built to work intelligently and convert consistently.</p>

<section>
<h2>What Is AI Website Design &amp; Development?</h2>
<p>AI website design and development involves creating websites that use artificial intelligence to personalize user experiences, automate interactions, and optimize performance. Unlike traditional websites, AI-powered sites adapt to visitor behavior and continuously improve results.</p>
</section>

<section>
<h2>Who Is This Service For?</h2>
<ul>
<li>Businesses with outdated or underperforming websites</li>
<li>E-commerce brands seeking higher conversions</li>
<li>Service providers needing better lead generation</li>
<li>Startups launching a growth-focused website</li>
<li>Companies wanting AI features without building full web apps</li>
</ul>
</section>

<section>
<h2>Problems We Solve with AI-Powered Websites</h2>
<ul>
<li>Low conversion rates</li>
<li>High bounce rates</li>
<li>Poor user experience</li>
<li>Slow page speeds</li>
<li>No personalization or automation</li>
<li>Weak lead capture</li>
</ul>
</section>

<section>
<h2>Our AI Website Design &amp; Development Services</h2>
<ul>
<li>Custom AI-Powered Website Design</li>
<li>Conversion-Focused UX/UI Design</li>
<li>AI Chatbots &amp; Smart Forms</li>
<li>Personalized Content &amp; User Journeys</li>
<li>AI-Based Lead Capture &amp; Routing</li>
<li>SEO &amp; AI Search Optimization</li>
<li>Website Speed &amp; Performance Optimization</li>
<li>Ongoing Website Maintenance &amp; Support</li>
</ul>
</section>

<section>
<h2>Our AI Website Development Process</h2>
<ol>
<li><strong>Strategy &amp; Discovery</strong> &ndash; We understand your business goals, audience, and conversion objectives.</li>
<li><strong>Design &amp; UX Planning</strong> &ndash; We design intuitive layouts focused on engagement and clarity.</li>
<li><strong>AI &amp; Development</strong> &ndash; We implement AI features, automation, and performance optimizations.</li>
<li><strong>Testing &amp; Optimization</strong> &ndash; We test speed, UX, SEO, and real-world behavior.</li>
<li><strong>Launch &amp; Growth Support</strong> &ndash; We launch, monitor, and continuously improve your website.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for AI Website Design &amp; Development?</h2>
<ul>
<li>AI-first website strategy</li>
<li>Conversion-focused design approach</li>
<li>Strong SEO &amp; performance expertise</li>
<li>Clean, modern UI/UX</li>
<li>Ongoing optimization mindset</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What makes an AI website different?</dt>
<dd>AI websites adapt to user behavior, automate interactions, and optimize conversions in real time.</dd>
<dt>Can you add AI features to my existing website?</dt>
<dd>Yes. We can enhance your current website with AI chatbots, personalization, and automation.</dd>
<dt>Are AI websites SEO-friendly?</dt>
<dd>Absolutely. Our AI websites are built with SEO and AI search optimization in mind.</dd>
<dt>Do you offer maintenance?</dt>
<dd>Yes. We provide ongoing optimization, updates, and support.</dd>
</dl>
</section>
</main>`,
  },

  // ── AI WEB APPLICATION ────────────────────────────────────────────────────
  {
    path: '/ai-web-application-development',
    title: 'AI Web Application Development Company | Zonzoctech',
    description: 'Custom AI web applications built for automation, scalability, and intelligent user experiences. Future-ready development powered by data and innovation.',
    body: `<main>
<h1>Build Intelligent Web Applications That Automate, Scale, and Drive Growth</h1>
<p>We design and develop custom AI-powered web applications that help businesses automate operations, make smarter decisions, and create better user experiences. From AI dashboards to SaaS platforms and internal tools, we turn ideas into secure, scalable, production-ready applications.</p>

<section>
<h2>Who This Service Is For</h2>
<ul>
<li>A business looking to automate manual processes</li>
<li>A startup building an AI-powered SaaS product</li>
<li>An e-commerce brand needing intelligent dashboards or tools</li>
<li>A company wanting custom AI features integrated into web apps</li>
<li>An agency or enterprise needing scalable AI solutions</li>
</ul>
<p>If off-the-shelf tools don't fit your needs, custom AI web apps are the answer.</p>
</section>

<section>
<h2>Problems We Solve with AI Web Applications</h2>
<ul>
<li>Manual workflows slowing your business down</li>
<li>Disconnected systems and data silos</li>
<li>Poor decision-making due to lack of insights</li>
<li>No AI-powered personalization or automation</li>
<li>Scalable web apps that are expensive or unstable</li>
</ul>
</section>

<section>
<h2>Custom AI Web Application Development Solutions</h2>
<ul>
<li>Custom AI Web Apps &amp; Dashboards</li>
<li>AI SaaS Platform Development</li>
<li>GPT &amp; LLM-Powered Applications</li>
<li>AI-Based Recommendation Systems</li>
<li>Predictive Analytics &amp; Reporting Tools</li>
<li>AI Chatbots &amp; Intelligent Assistants</li>
<li>Internal Business Automation Tools</li>
<li>API &amp; Third-Party AI Integrations</li>
</ul>
</section>

<section>
<h2>What Makes Our AI Web Applications Different</h2>
<ul>
<li>Built for real business use &mdash; not demos</li>
<li>Scalable architecture ready for growth</li>
<li>Clean UI with strong UX principles</li>
<li>Secure data handling and access control</li>
<li>Optimized for performance and reliability</li>
<li>AI features aligned with ROI, not hype</li>
</ul>
</section>

<section>
<h2>Our Development Process</h2>
<ol>
<li><strong>Discovery &amp; Strategy</strong> &ndash; We understand your business goals, users, and workflows to define the right AI use cases.</li>
<li><strong>Solution Architecture</strong> &ndash; We design the application structure, AI models, data flow, and integrations.</li>
<li><strong>Design &amp; Development</strong> &ndash; We build the frontend, backend, and AI components using modern full-stack technologies.</li>
<li><strong>Testing &amp; Optimization</strong> &ndash; We test for performance, security, scalability, and real-world usage.</li>
<li><strong>Launch &amp; Support</strong> &ndash; We deploy the application and provide ongoing support, optimization, and enhancements.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for AI Web App Development</h2>
<ul>
<li>AI-first development approach</li>
<li>Strong full-stack engineering expertise</li>
<li>Focus on automation, efficiency, and growth</li>
<li>Transparent communication &amp; delivery</li>
<li>Long-term partnership mindset</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>What is AI web application development?</dt>
<dd>AI web application development involves building web-based applications that use artificial intelligence to automate processes, analyze data, and enhance user experiences.</dd>
<dt>What types of AI web applications do you build?</dt>
<dd>We build custom AI dashboards, SaaS platforms, automation tools, AI-powered internal systems, and customer-facing web apps.</dd>
<dt>Can you integrate AI into an existing web application?</dt>
<dd>Yes. We can enhance existing apps with AI features such as automation, analytics, chatbots, and recommendations.</dd>
<dt>Are your AI web apps scalable?</dt>
<dd>Absolutely. All our applications are built with scalability, security, and performance in mind.</dd>
<dt>Do you provide post-launch support?</dt>
<dd>Yes. We offer maintenance, performance optimization, and feature enhancements after launch.</dd>
</dl>
</section>
</main>`,
  },

  // ── ECOMMERCE ─────────────────────────────────────────────────────────────
  {
    path: '/ecommerce-development-optimization',
    title: 'Ecommerce Development &amp; Conversion Optimization',
    description: 'Build and optimize ecommerce stores for speed, AI search visibility, and higher conversion rates across competitive markets.',
    body: `<main>
<h1>High-Performance E-commerce Development &amp; Optimization That Increases Sales</h1>
<p>We provide e-commerce development and optimization services designed to help online stores grow revenue, improve user experience, and scale confidently. From custom store development to performance, conversion, and automation enhancements, we build e-commerce platforms that are fast, secure, and optimized for sales.</p>

<section>
<h2>What Is E-commerce Development &amp; Optimization?</h2>
<p>E-commerce development and optimization involves building and improving online stores so they load faster, convert better, and scale efficiently. It goes beyond design &mdash; focusing on performance, checkout flow, automation, SEO, and customer experience.</p>
</section>

<section>
<h2>Who Is This Service For?</h2>
<ul>
<li>New e-commerce brands launching online</li>
<li>Existing stores with low conversion rates</li>
<li>Businesses facing slow site speed or checkout issues</li>
<li>Brands needing custom features or integrations</li>
<li>E-commerce owners scaling operations</li>
</ul>
</section>

<section>
<h2>Problems We Solve for E-commerce Businesses</h2>
<ul>
<li>Low conversion rates</li>
<li>Cart abandonment</li>
<li>Slow page load times</li>
<li>Poor mobile experience</li>
<li>Limited automation</li>
<li>SEO and visibility issues</li>
</ul>
</section>

<section>
<h2>Our E-commerce Development &amp; Optimization Services</h2>
<ol>
<li>Custom E-commerce Website Development</li>
<li>Platform Setup &amp; Customization</li>
<li>Checkout &amp; Conversion Optimization</li>
<li>Speed &amp; Performance Improvements</li>
<li>Mobile-First UX Design</li>
<li>Product Page Optimization</li>
<li>AI-Powered Recommendations &amp; Automation</li>
<li>Payment, Shipping &amp; Third-Party Integrations</li>
<li>SEO for E-commerce Stores</li>
<li>Ongoing Maintenance &amp; Support</li>
</ol>
</section>

<section>
<h2>Our E-commerce Development Process</h2>
<ol>
<li><strong>Store &amp; Funnel Analysis</strong> &ndash; We evaluate your store, users, and purchase journey.</li>
<li><strong>Design &amp; Architecture</strong> &ndash; We design conversion-focused layouts and technical structure.</li>
<li><strong>Development &amp; Optimization</strong> &ndash; We build features, improve performance, and implement automation.</li>
<li><strong>Testing &amp; Quality Assurance</strong> &ndash; We test checkout flow, speed, and real-world usability.</li>
<li><strong>Launch &amp; Growth Support</strong> &ndash; We monitor, optimize, and scale your store post-launch.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for E-commerce Development?</h2>
<ul>
<li>Revenue-driven development approach</li>
<li>Strong UX &amp; performance expertise</li>
<li>AI-powered optimization capabilities</li>
<li>Secure &amp; scalable solutions</li>
<li>Long-term growth mindset</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>Can you improve my existing e-commerce store?</dt>
<dd>Yes. We specialize in optimizing existing stores for performance, UX, and conversions.</dd>
<dt>Do you support AI features in e-commerce?</dt>
<dd>Yes. We implement AI recommendations, automation, and personalization where it adds value.</dd>
<dt>Is SEO included?</dt>
<dd>Yes. We follow e-commerce SEO best practices and optimization strategies.</dd>
<dt>Do you provide ongoing support?</dt>
<dd>Yes. We offer continuous optimization and maintenance services.</dd>
</dl>
</section>
</main>`,
  },

  // ── WEBSITE MAINTENANCE ───────────────────────────────────────────────────
  {
    path: '/website-maintenance-performance-security',
    title: 'Website Maintenance, Performance &amp; Security Services',
    description: 'Keep your website fast, secure, and up-to-date with proactive maintenance, performance audits, and security monitoring.',
    body: `<main>
<h1>Website Performance, Security &amp; Maintenance That Keeps Your Business Online, Fast &amp; Protected</h1>
<p>We provide website performance, security, and maintenance services that ensure your website stays fast, secure, and reliable at all times. From speed optimization to proactive security and ongoing updates, we protect your digital presence so you can focus on growing your business.</p>

<section>
<h2>Why Website Performance, Security &amp; Maintenance Matter</h2>
<p>A slow, outdated, or vulnerable website can:</p>
<ul>
<li>Lose visitors and leads</li>
<li>Damage trust and credibility</li>
<li>Become a security risk</li>
<li>Negatively impact SEO and rankings</li>
<li>Cost revenue through downtime</li>
</ul>
<p>Regular maintenance is not optional &mdash; it's essential.</p>
</section>

<section>
<h2>Who Needs Website Maintenance &amp; Security?</h2>
<ul>
<li>Business websites and corporate sites</li>
<li>E-commerce stores</li>
<li>SaaS and web applications</li>
<li>High-traffic websites</li>
<li>Companies relying on online leads</li>
</ul>
</section>

<section>
<h2>Our Website Performance, Security &amp; Maintenance Services</h2>
<ol>
<li>Website Speed &amp; Performance Optimization</li>
<li>Security Monitoring &amp; Threat Prevention</li>
<li>Core, Plugin &amp; System Updates</li>
<li>Uptime Monitoring &amp; Error Fixes</li>
<li>Backup &amp; Recovery Management</li>
<li>SSL &amp; Secure Configuration</li>
<li>Performance Monitoring &amp; Reporting</li>
<li>Technical SEO Health Checks</li>
</ol>
</section>

<section>
<h2>Our Maintenance Process</h2>
<ol>
<li><strong>Website Health Audit</strong> &ndash; We assess performance, security, and stability.</li>
<li><strong>Optimization &amp; Protection</strong> &ndash; We implement speed improvements and security hardening.</li>
<li><strong>Monitoring &amp; Updates</strong> &ndash; We continuously monitor uptime, threats, and performance.</li>
<li><strong>Fixes &amp; Improvements</strong> &ndash; We resolve issues and apply improvements proactively.</li>
<li><strong>Reporting &amp; Support</strong> &ndash; You receive regular reports and support.</li>
</ol>
</section>

<section>
<h2>Why Choose ZonzocTech for Website Maintenance?</h2>
<ul>
<li>Proactive, not reactive support</li>
<li>Security-first approach</li>
<li>Performance-focused optimization</li>
<li>Transparent reporting</li>
<li>Long-term reliability mindset</li>
</ul>
</section>

<section>
<h2>Frequently Asked Questions</h2>
<dl>
<dt>How often should website maintenance be done?</dt>
<dd>Maintenance should be ongoing, with regular updates and monitoring.</dd>
<dt>Do you support different platforms?</dt>
<dd>Yes. We maintain custom websites, CMS-based sites, e-commerce stores, and web apps.</dd>
<dt>Is security monitoring included?</dt>
<dd>Yes. We continuously monitor and protect against threats.</dd>
<dt>Do you offer emergency support?</dt>
<dd>Yes. Emergency fixes and rapid response are available.</dd>
</dl>
</section>
</main>`,
  },

  // ── CASE STUDIES ──────────────────────────────────────────────────────────
  {
    path: '/case-studies',
    title: 'Case Studies | Proven SEO &amp; AI Results',
    description: 'Explore real-world success stories showcasing measurable growth through AI-driven SEO and advanced web strategies.',
    body: `<main>
<h1>Case Studies</h1>
<p>Real Results from AI, SEO &amp; Full-Stack Development</p>
<p>At ZonzocTech, we focus on measurable outcomes, not just deliverables. Our case studies showcase how we help businesses grow using AI-powered development, SEO, automation, and performance optimization. Each project is built around a clear business goal &mdash; traffic, leads, sales, or efficiency.</p>

<section>
<h2>AI-Powered Customer Support Automation</h2>
<p><strong>Client:</strong> SaaS Platform</p>
<p><strong>Challenge:</strong> Manual customer support was consuming 40+ hours weekly, slowing response times and limiting scalability.</p>
<p><strong>Solution:</strong> Built custom AI chatbot integrated with GPT-4 and company knowledge base, automating 70% of common inquiries.</p>
<ul>
<li>70% reduction in support tickets</li>
<li>Less than 30 second average response time</li>
<li>85% customer satisfaction rate</li>
<li>40 hours per week saved</li>
</ul>
</section>

<section>
<h2>SEO Recovery &amp; Traffic Growth</h2>
<p><strong>Client:</strong> B2B Service Company</p>
<p><strong>Challenge:</strong> Website traffic dropped 60% after Google algorithm update. Poor technical SEO and thin content.</p>
<p><strong>Solution:</strong> Complete technical SEO overhaul, content strategy, and topical authority building across 50+ pages.</p>
<ul>
<li>340% increase in organic traffic</li>
<li>12 first-page rankings</li>
<li>180% increase in qualified leads</li>
<li>Recovered in 4 months</li>
</ul>
</section>

<section>
<h2>E-commerce Performance Optimization</h2>
<p><strong>Client:</strong> Online Fashion Retailer</p>
<p><strong>Challenge:</strong> Slow site speed (8s load time), 75% cart abandonment rate, poor mobile experience.</p>
<p><strong>Solution:</strong> Complete performance optimization, checkout flow redesign, mobile-first UX improvements.</p>
<ul>
<li>85% faster page load (1.2s)</li>
<li>42% reduction in cart abandonment</li>
<li>65% increase in mobile conversions</li>
<li>2.8x revenue increase</li>
</ul>
</section>

<section>
<h2>Full-Stack Web Application Development</h2>
<p><strong>Client:</strong> Healthcare Startup</p>
<p><strong>Challenge:</strong> Needed HIPAA-compliant patient management system with real-time scheduling and data analytics.</p>
<p><strong>Solution:</strong> Built secure full-stack application with React frontend, Node.js backend, encrypted database, and analytics dashboard.</p>
<ul>
<li>500+ patients managed daily</li>
<li>99.9% uptime maintained</li>
<li>HIPAA compliance certified</li>
<li>80% reduction in admin time</li>
</ul>
</section>

<section>
<h2>Predictive Analytics for Inventory Management</h2>
<p><strong>Client:</strong> E-commerce Distribution</p>
<p><strong>Challenge:</strong> Frequent stockouts and overstock situations causing $200K+ annual losses.</p>
<p><strong>Solution:</strong> Developed AI-powered predictive analytics system using historical data, seasonality, and market trends.</p>
<ul>
<li>92% forecast accuracy</li>
<li>$250K cost savings annually</li>
<li>65% reduction in stockouts</li>
<li>ROI achieved in 6 months</li>
</ul>
</section>

<section>
<h2>Local SEO Domination</h2>
<p><strong>Client:</strong> Multi-Location Service Business</p>
<p><strong>Challenge:</strong> Competing against national chains with 8 local locations. Zero local visibility.</p>
<p><strong>Solution:</strong> Comprehensive local SEO strategy: Google Business Profile optimization, local content, citations, reviews.</p>
<ul>
<li>Top 3 rankings in all locations</li>
<li>520% increase in local calls</li>
<li>380% increase in direction requests</li>
<li>Ranked #1 for 25+ local keywords</li>
</ul>
</section>

<section>
<h2>Ready to Become Our Next Success Story?</h2>
<p>Let's discuss how we can help you achieve measurable results with AI, SEO, or full-stack development.</p>
</section>
</main>`,
  },

  // ── CONTACT ───────────────────────────────────────────────────────────────
  {
    path: '/contact',
    title: 'Contact Zonzoctech | Start Your Digital Growth',
    description: 'Speak with our AI and SEO experts to discuss your project and start your digital growth journey today.',
    body: `<main>
<h1>Contact ZonzocTech</h1>
<p>Start Your Digital Growth Journey Today</p>
<p>Speak with our AI and SEO experts to discuss your project. Whether you need a new website, SEO strategy, AI software, or e-commerce optimization, we're here to help.</p>

<section>
<h2>Send Us a Message</h2>
<p>Fill in the form to tell us about your project. We respond within 24 hours.</p>
<ul>
<li>Your Name</li>
<li>Company / Organization</li>
<li>Phone Number</li>
<li>Email Address</li>
<li>Service you are interested in (AI Solutions, SEO, UI/UX Design, Website Development)</li>
<li>Estimated Budget</li>
<li>Tell us about the project</li>
</ul>
</section>

<section>
<h2>Request a Free Consultation</h2>
<ol>
<li>We review your message</li>
<li>We analyze your website or idea</li>
<li>We schedule a call or send a proposal</li>
</ol>
</section>

<section>
<h2>Our Services</h2>
<ul>
<li>AI Web Application Development</li>
<li>AI Software Development</li>
<li>Full-Stack Web Development</li>
<li>AI Website Design &amp; Development</li>
<li>SEO Services</li>
<li>AI Search Optimization</li>
<li>E-commerce Development &amp; Optimization</li>
<li>Website Maintenance, Performance &amp; Security</li>
</ul>
<p>Contact us at info@zonzoctech.com or visit zonzoctech.com</p>
</section>
</main>`,
  },

  // ── PRIVACY POLICY ────────────────────────────────────────────────────────
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Zonzoctech Data Protection Standards',
    description: 'Learn how Zonzoctech collects, protects, and manages user data in compliance with global privacy standards and secure web practices.',
    body: `<main>
<h1>Privacy Policy</h1>
<p>Last updated: December 20, 2025</p>
<p>ZonzocTech ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you visit zonzoctech.com or use our services.</p>

<section>
<h2>1. Information We Collect</h2>
<h3>Personal Information</h3>
<ul>
<li>Name</li>
<li>Email address</li>
<li>Phone number</li>
<li>Website URL</li>
<li>Business information</li>
<li>Any details you submit via contact or audit forms</li>
</ul>
<h3>Technical &amp; Usage Data</h3>
<ul>
<li>IP address</li>
<li>Browser type and version</li>
<li>Pages visited</li>
<li>Time spent on pages</li>
<li>Referring URLs</li>
</ul>
</section>

<section>
<h2>2. How We Use Your Information</h2>
<ul>
<li>Respond to inquiries and contact requests</li>
<li>Provide free audits and service proposals</li>
<li>Improve website performance and user experience</li>
<li>Deliver requested services</li>
<li>Communicate updates or relevant information</li>
<li>Analyze traffic and usage trends</li>
</ul>
<p>We do not sell or rent your personal data to third parties.</p>
</section>

<section>
<h2>3. Cookies &amp; Tracking Technologies</h2>
<p>ZonzocTech uses cookies and similar technologies to understand website usage, improve performance and functionality, and track analytics data. You can control cookies through your browser settings.</p>
</section>

<section>
<h2>4. Third-Party Services</h2>
<p>We may use trusted third-party tools such as Google Analytics, Google Search Console, email communication tools, and hosting and security providers.</p>
</section>

<section>
<h2>5. Data Security</h2>
<p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse.</p>
</section>

<section>
<h2>6. Your Rights</h2>
<p>Depending on your location, you may have the right to request access to your personal data, request correction or deletion, withdraw consent, or object to data processing. Contact us at info@zonzoctech.com to exercise your rights.</p>
</section>

<section>
<h2>7. Contact Us</h2>
<p>If you have any questions about this Privacy Policy, contact us at info@zonzoctech.com or visit zonzoctech.com.</p>
</section>
</main>`,
  },

  // ── TERMS & CONDITIONS ────────────────────────────────────────────────────
  {
    path: '/terms-conditions',
    title: 'Terms &amp; Conditions | Zonzoctech Services Agreement',
    description: "Review Zonzoctech's service terms, project policies, intellectual property rights, and legal agreements.",
    body: `<main>
<h1>Terms &amp; Conditions</h1>
<p>Last updated: December 20, 2025</p>
<p>Welcome to ZonzocTech. By accessing or using our website zonzoctech.com and our services, you agree to comply with and be bound by the following Terms &amp; Conditions. Please read them carefully.</p>

<section>
<h2>1. Definitions</h2>
<ul>
<li>"Company," "we," "us," "our" refers to ZonzocTech</li>
<li>"Client," "you" refers to any user, visitor, or customer</li>
<li>"Services" refers to all AI, web development, SEO, automation, consulting, and related services provided by ZonzocTech</li>
</ul>
</section>

<section>
<h2>2. Use of Website</h2>
<p>You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others. You must not attempt to gain unauthorized access, introduce malicious code, or copy website content without permission.</p>
</section>

<section>
<h2>3. Services &amp; Engagement</h2>
<p>All services provided by ZonzocTech are subject to project scope and agreement, timelines and deliverables agreed upon in writing, and client cooperation and timely communication.</p>
</section>

<section>
<h2>4. No Guaranteed Results</h2>
<p>While we apply industry best practices, we do not guarantee specific rankings, traffic levels, sales, or business outcomes, especially for SEO, AI search optimization, or digital marketing services. Results depend on multiple external factors beyond our control.</p>
</section>

<section>
<h2>5. Payments &amp; Billing</h2>
<p>Fees and payment terms will be clearly outlined in proposals or contracts. Payments must be made according to agreed schedules. All fees are non-refundable unless otherwise stated in writing.</p>
</section>

<section>
<h2>6. Intellectual Property</h2>
<p>Unless otherwise agreed in writing, ZonzocTech retains ownership of proprietary tools, frameworks, and methodologies. Upon full payment, clients receive rights to deliverables created specifically for them.</p>
</section>

<section>
<h2>7. Limitation of Liability</h2>
<p>To the fullest extent permitted by law, ZonzocTech shall not be liable for indirect or consequential damages, loss of profits, data, or business, or website downtime caused by external factors. Our liability is limited to the amount paid for the specific service in question.</p>
</section>

<section>
<h2>8. Governing Law</h2>
<p>These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of Sri Lanka, without regard to conflict of law principles.</p>
</section>

<section>
<h2>9. Contact Information</h2>
<p>For any questions regarding these Terms &amp; Conditions, please contact us at info@zonzoctech.com or visit zonzoctech.com.</p>
</section>
</main>`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function esc(str) {
  // Escape only what goes into HTML attribute values (already HTML in body)
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectMeta(template, { path: routePath, title, description }) {
  const canonical = `${SITE_URL}${routePath}`;
  // title/description are already HTML-escaped in the route definitions
  const t = title;
  const d = description;
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

function injectBody(html, body) {
  // Replace empty #root div with static content wrapper
  return html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${body}</div>`
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const buildDir = path.join(__dirname, 'build');
const templatePath = path.join(buildDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('ERROR: build/index.html not found. Run the build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

for (const route of routes) {
  let html = injectMeta(template, route);
  html = injectBody(html, route.body);

  const segment = route.path.replace(/^\//, '');
  const dir = path.join(buildDir, segment); // '' for '/' → buildDir itself
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir || buildDir, 'index.html'), html);
  console.log(`  ✓ ${route.path}`);
}

console.log(`\nPre-rendered ${routes.length} routes with full static content.`);
