import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/logo.png";
import siteLogo from "../assets/icons/site_logo_2.svg";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile nav open
  const [mobileDropdown, setMobileDropdown] = useState(null); // which dropdown is open on mobile
  const [activeDropdown, setActiveDropdown] = useState(null); // which dropdown is active on desktop (opened by hover/click)
  const navRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  // Desktop: open dropdown on hover (but do NOT auto-close on leave)
  const handleMouseEnter = (id) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(id);
    }
  };

  // Mobile: toggle dropdown by id
  const toggleMobileDropdown = (id) => {
    if (window.innerWidth <= 1024) {
      setMobileDropdown((prev) => (prev === id ? null : id));
    }
  };

  // Click on a dropdown button
  // Desktop: open (do NOT toggle close)
  // Mobile: toggle
  const handleDropdownButtonClick = (id) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(id);
    } else {
      toggleMobileDropdown(id);
    }
  };

  const handleClientLogin = () => {
    // optionally ensure logout before login page
    logout();
    navigate("/login");
  };

  // Close desktop dropdown when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth > 1024) {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setActiveDropdown(null);
        }
      }
    };

    const handleResize = () => {
      // Reset states on resize to avoid stuck states
      if (window.innerWidth > 1024) {
        setMobileDropdown(null);
      } else {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar">
      {/* Top badge */}
<div className="top-badge">
  <div className="top-badge-left">
    <span>PROJECTS COMPLETED</span>
    <span className="highlight">150+</span>
  </div>
  
  <div className="top-badge-right">
    <button onClick={handleClientLogin} className="client-login">
      Client Login
    </button>
    
    <div className="contact-proposal">
      <img src={phoneIcon} alt="phone" />
      <a href="mailto:info@zonzoctech.com" className="email-link">
        info@zonzoctech.com
      </a>
    </div>
  </div>
</div>

      <div className="nav-container" ref={navRef}>
  {/* Logo and tagline */}
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className="nav-logo">
      <img src={logo} alt="Zonzoctech Logo" className="logo-desktop" />
      <img src={siteLogo} alt="Zonzoctech Logo" className="logo-mobile" />
    </div>

    <div className="nav-tagline">
      <div>Web Intelligences</div>
      <div>That Drives</div>
      <div>Revenue®</div>
    </div>
  </div>

        {/* Nav links */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {/* Dropdown: AI & Technology (id: 3) */}
          <div
            className={`dropdown ${mobileDropdown === 3 ? "open" : ""} ${activeDropdown === 3 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(3)}
              aria-expanded={activeDropdown === 3 || mobileDropdown === 3}
            >
              AI & Technology ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>AI Services</h4>
                <a href="/">AI & GPT Integration</a>
                <a href="/ai-seo">AI SEO Services</a>
                <a href="/">AI Digital Marketing Services</a>
                <a href="/">AI Chatbot Development</a>
                <a href="/">Predictive Analytics</a>
                <a href="/">AI Consulting</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Web Design & Development</h4>
                <a href="/">AI-Powered Website Design</a>
                <a href="/">AI-Based User Personalization</a>
                <a href="/">AI Landing Page Generators</a>
                <a href="/">GPT-Integrated Forms & Live Chat</a>
                <a href="/">Smart Content Recommendations</a>
                <a href="/">AI-Based UX Testing & Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Integrations & Automation</h4>
                <a href="/">Custom GPT-4 App Development</a>
                <a href="/">AI Workflow Automation</a>
                <a href="/">AI CRM Integrations</a>
                <a href="/">Email Marketing Automation with AI</a>
                <a href="/">Voice & Image Recognition Features</a>
                <a href="/">AI-Powered Scheduling Tools</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Data & Analytics</h4>
                <a href="/">Closed Loop Analytics</a>
                <a href="/">Real-Time AI Reporting Dashboards</a>
                <a href="/">Customer Behavior Prediction</a>
                <a href="/">Data-Driven Marketing Automation</a>
                <a href="/">AI Lead Scoring Models</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Learn & <br />Resources</span>
                <span className="last-column-text3"> _______________</span>
                <span className="last-column-text3">What is AI Marketing?</span>
                <span className="last-column-text3">How to Write AI Prompts</span>
                <span className="last-column-text3">How to Track AI Search Visibility</span>
                <span className="last-column-text3">What is GPT Integration?</span>
                <span className="last-column-text3">AI vs Traditional Development: What's Better?</span>
              </div>
            </div>
          </div>

          {/* Dropdown: UX & Interactive (id: 2) */}
          <div
            className={`dropdown ${mobileDropdown === 2 ? "open" : ""} ${activeDropdown === 2 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(2)}
              aria-expanded={activeDropdown === 2 || mobileDropdown === 2}
            >
              UX & Interactive ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Design</h4>
                <a href="/">Website Design</a>
                <a href="/">Rapid Web Design</a>
                <a href="/">Ecommerce Website Design</a>
                <a href="/">Custom Website Design</a>
                <a href="/">Business Website Design</a>
              </div>

              <div className="dropdown-column">
                <h4>Development</h4>
                <a href="/">WordPress Website Development</a>
                <a href="/">Shopify Website Development</a>
                <a href="/">WooCommerce Website Development</a>
                <a href="/">MERN Stack Website Development</a>
                <a href="/">Custom Web App Development</a>
                <a href="/">AI & GPT Integration</a>
              </div>

              <div className="dropdown-column">
                <h4>Hosting & Security</h4>
                <a href="/">Web Hosting</a>
                <a href="/">Website Migration</a>
                <a href="/">Website Security</a>
                <a href="/">Performance Optimization</a>
                <a href="/">SSL & Backup Solutions</a>
              </div>

              <div className="dropdown-column">
                <h4>Challenges We Solve</h4>
                <a href="/">My Website Doesn't Drive Leads</a>
                <a href="/">My Website Traffic Is Going Down</a>
                <a href="/">My Website Isn't Driving ROI</a>
                <a href="/">My Website Isn't Showing Up on Google</a>
                <a href="/">My Agency Isn't Driving Results</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column2">Zonzo<br />ctech</span>
                <span className="last-column-text2"><br></br>View out all the the live clients designs which we have completed recently.</span>
                <button className="last-column-button"> View Design Portfolio</button>
              </div>
            </div>
          </div>

          {/* Dropdown: SEO & Lead Generation (id: 1) */}
          <div
            className={`dropdown ${mobileDropdown === 1 ? "open" : ""} ${activeDropdown === 1 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(1)}
              aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
            >
              SEO & Lead Generation ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>SEO Services</h4>
                <a href="/">SEO Audit</a>
                <a href="/">Enterprice SEO Services</a>
                <a href="/">Local SEO Services</a>
                <a href="/">Keyword Research</a>
                <a href="/">Competitor Analysis</a>
                <a href="/">SEO Audits</a>
              </div>

              <div className="dropdown-column">
                <h4>SEO Tools</h4>
                <a href="/services/seo/google-search-console">Google Search Console</a>
                <a href="/">Google Merchant Center</a>
                <a href="/">Google Analytics</a>
                <a href="/">Google Ads</a>
                <a href="/">Rank Tracking Tools</a>
              </div>

              <div className="dropdown-column">
                <h4>Ecommerce SEO</h4>
                <a href="/">Ecommerce SEO Services</a>
                <a href="/">Ecommerce PPC Services</a>
                <a href="/">Shopping Feed Automation</a>
                <a href="/">Product Feed Optimization</a>
                <a href="/">Conversion Rate Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>Discover</h4>
                <a href="/">Our SEO Results</a>
                <a href="/">SEO Case Studies</a>
                <a href="/">SEO Performance Tracking</a>
                <a href="/">SEO Reporting Dashboards</a>
                <a href="/">Client Success Stories</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column">198%</span>
                <span className="last-column-text">Increase in <br />organic <br />transaction</span>
                <button className="last-column-button"> Read Our Case Study</button>
              </div>
            </div>
          </div>

          {/* Dropdown: Who We Are (id: 4) */}
          <div
            className={`dropdown ${mobileDropdown === 4 ? "open" : ""} ${activeDropdown === 4 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(4)}
              aria-expanded={activeDropdown === 4 || mobileDropdown === 4}
            >
              Who We Are ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Who We Are</h4>
                <a href="/">Our Approach</a>
                <a href="/">About Us</a>
                <a href="/">Careers (We Are Hiring!)</a>
                <a href="/">Contact Info</a>
                <a href="/">Zonzoctech Reviews</a>
                <a href="/">Our Portfolio</a>
              </div>

              <div className="dropdown-column">
                <h4>What Drives Us</h4>
                <a href="/">Our Mission & Vision</a>
                <a href="/">Company Values</a>
                <a href="/">Innovation Culture</a>
                <a href="/">Client-First Philosophy</a>
                <a href="/">Team Zonzoctech</a>
              </div>

              <div className="dropdown-column">
                <h4>Zonzoctech</h4>
                <a href="/">Pricing Guides</a>
                <a href="/">How Much Should a Website Cost?</a>
                <a href="/">How Much Does PPC Cost?</a>
                <a href="/">Email Marketing Pricing</a>
                <a href="/">Social Media Pricing</a>
                <a href="/">How Much Does SEO Cost?</a>
                <a href="/">Local SEO Pricing</a>
              </div>

              <div className="dropdown-column">
                <h4>Content Library</h4>
                <a href="/">Our Blog</a>
                <a href="/">SEO Checker Report</a>
                <a href="/">Free Keyword Suggestion Tool</a>
                <a href="/">Fix Your Funnel</a>
                <a href="/">FAQFox</a>
                <a href="/">View All Tools</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column4">#1 Best Place to Work</span>
                <button className="last-column-button"> View Careers</button>
              </div>
            </div>
          </div>

          {/* Contact button */}
          <button className="contact-btn">Get a Proposal</button>

          {open && (
            <button className="mobile-client-login-inside" onClick={handleClientLogin}>
              Client Login
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setOpen((s) => !s)}>
          <span className={open ? "bar rotate1" : "bar"}></span>
          <span className={open ? "bar hide" : "bar"}></span>
          <span className={open ? "bar rotate2" : "bar"}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
