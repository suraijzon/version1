import React from 'react';
import '../styles/whoweare2.css';
import robohand from "../assets/icons/robohand.jpg"; 

const WhoWeAreSection = () => {
  const benefits = [
    '11+ Years of Industry Experience',
    'End-to-End Digital Services – Web, SEO & AI',
    'Custom, Scalable Solutions',
    'Transparent Pricing & Clear Communication',
    'Reliable Ongoing Support & Maintenance'
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">

        {/* Top Banner Section */}
        <div className="whoweare-banner">
          <div className="banner-content">
            <h2 className="banner-title">
              Who We Are & Why Choose <span className="highlight">Zonzoctech</span>
            </h2>
            <p className="banner-description">
              At Zonzoctech, we're more than just a digital agency—we're your growth partner.
              With over a decade of experience, we specialize in building modern websites,
              boosting visibility through smart SEO, and integrating cutting-edge AI technologies
              to future-proof your business.
            </p>
          </div>
        </div>

        {/* Two Column Section - Image & Benefits */}
        <div className="whoweare-split-section">

          {/* Left - Image */}
          <div className="split-left">
            <div className="image-wrapper">
              <img src={robohand} alt="AI Technology" className="section-image" /> 
            </div>
          </div>

          {/* Right - Mission & Benefits */}
          <div className="split-right">
            <p className="mission-text">
              We're driven by a client-first philosophy, a passion for innovation, and a mission
              to deliver real, measurable results.
            </p>

            <h3 className="benefits-heading">Why Businesses Trust Us</h3>

            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <span className="benefit-dot">●</span>
                  <span className="benefit-text">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Wrapper div for centering */}
            <div className="button-wrapper">
              <button className="all-works-btn">
                <span className="btn-text">
                  <span>START YOUR PROJECT TODAY ↗</span>
                  <span>START YOUR PROJECT TODAY ↗</span>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;