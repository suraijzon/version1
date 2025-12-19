import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/logo.png";
import siteLogo from "../assets/icons/site_logo_2.svg";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ExpertPopup from "./ExpertPopup";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMouseEnter = (id) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(id);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileDropdown = (id) => {
    if (window.innerWidth <= 1024) {
      setMobileDropdown((prev) => (prev === id ? null : id));
    }
  };

  const handleDropdownButtonClick = (id) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(id);
    } else {
      toggleMobileDropdown(id);
    }
  };

  const handleClientLogin = () => {
    logout();
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth > 1024) {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setActiveDropdown(null);
        }
      }
    };

    const handleResize = () => {
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="nav-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Zonzoctech Logo" className="logo-desktop" />
            <img src={logo} alt="Zonzoctech Logo" className="logo-mobile" />
          </div>

          <div className="nav-tagline">
            <div>Web Intelligences</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {/* Dropdown: AI & Technology (id: 3) */}
          <div
            className={`dropdown ${mobileDropdown === 3 ? "open" : ""} ${activeDropdown === 3 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(3)}
              aria-expanded={activeDropdown === 3 || mobileDropdown === 3}
            >
              AI & TECHNOLOGY ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>AI Strategy & Core Services</h4>
                <a href="/">AI Readiness Assessment</a>
                <a href="/ai-seo">AI Strategy & Consulting</a>
                <a href="/">AI Proof of Concept (PoC) Development</a>
                <a href="/">Custom AI & GPT Integration</a>
                <a href="/">Secure & Scalable AI Deployment</a>
              </div>

              <div className="dropdown-column">
                <h4>AI for Marketing, Sales & Growth</h4>
                <a href="/ai-search-optimization">AI SEO & AI Search Optimization</a>
                <a href="/">AI Sales Funnel Optimization</a>
                <a href="/">AI Lead Generation & Nurturing Automation</a>
                <a href="/">AI Chat Sales Agents & Virtual Assistants</a>
                <a href="/">AI Content & Campaign Automation</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Web Experience & Conversion</h4>
                <a href="/ai-web-app">Conversion-Focused AI Website Design</a>
                <a href="/full-stack-web-development">AI Personalization & Dynamic Content</a>
                <a href="/">AI Landing Page Systems</a>
                <a href="/">GPT-Powered Forms, Chat & Lead Capture</a>
                <a href="/">AI UX Testing & Conversion Rate Optimization (CRO)</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Automation & Integrations</h4>
                <a href="/">AI Workflow & Business Process Automation</a>
                <a href="/">AI CRM, ERP & Tool Integrations</a>
                <a href="/">AI Email, WhatsApp & Messaging Automation</a>
                <a href="/">Voice, Image & Document AI Solutions</a>
                <a href="/">AI Scheduling, Booking & Support Automation</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Insights & Resources</span>
                <span className="last-column-text3">AI vs Traditional Development: Cost & ROI</span>
                <span className="last-column-text3">What Is GPT Integration & When You Need It</span>
                <span className="last-column-text3">What Is AI Marketing</span>
                <span className="last-column-text3">How to Identify High-ROI AI Use Cases</span>
                <span className="last-column-text3">AI SEO vs Traditional SEO</span>
              </div>
            </div>
          </div>

          {/* Dropdown: UX & Interactive (id: 2) */}
          <div
            className={`dropdown ${mobileDropdown === 2 ? "open" : ""} ${activeDropdown === 2 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(2)}
              aria-expanded={activeDropdown === 2 || mobileDropdown === 2}
            >
              UX & INTERACTIVE ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Website Strategy & Conversion</h4>
                <a href="/">Free Website Growth Audit</a>
                <a href="/">Conversion Strategy & UX Planning</a>
                <a href="/">Rapid Website Launch (MVP / Go-Live Fast)</a>
                <a href="/">AI-Driven Personalization Strategy</a>
                <a href="/">Analytics, Tracking & Attribution Setup</a>
              </div>

              <div className="dropdown-column">
                <h4>Design for Revenue</h4>
                <a href="/">Conversion-Focused Website Design</a>
                <a href="/">E-commerce UX & Store Optimization</a>
                <a href="/">Brand-Led Custom Design Systems</a>
                <a href="/">Landing Pages & Funnel Design</a>
                <a href="/">Ongoing Website Growth & Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>Development & AI Engineering</h4>
                <a href="/ai-software-development">Custom Web Application Development</a>
                <a href="/">WordPress & Headless CMS Development</a>
                <a href="/">Shopify & E-commerce Development</a>
                <a href="/">AI & GPT Integration</a>
                <a href="/">Workflow & Business Automation</a>
              </div>

              <div className="dropdown-column">
                <h4>Performance, Security & Reliability</h4>
                <a href="/">Managed Cloud Hosting & DevOps</a>
                <a href="/">Performance & Core Web Vitals Optimization</a>
                <a href="/">Security, Backups & Disaster Recovery</a>
                <a href="/">Website Migration & Re-platforming</a>
                <a href="/">Conversion Rate Optimization (CRO)</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Problems We Solve</span>
                <span className="last-column-text3">My Website Isn't Generating Leads or Sales</span>
                <span className="last-column-text3">My Traffic or Rankings Are Declining</span>
                <span className="last-column-text3">My Website Looks Good but Doesn't Convert</span>
                <span className="last-column-text3">My Business Isn't Visible on Google or AI Search</span>
                <span className="last-column-text3">My Marketing or Agency Isn't Delivering ROI</span>
              </div>
            </div>
          </div>

          {/* Dropdown: SEO & Lead Generation (id: 1) */}
          <div
            className={`dropdown ${mobileDropdown === 1 ? "open" : ""} ${activeDropdown === 1 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(1)}
              aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
            >
              SEO & LEAD GENERATION ▾
            </button>

            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>SEO Strategy & Core Services</h4>
                <a href="/">SEO Growth Audit & Opportunity Analysis</a>
                <a href="/">SEO Strategy & Roadmap</a>
                <a href="/">Enterprise SEO & Large Website SEO</a>
                <a href="/">Local SEO & Maps Optimization</a>
                <a href="/">AI SEO & Search Experience Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>SEO Research & Intelligence</h4>
                <a href="/services/seo/google-search-console">High-Intent Keyword & Topic Research</a>
                <a href="/">Competitor & Market Gap Analysis</a>
                <a href="/">Search Intent & Funnel Mapping</a>
                <a href="/">Content & SERP Opportunity Analysis</a>
                <a href="/">SEO Performance Tracking & KPIs</a>
              </div>

              <div className="dropdown-column">
                <h4>Technical SEO & Performance</h4>
                <a href="/">Technical SEO Audits & Fixes</a>
                <a href="/">Core Web Vitals & Page Speed Optimization</a>
                <a href="/">Indexing, Crawl Budget & Log File Optimization</a>
                <a href="/">Structured Data & Rich Results Optimization</a>
                <a href="/">Internal Linking & Authority Sculpting</a>
              </div>

              <div className="dropdown-column">
                <h4>E-commerce SEO & Revenue Growth</h4>
                <a href="/ecommerce">E-commerce SEO Strategy & Optimization</a>
                <a href="/">Shopping Feed Optimization & Automation</a>
                <a href="/">Product Page SEO & Conversion Optimization</a>
                <a href="/">SEO-Driven CRO for E-commerce</a>
                <a href="/">SEO Conversion Rate Optimization (CRO)</a>
              </div>

              <div className="dropdown-column-last">
                <span className="last-column3">Proof & Insights</span>
                <span className="last-column-text3">SEO Case Studies & Results</span>
                <span className="last-column-text3">Client Success Stories</span>
                <span className="last-column-text3">SEO Growth Experiments & Learnings</span>
                <span className="last-column-text3">AI SEO vs Traditional SEO</span>
                <span className="last-column-text3">GEO</span>
              </div>
            </div>
          </div>

          {/* Dropdown: Who We Are (id: 4) */}
          <div
            className={`dropdown ${mobileDropdown === 4 ? "open" : ""} ${activeDropdown === 4 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(4)}
              aria-expanded={activeDropdown === 4 || mobileDropdown === 4}
            >
              WHO WE ARE ▾
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
                <button className="last-column-button">View Careers</button>
              </div>
            </div>
          </div>

          <button className="contact-btn" onClick={() => setIsPopupOpen(true)}>
             Get a Proposal
          </button>


          {open && (
            <button className="mobile-client-login-inside" onClick={handleClientLogin}>
              Client Login
            </button>
          )}
        </nav>
        
        <ExpertPopup 
        open={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>

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