import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/zonzoclogo3-bg.png";
import phoneIcon from "../assets/icons/phone-call-icon.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ExpertPopup from "./ExpertPopup";

const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleDropdown = (id) => {
    if (isDesktop()) {
      setActiveDropdown((prev) => (prev === id ? null : id));
    } else {
      setMobileDropdown((prev) => (prev === id ? null : id));
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
      if (isDesktop() && navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    const handleResize = () => {
      setActiveDropdown(null);
      setMobileDropdown(null);
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
            <img src={phoneIcon} alt="Phone" />
            <a
              href="mailto:info@zonzoctech.com"
              className="email-link"
            >
              info@zonzoctech.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="nav-container" ref={navRef}>
        <div className="nav-left">
          <div
            className="nav-logo"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
          >
            <img src={logo} alt="Zonzoctech Logo" />
          </div>

          <div className="nav-tagline">
            <div>Web Intelligence</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* AI & Technology */}
          <div
            className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}
            {...dropdownHoverProps(1)}
          >
            <button
              className="drop-btn"
              onClick={() => toggleDropdown(1)}
              aria-expanded={activeDropdown === 1}
            >
              AI & TECHNOLOGY ▾
            </button>

            <div className="dropdown-content">
              <a href="/ai-website-design-development">AI Website Design</a>
              <a href="/ai-software-development">AI Software Development</a>
              <a href="/ai-web-application-development">AI Web Applications</a>
              <a href="/ai-seo">AI Strategy & Consulting</a>
            </div>
          </div>

          {/* UX & Interactive */}
          <div
            className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}
            {...dropdownHoverProps(2)}
          >
            <button
              className="drop-btn"
              onClick={() => toggleDropdown(2)}
              aria-expanded={activeDropdown === 2}
            >
              UX & INTERACTIVE ▾
            </button>

            <div className="dropdown-content">
              <a href="/full-stack-web-development">Web Development</a>
              <a href="/ecommerce-development-optimization">E-commerce UX</a>
              <a href="/website-maintenance-performance-security">Performance</a>
            </div>
          </div>

          {/* SEO */}
          <div
            className={`dropdown ${activeDropdown === 3 ? "active" : ""}`}
            {...dropdownHoverProps(3)}
          >
            <button
              className="drop-btn"
              onClick={() => toggleDropdown(3)}
              aria-expanded={activeDropdown === 3}
            >
              SEO & GROWTH ▾
            </button>

            <div className="dropdown-content">
              <a href="/seo-services">SEO Services</a>
              <a href="/seo-ai-search-optimization">AI SEO</a>
              <a href="/case-studies">Case Studies</a>
            </div>
          </div>

          {/* Company */}
          <div
            className={`dropdown ${activeDropdown === 4 ? "active" : ""}`}
            {...dropdownHoverProps(4)}
          >
            <button
              className="drop-btn"
              onClick={() => toggleDropdown(4)}
              aria-expanded={activeDropdown === 4}
            >
              COMPANY ▾
            </button>

            <div className="dropdown-content">
              <a href="/about">About</a>
              <a href="/contact-us">Careers</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          <button
            className="contact-btn"
            onClick={() => setIsPopupOpen(true)}
          >
            Get a Proposal
          </button>
        </nav>

        <ExpertPopup
          open={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />

        <button
          className="hamburger"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "bar rotate1" : "bar"} />
          <span className={menuOpen ? "bar hide" : "bar"} />
          <span className={menuOpen ? "bar rotate2" : "bar"} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
