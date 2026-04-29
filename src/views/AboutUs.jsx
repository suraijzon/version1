'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AboutUs.css";
import Breadcrumb from "../components/Breadcrumb";

const AboutUs = () => {
  const beliefs = [
    {
      title: "Technology Should Serve Business Goals",
      description: "We don't build technology for the sake of it. Every line of code, every SEO decision, every AI integration is driven by one question — will this help our client grow?",
    },
    {
      title: "Offshore Doesn't Mean Lower Quality",
      description: "Being based in Sri Lanka gives our clients a significant cost advantage — without compromising on quality, communication or delivery speed.",
    },
    {
      title: "Long-Term Partnerships Over Quick Projects",
      description: "We're not interested in one-off projects. We want to be the agency our clients call every time they need to grow digitally.",
    },
  ];

  const services = [
    { number: "01", title: "AI Web Application Development", description: "Custom AI-powered web applications built for performance, scalability and business growth." },
    { number: "02", title: "Full-Stack Web Development", description: "End-to-end web development using modern frameworks — React, Next.js, Node.js, Spring Boot and more." },
    { number: "03", title: "AI Website Design & Development", description: "High-converting website designs built with AI tools and data-driven UX principles." },
    { number: "04", title: "SEO & AI Search Optimization", description: "Organic growth strategies that work for both traditional Google search and AI-powered search engines." },
    { number: "05", title: "E-commerce Development", description: "Shopify, WooCommerce and custom e-commerce platforms built to convert visitors into customers." },
    { number: "06", title: "AI Software Development", description: "Custom AI solutions — chatbots, automation systems, workflow tools and GPT integrations." },
    { number: "07", title: "Website Maintenance & Security", description: "Ongoing performance monitoring, security updates and technical support — so your site never lets you down." },
  ];

  const whoWeWorkWith = [
    "Startups launching new products",
    "E-commerce brands scaling sales",
    "Service businesses generating leads",
    "Agencies needing technical execution",
    "Companies modernising legacy systems",
  ];

  const values = [
    { title: "Transparency", description: "Clear communication at every step. No hidden costs, no technical jargon, no surprises.", icon: "👁️" },
    { title: "Quality", description: "Clean code, ethical SEO and scalable systems — built to last, not just to launch.", icon: "⭐" },
    { title: "Results", description: "Traffic, leads, conversions and ROI. We measure success by your business outcomes — not our deliverables.", icon: "🎯" },
    { title: "Innovation", description: "We stay ahead of AI and search evolution so our clients never fall behind their competition.", icon: "💡" },
  ];

  const stats = [
    { number: "120+", label: "Clients Served" },
    { number: "150+", label: "Projects Delivered" },
    { number: "35%", label: "Average Client Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  return (
    <>
      <div className="abt__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="abt__hero">
          <div className="abt__hero_bg"></div>
          <div className="abt__hero_container">
            <h1 className="abt__hero_title">
              We Build Digital Systems That Generate Real Business Growth
            </h1>
            <p className="abt__hero_description">
              ZonzocTech is an AI-powered web development and digital growth agency. We help businesses across the UK and USA build high-converting websites, rank higher on Google, and automate operations with AI — at a fraction of local agency prices.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="abt__who_section">
          <div className="abt__container">
            <h2 className="abt__heading">Our Story</h2>
            <div className="abt__who_content">
              <p className="abt__who_text">
                ZonzocTech started with one simple observation — too many businesses were paying too much for websites that did nothing. Pretty designs with no traffic. No leads. No results.
              </p>
              <p className="abt__who_text">
                We built ZonzocTech to change that. Based in Sri Lanka with a team of engineers, designers and SEO specialists — we combine world-class technical expertise with a deep understanding of what UK and USA businesses actually need to grow online.
              </p>
              <p className="abt__who_text">
                Today we work with startups, e-commerce brands, service businesses and agencies across the UK, USA and Europe — delivering websites, SEO and AI systems that generate measurable, real-world results.
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="abt__different_section">
          <div className="abt__container">
            <h2 className="abt__heading">What We Believe</h2>
            <div className="abt__approach_timeline">
              {beliefs.map((belief, index) => (
                <div key={index} className="abt__approach_step">
                  <div className="abt__step_content">
                    <h3>{belief.title}</h3>
                    <p>{belief.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="abt__services_section">
          <div className="abt__container">
            <h2 className="abt__heading">What We Do</h2>
            <p className="abt__services_note">
              We offer end-to-end digital services — from strategy and design through to development, SEO and AI automation.
            </p>
            <div className="abt__services_grid">
              {services.map((service, index) => (
                <div key={index} className="abt__service_card">
                  <div className="abt__service_number">{service.number}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="abt__clients_section">
          <div className="abt__container">
            <h2 className="abt__heading">Who We Work With</h2>
            <p className="abt__clients_footer">
              We work best with businesses that are serious about digital growth — not just looking for the cheapest option.
            </p>
            <div className="abt__clients_grid">
              {whoWeWorkWith.map((client, index) => (
                <div key={index} className="abt__client_card">
                  <div className="abt__client_icon">✓</div>
                  <p>{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="abt__values_section">
          <div className="abt__container">
            <h2 className="abt__heading">Our Values</h2>
            <div className="abt__values_grid">
              {values.map((value, index) => (
                <div key={index} className="abt__value_card">
                  <div className="abt__value_icon">{value.icon}</div>
                  <h3 className="abt__value_title">{value.title}</h3>
                  <p className="abt__value_desc">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="abt__container">
            <h2>Ready to Work Together?</h2>
            <p>Tell us about your project and we'll put together a free growth plan — no commitment required.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get Free Proposal →</a>
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

export default AboutUs;
