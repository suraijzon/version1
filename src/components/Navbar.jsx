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
  const [open, setOpen] = useState(false);
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
      <div className="topbar">
        <div className="topbar-left">
          <span>🌍 Serving Businesses in UK & USA | 150+ Projects Delivered</span>
        </div>

        <div className="topbar-right">
          <div className="contact-proposal">
            <img src="/images/navmail.png" alt="phone" />
            <a href="mailto:Info@zonzoctech.com?subject=New Project Inquiry&body=Hi ZonzocTech Team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AThanks," className="email-link">
              info@zonzoctech.com
            </a>
          </div>
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

      <div className="nav-container" ref={navRef}>
         <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="nav-logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <img src="/images/logo.png" alt="Zonzoctech Logo" className="logo-desktop" />
            <img src="/images/logo.png" alt="Zonzoctech Logo" className="logo-mobile" />
          </div>

          <div className="nav-tagline">
            <div>Web Intelligences</div>
            <div>That Drives</div>
            <div>Revenue®</div>
          </div>
        </div>
          

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {/* Dropdown: Services (id: 1) */}
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
              Services ▾
            </button>

            <div className="dropdown-content" {...dropdownContentHoverProps}>
              <div className="dropdown-column">
                <h4>WEB & AI DEVELOPMENT</h4>
                <Link href="/ai-web-application-development">AI Web Development</Link>
                <Link href="/full-stack-web-development">Full-Stack Web Development</Link>
                <Link href="/ai-website-design-development">AI Website Design</Link>
                <Link href="/ai-software-development">AI Software Development</Link>
              </div>

              <div className="dropdown-column">
                <h4>SEO & GROWTH</h4>
                <Link href="/seo-services">SEO Services</Link>
                <Link href="/seo-ai-search-optimization">AI SEO & Search Optimization</Link>
                <Link href="/ecommerce-development-optimization">E-commerce Development</Link>
              </div>

              <div className="dropdown-column">
                <h4>SUPPORT</h4>
                <Link href="/website-maintenance-performance-security">Website Maintenance & Security</Link>
              </div>
            </div>
          </div>

          <Link href="/#portfolio" className="drop-btn">Our Work</Link>
          <Link href="/about" className="drop-btn">About</Link>
          <Link href="/blog" className="drop-btn">Blog</Link>
          <Link href="/contact" className="drop-btn">Contact</Link>

          <button className="contact-btn desktop-only" onClick={() => setIsPopupOpen(true)}>
            Get Free Proposal
          </button>
        </nav>

        <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        <div className="mobile-actions">
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