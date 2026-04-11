import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SEOServices.css";
import SEO from "../components/SEO";
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

  return (
    <>
      <SEO
        title="SEO Services That Drive Traffic, Leads & Revenue"
        description="Professional SEO services including technical SEO, content strategy, AI SEO, and link building."
      />

      <div className="seo-page">
        <Navbar />
        <Breadcrumb />

        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-container">
            <h1>SEO Services That Drive Traffic, Leads & Revenue</h1>
            <p className="seo-sub">
              Rank Higher. Get More Leads. Grow Faster.
            </p>
            <p className="seo-desc">
              We help businesses dominate Google and AI-powered search with
              strategies focused on real results — not vanity metrics.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="seo-services">
          <div className="seo-container">
            <h2>Our <span>SEO</span> Services</h2>

            <div className="seo-grid">
              <div className="seo-card left">
                <h3>Technical SEO</h3>
                <ul>
                  <li>Speed Optimization</li>
                  <li>Mobile Optimization</li>
                  <li>Crawl & Index Fixes</li>
                  <li>Structured Data</li>
                </ul>
              </div>

              <div className="seo-card left">
                <h3>On-Page SEO</h3>
                <ul>
                  <li>Keyword Targeting</li>
                  <li>Content Optimization</li>
                  <li>Meta Tags & Headings</li>
                  <li>Internal Linking</li>
                </ul>
              </div>

              <div className="seo-card right">
                <h3>Content SEO</h3>
                <ul>
                  <li>Blog Strategy</li>
                  <li>Landing Pages</li>
                  <li>Topic Clusters</li>
                  <li>Authority Content</li>
                </ul>
              </div>

              <div className="seo-card right">
                <h3>Link Building</h3>
                <ul>
                  <li>Outreach Campaigns</li>
                  <li>Authority Backlinks</li>
                  <li>Niche Links</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="seo-ai">
          <div className="seo-container">
            <h2><span>AI-Enhanced</span> SEO</h2>
            <p className="aiseo-para">
              We use AI to accelerate SEO performance with smarter data-driven strategies.
            </p>

            <div className="seo-ai-grid">
              <div>Keyword Clustering</div>
              <div>Search Intent Prediction</div>
              <div>Content Scaling</div>
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="seo-why">
          <div className="seo-container">
            <h2>Why Choose <span>Us ?</span></h2>

            <div className="seo-why-grid">
              <div>Proven SEO for US & UK markets</div>
              <div>Transparent reporting</div>
              <div>Focus on leads & revenue</div>
              <div>AI + Traditional SEO combined</div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="seo-results">
          <div className="seo-container">
            <h2 className="seoresults"><span>Results</span> You Can Expect</h2>

            <div className="seo-results-grid">
              <div>Increase Traffic</div>
              <div>Higher Rankings</div>
              <div>More Leads</div>
              <div>Long-term Growth</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="seo-cta">
          <h2>Get Your Free SEO Audit</h2>
          <p>We’ll show you exactly what’s holding your site back.</p>
          <button className="seoaudit-btn">
            Free SEO Audit
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEOServices;