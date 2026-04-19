'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AIOptimizationPage.css";
import Breadcrumb from "../components/Breadcrumb";

const AISearchOptimization = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "35%", label: "Average Traffic Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const comparisonData = [
    { traditional: "Optimizes for Google blue links only", ai: "Optimizes for Google AND AI platforms" },
    { traditional: "Keyword ranking focused", ai: "Entity and intent focused" },
    { traditional: "Click-through traffic dependent", ai: "Visible in AI-generated answers" },
    { traditional: "Ignores AI-generated answers", ai: "Cited by ChatGPT and Perplexity" },
    { traditional: "Misses voice & conversational search", ai: "Captures voice search queries" },
    { traditional: "Falling effectiveness year on year", ai: "Future-proof visibility strategy" },
  ];

  const services = [
    { title: "Generative Engine Optimization (GEO)", description: "Generative engine optimization is the practice of structuring your website content so AI search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted, authoritative source. We optimise your content, structure and entity signals specifically for AI-generated answer inclusion — one of the most powerful emerging opportunities in search marketing." },
    { title: "Answer Engine Optimization (AEO)", description: "Answer engine optimization focuses on winning the direct answer positions across search — Google featured snippets, People Also Ask boxes, AI Overviews and voice search responses. We structure your content around the specific questions your customers ask — with clear, concise, authoritative answers that search engines choose to feature." },
    { title: "Entity-Based SEO & Knowledge Graph", description: "AI search engines understand the world through entities — people, places, businesses, products and concepts — rather than just keywords. We build and strengthen your entity presence across the web — helping Google and AI platforms understand exactly who you are, what you do and why you should be trusted." },
    { title: "Topical Authority Development", description: "AI search engines favour websites that demonstrate deep, comprehensive expertise on specific topics — not thin content spread across hundreds of unrelated keywords. We build topical authority strategies that establish your website as the definitive resource in your field — earning visibility in both traditional and AI search results." },
    { title: "Structured Data & Schema Markup", description: "Structured data is the language that helps search engines and AI platforms understand your content accurately. We implement comprehensive schema markup — including Organization, Service, FAQ, Article and local business schema — making your content machine-readable and AI-citation ready." },
    { title: "AI-Friendly Content Strategy", description: "We develop content strategies built specifically for the AI search era — clear, factual, well-structured content that answers real questions, cites credible sources and follows the E-E-A-T principles that both Google and AI platforms use to evaluate trustworthiness." },
    { title: "Voice & Conversational Search", description: "Voice search queries are longer, more conversational and question-based. We optimize your content for natural language queries — ensuring your business appears when customers ask questions through Siri, Alexa, Google Assistant and AI chat interfaces." },
    { title: "Technical SEO for AI Crawlability", description: "AI search engines need clean, well-structured websites to crawl and understand effectively. We ensure your technical foundation — site speed, crawlability, indexation, structured data and internal linking — meets the requirements of both traditional and AI-powered search systems." },
  ];

  const whyChoose = [
    { title: "✅ Early Mover Advantage", description: "Most agencies are still catching up with AI search. ZonzocTech has been optimising for generative and answer engines since their emergence — giving our clients a significant head start over competitors still focused on traditional SEO alone." },
    { title: "✅ Combined Traditional & AI SEO", description: "We don't abandon what works. Traditional Google SEO still drives significant traffic and our strategies combine proven SEO fundamentals with cutting-edge AI search optimization — covering every channel where your customers search." },
    { title: "✅ Business-Focused Visibility", description: "AI search visibility means nothing if it doesn't drive business outcomes. Every optimization we make is tied back to leads, enquiries and revenue — not just impressions or citations." },
    { title: "✅ Technical & Content Expertise", description: "AI search optimization requires both strong technical SEO and high-quality content strategy. Our team covers both — giving you a complete, integrated approach rather than half-measures." },
    { title: "✅ Transparent Reporting", description: "We track and report on AI visibility, traditional rankings, organic traffic and business leads — giving you a clear picture of how our work is impacting your growth." },
  ];

  const processSteps = [
    { number: "01", title: "AI Search Visibility Audit", description: "We audit how your website currently appears in AI-generated search answers, Google AI Overviews, featured snippets and traditional rankings — identifying the biggest visibility gaps and opportunities." },
    { number: "02", title: "Entity & Content Mapping", description: "We map your business entities, key topics and target questions — building a clear picture of the content and signals needed to establish authority in your niche." },
    { number: "03", title: "Technical & Schema Optimization", description: "We implement structured data, fix technical issues and optimise your site architecture for both traditional and AI search crawlability." },
    { number: "04", title: "Content Optimization & Creation", description: "We optimize existing content and create new content specifically designed to appear in AI-generated answers — clear, authoritative and structured around real customer questions." },
    { number: "05", title: "Monitor, Report & Adapt", description: "AI search is evolving rapidly. We monitor your visibility across all platforms, report on progress monthly and continuously adapt your strategy as AI search develops." },
  ];

  const whoFor = [
    { title: "✓ Businesses Losing Traffic to AI Overviews", description: "Whose organic traffic has declined as Google AI Overviews answer more queries without clicks — and need to adapt their strategy urgently." },
    { title: "✓ UK & USA Service Businesses", description: "Who rely on organic search leads and need to appear in AI-generated answers when customers search for their services." },
    { title: "✓ E-commerce Brands", description: "Who need product and brand visibility in AI shopping recommendations and generative search results." },
    { title: "✓ Content-Led Businesses", description: "Blogs, media sites and information businesses whose traffic model is threatened by AI-generated answers replacing clicks." },
    { title: "✓ Forward-Thinking Businesses", description: "Who want to establish AI search visibility now — before competitors catch on and the space becomes more competitive." },
  ];

  const faqs = [
    { question: "What is generative engine optimization?", answer: "Generative engine optimization or GEO is the process of optimizing your website content and structure so AI-powered search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted source in their generated answers. It is one of the most important emerging disciplines in digital marketing." },
    { question: "What is answer engine optimization?", answer: "Answer engine optimization or AEO focuses on structuring content to win direct answer positions — Google featured snippets, People Also Ask results, voice search responses and AI Overview citations. The goal is to be the answer — not just a result on a list." },
    { question: "Is traditional SEO still important?", answer: "Yes — absolutely. Traditional Google SEO still drives significant traffic and remains essential. AI search optimization works alongside traditional SEO — not instead of it. Businesses that combine both have the strongest overall search visibility." },
    { question: "How do you measure AI search visibility?", answer: "We track brand mentions and citations in AI-generated answers, featured snippet wins, People Also Ask appearances, voice search visibility and traditional ranking improvements — giving a comprehensive picture of your search presence." },
    { question: "How is this different from regular SEO?", answer: "Traditional SEO focuses on ranking web pages for keyword searches. AI search optimization focuses on being cited, quoted or recommended by AI systems that answer questions directly — requiring different content structures, entity signals and technical approaches." },
    { question: "How long does AI search optimization take?", answer: "Some improvements such as structured data and featured snippet wins can show results within weeks. Building topical authority and consistent AI citation presence typically takes 3 to 6 months of consistent optimization." },
  ];

  return (
    <>
      <div className="aiso__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="aiso__hero">
          <div className="aiso__hero_background">
            <div className="aiso__hero_circle aiso__circle_1"></div>
            <div className="aiso__hero_circle aiso__circle_2"></div>
            <div className="aiso__hero_circle aiso__circle_3"></div>
          </div>
          <div className="aiso__hero_container">
            <h1 className="aiso__hero_title">
              AI SEO Agency UK — Get Found on Google, ChatGPT and Every AI Search Engine Your Customers Use
            </h1>
            <p className="aiso__hero_text">
              Search has changed forever. Your customers are no longer just searching on Google — they are asking ChatGPT, Perplexity, Google AI Overviews and voice assistants for answers. ZonzocTech helps businesses across the UK and USA stay visible across every search platform — traditional and AI-powered.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
              <a href="/contact" className="aiso__hero_cta">Get Free AI Search Audit →</a>
              <a href="#aiso-how" className="aiso__hero_cta" style={{ background: "transparent", border: "1px solid currentColor" }}>See How It Works ↓</a>
            </div>
            <p style={{ marginTop: "20px", opacity: 0.75 }}>Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="aiso__what_section" id="aiso-how">
          <div className="aiso__container">
            <div className="aiso__focus_grid">
              {stats.map((stat, i) => (
                <div key={i} className="aiso__focus_item">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 — New Reality of Search */}
        <section className="aiso__audience_section">
          <div className="aiso__container">
            <h2 className="aiso__heading">The New Reality of Search — Why Traditional SEO Is No Longer Enough</h2>
            <p className="aiso__description">
              For decades, SEO meant one thing — ranking on Google's blue links. Get to page one and the traffic followed. That model is rapidly changing.
            </p>
            <p className="aiso__description">
              Google now answers up to 60% of searches directly in AI Overviews — without users clicking through to any website. ChatGPT and Perplexity answer millions of business and product questions daily. Voice search delivers single spoken answers rather than a list of results.
            </p>
            <p className="aiso__description">
              For businesses across the UK and USA this means one thing — if you are only optimising for traditional Google rankings, you are already losing visibility to competitors who are preparing for the AI search era.
            </p>
            <h3 style={{ margin: "32px 0 16px" }}>Traditional SEO vs AI Search Optimization</h3>
            <div className="aiso__comparison_table">
              <div className="aiso__comparison_header">
                <div className="aiso__comparison_col">Traditional SEO Only</div>
                <div className="aiso__comparison_col">AI Search Optimization</div>
              </div>
              {comparisonData.map((row, i) => (
                <div key={i} className="aiso__comparison_row">
                  <div className="aiso__comparison_cell">{row.traditional}</div>
                  <div className="aiso__comparison_cell aiso__comparison_highlight">{row.ai}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="aiso__services_section">
          <div className="aiso__container">
            <h2 className="aiso__heading3">Our AI SEO & Search Optimization Services</h2>
            <p className="aiso__subtitle2">
              We offer a complete range of AI search optimization services — helping UK and USA businesses get found everywhere their customers are searching right now.
            </p>
            <div className="aiso__services_grid">
              {services.map((service, i) => (
                <div key={i} className="aiso__service_box">
                  <h3 className="aiso__service_title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Why Choose */}
        <section className="aiso__why_section">
          <div className="aiso__container">
            <h2 className="aiso__heading2">Why UK & USA Businesses Choose ZonzocTech for AI Search Optimization</h2>
            <div className="aiso__why_container">
              {whyChoose.map((reason, i) => (
                <div key={i} className="aiso__why_card">
                  <div className="aiso__why_marker"></div>
                  <div>
                    <strong>{reason.title}</strong>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Process */}
        <section className="aiso__process_section">
          <div className="aiso__container">
            <h2 className="aiso__heading2">Our AI Search Optimization Process</h2>
            <div className="aiso__process_flow">
              {processSteps.map((step, i) => (
                <div key={i} className="aiso__process_item">
                  <div className="aiso__process_icon_wrapper">
                    <span className="aiso__process_number">{step.number}</span>
                  </div>
                  <div className="aiso__process_content">
                    <h3 className="aiso__process_title">{step.title}</h3>
                    <p className="aiso__process_desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Who For */}
        <section className="aiso__problems_section">
          <div className="aiso__container">
            <h2 className="aiso__heading2">Who Needs AI Search Optimization</h2>
            <div className="aiso__audience_list">
              {whoFor.map((item, i) => (
                <div key={i} className="aiso__audience_item">
                  <span className="aiso__audience_check">✓</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="aiso__faq_section">
          <div className="aiso__container">
            <h2 className="aiso__heading">AI SEO & Search Optimization — Frequently Asked Questions</h2>
            <div className="aiso__faq_list">
              {faqs.map((faq, i) => (
                <div key={i} className="aiso__faq_box">
                  <h4 className="aiso__faq_q">{faq.question}</h4>
                  <p className="aiso__faq_a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="aiso__cta_section">
          <div className="aiso__container">
            <div className="aiso__cta_box">
              <h2 className="aiso__cta_title">Ready to Be Found Everywhere Your Customers Search?</h2>
              <p className="aiso__cta_desc">
                Get a free AI search visibility audit and find out how your business appears across Google, ChatGPT, Perplexity and AI-powered search — no commitment required.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
                <a href="/contact" className="aiso__cta_btn">Get Free AI Search Audit →</a>
                <a href="/seo-services" className="aiso__cta_btn" style={{ background: "transparent", border: "1px solid currentColor" }}>View Our SEO Services</a>
              </div>
              <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7 }}>No commitment. No spam. Just results.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AISearchOptimization;
