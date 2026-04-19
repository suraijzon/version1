'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/FullStackWebDev.css";
import Breadcrumb from "../components/Breadcrumb";

const FullStackWebDev = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const whatIsItems = [
    { title: "Frontend Development", description: "Everything the user sees — designed for speed, clarity and conversion." },
    { title: "Backend Development", description: "The logic, data and APIs that power your application — built for reliability and scale." },
    { title: "Database Architecture", description: "Structured, optimised data systems that keep your application fast as it grows." },
    { title: "API & Integrations", description: "Seamless connections between your app and third-party tools, payment systems and data sources." },
    { title: "Cloud Deployment", description: "Secure, scalable hosting and deployment on AWS or Google Cloud with full CI/CD setup." },
  ];

  const services = [
    {
      title: "Custom Web Application Development",
      description: "We build bespoke web applications tailored to your exact business requirements — designed for your users, your workflows and your growth goals. No templates. No shortcuts. Just clean, maintainable code built to last.",
    },
    {
      title: "MVP Development for Startups UK",
      description: "Got an idea but need to validate it fast? We specialise in building lean, functional MVPs for startups across the UK and USA — giving you a working product to test with real users without burning your entire budget on a full build.",
    },
    {
      title: "SaaS Platform Development",
      description: "We build multi-tenant SaaS platforms from scratch — covering user management, subscription billing, role-based access, analytics dashboards and all the technical infrastructure needed to launch and scale a software business.",
    },
    {
      title: "React & Next.js Development",
      description: "We are a specialist React and Next.js development agency — building fast, SEO-friendly web applications with server-side rendering, static generation and modern component architecture that performs at scale.",
    },
    {
      title: "Backend & API Development",
      description: "We build secure, scalable backend systems using Node.js, Java Spring Boot and Python — with RESTful and GraphQL APIs designed for performance, reliability and easy integration with any frontend or third-party service.",
    },
    {
      title: "Legacy System Modernisation",
      description: "Is your current web application slow, outdated or hard to maintain? We help UK and USA businesses migrate from legacy systems to modern full stack architectures — with minimal disruption and maximum performance improvement.",
    },
  ];

  const whyChoose = [
    {
      title: "✅ Affordable Without Cutting Corners",
      description: "As an offshore full stack development agency we offer the technical quality of a premium UK studio at significantly lower cost. You get senior developers, clean code and reliable delivery — without the London agency price tag.",
    },
    {
      title: "✅ React & Next.js Specialists",
      description: "We are not generalists who dabble in everything. Our core expertise is React, Next.js, Node.js and Java Spring Boot — the most in-demand full stack technologies for building modern, scalable web applications.",
    },
    {
      title: "✅ One Team, Full Ownership",
      description: "No outsourcing. No fragmented teams. One dedicated team owns your entire project from discovery through to deployment and ongoing support — giving you clear accountability at every stage.",
    },
    {
      title: "✅ Built for Small Business & Startups",
      description: "We understand the budget constraints and speed requirements of small businesses and startups. We build lean, scalable solutions that grow with you — without overengineering from day one.",
    },
    {
      title: "✅ SEO Built Into Development",
      description: "Every web application we build is optimised for search engines from the start — with proper server-side rendering, Core Web Vitals optimisation, structured data and technical SEO built into the development process.",
    },
  ];

  const techStack = [
    { category: "Frontend", items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Redux & Context API"] },
    { category: "Backend", items: ["Node.js & Express", "Java & Spring Boot", "Python & Django", "REST & GraphQL APIs"] },
    { category: "Databases", items: ["PostgreSQL & MySQL", "MongoDB", "Firebase & Firestore", "Redis"] },
    { category: "Cloud & DevOps", items: ["AWS & Google Cloud", "Docker & Kubernetes", "GitHub CI/CD", "Vercel & Netlify"] },
    { category: "CMS & E-commerce", items: ["WordPress & Headless CMS", "Shopify & WooCommerce", "Strapi & Contentful"] },
  ];

  const processSteps = [
    { number: "01", title: "Discovery & Requirements", description: "We start by understanding your business goals, target users, existing systems and technical requirements — building a clear project scope before any development begins." },
    { number: "02", title: "Architecture & UI Design", description: "We design the system architecture, database structure, API design and UI/UX wireframes — giving you a complete technical blueprint to review and approve." },
    { number: "03", title: "Agile Development", description: "We build in two-week sprints with regular demos and check-ins — so you always see progress, can provide feedback early and avoid costly late changes." },
    { number: "04", title: "Testing & QA", description: "Every feature is tested for functionality, performance, security and cross-browser compatibility before release — with automated and manual testing at every stage." },
    { number: "05", title: "Deployment & Support", description: "We deploy to production, set up monitoring, provide full documentation and offer ongoing maintenance and feature development as your business grows." },
  ];

  const faqs = [
    {
      question: "How much does full stack web development cost in the UK?",
      answer: "The cost depends on the complexity, features and timeline of your project. As an offshore full stack agency we are significantly more affordable than UK-based studios — without any compromise on quality. Contact us for a free consultation and transparent quote.",
    },
    {
      question: "How long does it take to build a web application?",
      answer: "A simple web application or MVP typically takes 6 to 10 weeks. A complex SaaS platform or enterprise application can take 3 to 6 months. We provide a clear timeline before any work begins.",
    },
    {
      question: "Can I hire a full stack developer from ZonzocTech for my UK company?",
      answer: "Yes. We offer dedicated developer engagement models for UK and USA companies who need skilled full stack developers embedded in their team — on a project or ongoing retainer basis.",
    },
    {
      question: "Do you build MVPs for startups?",
      answer: "Yes. MVP development is one of our most popular services for UK and USA startups. We build lean, functional products fast — designed to test your idea with real users and attract early investment.",
    },
    {
      question: "Do you work with React and Next.js?",
      answer: "Yes. React and Next.js are our primary frontend technologies. We are a specialist React and Next.js development agency with deep expertise in building fast, SEO-friendly and scalable web applications.",
    },
    {
      question: "Can you upgrade my existing website or web application?",
      answer: "Yes. We regularly work with businesses that need to modernise existing systems — refactoring legacy code, improving performance, adding new features or migrating to a modern tech stack.",
    },
  ];

  return (
    <>
      <div className="fswd__page_wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="fswd__hero_section">
          <div className="fswd__hero_overlay"></div>
          <div className="fswd__hero_content">
            <h1 className="fswd__hero_title">
              Full Stack Web Development Agency UK — Custom Web Apps Built to Perform and Scale
            </h1>
            <p className="fswd__hero_description">
              ZonzocTech is a full stack web development agency helping businesses across the UK and USA build high-performance custom web applications, MVPs and SaaS platforms. From pixel-perfect frontends to robust backend systems — we deliver complete, production-ready solutions on time and on budget.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
              <a href="/contact" className="fswd__cta_primary">Get Free Consultation →</a>
              <a href="#fswd-work" className="fswd__cta_primary" style={{ background: "transparent", border: "1px solid currentColor" }}>See Our Work ↓</a>
            </div>
            <p style={{ marginTop: "20px", opacity: 0.75 }}>Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        <div className="fswd__content_wrapper">

          {/* Stats Bar */}
          <section className="fswd__what_section" id="fswd-work">
            <div className="fswd__container">
              <div className="fswd__services_grid">
                {stats.map((stat, i) => (
                  <div key={i} className="fswd__service_item">
                    <div className="fswd__service_icon">{stat.number}</div>
                    <h4 className="fswd__service_name">{stat.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 1 — What Is */}
          <section className="fswd__split_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">What Is Full Stack Web Development?</h2>
              <p className="fswd__section_description">
                Full stack web development covers both sides of a web application — the frontend that users see and interact with, and the backend that powers the logic, data and integrations behind the scenes.
              </p>
              <p className="fswd__section_description">
                For businesses in the UK and USA, working with a full stack development agency means one team handles everything — from database architecture and API development to user interface design and cloud deployment. No handoffs between vendors. No communication gaps. Just faster, cleaner, more reliable delivery.
              </p>
              <div className="fswd__split_grid">
                {whatIsItems.map((item, i) => (
                  <div key={i} className="fswd__split_card">
                    <h3 className="fswd__split_title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 — Services */}
          <section className="fswd__services_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">Our Full Stack Web Development Services</h2>
              <p className="fswd__section_description">
                We build custom web solutions for businesses of all sizes — from startups launching their first product to established companies modernising legacy systems.
              </p>
              <div className="fswd__faq_list">
                {services.map((service, i) => (
                  <div key={i} className="fswd__faq_card">
                    <h4 className="fswd__faq_q">{service.title}</h4>
                    <p className="fswd__faq_a">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Why Choose */}
          <section className="fswd__why_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">Why UK & USA Businesses Hire ZonzocTech as Their Full Stack Development Agency</h2>
              <p className="fswd__section_description">
                Choosing the right development partner is one of the most important decisions a business can make. Here is why growing businesses across the UK and USA choose ZonzocTech.
              </p>
              <div className="fswd__why_grid">
                {whyChoose.map((reason, i) => (
                  <div key={i} className="fswd__why_card">
                    <strong>{reason.title}</strong>
                    <p>{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 — Tech Stack */}
          <section className="fswd__tech_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">Our Full Stack Development Tech Stack</h2>
              <p className="fswd__section_description">
                We use modern, proven technologies selected based on your project requirements — not the latest trend.
              </p>
              <div className="fswd__tech_grid">
                {techStack.map((group, i) => (
                  <div key={i} className="fswd__tech_badge">
                    <strong>{group.category}</strong>
                    <ul className="fswd__check_list" style={{ marginTop: "8px" }}>
                      {group.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5 — Process */}
          <section className="fswd__process_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">Our Full Stack Development Process</h2>
              <p className="fswd__section_description">
                Clear, structured and collaborative — every project follows our proven process from discovery to deployment.
              </p>
              <div className="fswd__timeline">
                {processSteps.map((step, i) => (
                  <div key={i} className="fswd__timeline_item">
                    <div className="fswd__timeline_marker">{step.number}</div>
                    <div className="fswd__timeline_content">
                      <h3 className="fswd__timeline_title">{step.title}</h3>
                      <p className="fswd__timeline_text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6 — FAQ */}
          <section className="fswd__faq_section">
            <div className="fswd__container">
              <h2 className="fswd__section_heading">Full Stack Web Development — Frequently Asked Questions</h2>
              <div className="fswd__faq_list">
                {faqs.map((faq, i) => (
                  <div key={i} className="fswd__faq_card">
                    <h4 className="fswd__faq_q">{faq.question}</h4>
                    <p className="fswd__faq_a">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="fswd__cta_section">
            <div className="fswd__container">
              <div className="fswd__cta_content">
                <h2 className="fswd__cta_heading">Ready to Build Your Web Application?</h2>
                <p className="fswd__cta_text">
                  Whether you need an MVP, a SaaS platform or a custom web application — tell us about your project and we will put together a free technical consultation and development proposal.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
                  <a href="/contact" className="fswd__cta_button">Get Free Consultation →</a>
                  <a href="/#portfolio" className="fswd__cta_button" style={{ background: "transparent", border: "1px solid currentColor" }}>See Our Work</a>
                </div>
                <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7 }}>No commitment. No spam. Just honest advice.</p>
              </div>
            </div>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default FullStackWebDev;
