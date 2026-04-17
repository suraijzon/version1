
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
                <h4>Get More Traffic</h4>
                <Link to="/seo-services">Seo Strategy</Link>    
                <Link to="/seo-services">Keyword Research</Link><br /> 
                <Link to="/seo-services">Competitor Analysis</Link>  
                    
              </div>

              <div className="dropdown-column">
                <h4>Convert Traffic into Leads</h4>
                <Link to="/seo-services">Funnel Optimization</Link> 
                <Link to="/seo-services">Landing Page <br /> Optimization</Link>     
                <Link to="/seo-services">CRO (Conversion Rate Optimization)</Link>  
         
              </div>

              <div className="dropdown-column">
                <h4>E-commerce Growth</h4>   
                <Link to="/website-maintenance-performance-security">Product SEO</Link>  
                <Link to="/seo-services">Shopping Feed Optimization</Link>  
                <Link to="/seo-services">SEO for Shopify /WooCommerce</Link>  
   
              </div>

              <div className="dropdown-column">
                <h4> Tracking & Analytics</h4>
                <Link to="/ecommerce-development-optimization">Search Console Setup</Link>   
                <Link to="/ecommerce-development-optimization">Google Analytics & GA4</Link><br /> 
                <Link to="/seo-services">Performance Tracking</Link>  
 
              </div>

              {/*<div className="dropdown-column highlight-column">
                <h4>Proof & Insights</h4><br />
                <Link to="/ecommerce-development-optimization">SEO Case Studies & Results</Link>   
                <Link to="/ecommerce-development-optimization">SEO Growth Experiments & Learnings</Link>  
                <Link to="/seo-services">AI SEO vs Traditional SEO</Link><br />  
                <Link to="/seo-services">Client Success Stories</Link><br /> 
                <Link to="/ecommerce-development-optimization">GEO</Link>  
              </div>*/}
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
                <h4>Website Strategy</h4>   
                <Link to="/full-stack-web-development">UX Planning</Link>  
                <Link to="/full-stack-web-development">Website Audit</Link>  
                <Link to="/ai-web-application-development">Growth Strategy</Link>  
  
              </div>

              <div className="dropdown-column">
                <h4>Design That Converts</h4>
                <Link to="/ai-website-design-development">UI/UX Design</Link>  
                <Link to="/ecommerce-development-optimization">Landing Pages</Link>  
                <Link to="/full-stack-web-development">Funnel Design</Link>  
  
              </div>

              <div className="dropdown-column">
                <h4>Development</h4>
                <Link to="/ai-web-application-development">Custom Web Apps</Link>  
                <Link to="/full-stack-web-development">WordPress Development</Link>  
                <Link to="/ecommerce-development-optimization">E-commerce Development</Link>  
                 
              </div>

              <div className="dropdown-column">
                <h4>Optimization</h4>
                <Link to="/website-maintenance-performance-security">Speed Optimization</Link>  
                <Link to="/seo-services">Core Web Vitals</Link>  
                <Link to="/website-maintenance-performance-security">Security & Maintenance</Link>  
 
              </div>

               {/*<div className="dropdown-column highlight-column">
                <h4>Problems We Solve</h4><br />
                <Link to="/website-maintenance-performance-security">My Traffic or Rankings Are Declining</Link>  
                <Link to="/seo-services">My Website Looks Good but Doesn't Convert</Link>  
                <Link to="/website-maintenance-performance-security">My Business Isn't Visible on Google or AI Search</Link>  
                <Link to="/full-stack-web-development">My Marketing or Agency Isn't Delivering ROI</Link>  
                <Link to="/seo-services">My Website Isn't Generating Leads or Sales</Link>  
              </div>*/}
            </div>
          </div>

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
                <h4>AI for Business Growth</h4>
                <Link to="/ai-software-development">AI Chatbots</Link>
                <Link to="/ai-web-application-development">AI Lead Handling</Link>
                <Link to="/website-maintenance-performance-security">AI Sales Assistants</Link>

              </div>

              <div className="dropdown-column">
                <h4>Automation Systems</h4>
                <Link to="/seo-ai-search-optimization">Workflow Automation</Link>
                <Link to="/seo-services">CRM & Tool Integration</Link>
                <Link to="/seo-services">Email & WhatsApp Automation</Link>

              </div>

              <div className="dropdown-column">
                <h4>AI Website Enhancements</h4>
                <Link to="/ai-website-design-development">AI Personalization</Link>
                <Link to="/full-stack-web-development">AI Landing Pages</Link> 
                <Link to="/ai-web-application-development">Smart Forms & Chat</Link>            
     
              </div>

              <div className="dropdown-column">
                <h4>AI Consulting</h4>
                <Link to="/ai-software-development">AI Strategy</Link>
                <Link to="/ai-software-development">AI Readiness</Link>
                <Link to="/ai-software-development">Custom AI Solutions</Link>

              </div>

              {/*<div className="dropdown-column highlight-column">
                <h4>Insights & Resources</h4><br />
                <Link to="/ecommerce-development-optimization">AI vs Traditional Development: Cost & ROI</Link>   
                <Link to="/ecommerce-development-optimization">What Is GPT Integration & When You Need It</Link>  
                <Link to="/seo-services">How to Identify High-ROI AI Use Cases</Link>  
                <Link to="/seo-services">AI SEO vs Traditional SEO</Link><br /> 
                <Link to="/ecommerce-development-optimization">What Is AI Marketing ?</Link>  
              </div>*/}
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
                <Link to="/contact">Contact Info</Link>   
              </div>

            </div>
          </div>

          <button className="contact-btn desktop-only" onClick={() => setIsPopupOpen(true)}>
          Get a Proposal
          </button>


          {open && (
            <button className="mobile-client-login-inside" onClick={handleClientLogin}>
              Contact Us
            </button>
          )}
        </nav>
        
        <ExpertPopup 
        open={isPopupOpen} onClose={() => setIsPopupOpen(false)}/>
       <div className="mobile-actions">
  <button 
    className="contact-btn mobile-only-btn"
    onClick={() => setIsPopupOpen(true)}
  >
    Get a Proposal
  </button>

  <div className="hamburger" onClick={() => setOpen((s) => !s)}>
    <span className={open ? "bar rotate1" : "bar"}></span>
    <span className={open ? "bar hide" : "bar"}></span>
    <span className={open ? "bar rotate2" : "bar"}></span>
  </div>
</div>
      </div>
    </header>
  );
};

export default Navbar;