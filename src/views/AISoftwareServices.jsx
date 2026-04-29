'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AISoftwareServices.css";
import Breadcrumb from "../components/Breadcrumb";

const AISoftwareServices = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const businessCase = [
    { title: "Replace Manual Repetitive Work", description: "Every hour your team spends on repetitive tasks — data entry, report generation, email responses, scheduling — is an hour not spent on high-value work. Custom AI software automates these tasks completely, freeing your team to focus on what only humans can do." },
    { title: "Scale Without Hiring", description: "AI software handles growing workloads without growing headcount. As your business scales, your AI systems scale with it — processing more data, handling more queries and managing more tasks without additional staff costs." },
    { title: "Faster, Smarter Decisions", description: "Custom AI tools analyse your business data in real time — surfacing insights, flagging anomalies and recommending actions faster than any manual process. Better information leads to better decisions." },
    { title: "Competitive Advantage", description: "Businesses that automate intelligently move faster, serve customers better and operate more efficiently than competitors still relying on manual processes. Custom AI software is increasingly the difference between market leaders and those falling behind." },
  ];

  const services = [
    { title: "AI Chatbot Development UK", description: "We build custom AI chatbots for businesses across the UK and USA — intelligent conversational assistants that handle customer enquiries, qualify leads, answer product questions, book appointments and escalate complex issues to human agents. Our chatbots are trained on your specific business data and integrated directly into your website, app or internal tools." },
    { title: "GPT Integration & Custom GPT Tools", description: "We integrate OpenAI GPT, Claude, Gemini and other large language models into your business software — building custom GPT-powered tools for content generation, document analysis, customer support, internal knowledge bases and intelligent search. We go beyond simple API calls to build fully functional, production-ready GPT applications." },
    { title: "Business Process Automation", description: "We build AI-powered automation systems that eliminate manual, repetitive business processes — from data collection and processing to report generation, invoice handling, inventory management and customer communication workflows. Our automation solutions integrate with your existing tools and deliver measurable time and cost savings from day one." },
    { title: "Workflow Automation Software", description: "We design and build custom workflow automation software that connects your business tools, automates handoffs between teams and eliminates the manual coordination that slows operations down. Built specifically around how your business works — not a generic template." },
    { title: "AI-Powered Data Analysis Tools", description: "We build custom data analysis and reporting tools that use AI to process large datasets, identify patterns, generate insights and surface the business intelligence your team needs — automatically and in real time. No more manual spreadsheets or waiting for weekly reports." },
    { title: "CRM & System AI Integration", description: "We integrate AI capabilities into your existing CRM, ERP and business software — adding intelligent lead scoring, automated follow-up sequences, predictive analytics and smart data enrichment without requiring a full system replacement." },
    { title: "AI Document Processing", description: "We build AI systems that automatically read, extract, classify and process information from documents — invoices, contracts, forms, reports and emails — eliminating manual data entry and accelerating document-heavy workflows." },
    { title: "Custom AI API Development", description: "We build secure, scalable AI APIs that power your products and platforms — enabling other systems to access AI capabilities, process requests and return intelligent responses reliably at scale." },
  ];

  const whyChoose = [
    { title: "✅ Business-First AI Development", description: "We start every project by understanding your business problem — not by recommending the latest AI technology. We only build AI solutions where they create genuine value and measurable ROI for your business." },
    { title: "✅ Full-Stack AI Engineering", description: "We cover the complete AI development stack — from model selection and training to API development, frontend interfaces and system integrations. One team, full ownership, no gaps." },
    { title: "✅ Seamless Integration", description: "Our AI software integrates with your existing tools and systems — CRMs, ERPs, communication platforms, databases and third-party APIs — without disrupting your current operations." },
    { title: "✅ Affordable for UK Small Business", description: "As an offshore AI software development company we offer the technical expertise of a premium UK studio at a fraction of the cost — making custom AI software accessible to small and medium businesses across the UK and USA." },
    { title: "✅ Ongoing Support & Improvement", description: "AI software improves with use and requires ongoing monitoring and refinement. We provide long-term support — updating models, improving accuracy and adding features as your business needs evolve." },
  ];

  const technologies = [
    { category: "AI & Machine Learning", items: ["OpenAI GPT-4 & API", "Anthropic Claude API", "Google Gemini", "LangChain & LlamaIndex", "TensorFlow & PyTorch"] },
    { category: "Automation & Integration", items: ["Zapier & Make integrations", "REST & GraphQL APIs", "Webhook systems", "CRM & ERP connectors", "Email & messaging APIs"] },
    { category: "Backend & Infrastructure", items: ["Python & FastAPI", "Node.js & Express", "AWS & Google Cloud", "Docker & Kubernetes", "PostgreSQL & MongoDB"] },
  ];

  const processSteps = [
    { number: "01", title: "Business Analysis & AI Scoping", description: "We analyse your business workflows, identify the highest-value automation opportunities and define exactly what AI software will and will not do — setting realistic expectations before any development begins." },
    { number: "02", title: "Solution Design & Architecture", description: "We design the AI system architecture — model selection, data flows, integration points, user interfaces and security controls — creating a clear technical blueprint before writing a single line of code." },
    { number: "03", title: "Development & Integration", description: "We build your AI software in sprints with regular demos and check-ins — integrating with your existing systems and testing real-world scenarios throughout the development process." },
    { number: "04", title: "Testing & Accuracy Optimisation", description: "We test AI software extensively for accuracy, edge cases, security and real-world performance — refining models and logic until the system performs reliably in production." },
    { number: "05", title: "Deployment & Ongoing Support", description: "We deploy your AI software, provide full documentation and offer ongoing monitoring, model updates and feature development as your business and data evolve." },
  ];

  const whoFor = [
    { title: "✓ Small & Medium Businesses UK & USA", description: "Who want to automate manual processes, reduce operational costs and compete more effectively — without enterprise-level AI budgets." },
    { title: "✓ Customer-Facing Businesses", description: "Who need AI chatbots and virtual assistants to handle customer enquiries, qualify leads and book appointments — around the clock without additional staff." },
    { title: "✓ Data-Heavy Operations", description: "That process large volumes of documents, forms, reports or customer data manually — and need intelligent automation to handle it faster and more accurately." },
    { title: "✓ Businesses Using Multiple Disconnected Tools", description: "Who need AI to connect their systems, automate handoffs and create a unified intelligent workflow — rather than managing everything manually." },
    { title: "✓ Companies Building AI Products", description: "Startups and established businesses building AI-powered software products that need an experienced technical partner to design and develop the AI layer." },
  ];

  const faqs = [
    { question: "How much does custom AI software development cost in the UK?", answer: "The cost depends on the complexity of the AI system, integrations required and development timeline. As an offshore AI software development company we are significantly more affordable than UK studios — without any compromise on quality or communication. Contact us for a free consultation and quote." },
    { question: "How long does it take to build custom AI software?", answer: "A simple AI chatbot or automation tool can be delivered in 4 to 8 weeks. A complex multi-system AI automation platform typically takes 3 to 5 months. We provide a clear timeline and milestones before any work begins." },
    { question: "Can you build AI chatbots for UK businesses?", answer: "Yes. AI chatbot development is one of our most popular services for UK and USA businesses. We build custom chatbots trained on your specific business data — integrated into your website, CRM or internal tools." },
    { question: "Can you integrate GPT into my existing software?", answer: "Yes. GPT and LLM integration is a core part of what we do. We integrate OpenAI GPT, Claude and other models into existing business software — adding intelligent content generation, smart search, automated responses and AI-driven workflows." },
    { question: "Is custom AI software secure?", answer: "Yes. Security is built into every stage of our development process — including data handling, access control, API security and deployment configuration. We follow best practices for AI system security and data privacy compliance." },
    { question: "Do you offer AI automation for small businesses?", answer: "Yes. We specialise in making custom AI automation accessible and affordable for small and medium businesses across the UK and USA — building practical, high-impact solutions that deliver fast ROI without enterprise-level budgets." },
  ];

  return (
    <>
      <div className="aiss__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="aiss__hero">
          <div className="aiss__hero_gradient"></div>
          <div className="aiss__hero_container">
            <h1 className="aiss__hero_title">
              AI Software Development Company UK — Custom Automation Tools, Chatbots and AI Systems Built for Your Business
            </h1>
            <p className="aiss__hero_text">
              ZonzocTech builds custom AI software for businesses across the UK and USA — from intelligent chatbots and GPT-powered tools to business process automation systems and workflow integrations. We replace manual, time-consuming operations with smart AI software that works around the clock and scales with your business.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Get Free AI Consultation →</a>
              <a href="#aiss-work" className="btn-secondary">See Our Work ↓</a>
            </div>
            <p style={{ marginTop: "20px", opacity: 0.75 }}>Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-bar" id="aiss-work">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Section 1 — What Is */}
        <section className="aiss__audience_section">
          <div className="aiss__container">
            <h2 className="aiss__heading">What Is Custom AI Software Development?</h2>
            <p className="aiss__description">
              Custom AI software development is the process of building bespoke software solutions that use artificial intelligence to automate tasks, make decisions, process information and interact with users — all tailored specifically to your business workflows, data and goals.
            </p>
            <p className="aiss__description">
              Unlike off-the-shelf AI tools that force you to adapt your business to their limitations, custom AI software is built around how your business actually works — integrating with your existing systems and solving your specific operational challenges.
            </p>
            <h3 style={{ margin: "32px 0 16px" }}>The Business Case for Custom AI Software</h3>
            <div className="aiss__faq_list">
              {businessCase.map((item, i) => (
                <div key={i} className="aiss__faq_item">
                  <h4 className="aiss__faq_question">{item.title}</h4>
                  <p className="aiss__faq_answer">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="aiss__services_section">
          <div className="aiss__container">
            <h2 className="aiss__heading">Our AI Software Development Services for UK & USA Businesses</h2>
            <p className="aiss__subtitle">
              We build a wide range of custom AI software solutions — each designed around your specific business needs, workflows and growth objectives.
            </p>
            <div className="service-cards-grid">
              {services.map((service, i) => (
                <div key={i} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Why Choose */}
        <section className="aiss__why_section">
          <div className="aiss__container">
            <h2 className="aiss__heading">Why UK & USA Businesses Choose ZonzocTech for AI Software Development</h2>
            <div className="why-choose-grid">
              {whyChoose.map((reason, i) => (
                <div key={i} className="why-choose-card">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Technologies */}
        <section className="tech-stack-section">
          <div className="aiss__container">
            <h2 className="aiss__heading">Technologies We Use</h2>
            <div className="tech-stack-grid">
              {technologies.map((group, i) => (
                <div key={i} className="tech-category-card">
                  <div className="tech-category-title">{group.category}</div>
                  <div className="tech-items">
                    {group.items.map((item, j) => (
                      <span key={j} className="tech-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Process */}
        <section className="process-section">
          <div className="aiss__container">
            <h2>Our AI Software Development Process</h2>
            <div className="process-grid">
              {processSteps.map((step, i) => (
                <div key={i} className="process-card">
                  <div className="process-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Who For */}
        <section className="aiss__problems_section">
          <div className="aiss__container">
            <h2 className="aiss__heading3">Who Our AI Software Development Service Is For</h2>
            <div className="aiss__audience_grid">
              {whoFor.map((item, i) => (
                <div key={i} className="aiss__audience_card">
                  <div className="aiss__audience_icon">✓</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="faq-section">
          <div className="aiss__container">
            <h2>AI Software Development — Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="aiss__container">
            <h2>Ready to Automate and Scale Your Business with AI?</h2>
            <p>Tell us about your business processes and we will put together a free AI software consultation — showing you exactly where AI can save time, reduce costs and help you grow.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get Free AI Consultation →</a>
              <a href="/#portfolio" className="btn-secondary">See Our Work</a>
            </div>
            <p className="cta-small-text">No commitment. No spam. Just results.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AISoftwareServices;
