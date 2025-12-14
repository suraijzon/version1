import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';
import siteLogo from '../assets/icons/site_logo_2.svg';

const Footer = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesLinks = [
    'Digital Marketing Services',
    'SEO Services',
    'PPC Services',
    'Content Marketing Services',
    'Social Media Services',
    'Web Design Services',
    'Digital Advertising Services'
  ];

  const knowledgebaseLinks = [
    'Digital Marketing', 'SEO', 'PPC', 'Content Marketing',
    'Social Media', 'Web Design', 'Amazon'
  ];

  const companyLinks = [
    'About Us','Careers','Community Impact',
    'Contact Us','Industries We Serve','Locations','Phishing Scam Alert'
  ];

  const exploreLinks = [
    'Digital Marketing Trends','Generative Engine Optimization',
    'HTTP Status Codes','SEO in Digital Marketing',
    'SEO vs. SEM','Return on Ad Spend','Revenue Marketing Playbook'
  ];

  return (
    <footer className="footer">

      {/* ========== TOP SECTION ========== */}
      <div className="footer-top">
        <div className="footer-top-container">

          {/* LEFT SIDE — STATS + BUTTON */}
          <div className="stats-column">

            <div className="stats-section">
              <div className="stat-item">
                <h3 className="stat-number">150+</h3>
                <p className="stat-label">COMPLETED PROJECTS</p>
              </div>

              <div className="stat-item">
                <h3 className="stat-number">12</h3>
                <p className="stat-label">YEARS OF EXPERIENCE</p>
              </div>
            </div>

            {/* BUTTON UNDER BOTH */}
            <div className="contact-btn-wrapper">
              <button onClick={handleContactUsClick} className="footer-contact-btn">
                <i className="fa-solid fa-envelope"></i>
                Contact Us
              </button>
            </div>

          </div>

          {/* RIGHT SIDE — CTA BOX */}
          <div className="cta-box">
            <h3 className="cta-title">Discover how we can help your business grow</h3>

            <div className="cta-form">
              <input 
                type="url" 
                placeholder="Enter your website" 
                className="cta-input"
              />
              <button className="cta-button">Send me a Proposal!</button>
            </div>
          </div>

        </div>
        
        {/* Full-width line */}
        <div className='linetop'>
          <hr style={{
            border: 'none',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            margin: '20px 0',
            width: '100%'
          }} />
        </div>
      </div>
      

      {/* MAIN FOOTER CONTENT  */}
      <div className="footer-main">

        <div className="footer-container">

          {/* Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={siteLogo} alt="techco" className="logo-text-img" />
            </div>

            <p className="footer-tagline">
              Celebrating 25+ Years of Digital Marketing Excellence
            </p>

            <div className="footer-contact-box">
              <h4 className="contact-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h4>

              <a href="tel:+941234567890" className="phone-button">
                +94 123 4567 8978
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-column">
            <h4 className="footer-column-title">Services</h4>
            <ul className="footer-links">
              {servicesLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Knowledgebase</h4>
            <ul className="footer-links">
              {knowledgebaseLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Explore</h4>
            <ul className="footer-links">
              {exploreLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Full-width line before footer bottom */}
      <div className='line'>
        <hr style={{
          border: 'none',
          borderTop: '2px solid rgba(255, 255, 255,)',
          margin: '20px 0',
          width: '100%'
        }} />
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">Zonzoctech© 2010-2025</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;