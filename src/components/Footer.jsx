import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';
import siteLogo from '../assets/icons/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesLinks = [
    'AI Web Application Development',
    'AI Software Development',
    'Full-Stack Web Development',
    'AI-Powered Website Design',
    'AI Automation & GPT Integration',
    'SEO & AI Search Optimization',
    'E-commerce Development'
  ];

  const knowledgebaseLinks = [
    'Websites That Generate Leads', 'AI Chatbots & Virtual Assistants', 'Business Process Automation',
     'E-commerce Growth Optimization',
     'Search Visibility & Traffic Growth',
     'Website Speed & Performance Fixes',
  ];

  const companyLinks = [
    'Website Growth Guides','AI for Business',
    'Technical SEO Knowledgebase','Case Studies & Results',
    'AI SEO & Answer Engine Optimization'
  ];

  const exploreLinks = [
    'About ZonzocTech','How We Work',
    'Careers','Contact Us',
    'Privacy Policy','Terms of Service'
  ];

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-top-container">

          {/* LEFT SIDE — STATS + BUTTON */}
         

            {/* BUTTON UNDER BOTH */}
            

          {/* RIGHT SIDE — CTA BOX */}
         </div>
        
        {/* Full-width line */}
        
      </div>
      

      {/* MAIN FOOTER CONTENT  */}
      <div className="footer-main">

        <div className="footer-container">

          {/* Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={siteLogo} alt="techco" className="logo-text-img" />
            </div>

            <div className="footer-contact-box">
              <h4 className="contact-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h4>

              <a href="tel:+941234567890" className="phone-button"><i class="fa-brands fa-whatsapp"></i>
                +94 74 030 9534
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-column">
            <h4 className="footer-column-title">Core Services</h4>
            <ul className="footer-links">
              {servicesLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Solutions by Need</h4>
            <ul className="footer-links">
              {knowledgebaseLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Insights & Resources</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
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
          borderTop: '1px solid rgba(255, 255, 255, 1)',
          margin: '20px 0',
          width: '100%'
        }} />
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">Zonzoctech© 2020-2025</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-icon"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;