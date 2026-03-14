import React from "react";
import "../styles/googleSearchConsole.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

// Import background image
import benefitBg from "../assets/icons/benifit.jpg";

// Import client SVGs
import sitemarkLogo from "../assets/icons/sitemark.svg";
import jettimeLogo from "../assets/icons/jettime.svg";
import firstQuadrantLogo from "../assets/icons/firstquadrant.svg";
import ignitionLogo from "../assets/icons/ignition.svg";
import madridLogo from "../assets/icons/madrid.svg";
import verifoneLogo from "../assets/icons/verifone.svg";
import worwoxLogo from "../assets/icons/worwox.svg";
import realTralLogo from "../assets/icons/realtral.svg";
import triplaiLogo from "../assets/icons/triplai.svg";
import siteGPTLogo from "../assets/icons/sitegpt.svg";
import { Helmet } from "react-helmet-async";

const GoogleSearchConsole = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Accurate Search Data",
      description:
        "Get precise insights into how Google sees and ranks your website in search results.",
    },
    {
      icon: "🔍",
      title: "Identify & Fix Issues",
      description:
        "Discover crawl errors, indexing problems, and security issues before they impact rankings.",
    },
    {
      icon: "📈",
      title: "Track Performance",
      description:
        "Monitor clicks, impressions, CTR, and position for every page and query.",
    },
    {
      icon: "⚡",
      title: "Improve Page Speed",
      description:
        "Analyze Core Web Vitals and optimize for better user experience and SEO.",
    },
    {
      icon: "🔗",
      title: "Manage Backlinks",
      description:
        "See who links to your site and disavow harmful or spammy backlinks.",
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description:
        "Ensure your site works perfectly on mobile devices with usability reports.",
    },
  ];

  const features = [
    {
      title: "Search Performance Analysis",
      description:
        "Track your website's search visibility, click-through rates, and keyword rankings over time.",
      items: [
        "Query analysis and keyword insights",
        "Page-level performance metrics",
        "Geographic and device breakdowns",
        "Click and impression trends",
      ],
    },
    {
      title: "Index Coverage Monitoring",
      description:
        "Ensure all your important pages are properly indexed and discoverable by Google.",
      items: [
        "Index status reports",
        "Crawl error identification",
        "Sitemap submission and monitoring",
        "URL inspection tool",
      ],
    },
    {
      title: "Technical SEO Audit",
      description:
        "Identify and resolve technical issues that may be holding back your search performance.",
      items: [
        "Core Web Vitals assessment",
        "Mobile usability testing",
        "Structured data validation",
        "Security issue detection",
      ],
    },
    {
      title: "Link Analysis & Management",
      description:
        "Monitor your backlink profile and manage links pointing to your website.",
      items: [
        "External links analysis",
        "Internal linking structure",
        "Disavow toxic backlinks",
        "Link building opportunities",
      ],
    },
  ];

  const clients = [
    { name: "Sitemark", logo: sitemarkLogo },
    { name: "Jettime", logo: jettimeLogo },
    { name: "FirstQuadrant", logo: firstQuadrantLogo },
    { name: "Ignition", logo: ignitionLogo },
    { name: "Madrid", logo: madridLogo },
    { name: "Verifone", logo: verifoneLogo },
    { name: "Worwox", logo: worwoxLogo },
    { name: "RealTral", logo: realTralLogo },
    { name: "Triplai", logo: triplaiLogo },
    { name: "SiteGPT", logo: siteGPTLogo },
  ];

  return (
    <>
      <SEO
        title="Google Search Console Optimization Services"
        description="Professional Google Search Console setup, indexing fixes, performance tracking, and advanced search visibility insights."
      />

      <Navbar />

      <div className="gsc-page">
        {/* Hero Section */}
        <section className="gsc-hero">
          <div className="gsc-hero-container">
            <div className="gsc-badge">
              <span>We are</span>
              <span className="badge-brand">ZONZOCTECH!</span>
            </div>
            <h1 className="gsc-hero-title">Google Search Console Services</h1>
            <p className="gsc-hero-subtitle">
              Loved by 200+ clients across the world
            </p>
          </div>
        </section>

        {/* Client Logos with Infinite Scroll Animation */}
        <section className="gsc-clients-section">
          <div className="gsc-clients-container">
            {/* First row - scrolling left */}
            <div className="clients-track">
              {/* Repeat clients array 3 times for seamless infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={`row1-${index}`} className="client-card">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-icon"
                  />
                </div>
              ))}
            </div>

            {/* Second row - scrolling right */}
            <div className="clients-track">
              {/* Repeat clients array 3 times for seamless infinite scroll */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={`row2-${index}`} className="client-card">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="gsc-about">
          <div className="gsc-about-container">
            <h2 className="section-title">
              What is{" "}
              <span className="consoletextpart">Google Search Console?</span>
            </h2>
            <p className="section-description">
              Google Search Console is a free tool from Google that helps you
              monitor, maintain, and troubleshoot your site's presence in Google
              Search results. It provides valuable insights into how Google
              views your website and helps you optimize your visibility.
            </p>
          </div>
        </section>

        {/* Benefits Section with Background */}
        <section
          className="gsc-benefits"
          style={{
            backgroundImage: `url(${benefitBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="gsc-benefits-container">
            <h2 className="section-title">
              Why Your Business Needs Google Search Console
            </h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="gsc-features">
          <div className="gsc-features-container">
            <h2 className="section-title">
              Our Google Search Console Services
            </h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-list">
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gsc-cta">
          <div className="gsc-cta-container">
            <h2 className="gsc-cta-title">
              Ready to Optimize Your Search Performance?
            </h2>
            <p className="cta-description">
              Let our experts help you unlock the full potential of Google
              Search Console
            </p>
            <button className="gsc-cta-button">
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GoogleSearchConsole;
