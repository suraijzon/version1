'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AIWebsiteDesign.css";
import Breadcrumb from "../components/Breadcrumb";

const AIWebsiteDesign = () => {
  const stats = [
    { number: "150+", label: "Websites Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "35%", label: "Average Conversion Improvement" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const whatItNeeds = [
    { title: "Clear Messaging", description: "Visitors decide within 3 seconds whether to stay or leave. Your website must immediately communicate what you do, who you help and why you are the right choice." },
    { title: "Fast Load Speed", description: "Every second of delay costs conversions. We build websites that score 90+ on Google PageSpeed — keeping visitors engaged and search rankings strong." },
    { title: "Conversion-Focused Design", description: "Beautiful design means nothing without strategic layout. We design every section to guide visitors naturally toward taking action — enquiry, purchase or booking." },
    { title: "Mobile-First Experience", description: "Over 60% of UK web traffic comes from mobile devices. Every website we build is designed mobile-first — looking and performing perfectly on every screen size." },
    { title: "SEO Built In", description: "A website nobody finds is worthless. We build technical SEO into every website from the start — proper structure, fast loading, schema markup and AI search optimisation included." },
  ];

  const services = [
    { title: "Business Website Design", description: "Clean, professional and conversion-focused website design for service businesses, consultancies and professional firms across the UK and USA. Built to establish credibility, generate enquiries and support your sales process." },
    { title: "Landing Page Design", description: "High-converting landing pages designed around a single goal — whether that is generating leads, selling a product or promoting a specific service. Every element is designed to remove friction and drive action." },
    { title: "E-commerce Website Design", description: "Beautifully designed online stores built to convert browsers into buyers. We design product pages, category layouts and checkout flows that reduce abandonment and increase average order value." },
    { title: "AI-Enhanced Website Design", description: "We integrate AI capabilities into website design — including smart chatbots, personalised content sections, AI lead capture forms and automated user journeys that adapt to visitor behaviour." },
    { title: "Website Redesign", description: "Is your current website outdated, slow or simply not generating results? We redesign existing websites with a focus on performance, conversion and modern design — without losing your existing SEO value." },
    { title: "WordPress Website Design", description: "Custom WordPress website design and development for businesses that need a flexible, easy-to-manage website. Built with premium performance, security and full SEO optimisation included." },
  ];

  const whyChoose = [
    { title: "✅ Conversion-First Design Philosophy", description: "We don't design websites to win design awards. We design them to win customers. Every decision we make is driven by what converts — not what looks impressive in a portfolio." },
    { title: "✅ AI-Powered Design Tools", description: "We use AI design tools to accelerate the design process, test layout variations and identify the highest-converting structures — giving our clients better results faster." },
    { title: "✅ Affordable for UK Small Businesses", description: "Premium website design at offshore pricing. You get the quality and strategic thinking of a top UK design agency at a fraction of the cost — with no compromise on delivery or communication." },
    { title: "✅ Full-Stack Delivery", description: "We handle everything in-house — strategy, design, development, copywriting guidance and SEO. No juggling multiple agencies or freelancers. One team, full accountability." },
    { title: "✅ Fast Turnaround", description: "Most business websites are delivered within 4 to 6 weeks. Landing pages within 1 to 2 weeks. We work fast without cutting corners — because we know time is money for small businesses." },
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Strategy", description: "We learn about your business, target audience, competitors and conversion goals before designing a single page." },
    { step: "02", title: "Wireframes & Layout Planning", description: "We create wireframes showing the structure and layout of every key page — so you can review and approve the blueprint before design begins." },
    { step: "03", title: "Visual Design", description: "We create the full visual design — colours, typography, imagery, icons and all UI elements — aligned with your brand and optimised for conversion." },
    { step: "04", title: "Development & Testing", description: "We build the website with clean, performant code — testing across all devices, browsers and screen sizes before launch." },
    { step: "05", title: "Launch & Optimisation", description: "We deploy your website, set up analytics and provide ongoing support and conversion optimisation as your traffic grows." },
  ];

  const whoFor = [
    { title: "✓ Small Businesses in the UK & USA", description: "Who need a professional website that actually generates enquiries — not just an online brochure." },
    { title: "✓ Startups", description: "Launching their first website and needing it to make the right first impression and generate early leads on a startup budget." },
    { title: "✓ Service Businesses", description: "Consultants, agencies, clinics, law firms and tradespeople who rely on their website to generate enquiries and bookings." },
    { title: "✓ E-commerce Brands", description: "Looking for a high-converting online store design that turns browsers into buyers more consistently." },
    { title: "✓ Businesses Needing a Redesign", description: "Whose current website is outdated, slow or simply not generating the results their business deserves." },
  ];

  const faqs = [
    { question: "How much does website design cost in the UK?", answer: "Our website design packages are priced specifically to be affordable for small businesses in the UK and USA. As an offshore design agency we offer significantly better value than UK studios — without compromising on quality. Contact us for a free consultation and transparent quote." },
    { question: "How long does it take to design a website?", answer: "A standard business website typically takes 4 to 6 weeks from start to launch. Landing pages can be delivered in 1 to 2 weeks. We provide a clear timeline before any work begins." },
    { question: "Do you design mobile-friendly websites?", answer: "Yes — every website we design is mobile-first. We design and test on all screen sizes to ensure a perfect experience on mobile, tablet and desktop." },
    { question: "Is SEO included in your website design?", answer: "Yes. Technical SEO is built into every website we design — including proper heading structure, fast loading, schema markup, sitemap generation and AI search optimisation." },
    { question: "Can you redesign my existing website?", answer: "Yes. Website redesign is one of our most popular services. We modernise existing websites for performance, conversion and design — while preserving your existing SEO rankings." },
    { question: "Do you design WordPress websites?", answer: "Yes. We design and build custom WordPress websites with premium performance, security hardening and full SEO optimisation included as standard." },
  ];

  return (
    <>
      <div className="aiwd__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="aiwd__hero">
          <div className="aiwd__hero_container">
            <div className="aiwd__hero_content">
              <h1 className="aiwd__hero_heading">
                AI Website Design Agency UK — Websites Built to Convert Visitors into Paying Customers
              </h1>
              <p className="aiwd__hero_description">
                ZonzocTech designs and builds high-converting websites for small businesses and growing companies across the UK and USA. We combine modern AI-powered design with conversion-focused UX — creating websites that look great, load fast and turn visitors into leads from day one.
              </p>
              <div className="hero-btn-wrap">
                <a href="/contact" className="hero-btn-primary">Get Free Design Consultation →</a>
                <a href="#aiwd-work" className="hero-btn-secondary">See Our Work ↓</a>
              </div>
              <p style={{ marginTop: "20px", opacity: 0.75 }}>Trusted by 120+ businesses across UK, USA & Europe</p>
            </div>
            <div className="aiwd__hero_visual">
              <div className="aiwd__hero_card">🎨</div>
              <div className="aiwd__hero_card">🤖</div>
              <div className="aiwd__hero_card">📈</div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="aiwd__audience_section" id="aiwd-work">
          <div className="aiwd__container">
            <div className="aiwd__audience_grid">
              {stats.map((stat, i) => (
                <div key={i} className="aiwd__audience_card">
                  <div className="aiwd__audience_icon">{stat.number}</div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 — Why Most Websites Fail */}
        <section className="aiwd__what_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title">Why Most Websites Fail to Generate Leads — And How We Fix It</h2>
            <p className="aiwd__text">
              Most business websites look acceptable but perform poorly. They load slowly, confuse visitors with unclear messaging and have no clear path to conversion. The result is traffic that bounces and leads that never materialise.
            </p>
            <p className="aiwd__text">
              At ZonzocTech we design every website around one primary goal — converting visitors into leads or customers. Every layout decision, every headline and every call to action is backed by conversion principles and real user behaviour data.
            </p>
            <h3 className="aiwd__tagline">What a High-Converting Website Actually Needs</h3>
            <div className="aiwd__problems_grid">
              {whatItNeeds.map((item, i) => (
                <div key={i} className="aiwd__problem_item">
                  <span className="aiwd__problem_text"><strong>{item.title}</strong> — {item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="aiwd__services_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title2">Our Website Design & Development Services</h2>
            <p className="aiwd__subtitle">
              We offer complete website design and development — from strategy and design through to development, launch and ongoing optimisation.
            </p>
            <div className="aiwd__faq_container">
              {services.map((service, i) => (
                <div key={i} className="aiwd__faq_item">
                  <h3 className="aiwd__faq_question">{service.title}</h3>
                  <p className="aiwd__faq_answer">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Why Choose */}
        <section className="aiwd__why_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title">Why UK & USA Businesses Choose ZonzocTech for Website Design</h2>
            <div className="aiwd__why_grid">
              {whyChoose.map((reason, i) => (
                <div key={i} className="aiwd__why_item">
                  <div className="aiwd__why_check">
                    <strong>{reason.title}</strong>
                  </div>
                  <span>{reason.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Process */}
        <section className="aiwd__process_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title2">Our Website Design Process</h2>
            <div className="aiwd__process_grid">
              {processSteps.map((item, i) => (
                <div key={i} className="aiwd__process_card">
                  <div className="aiwd__process_number">{item.step}</div>
                  <h3 className="aiwd__process_title">{item.title}</h3>
                  <p className="aiwd__process_desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Who For */}
        <section className="aiwd__comparison_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title2">Who Our Website Design Service Is For</h2>
            <div className="aiwd__audience_grid">
              {whoFor.map((item, i) => (
                <div key={i} className="aiwd__audience_card">
                  <div className="aiwd__audience_icon">✓</div>
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
        <section className="aiwd__faq_section">
          <div className="aiwd__container">
            <h2 className="aiwd__title">Website Design — Frequently Asked Questions</h2>
            <div className="aiwd__faq_container">
              {faqs.map((faq, i) => (
                <div key={i} className="aiwd__faq_item">
                  <h3 className="aiwd__faq_question">{faq.question}</h3>
                  <p className="aiwd__faq_answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="aiwd__final_cta">
          <div className="aiwd__container">
            <h2 className="aiwd__cta_heading">Ready for a Website That Actually Generates Leads?</h2>
            <p className="aiwd__cta_text">
              Tell us about your business and we will put together a free website design consultation and growth proposal — no commitment required.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
              <a href="/contact" className="aiwd__cta_button">Get Free Design Consultation →</a>
              <a href="/#portfolio" className="aiwd__cta_button" style={{ background: "transparent", border: "1px solid currentColor" }}>See Our Work</a>
            </div>
            <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7 }}>No commitment. No spam. Just results.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIWebsiteDesign;
