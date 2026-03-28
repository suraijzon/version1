
import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/logo.png";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate,Link } from "react-router-dom";
import ExpertPopup from "./ExpertPopup";
import whatsappBanner from "../assets/icons/whatsapp-nav.jpeg";
import emailnav from "../assets/icons/navmail.png";


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

          <button 
             className="client-login-btn"
             onClick={handleClientLogin}
          >
             Client Login
          </button>
          <a
              href="https://wa.me/947403095340"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-banner"
          >
     
          </a>
          
          <div className="contact-proposal">
            <img src={emailnav} alt="phone" />
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
                <Link to="/ai-software-development">AI Proof of Concept (PoC) Development</Link>
                <Link to="/ai-web-application-development">Custom AI & GPT Integration</Link>
                <Link to="/website-maintenance-performance-security">Secure & Scalable AI Deployment</Link>
                <Link to="/ai-website-design-development">AI Readiness Assessment</Link><br />
                <Link to="/ai-seo">AI Strategy & Consulting</Link>
              </div>

              <div className="dropdown-column">
                <h4>AI for Marketing, Sales & Growth</h4>
                <Link to="/seo-ai-search-optimization">AI SEO & AI Search Optimization</Link>
                <Link to="/seo-services">AI Sales Funnel Optimization</Link>
                <Link to="/seo-services">AI Lead Generation & Nurturing Automation</Link>
                <Link to="/ai-software-development">AI Chat Sales Agents & Virtual Assistants</Link>
                <Link to="/seo-services">AI Content & Campaign Automation</Link>
              </div>

              <div className="dropdown-column">
                <h4>AI Web Experience & Conversion</h4>
                <Link to="/ai-website-design-development">Conversion-Focused AI Website Design</Link>
                <Link to="/full-stack-web-development">AI Personalization & Dynamic Content</Link> 
                <Link to="/ai-web-application-development">GPT-Powered Forms, Chat & Lead Capture</Link>            
                <Link to="/full-stack-web-development">AI Landing Page Systems</Link><br />
                <Link to="/seo-services">AI UX Testing & Conversion Rate Optimization (CRO)</Link>
              </div>

              <div className="dropdown-column">
                <h4>AI Automation & Integrations</h4>
                <Link to="/ai-software-development">AI Workflow & Business Process Automation</Link>
                <Link to="/ai-software-development">AI CRM, ERP & Tool Integrations</Link>
                <Link to="/ai-software-development">AI Email, WhatsApp & Messaging Automation</Link>
                <Link to="/ai-software-development">Voice, Image & Document AI Solutions</Link>
                <Link to="/ai-web-application-development">AI Scheduling, Booking & Support Automation</Link>
              </div>

              <div className="dropdown-column highlight-column">
                <h4>Insights & Resources</h4><br />
                <Link to="/ecommerce-development-optimization">AI vs Traditional Development: Cost & ROI</Link>   
                <Link to="/ecommerce-development-optimization">What Is GPT Integration & When You Need It</Link>  
                <Link to="/seo-services">How to Identify High-ROI AI Use Cases</Link>  
                <Link to="/seo-services">AI SEO vs Traditional SEO</Link><br /> 
                <Link to="/ecommerce-development-optimization">What Is AI Marketing ?</Link>  
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
                <Link to="/full-stack-web-development">Conversion Strategy & UX Planning</Link>  
                <Link to="/full-stack-web-development">Rapid Website Launch (MVP / Go-Live Fast)</Link>  
                <Link to="/ai-web-application-development">AI-Driven Personalization Strategy</Link>  
                <Link to="/seo-services">Analytics, Tracking & Attribution Setup</Link> 
                <Link to="/contact-us">Free Website Growth Audit</Link>   
              </div>

              <div className="dropdown-column">
                <h4>Design for Revenue</h4><br />
                <Link to="/ai-website-design-development">Conversion-Focused Website Design</Link>  
                <Link to="/ecommerce-development-optimization">E-commerce UX & Store Optimization</Link>  
                <Link to="/full-stack-web-development">Brand-Led Custom Design Systems</Link>  
                <Link to="/seo-services">Landing Pages & Funnel Design</Link>  
                <Link to="/website-maintenance-performance-security">Ongoing Website Growth & Optimization</Link>  
              </div>

              <div className="dropdown-column">
                <h4>Development & AI Engineering</h4>
                <Link to="/ai-web-application-development">Custom Web Application Development</Link>  
                <Link to="/full-stack-web-development">WordPress & Headless CMS Development</Link>  
                <Link to="/ecommerce-development-optimization">Shopify & E-commerce Development</Link>  
                 
                <Link to="/ai-software-development">Workflow & Business Automation</Link>  
                <Link to="/ai-software-development">AI & GPT Integration</Link> 
              </div>

              <div className="dropdown-column">
                <h4>Performance, Security & Reliability</h4>
                <Link to="/website-maintenance-performance-security">Managed Cloud Hosting & DevOps</Link>  
                <Link to="/seo-services">Performance & Core Web Vitals Optimization</Link>  
                <Link to="/website-maintenance-performance-security">Security, Backups & Disaster Recovery</Link>  
                <Link to="/full-stack-web-development">Website Migration & Re-platforming</Link>  
                <Link to="/seo-services">Conversion Rate Optimization (CRO)</Link>  
              </div>

               <div className="dropdown-column highlight-column">
                <h4>Problems We Solve</h4><br />
                <Link to="/website-maintenance-performance-security">My Traffic or Rankings Are Declining</Link>  
                <Link to="/seo-services">My Website Looks Good but Doesn't Convert</Link>  
                <Link to="/website-maintenance-performance-security">My Business Isn't Visible on Google or AI Search</Link>  
                <Link to="/full-stack-web-development">My Marketing or Agency Isn't Delivering ROI</Link>  
                <Link to="/seo-services">My Website Isn't Generating Leads or Sales</Link>  
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
                <Link to="/seo-services">SEO Growth Audit & Opportunity Analysis</Link>    
                <Link to="/seo-services">Enterprise SEO & Large Website SEO</Link>  
                <Link to="/seo-services">Local SEO & Maps Optimization</Link>  
                <Link to="/seo-ai-search-optimization">AI SEO & Search Experience Optimization</Link>
                <Link to="/seo-services">SEO Strategy & Roadmap</Link>    
              </div>

              <div className="dropdown-column">
                <h4>SEO Research & Intelligence</h4>
                <Link to="/seo-services">High-Intent Keyword & Topic Research</Link>  
                <Link to="/seo-services">Competitor & Market Gap Analysis</Link>  
                <Link to="/seo-services">Search Intent & Funnel Mapping</Link>  
                <Link to="/seo-services">Content & SERP Opportunity Analysis</Link>  
                <Link to="/seo-services">SEO Performance Tracking & KPIs</Link>  
              </div>

              <div className="dropdown-column">
                <h4>Technical SEO & Performance</h4>   
                <Link to="/website-maintenance-performance-security">Core Web Vitals & Page Speed Optimization</Link>  
                <Link to="/seo-services">Indexing, Crawl Budget & Log File Optimization</Link>  
                <Link to="/seo-services">Structured Data & Rich Results Optimization</Link>  
                <Link to="/seo-services">Internal Linking & Authority Sculpting</Link>
                <Link to="/seo-services">Technical SEO Audits & Fixes</Link>   
              </div>

              <div className="dropdown-column">
                <h4>E-commerce SEO & Revenue Growth</h4>
                <Link to="/ecommerce-development-optimization">E-commerce SEO Strategy & Optimization</Link>   
                <Link to="/ecommerce-development-optimization">Product Page SEO & Conversion Optimization</Link>  
                <Link to="/seo-services">SEO-Driven CRO for E-commerce</Link>  
                <Link to="/seo-services">SEO Conversion Rate Optimization (CRO)</Link> 
                <Link to="/ecommerce-development-optimization">Shopping Feed Optimization & Automation</Link>  
              </div>

              <div className="dropdown-column highlight-column">
                <h4>Proof & Insights</h4><br />
                <Link to="/ecommerce-development-optimization">SEO Case Studies & Results</Link>   
                <Link to="/ecommerce-development-optimization">SEO Growth Experiments & Learnings</Link>  
                <Link to="/seo-services">AI SEO vs Traditional SEO</Link><br />  
                <Link to="/seo-services">Client Success Stories</Link><br /> 
                <Link to="/ecommerce-development-optimization">GEO</Link>  
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
                <Link to="/about">About Us</Link>   
                <Link to="/careers">Careers</Link>  
                <Link to="/contact">Contact Info</Link>  
                <Link to="/privacy-policy">Privacy Policy</Link>  
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