'use client';
import React from 'react';
import '../styles/WhyChoose.css';


const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        {/* Left Content */}
        <div className="why-choose-left">
          <h1 className="section-title">
            Why Businesses in the UK & USA Choose <span className="highlight-text">ZonzocTech</span>
          </h1>
          <p className="section-description">
            We combine Silicon Valley-level technical expertise with offshore efficiency — delivering premium quality at a fraction of agency prices in the UK or USA.
          </p>

          <p className="section-subtitle">What Makes Us Different</p>

          {/* Benefits List */}
          <ul className="benefits-list">
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>
                <strong>AI-First Approach</strong>
                <br />
                Every solution we build leverages AI where it matters — faster delivery, smarter automation, better results.
              </span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>
                <strong>Full-Stack Expertise</strong>
                <br />
                One team covering design, development, SEO and AI — no outsourcing, no handoffs, no excuses.
              </span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>
                <strong>Transparent Pricing</strong>
                <br />
                No hidden fees. No surprise invoices. Just honest, upfront pricing for every project.
              </span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>
                <strong>Dedicated Communication</strong>
                <br />
                Direct access to your project team via WhatsApp, email or video call — across UK & USA time zones.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="why-choose-right">
          
          {/* Stats Card */}
          <div className="stats-card">
            <div className="stats-info">
              <h2 className="stats-number">120+ Clients Served</h2>
              <div className="stats-growth">
                <span className="growth-arrow">↑</span>
                <span className="growth-text">35% Average Client Growth</span>
              </div>
            </div>
            <div className="stats-info">
              <h2 className="stats-number">150+ Projects Delivered</h2>
              <div className="stats-growth">
                <span className="growth-arrow">★</span>
                <span className="growth-text">4.9★ Client Rating</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;