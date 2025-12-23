import React, { useState } from 'react';
import '../styles/solution.css';

import bgImage from '../assets/icons/bg.jpeg';   // ✅ Correct image path

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const sectionStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.5) 0%, rgba(26, 41, 66, 0.55) 100%), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  const tabs = [
    { id: 'ai', label: 'AI & Technology' },
    { id: 'ux', label: 'UX & Interactive' },
    { id: 'seo', label: 'SEO Services' }
  ];

  const services = {
    seo: [
      {
        title: 'Organic Search & SEO Strategy',
        items: [
          'SEO Strategy & Consulting',
          'Keyword Research & Mapping',
          'Competitor & Market Analysis',
          'On-Page & Content Optimization',
          'Enterprise SEO Solutions',
        ]
      },
      {
        title: 'SEO Analytics & Platforms',
        items: [
          'Google Search Console Setup & Insights',
          'Google Analytics & GA4 Tracking',
          'Rank Tracking & Performance Monitoring',
          'Google Merchant Center Management',
          'Google Ads & Search Campaign Support'
        ]
      },
      {
        title: 'Ecommerce SEO & Growth',
        items: [
          'Ecommerce SEO Strategy',
          'Product & Shopping Feed Optimization',
          'Shopping Feed Automation',
          'Ecommerce PPC Management',
          'Conversion Rate Optimization (CRO)'
        ]
      }
    ],
    ux: [
      {
        title: 'UI/UX Strategy & Design',
        items: [
          'User Interface (UI) Design',
          'User Experience (UX) Design',
          'Wireframing & Prototyping',
          'Design Systems & Style Guides',
          'Usability & User Testing',
        ]
      },
      {
        title: 'Web Development Services',
        items: [
          'Frontend Development',
          'Backend Development',
          'Full Stack Development',
          'Web Application Development',
          'API & Third-Party Integration',
        ]
      },
      {
        title: 'Interactive & Experience Design',
        items: [
          'Animation & Motion Design',
          'Micro-Interactions',
          'Responsive & Mobile-First Design',
          'Accessibility & WCAG Compliance',
          'Performance-Focused UX',
        ]
      }
    ],
    ai: [
      {
        title: 'AI Development Services',
        items: [
          'Machine Learning Solutions',
          'Custom AI Model Development',
          'Computer Vision',
          'Predictive & Smart Analytics',
          'Natural Language Processing (NLP)',
        ]
      },
      {
        title: 'AI Integration & Systems',
        items: [
          'LLM & AI API Integration',
          'AI Agents & Autonomous Systems',
          'AI-Powered Search',
          'Recommendation Systems',
          'Chatbot & Virtual Assistant Development',
        ]
      },
      {
        title: 'Automation Solutions',
        items: [
          'Business Process Automation',
          'Marketing Automation',
          'Data Processing Automation',
          'Workflow Optimization',
          'Smart Scheduling & Reporting',
        ]
      }
    ]
  };

  return (
    <section className="solution-section" style={sectionStyle}>
      <div className="solution-hero">
        <h1 className="solution-title">
          We're the Solution You've Been Searching For...
        </h1>
        <p className="solution-subtitle">
          From SEO and AI to custom web design, we offer tailored strategies
          <br />
          that help brands grow smarter, faster, and stronger in today's digital landscape.
        </p>

        {/* Tab Navigation */}
        <div className="solution-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {services[activeTab].map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, idx) => (
                <li key={idx} className="service-item">
                  <span className="service-arrow">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/*<button className="service-btn">
        <span className="btn-text">
          <span>NEED TO GET THE SERVICE?</span>
          <span>NEED TO GET THE SERVICE?</span>
        </span>
        <span className="btn-arrow">↗</span>
      </button>*/}
    </section>
  );
};

export default SolutionSection;
