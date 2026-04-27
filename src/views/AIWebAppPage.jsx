'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AIWebAppPage.css";
import Breadcrumb from "../components/Breadcrumb";

const AIWebAppDev = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const exampleApps = [
    "Intelligent business dashboards & reporting tools",
    "AI-powered SaaS platforms",
    "GPT & LLM powered customer facing tools",
    "Automated lead qualification systems",
    "AI recommendation & personalization engines",
    "Internal workflow automation tools",
    "Predictive analytics platforms",
    "AI chatbots & virtual assistant portals",
  ];

  const services = [
    {
      title: "AI SaaS Platform Development",
      description: "We design and build scalable AI-powered SaaS products from the ground up — including multi-tenancy, subscription billing, user management and AI feature integration. Whether you are a startup launching your first product or an established business adding a SaaS offering, we deliver production-ready platforms built to grow.",
    },
    {
      title: "GPT & LLM Powered Web Applications",
      description: "We integrate OpenAI GPT, Claude, Gemini and other large language models into custom web applications — enabling intelligent content generation, smart search, automated responses and AI-driven workflows tailored to your business needs.",
    },
    {
      title: "AI Business Automation Tools",
      description: "We build internal web applications that automate your most repetitive and time-consuming business processes — from data entry and report generation to lead qualification and customer communication — freeing your team to focus on high-value work.",
    },
    {
      title: "AI Dashboards & Analytics Platforms",
      description: "We build intelligent dashboards that go beyond static charts — pulling live data, applying AI analysis and surfacing the insights your team actually needs to make faster, smarter business decisions.",
    },
    {
      title: "AI Chatbots & Intelligent Assistants",
      description: "We build custom AI chatbots and virtual assistants that handle customer queries, qualify leads, book appointments and escalate complex issues — all integrated into your website or internal tools.",
    },
    {
      title: "API & Third Party AI Integrations",
      description: "Already have a web application that needs AI capabilities? We integrate AI APIs, automation tools and third-party services into your existing systems — without rebuilding from scratch.",
    },
  ];

  const whyChoose = [
    {
      title: "✅ AI-First — Not AI as an Afterthought",
      description: "We don't bolt AI onto existing solutions. We design every application with AI at its core — choosing the right models, data flows and integration points from day one.",
    },
    {
      title: "✅ Full-Stack Engineering Expertise",
      description: "Our team covers the full development stack — frontend, backend, AI integration, database architecture and cloud deployment — under one roof with no outsourcing.",
    },
    {
      title: "✅ Business-Focused Development",
      description: "We build for real-world business outcomes — not technical showcases. Every AI feature we build is justified by the value it creates for your users and your bottom line.",
    },
    {
      title: "✅ Affordable for UK Small Businesses",
      description: "As an offshore AI web development agency, we offer the technical expertise of a premium UK development studio at a significantly lower cost — without compromising quality, communication or delivery.",
    },
    {
      title: "✅ Long-Term Partnership",
      description: "We don't disappear after launch. We provide ongoing support, optimization and feature development — growing your application as your business grows.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, users, workflows and existing systems — then define the right AI use cases and technical approach before writing a single line of code.",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "We design the application structure, AI model selection, data flows, API integrations and UI/UX — creating a clear blueprint before development begins.",
    },
    {
      step: "03",
      title: "Agile Development",
      description: "We build in sprints with regular demos and check-ins — so you always know what is being built, can provide feedback early and avoid costly late-stage changes.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Every application is thoroughly tested for performance, security, scalability and real-world usage — including AI model accuracy and edge case handling.",
    },
    {
      step: "05",
      title: "Launch & Ongoing Support",
      description: "We deploy your application to production, provide full handover documentation and offer ongoing maintenance, optimization and feature development as your needs evolve.",
    },
  ];

  const technologies = [
    { category: "Frontend", items: ["React & Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Java & Spring Boot", "Python"] },
    { category: "AI & ML", items: ["OpenAI GPT & API", "LangChain", "TensorFlow & PyTorch"] },
    { category: "Cloud & Infrastructure", items: ["AWS & Google Cloud", "Docker & Kubernetes", "CI/CD pipelines"] },
    { category: "Databases", items: ["PostgreSQL & MongoDB", "Firebase", "Redis"] },
  ];

  const faqs = [
    {
      question: "How much does AI web application development cost in the UK?",
      answer: "The cost depends on the complexity of the application, number of AI features, integrations required and timeline. As an offshore AI web development agency we offer significantly more competitive pricing than UK-based studios — without compromising quality. Contact us for a free consultation and transparent quote.",
    },
    {
      question: "How long does it take to build an AI web application?",
      answer: "A simple AI-powered tool can take 4 to 8 weeks. A full SaaS platform with multiple AI features typically takes 3 to 6 months. We provide a clear timeline before any work begins.",
    },
    {
      question: "Can you add AI features to my existing web application?",
      answer: "Yes. We regularly integrate AI capabilities into existing applications — including GPT integrations, automation layers, analytics and chatbot functionality — without requiring a full rebuild.",
    },
    {
      question: "Do you hire out AI web developers for UK companies?",
      answer: "Yes. We offer dedicated developer engagement models for UK and USA companies that need skilled AI web developers embedded in their team — on a project or ongoing basis.",
    },
    {
      question: "What industries do you build AI web apps for?",
      answer: "We have built AI web applications for e-commerce, healthcare, logistics, education, finance, hospitality and professional services — across the UK, USA and Europe.",
    },
  ];

  return (
    <>
      <div className="aiwa__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="aiwa__hero">
          <div className="aiwa__hero_bg">
            <div className="aiwa__hero_shape aiwa__shape_1"></div>
            <div className="aiwa__hero_shape aiwa__shape_2"></div>
            <div className="aiwa__hero_shape aiwa__shape_3"></div>
          </div>
          <div className="aiwa__hero_container">
            <div className="aiwa__hero_content">
              <h1 className="aiwa__hero_title">
                AI Web Application Development Company Serving UK & USA Businesses
              </h1>
              <p className="aiwa__hero_description">
                ZonzocTech builds custom AI-powered web applications for businesses across the UK and USA. From intelligent dashboards and SaaS platforms to GPT-powered tools and business automation systems — we turn your ideas into secure, scalable, production-ready applications.
              </p>
              <div className="hero-btn-wrap">
                <a href="/contact" className="hero-btn-primary">Get Free Consultation →</a>
                <a href="#aiwa-work" className="hero-btn-secondary">See Our Work ↓</a>
              </div>
              <p style={{ marginTop: "20px", opacity: 0.75 }}>Trusted by 120+ businesses across UK, USA & Europe</p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="aiwa__audience_section" id="aiwa-work">
          <div className="aiwa__container">
            <div className="aiwa__audience_cards">
              {stats.map((stat, index) => (
                <div key={index} className="aiwa__audience_card">
                  <div className="aiwa__audience_number">{stat.number}</div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 — What Is AI Web App Dev */}
        <section className="aiwa__problems_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading2">What Is AI Web Application Development?</h2>
            <p className="aiwa__problems_tagline">
              AI web application development is the process of building web-based software that uses artificial intelligence to automate tasks, analyze data, personalize experiences and make smarter decisions — without manual intervention.
            </p>
            <p className="aiwa__problems_tagline">
              Unlike standard websites or basic web apps, AI-powered applications learn from data, adapt to user behaviour and continuously improve over time. For businesses in the UK and USA, this means less manual work, faster operations and a significant competitive advantage.
            </p>
            <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>Examples of AI Web Applications We Build:</h3>
            <div className="aiwa__problems_grid">
              {exampleApps.map((item, index) => (
                <div key={index} className="aiwa__problem_box">
                  <p className="aiwa__problem_title">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="aiwa__solutions_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading3">Custom AI Web App Development Services</h2>
            <p className="aiwa__subtitle">
              We build a wide range of AI-powered web applications — each one custom designed around your specific business goals, users and workflows.
            </p>
            <div className="aiwa__process_container">
              {services.map((service, index) => (
                <div key={index} className="aiwa__process_card">
                  <div className="aiwa__process_header">
                    <h3 className="aiwa__process_title">{service.title}</h3>
                  </div>
                  <p className="aiwa__process_desc">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Why Choose */}
        <section className="aiwa__why_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading3">Why UK & USA Businesses Choose ZonzocTech for AI Web Development</h2>
            <p className="aiwa__why_footer">
              There are hundreds of web development agencies. Here is why businesses across the UK and USA specifically choose us for AI web application development.
            </p>
            <div className="aiwa__why_boxes">
              {whyChoose.map((reason, index) => (
                <div key={index} className="aiwa__why_box">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Process */}
        <section className="aiwa__process_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading3">Our AI Web Application Development Process</h2>
            <p className="aiwa__process_desc">
              Every project follows our proven 5-step process — transparent, collaborative and focused on delivering working software on time.
            </p>
            <div className="aiwa__process_container">
              {processSteps.map((item, index) => (
                <div key={index} className="aiwa__process_card">
                  <div className="aiwa__process_header">
                    <span className="aiwa__process_step">{item.step}</span>
                    <h3 className="aiwa__process_title">{item.title}</h3>
                  </div>
                  <p className="aiwa__process_desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Technologies */}
        <section className="aiwa__tech_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading3">Technologies We Use</h2>
            <p className="aiwa__tech_note">
              We choose the right technology for each project — not the trendiest stack. Here is what we typically work with.
            </p>
            <div className="aiwa__tech_list">
              {technologies.map((group, index) => (
                <div key={index} className="aiwa__tech_item">
                  <div className="aiwa__tech_bullet"></div>
                  <div>
                    <strong>{group.category}</strong>
                    <span> — {group.items.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="aiwa__faq_section">
          <div className="aiwa__container">
            <h2 className="aiwa__heading3">AI Web Application Development — Frequently Asked Questions</h2>
            <div className="aiwa__faq_accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="aiwa__faq_item">
                  <h4 className="aiwa__faq_question">{faq.question}</h4>
                  <p className="aiwa__faq_answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="aiwa__cta_section">
          <div className="aiwa__container">
            <div className="aiwa__cta_content">
              <h2 className="aiwa__cta_title">Ready to Build Your AI Web Application?</h2>
              <p className="aiwa__cta_text">
                Tell us about your project and we will put together a free technical consultation and development roadmap — no commitment required.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
                <a href="/contact" className="aiwa__cta_button">Get Free Consultation →</a>
                <a href="/#portfolio" className="aiwa__cta_button" style={{ background: "transparent", border: "1px solid currentColor" }}>See Our Work</a>
              </div>
              <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7 }}>No commitment. No spam. Just honest advice.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIWebAppDev;
