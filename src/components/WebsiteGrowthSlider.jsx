import React, { useState, useEffect } from 'react';
import '../styles/WebsiteGrowthSlider.css';

const WebsiteGrowthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Build a Website That Drives Growth",
      subtitle: "AI-powered design, SEO, and automation that turn traffic into leads and sales.",
      mainMetric: "$78,502",
      mainLabel: "Sales Growth This Month",
      percentage: "68%",
      conversionRate: "4.2%",
      avgOrder: "$125",
      stats: [
        { icon: "🛡️", label: "Trusted by", value: "Top Businesses & Brands" },
        { icon: "📈", label: "+61%", value: "Avg. Increase in Conversions" },
        { icon: "⚡", label: "+74%", value: "Faster Load Speed" }
      ]
    },
    {
      title: "Transform Your Online Presence",
      subtitle: "Data-driven strategies that maximize ROI and accelerate business growth.",
      mainMetric: "$92,340",
      mainLabel: "Revenue Generated This Quarter",
      percentage: "84%",
      conversionRate: "5.8%",
      avgOrder: "$157",
      stats: [
        { icon: "🎯", label: "Proven by", value: "100+ Success Stories" },
        { icon: "💰", label: "+89%", value: "Higher Revenue Per Visit" },
        { icon: "🚀", label: "+92%", value: "Better SEO Rankings" }
      ]
    },
    {
      title: "Scale Your Business Online",
      subtitle: "Complete digital solutions designed to convert visitors into loyal customers.",
      mainMetric: "$156,789",
      mainLabel: "Total Revenue Impact",
      percentage: "127%",
      conversionRate: "6.4%",
      avgOrder: "$198",
      stats: [
        { icon: "✨", label: "Delivered by", value: "Award-Winning Team" },
        { icon: "📊", label: "+156%", value: "Boost in Lead Quality" },
        { icon: "⏱️", label: "3x", value: "Faster Time to Market" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="text-content">
          <h1 className="main-title">{currentSlideData.title}</h1>
          <p className="subtitle">{currentSlideData.subtitle}</p>
        </div>

        <div className="dashboard-container">
          <div className="floating-elements">
            <div className="float-icon float-1">📱</div>
            <div className="float-icon float-2">💼</div>
            <div className="float-icon float-3">🤖</div>
            <div className="float-icon float-4">📧</div>
            <div className="float-icon float-5">⚙️</div>
          </div>

          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-address"></div>
            </div>

            <div className="dashboard-content">
              <div className="metric-card main-metric">
                <h3>Sales Growth</h3>
                <div className="metric-value">
                  <span className="amount">{currentSlideData.mainMetric}</span>
                  <span className="percentage positive">
                    ↑ {currentSlideData.percentage}
                  </span>
                </div>
                <p className="metric-label">{currentSlideData.mainLabel}</p>
              </div>

              <div className="metrics-grid">
                <div className="metric-card small">
                  <h4>Conversion Rate</h4>
                  <div className="metric-value">{currentSlideData.conversionRate}</div>
                  <div className="mini-chart"></div>
                </div>
                <div className="metric-card small">
                  <h4>Avg. Order Value</h4>
                  <div className="metric-value">{currentSlideData.avgOrder}</div>
                  <div className="mini-chart trend-up"></div>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-bars">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '55%'}}></div>
                  <div className="bar" style={{height: '45%'}}></div>
                  <div className="bar" style={{height: '70%'}}></div>
                  <div className="bar" style={{height: '85%'}}></div>
                  <div className="bar" style={{height: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-mockup">
            <div className="mobile-screen">
              <div className="mobile-header"></div>
              <div className="mobile-chart"></div>
              <button className="mobile-cta">Add to Cart</button>
            </div>
          </div>

          <div className="ai-badge">
            <span className="ai-icon">🤖</span>
            <span>AI</span>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="btn-primary">Get a Free Website Growth Audit</button>
        </div>

        <div className="stats-container">
          {currentSlideData.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot-button ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteGrowthSlider;