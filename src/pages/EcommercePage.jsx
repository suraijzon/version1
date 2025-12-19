import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/EcommercePage.css";

const EcommercePage = () => {
  return (
    <>
      <Navbar />

      <main className="ecom-page">

        {/* Hero Section */}
        <section className="ecom-hero">
          <div className="ecom-container">
            <h1>E-commerce Development & Optimization Services</h1>
            <p className="ecom-hero-subtitle">
              High-Performance E-commerce Development & Optimization That Increases Sales
            </p>
            <p>
              We provide e-commerce development and optimization services designed to help online stores grow revenue,
              improve user experience, and scale confidently. From custom store development to performance,
              conversion, and automation enhancements, we build e-commerce platforms that are fast, secure, and optimized for sales.
            </p>
            <a href="#audit" className="ecom-btn-primary">👉 Get a Free E-commerce Growth Audit</a>
          </div>
        </section>

        {/* What is E-commerce Dev & Optimization */}
        <section className="ecom-section ecom-bg-light">
          <div className="ecom-container">
            <h2>What Is E-commerce Development & Optimization?</h2>
            <p>
              E-commerce development and optimization involves building and improving online stores so they load faster,
              convert better, and scale efficiently. It goes beyond design — focusing on performance, checkout flow,
              automation, SEO, and customer experience. A well-optimized store directly impacts revenue.
            </p>
          </div>
        </section>

        {/* Who is This Service For */}
        <section className="ecom-section">
          <div className="ecom-container">
            <h2>Who Is This Service For?</h2>
            <ul className="ecom-bullet-list">
              <li>New e-commerce brands launching online</li>
              <li>Existing stores with low conversion rates</li>
              <li>Businesses facing slow site speed or checkout issues</li>
              <li>Brands needing custom features or integrations</li>
              <li>E-commerce owners scaling operations</li>
            </ul>
            <p>If your store gets traffic but not sales, optimization is the missing link.</p>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="ecom-section ecom-bg-light">
          <div className="ecom-container">
            <h2>Problems We Solve for E-commerce Businesses</h2>
            <ul className="ecom-bullet-list">
              <li>Low conversion rates</li>
              <li>Cart abandonment</li>
              <li>Slow page load times</li>
              <li>Poor mobile experience</li>
              <li>Limited automation</li>
              <li>SEO and visibility issues</li>
            </ul>
            <p>We turn underperforming stores into revenue-generating platforms.</p>
          </div>
        </section>

        {/* Our Services */}
        <section className="ecom-section">
          <div className="ecom-container">
            <h2>Our E-commerce Development & Optimization Services</h2>
            <ul className="ecom-bullet-list">
              <li>Custom E-commerce Website Development</li>
              <li>Platform Setup & Customization</li>
              <li>Checkout & Conversion Optimization</li>
              <li>Speed & Performance Improvements</li>
              <li>Mobile-First UX Design</li>
              <li>Product Page Optimization</li>
              <li>AI-Powered Recommendations & Automation</li>
              <li>Payment, Shipping & Third-Party Integrations</li>
              <li>SEO for E-commerce Stores</li>
              <li>Ongoing Maintenance & Support</li>
            </ul>
          </div>
        </section>

        {/* Platforms We Work With */}
        <section className="ecom-section ecom-bg-light">
          <div className="ecom-container">
            <h2>Platforms We Work With</h2>
            <ul className="ecom-bullet-list">
              <li>Custom e-commerce solutions</li>
              <li>Flexible CMS-based stores</li>
              <li>Headless e-commerce architectures</li>
              <li>API-driven integrations</li>
            </ul>
            <p>(We select platforms based on your business goals — not limitations.)</p>
          </div>
        </section>

        {/* Comparison */}
        <section className="ecom-section">
          <div className="ecom-container">
            <h2>E-commerce Optimization vs Basic Store Setup</h2>
            <div className="ecom-table-comparison">
              <table>
                <thead>
                  <tr>
                    <th>Basic Store Setup</th>
                    <th>Optimized E-commerce Store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Just online</td>
                    <td>Built to sell</td>
                  </tr>
                  <tr>
                    <td>Slow pages</td>
                    <td>Fast & responsive</td>
                  </tr>
                  <tr>
                    <td>Generic UX</td>
                    <td>Conversion-focused UX</td>
                  </tr>
                  <tr>
                    <td>Manual processes</td>
                    <td>Automated workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="ecom-section ecom-bg-light">
          <div className="ecom-container">
            <h2>Our E-commerce Development Process</h2>
            <ol className="ecom-process-list">
              <li><strong>Store & Funnel Analysis:</strong> Evaluate your store, users, and purchase journey.</li>
              <li><strong>Design & Architecture:</strong> Design conversion-focused layouts and technical structure.</li>
              <li><strong>Development & Optimization:</strong> Build features, improve performance, implement automation.</li>
              <li><strong>Testing & QA:</strong> Test checkout flow, speed, and real-world usability.</li>
              <li><strong>Launch & Growth Support:</strong> Monitor, optimize, and scale post-launch.</li>
            </ol>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="ecom-section">
          <div className="ecom-container">
            <h2>Why Choose ZonzocTech for E-commerce Development?</h2>
            <ul className="ecom-bullet-list">
              <li>Revenue-driven development approach</li>
              <li>Strong UX & performance expertise</li>
              <li>AI-powered optimization capabilities</li>
              <li>Secure & scalable solutions</li>
              <li>Long-term growth mindset</li>
            </ul>
            <p>We don’t just build online stores — we build e-commerce engines.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="ecom-section ecom-bg-light">
          <div className="ecom-container">
            <h2>Frequently Asked Questions</h2>
            <ul className="ecom-faq-list">
              <li><strong>Can you improve my existing e-commerce store?</strong> Yes, we optimize existing stores for performance, UX, and conversions.</li>
              <li><strong>Do you support AI features in e-commerce?</strong> Yes, including AI recommendations, automation, and personalization.</li>
              <li><strong>Is SEO included?</strong> Yes, following e-commerce SEO best practices.</li>
              <li><strong>Do you provide ongoing support?</strong> Yes, with continuous optimization and maintenance services.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="ecom-cta" id="audit">
          <div className="ecom-container">
            <h2>Ready to Grow Your E-commerce Revenue?</h2>
            <p>If your online store needs better performance, higher conversions, or scalable development, let’s talk.</p>
            <a href="#audit" className="ecom-btn-primary">👉 Get a Free E-commerce Growth Audit</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default EcommercePage;
