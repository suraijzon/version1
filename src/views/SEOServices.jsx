'use client';
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SEOServices.css";
import Breadcrumb from "../components/Breadcrumb";

const SEOServices = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".seo-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "35%", label: "Average Traffic Growth" },
    { number: "120+", label: "Clients Served" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const seoServices = [
    {
      title: "Technical SEO",
      description: "Search engines need to crawl and understand your website before they rank it. We fix every technical barrier holding your site back.",
      items: [
        "Core Web Vitals & page speed optimization",
        "Mobile-first indexing compliance",
        "Crawl error & indexation fixes",
        "XML sitemap & robots.txt setup",
        "Structured data & schema markup",
        "HTTPS & site security checks",
      ],
    },
    {
      title: "On-Page SEO",
      description: "Every page is a ranking opportunity. We optimize your existing pages to target the right keywords and convert the right visitors.",
      items: [
        "Keyword research & intent mapping",
        "Title tags & meta descriptions",
        "Header structure optimization",
        "Content gap analysis",
        "Internal linking strategy",
        "Image optimization & alt text",
      ],
    },
    {
      title: "Content SEO",
      description: "Content that matches search intent builds authority, drives traffic and generates leads consistently. We create content strategies that compound over time.",
      items: [
        "Blog strategy & editorial planning",
        "Pillar content & topic clusters",
        "FAQ & featured snippet optimization",
        "Landing page copywriting",
        "Content refresh & pruning strategy",
      ],
    },
    {
      title: "Link Building",
      description: "Quality backlinks from relevant authoritative websites remain one of the strongest SEO ranking signals. We build links that actually move rankings.",
      items: [
        "Manual outreach campaigns",
        "Niche-relevant backlink acquisition",
        "Digital PR & brand mentions",
        "Competitor backlink gap analysis",
        "Toxic link identification & removal",
      ],
    },
    {
      title: "Local SEO for UK Businesses",
      description: "If your business serves a specific city or region in the UK, local SEO is the fastest path to appearing in front of ready-to-buy customers.",
      items: [
        "Google Business Profile optimization",
        "Local citation building & cleanup",
        "Location page optimization",
        "Review generation strategy",
        "Local keyword targeting",
      ],
    },
    {
      title: "E-commerce SEO for UK & USA Stores",
      description: "Our affordable SEO services for e-commerce businesses cover everything from product pages to shopping feeds — driving qualified buying traffic that converts.",
      items: [
        "Product & category page optimization",
        "Shopify & WooCommerce SEO",
        "Shopping feed optimization",
        "E-commerce content strategy",
        "Conversion rate optimization",
      ],
    },
  ];

  const aiCapabilities = [
    {
      title: "Generative Engine Optimization (GEO)",
      description: "Generative engine optimization is the practice of structuring your content so AI search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted source. This is one of the fastest growing opportunities in search right now — and very few agencies offer it.",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      description: "Answer engine optimization focuses on getting your content featured as the direct answer to search queries — in Google featured snippets, People Also Ask boxes and AI-generated answers. We build content specifically designed to win these high-visibility positions.",
    },
    {
      title: "AI Keyword Research & Clustering",
      description: "We use AI tools to identify keyword clusters, search intent patterns and content gaps faster and more accurately than manual research alone — giving your strategy a significant edge.",
    },
    {
      title: "Search Intent Prediction",
      description: "Understanding what users actually want when they search is the difference between ranking and converting. Our AI-powered approach maps intent at scale across your entire keyword set.",
    },
  ];

  const process = [
    { number: "01", title: "Free SEO Audit", description: "We start with a comprehensive audit of your website — identifying technical issues, content gaps, backlink profile weaknesses and competitor opportunities." },
    { number: "02", title: "Custom SEO Strategy", description: "Based on your business goals, target market and competition level, we build a clear roadmap with realistic timelines and measurable targets." },
    { number: "03", title: "Technical Foundation Fix", description: "Before creating content or building links, we fix every technical issue that could be holding your rankings back." },
    { number: "04", title: "Content & Authority Building", description: "We create and optimize content that ranks, builds topical authority and attracts quality backlinks naturally over time." },
    { number: "05", title: "Monthly Reporting & Improvement", description: "Every month you receive a clear report showing rankings, traffic, leads and exactly what we did and plan to do next. No jargon. Just results." },
  ];

  const whoFor = [
    { title: "✓ Small Businesses in the UK & USA", description: "Who need to compete with larger competitors through smarter, more targeted SEO strategies." },
    { title: "✓ Startups", description: "Our affordable SEO services for startups in the UK are designed to build search visibility fast — without a massive agency budget." },
    { title: "✓ E-commerce Brands", description: "Wanting to reduce paid ad dependency and build sustainable organic traffic that compounds month after month." },
    { title: "✓ Service Businesses", description: "Generating local or national leads through Google — consultants, law firms, clinics, tradespeople and agencies." },
    { title: "✓ Businesses Burned by Bad SEO Before", description: "Who need an agency that communicates clearly, delivers transparently and focuses on revenue — not just rankings." },
  ];

  const faqs = [
    { q: "How long does SEO take to show results?", a: "Honest answer — SEO takes time. Most clients see meaningful improvements within 3 to 6 months, with significant compounding results from month 6 onwards. We set realistic expectations from day one and show progress every step of the way." },
    { q: "How much do your SEO services cost?", a: "Our SEO services are priced specifically to be affordable for small businesses in the UK and USA. Packages are tailored based on your competition level, goals and scope. Contact us for a free audit and transparent custom quote." },
    { q: "Do you work with UK and USA businesses remotely?", a: "Yes — the majority of our clients are based in the UK, USA and Europe. We work fully remotely across time zones and communicate via WhatsApp, email and video calls — with the same quality and responsiveness as a local agency." },
    { q: "What is generative engine optimization?", a: "Generative engine optimization or GEO is the process of optimizing your content to appear in AI-generated search answers from tools like ChatGPT, Perplexity and Google AI Overviews. It is one of the most important emerging SEO disciplines and we are one of the few agencies currently offering it." },
    { q: "What is answer engine optimization?", a: "Answer engine optimization or AEO focuses on structuring content to win featured snippets, People Also Ask results and direct answer positions in Google — capturing traffic before users even click through to a website." },
    { q: "Do you offer standalone SEO audits?", a: "Yes. If you just want to understand what is holding your website back, we offer standalone SEO audit reports with clear, prioritized and actionable recommendations." },
  ];

  return (
    <>
      <div className="seo-page">
        <Navbar />
        <Breadcrumb />

        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-container">
            <h1>SEO Agency for Small Business UK — Built to Generate Leads, Not Just Rankings</h1>
            <p className="seo-desc">
              ZonzocTech is an AI SEO agency helping small businesses and startups across the UK and USA grow their organic traffic, attract qualified leads and turn search visibility into real revenue — without the price tag of a big London agency.
            </p>
            <div className="hero-btn-wrap">
              <a href="/contact" className="hero-btn-primary">Get Your Free SEO Audit →</a>
              <a href="#seo-results" className="hero-btn-secondary">See Our Results ↓</a>
            </div>
            <p className="seo-sub" style={{ marginTop: "24px" }}>Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="seo-results" id="seo-results">
          <div className="seo-container">
            <div className="seo-results-grid">
              {stats.map((stat, i) => (
                <div key={i}>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 — WHY CHOOSE */}
        <section className="seo-why">
          <div className="seo-container">
            <h2>Why Small Businesses in the UK Choose ZonzocTech for SEO</h2>
            <p>Most small businesses have tried SEO before and been let down. They paid monthly retainers, got a rankings report and saw zero new leads. The problem was never SEO itself — it was how their agency approached it.</p>
            <p>We built our SEO service specifically for small businesses and startups in the UK and USA who need real results on a realistic budget. Every strategy we build is tied directly to leads, revenue and business growth — not vanity metrics.</p>

            <h3>Typical Agency vs ZonzocTech</h3>
            <div className="seo-why-grid">
              <div>
                <strong>Typical SEO Agency</strong>
                <ul>
                  <li>Chases rankings with no revenue focus</li>
                  <li>Generic monthly reports</li>
                  <li>Same strategy for every client</li>
                  <li>Slow results with no clear timeline</li>
                  <li>No understanding of your business</li>
                </ul>
              </div>
              <div>
                <strong>ZonzocTech</strong>
                <ul>
                  <li>Focused on leads and revenue from day one</li>
                  <li>Clear transparent reporting</li>
                  <li>Custom strategy per client</li>
                  <li>Realistic timelines with measurable targets</li>
                  <li>Deep understanding of UK &amp; USA markets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SEO SERVICES */}
        <section className="seo-services">
          <div className="seo-container">
            <h2>Our <span>SEO</span> Services for UK &amp; USA Businesses</h2>
            <p className="seo-sub">From technical fixes to content strategy — we cover every aspect of SEO that impacts your rankings, traffic and leads.</p>

            <div className="seo-grid">
              {seoServices.map((service, i) => (
                <div key={i} className={`seo-card ${i % 2 === 0 ? "left" : "right"}`}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — AI SEO */}
        <section className="seo-ai">
          <div className="seo-container">
            <h2><span>AI SEO Agency</span> — Our Unfair Advantage</h2>
            <p className="aiseo-para">
              Search is changing faster than most agencies can keep up. Google AI Overviews, Perplexity, ChatGPT and other generative engines are now answering questions that used to drive traffic to websites.
            </p>
            <p className="aiseo-para">
              As an AI SEO agency we optimize for both traditional Google search AND the new generation of AI-powered search engines — giving our clients visibility everywhere their customers are searching right now.
            </p>
            <div className="seo-ai-grid">
              {aiCapabilities.map((cap, i) => (
                <div key={i}>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — PROCESS */}
        <section className="seo-why">
          <div className="seo-container">
            <h2>Our SEO Process — Transparent From Day One</h2>
            <p>No black boxes. No mystery. Every step of our SEO process is clear, documented and tied to your business goals.</p>
            <div className="seo-why-grid">
              {process.map((step, i) => (
                <div key={i}>
                  <h3>{step.number} — {step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHO FOR */}
        <section className="seo-services">
          <div className="seo-container">
            <h2>Who Our SEO Services Are Built For</h2>
            <div className="seo-grid">
              {whoFor.map((item, i) => (
                <div key={i} className={`seo-card ${i % 2 === 0 ? "left" : "right"}`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="seo-ai">
          <div className="seo-container">
            <h2>SEO Services — <span>Frequently Asked Questions</span></h2>
            <div className="seo-ai-grid">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="seo-cta">
          <h2>Ready to Grow Your Organic Traffic and Generate More Leads?</h2>
          <p>Get a free SEO audit from our AI SEO agency and find out exactly what is holding your website back — no commitment, no spam, just clear answers.</p>
          <a href="/contact" className="seoaudit-btn">Get My Free SEO Audit →</a>
          <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.75 }}>Free audit. No commitment. Results-focused.</p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEOServices;
