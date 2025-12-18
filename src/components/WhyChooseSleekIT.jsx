import React from 'react';
import '../styles/WhyChoose.css';

// Import your images
import blackHandImage from '../assets/icons/future-empower.png'; // Your black hand/robot image
import growthLineImage from '../assets/icons/earning-line.png'; // Your growth line chart

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        {/* Left Content */}
        <div className="why-choose-left">
          <p className="section-subtitle">Building Future-Ready IT Systems</p>
          <h1 className="section-title">
            Why Choose <span className="highlight-text">Zonzoctech?</span>
          </h1>
          <p className="section-description">
            At Zonzoctech, we don't just build solutions — we predict tomorrow's 
            success with AI-powered innovation
          </p>

          {/* Benefits List */}
          <ul className="benefits-list">
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Free Project Consultation</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Fast Project Delivery</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Affordable Packages</span>
            </li>
            <li className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>No Hidden Charges</span>
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="why-choose-right">
          
          {/* Notification Card - Top Right */}
          <div className="notification-card">
            <div className="notification-header">
              <span className="notification-badge">Project Delivered!</span>
            </div>
            <div className="notification-content">
              <p className="notification-title">Web Development completed</p>
              <p className="notification-time">2h Ago</p>
            </div>
          </div>

          {/* New Client Inquiry Button */}
          <button className="new-client-btn">
            <span className="bell-icon">🔔</span>
            New Client Inquiry!
          </button>

          {/* Stats Card - Bottom Left */}
          <div className="stats-card">
            <div className="stats-header">
              <h3>Client Growth Stats</h3>
            </div>
            <div className="stats-chart">
              <img src={growthLineImage} alt="Growth Chart" className="growth-line" />
            </div>
            <div className="stats-info">
              <h2 className="stats-number">Clients Served: 120</h2>
              <div className="stats-growth">
                <span className="growth-arrow">↑</span>
                <span className="growth-text">35% Growth Last Month</span>
              </div>
            </div>
          </div>

          {/* Main Hero Card - Black Background */}
          {/* Right Content */}
<div className="why-choose-right">
  <img 
    src={blackHandImage} 
    alt="Future Empower" 
    className="hero-main-image"
  />
</div>


        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;