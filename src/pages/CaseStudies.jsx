import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CaseStudies.css";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const highlights = [
    { icon: "🎯", text: "The client's challenge" },
    { icon: "💡", text: "The strategy we applied" },
    { icon: "🔧", text: "The technology & tools used" },
    { icon: "📈", text: "The results achieved" },
    { icon: "💼", text: "The impact on business growth" },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Development" },
    { id: "seo", label: "SEO" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "web", label: "Web Development" },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "ai",
      title: "AI-Powered Customer Support Automation",
      client: "SaaS Platform",
      challenge:
        "Manual customer support was consuming 40+ hours weekly, slowing response times and limiting scalability.",
      solution:
        "Built custom AI chatbot integrated with GPT-4 and company knowledge base, automating 70% of common inquiries.",
      results: [
        "70% reduction in support tickets",
        "< 30 second average response time",
        "85% customer satisfaction rate",
        "40 hours/week saved",
      ],
      tags: ["AI", "Automation", "GPT Integration"],
      color: "#8b5cf6",
    },
    {
      id: 2,
      category: "seo",
      title: "SEO Recovery & Traffic Growth",
      client: "B2B Service Company",
      challenge:
        "Website traffic dropped 60% after Google algorithm update. Poor technical SEO and thin content.",
      solution:
        "Complete technical SEO overhaul, content strategy, and topical authority building across 50+ pages.",
      results: [
        "340% increase in organic traffic",
        "12 first-page rankings",
        "180% increase in qualified leads",
        "Recovered in 4 months",
      ],
      tags: ["SEO", "Content Strategy", "Technical SEO"],
      color: "#3b82f6",
    },
    {
      id: 3,
      category: "ecommerce",
      title: "E-commerce Performance Optimization",
      client: "Online Fashion Retailer",
      challenge:
        "Slow site speed (8s load time), 75% cart abandonment rate, poor mobile experience.",
      solution:
        "Complete performance optimization, checkout flow redesign, mobile-first UX improvements.",
      results: [
        "85% faster page load (1.2s)",
        "42% reduction in cart abandonment",
        "65% increase in mobile conversions",
        "2.8x revenue increase",
      ],
      tags: ["E-commerce", "Performance", "UX Design"],
      color: "#ec4899",
    },
    {
      id: 4,
      category: "web",
      title: "Full-Stack Web Application Development",
      client: "Healthcare Startup",
      challenge:
        "Needed HIPAA-compliant patient management system with real-time scheduling and data analytics.",
      solution:
        "Built secure full-stack application with React frontend, Node.js backend, encrypted database, and analytics dashboard.",
      results: [
        "500+ patients managed daily",
        "99.9% uptime maintained",
        "HIPAA compliance certified",
        "80% reduction in admin time",
      ],
      tags: ["Full-Stack", "React", "Security"],
      color: "#10b981",
    },
    {
      id: 5,
      category: "ai",
      title: "Predictive Analytics for Inventory Management",
      client: "E-commerce Distribution",
      challenge:
        "Frequent stockouts and overstock situations causing $200K+ annual losses.",
      solution:
        "Developed AI-powered predictive analytics system using historical data, seasonality, and market trends.",
      results: [
        "92% forecast accuracy",
        "$250K cost savings annually",
        "65% reduction in stockouts",
        "ROI achieved in 6 months",
      ],
      tags: ["AI", "Predictive Analytics", "Data Science"],
      color: "#f59e0b",
    },
    {
      id: 6,
      category: "seo",
      title: "Local SEO Domination",
      client: "Multi-Location Service Business",
      challenge:
        "Competing against national chains with 8 local locations. Zero local visibility.",
      solution:
        "Comprehensive local SEO strategy: Google Business Profile optimization, local content, citations, reviews.",
      results: [
        "Top 3 rankings in all locations",
        "520% increase in local calls",
        "380% increase in direction requests",
        "Ranked #1 for 25+ local keywords",
      ],
      tags: ["Local SEO", "Google Business", "Multi-Location"],
      color: "#06b6d4",
    },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <>
      <SEO
        title="Case Studies | Proven SEO & AI Results"
        description="Explore real-world success stories showcasing measurable growth through AI-driven SEO and advanced web strategies."
      />
      <div className="cs__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="cs__hero">
          <div className="cs__hero_bg"></div>
          <div className="cs__hero_container">
            <h1 className="cs__hero_title">Case Studies</h1>
            <p className="cs__hero_subtitle">
              Real Results from AI, SEO & Full-Stack Development
            </p>
            <p className="cs__hero_description">
              At ZonzocTech, we focus on measurable outcomes, not just
              deliverables. Our case studies showcase how we help businesses
              grow using AI-powered development, SEO, automation, and
              performance optimization.
            </p>
            <p className="cs__hero_tagline">
              Each project is built around a clear business goal — traffic,
              leads, sales, or efficiency.
            </p>
          </div>
        </section>

        {/* What Our Case Studies Show */}
        <section className="cs__highlights_section">
          <div className="cs__container">
            <h2 className="cs__heading">What Our Case Studies Show</h2>
            <p className="cs__highlights_intro">
              Our case studies typically highlight:
            </p>
            <div className="cs__highlights_grid">
              {highlights.map((item, index) => (
                <div key={index} className="cs__highlight_card">
                  <span className="cs__highlight_icon">{item.icon}</span>
                  <p className="cs__highlight_text">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="cs__highlights_footer">
              We believe in transparent, real-world results.
            </p>
          </div>
        </section>

        {/* Filter & Case Studies */}
        <section className="cs__studies_section">
          <div className="cs__container">
            {/* Filters */}
            <div className="cs__filters">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`cs__filter_btn ${activeFilter === filter.id ? "cs__filter_active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="cs__studies_grid">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="cs__study_card"
                  style={{ borderTopColor: study.color }}
                >
                  <div className="cs__study_header">
                    <span className="cs__study_client">{study.client}</span>
                    <div className="cs__study_tags">
                      {study.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="cs__study_tag"
                          style={{
                            backgroundColor: `${study.color}20`,
                            color: study.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="cs__study_title">{study.title}</h3>

                  <div className="cs__study_section">
                    <h4 className="cs__study_label">Challenge</h4>
                    <p className="cs__study_text">{study.challenge}</p>
                  </div>

                  <div className="cs__study_section">
                    <h4 className="cs__study_label">Solution</h4>
                    <p className="cs__study_text">{study.solution}</p>
                  </div>

                  <div className="cs__study_section">
                    <h4 className="cs__study_label">Results</h4>
                    <ul className="cs__study_results">
                      {study.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="cs__study_btn"
                    style={{ backgroundColor: study.color }}
                  >
                    View Full Case Study
                  </button>
                </div>
              ))}
            </div>

            {filteredStudies.length === 0 && (
              <div className="cs__no_results">
                <p>No case studies found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cs__cta_section">
          <div className="cs__container">
            <h2 className="cs__cta_title">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="cs__cta_text">
              Let's discuss how we can help you achieve measurable results with
              AI, SEO, or full-stack development.
            </p>
            <div className="cs__cta_buttons">
              <a href="/contact-us" className="cs__cta_btn cs__cta_primary">
                Start Your Project
              </a>
              <a href="#contact" className="cs__cta_btn cs__cta_secondary">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
