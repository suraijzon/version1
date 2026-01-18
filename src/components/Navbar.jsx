
import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/zonzoclogo3-bg.png";
import siteLogo from "../assets/icons/site_logo_2.svg";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ExpertPopup from "./ExpertPopup";


const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

    const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

   const openDropdown = (id) => {
    if (!isDesktop()) return;
    clearCloseTimer();
    setActiveDropdown(id);
  };

  const scheduleCloseDropdown = () => {
    if (!isDesktop()) return;
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, CLOSE_DELAY_MS);
  };

  const toggleMobileDropdown = (id) => {
     if (isDesktop()) return;
    setMobileDropdown((prev) => (prev === id ? null : id));
  };

  const handleDropdownButtonClick = (id) => {
   if (isDesktop()) {
      clearCloseTimer();
      setActiveDropdown((prev) => (prev === id ? null : id));
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
   if (!isDesktop()) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    const handleResize = () => {
      if (isDesktop()) {
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
      clearCloseTimer();
    };
  }, []);


  const dropdownHoverProps = (id) => ({
    onMouseEnter: () => openDropdown(id),
    onMouseLeave: scheduleCloseDropdown,
  });

  const dropdownContentHoverProps = {
    onMouseEnter: clearCloseTimer,
    onMouseLeave: scheduleCloseDropdown,
  };


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
            <a href="mailto:Info@zonzoctech.com?subject=New Project Inquiry&body=Hi ZonzocTech Team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AThanks," className="email-link">
              info@zonzoctech.com
            </a>
          </div>
        </div>
      </div>

      <div className="nav-container" ref={navRef}>
         <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="nav-logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
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
            className={`dropdown ${mobileDropdown === 3 ? "open" : ""} ${
              activeDropdown === 3 ? "active" : ""
            }`}
            {...dropdownHoverProps(3)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(3)}
              aria-expanded={activeDropdown === 3 || mobileDropdown === 3}
            >
              AI & TECHNOLOGY ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>AI Strategy & Core Services</h4>
                <a href="/ai-website-design-development">AI Readiness Assessment</a>
                <a href="/ai-seo">AI Strategy & Consulting</a>
                <a href="/ai-software-development">AI Proof of Concept (PoC) Development</a>
                <a href="/ai-web-application-development">Custom AI & GPT Integration</a>
                <a href="/website-maintenance-performance-security">Secure & Scalable AI Deployment</a>
              </div>

              <div className="dropdown-column">
                <h4>AI for Marketing, Sales & Growth</h4>
                <a href="/seo-ai-search-optimization">AI SEO & AI Search Optimization</a>
                <a href="/seo-services">AI Sales Funnel Optimization</a>
                <a href="/seo-services">AI Lead Generation & Nurturing Automation</a>
                <a href="/ai-software-development">AI Chat Sales Agents & Virtual Assistants</a>
                <a href="/seo-services">AI Content & Campaign Automation</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Web Experience & Conversion</h4>
                <a href="/ai-website-design-development">Conversion-Focused AI Website Design</a>
                <a href="/full-stack-web-development">AI Personalization & Dynamic Content</a>
                <a href="/full-stack-web-development">AI Landing Page Systems</a>
                <a href="/ai-web-application-development">GPT-Powered Forms, Chat & Lead Capture</a>
                <a href="/seo-services">AI UX Testing & Conversion Rate Optimization (CRO)</a>
              </div>

              <div className="dropdown-column">
                <h4>AI Automation & Integrations</h4>
                <a href="/ai-software-development">AI Workflow & Business Process Automation</a>
                <a href="/ai-software-development">AI CRM, ERP & Tool Integrations</a>
                <a href="/ai-software-development">AI Email, WhatsApp & Messaging Automation</a>
                <a href="/ai-software-development">Voice, Image & Document AI Solutions</a>
                <a href="/ai-web-application-development">AI Scheduling, Booking & Support Automation</a>
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
            className={`dropdown ${mobileDropdown === 2 ? "open" : ""} ${
              activeDropdown === 2 ? "active" : ""
            }`}
            {...dropdownHoverProps(2)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(2)}
              aria-expanded={activeDropdown === 2 || mobileDropdown === 2}
            >
              UX & INTERACTIVE ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>Website Strategy & Conversion</h4>
                <a href="/contact-us">Free Website Growth Audit</a>
                <a href="/full-stack-web-development">Conversion Strategy & UX Planning</a>
                <a href="/full-stack-web-development">Rapid Website Launch (MVP / Go-Live Fast)</a>
                <a href="/ai-web-application-development">AI-Driven Personalization Strategy</a>
                <a href="/seo-services">Analytics, Tracking & Attribution Setup</a>
              </div>

              <div className="dropdown-column">
                <h4>Design for Revenue</h4>
                <a href="/ai-website-design-development">Conversion-Focused Website Design</a>
                <a href="/ecommerce-development-optimization">E-commerce UX & Store Optimization</a>
                <a href="/full-stack-web-development">Brand-Led Custom Design Systems</a>
                <a href="/seo-services">Landing Pages & Funnel Design</a>
                <a href="/website-maintenance-performance-security">Ongoing Website Growth & Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>Development & AI Engineering</h4>
                <a href="/ai-web-application-development">Custom Web Application Development</a>
                <a href="/full-stack-web-development">WordPress & Headless CMS Development</a>
                <a href="/ecommerce-development-optimization">Shopify & E-commerce Development</a>
                <a href="/ai-software-development">AI & GPT Integration</a>
                <a href="/ai-software-development">Workflow & Business Automation</a>
              </div>

              <div className="dropdown-column">
                <h4>Performance, Security & Reliability</h4>
                <a href="/website-maintenance-performance-security">Managed Cloud Hosting & DevOps</a>
                <a href="/seo-services">Performance & Core Web Vitals Optimization</a>
                <a href="/website-maintenance-performance-security">Security, Backups & Disaster Recovery</a>
                <a href="/full-stack-web-development">Website Migration & Re-platforming</a>
                <a href="/seo-services">Conversion Rate Optimization (CRO)</a>
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
             className={`dropdown ${mobileDropdown === 1 ? "open" : ""} ${
              activeDropdown === 1 ? "active" : ""
            }`}
            {...dropdownHoverProps(1)}
          >
            <button
              className="drop-btn"
              onClick={() => handleDropdownButtonClick(1)}
              aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
            >
              SEO & LEAD GENERATION ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>SEO Strategy & Core Services</h4>
                <a href="/seo-services">SEO Growth Audit & Opportunity Analysis</a>
                <a href="/seo-services">SEO Strategy & Roadmap</a>
                <a href="/seo-services">Enterprise SEO & Large Website SEO</a>
                <a href="/seo-services">Local SEO & Maps Optimization</a>
                <a href="/seo-ai-search-optimization">AI SEO & Search Experience Optimization</a>
              </div>

              <div className="dropdown-column">
                <h4>SEO Research & Intelligence</h4>
                <a href="/seo-services">High-Intent Keyword & Topic Research</a>
                <a href="/seo-services">Competitor & Market Gap Analysis</a>
                <a href="/seo-services">Search Intent & Funnel Mapping</a>
                <a href="/seo-services">Content & SERP Opportunity Analysis</a>
                <a href="/seo-services">SEO Performance Tracking & KPIs</a>
              </div>

              <div className="dropdown-column">
                <h4>Technical SEO & Performance</h4>
                <a href="/seo-services">Technical SEO Audits & Fixes</a>
                <a href="/website-maintenance-performance-security">Core Web Vitals & Page Speed Optimization</a>
                <a href="/seo-services">Indexing, Crawl Budget & Log File Optimization</a>
                <a href="/seo-services">Structured Data & Rich Results Optimization</a>
                <a href="/seo-services">Internal Linking & Authority Sculpting</a>
              </div>

              <div className="dropdown-column">
                <h4>E-commerce SEO & Revenue Growth</h4>
                <a href="/ecommerce-development-optimization">E-commerce SEO Strategy & Optimization</a>
                <a href="/ecommerce-development-optimization">Shopping Feed Optimization & Automation</a>
                <a href="/ecommerce-development-optimization">Product Page SEO & Conversion Optimization</a>
                <a href="/seo-services">SEO-Driven CRO for E-commerce</a>
                <a href="/seo-services">SEO Conversion Rate Optimization (CRO)</a>
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
            className={`dropdown ${mobileDropdown === 4 ? "open" : ""} ${
              activeDropdown === 4 ? "active" : ""
            }`}
            {...dropdownHoverProps(4)}
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
                <a href="/about">About Us</a>
                <a href="/terms-conditions">Terms & Conditions</a>
                <a href="/contact-us">Careers (We Are Hiring!)</a>
                <a href="/contact">Contact Info</a>
                <a href="/case-studies">Zonzoctech Reviews</a>
                <a href="/privacy-policy">Privacy Policy</a>
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