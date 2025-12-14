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
        title: 'Organic Search',
        items: [
          'SEO Services',
          'Enterprise SEO Services',
          'Local SEO Services',
          'Keyword Research',
          'Competitor Analysis',
          'SEO Audits'
        ]
      },
      {
        title: 'SEO Tools',
        items: [
          'Google Search Console',
          'Google Merchant Center',
          'Google Analytics',
          'Google Ads',
          'Rank Tracking Tools'
        ]
      },
      {
        title: 'Ecommerce SEO',
        items: [
          'Ecommerce SEO Services',
          'Ecommerce PPC Services',
          'Shopping Feed Automation',
          'Product Feed Optimization',
          'Conversion Rate Optimization'
        ]
      }
    ],
    ux: [
      {
        title: 'UI/UX Design',
        items: [
          'User Interface Design',
          'User Experience Design',
          'Wireframing & Prototyping',
          'Design Systems',
          'Usability Testing',
          'Interaction Design'
        ]
      },
      {
        title: 'Web Development',
        items: [
          'Frontend Development',
          'Backend Development',
          'Full Stack Development',
          'CMS Development',
          'Web Applications',
          'API Integration'
        ]
      },
      {
        title: 'Interactive Design',
        items: [
          'Animation & Motion',
          'Microinteractions',
          'Responsive Design',
          'Mobile-First Design',
          'Progressive Web Apps',
          'Accessibility Standards'
        ]
      }
    ],
    ai: [
      {
        title: 'AI Services',
        items: [
          'Machine Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Predictive Analytics',
          'AI Consulting',
          'AI Strategy'
        ]
      },
      {
        title: 'AI Integration',
        items: [
          'Chatbot Development',
          'AI-Powered Search',
          'Recommendation Systems',
          'Automated Workflows',
          'Smart Analytics',
          'AI API Integration'
        ]
      },
      {
        title: 'Automation',
        items: [
          'Process Automation',
          'Marketing Automation',
          'Data Processing',
          'Workflow Optimization',
          'Smart Scheduling',
          'Intelligent Reporting'
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

      <button className="service-btn">
        <span className="btn-text">
          <span>NEED TO GET THE SERVICE?</span>
          <span>NEED TO GET THE SERVICE?</span>
        </span>
        <span className="btn-arrow">↗</span>
      </button>
    </section>
  );
};

export default SolutionSection;
