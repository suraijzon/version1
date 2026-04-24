'use client';
import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import "../styles/topbar.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ExpertPopup from "./ExpertPopup";

const DESKTOP_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 180;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  useAuth();
  const router = useRouter();

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

  const handleLogoClick = () => {
    router.push("/");
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

    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.querySelector('.navbar')?.classList.add('scrolled');
      } else {
        document.querySelector('.navbar')?.classList.remove('scrolled');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>🌍 Serving Businesses in UK & USA | 150+ Projects Delivered</span>
          </div>
          <div className="topbar-right">
            <a href="mailto:info@zonzoctech.com?subject=New Project Inquiry&body=Hi ZonzocTech Team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AThanks," className="email-link">
              info@zonzoctech.com
            </a>
            <a
              href="https://wa.me/94740309534"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-banner"
            >
              +94 74 030 9534
            </a>
          </div>
        </div>
      </div>

      <header className="navbar" ref={navRef}>
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <img src="/images/logo.png" alt="Zonzoctech Logo" />
          </div>

          <nav className={`navbar-links ${mobileOpen ? "mobile-open" : ""}`}>
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>

            <div
              className={`navbar-dropdown ${mobileDropdown === 1 ? "open" : ""} ${activeDropdown === 1 ? "active" : ""}`}
              {...dropdownHoverProps(1)}
            >
              <button
                className="drop-btn"
                onClick={() => handleDropdownButtonClick(1)}
                aria-expanded={activeDropdown === 1 || mobileDropdown === 1}
              >
                Services ▾
              </button>

              <div className={`navbar-dropdown-menu${activeDropdown === 1 ? ' open' : ''}`} {...dropdownContentHoverProps}>
                <div className="dropdown-section">
                  <h6>WEB & AI DEVELOPMENT</h6>
                  <Link href="/ai-web-application-development" onClick={() => setMobileOpen(false)}>AI Web Development</Link>
                  <Link href="/full-stack-web-development" onClick={() => setMobileOpen(false)}>Full-Stack Web Development</Link>
                  <Link href="/ai-website-design-development" onClick={() => setMobileOpen(false)}>AI Website Design</Link>
                  <Link href="/ai-software-development" onClick={() => setMobileOpen(false)}>AI Software Development</Link>
                </div>

                <div className="dropdown-section">
                  <h6>SEO & GROWTH</h6>
                  <Link href="/seo-services" onClick={() => setMobileOpen(false)}>SEO Services</Link>
                  <Link href="/seo-ai-search-optimization" onClick={() => setMobileOpen(false)}>AI SEO & Search Optimization</Link>
                  <Link href="/ecommerce-development-optimization" onClick={() => setMobileOpen(false)}>E-commerce Development</Link>
                </div>

                <div className="dropdown-section">
                  <h6>SUPPORT</h6>
                  <Link href="/website-maintenance-performance-security" onClick={() => setMobileOpen(false)}>Website Maintenance & Security</Link>
                </div>
              </div>
            </div>

            <Link href="/#portfolio" className="drop-btn" onClick={() => setMobileOpen(false)}>Our Work</Link>
            <Link href="/about" className="drop-btn" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="drop-btn" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="drop-btn" onClick={() => setMobileOpen(false)}>Contact</Link>

            <button className="navbar-cta" onClick={() => { setIsPopupOpen(true); setMobileOpen(false); }}>
              Get Free Proposal
            </button>
          </nav>

          <div
            className={`mobile-backdrop ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          />

          <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
