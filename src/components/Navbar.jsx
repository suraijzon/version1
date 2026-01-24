import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import siteLogo from "../assets/icons/zonzoclogo3-bg.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <img src={siteLogo} alt="ZonzocTech Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <button onClick={() => handleNav("/")}>Home</button>
          <button onClick={() => handleNav("/services")}>Services</button>
          <button onClick={() => handleNav("/about")}>About</button>
          <button onClick={() => handleNav("/contact-us")} className="cta-btn">
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => handleNav("/")}>Home</button>
          <button onClick={() => handleNav("/services")}>Services</button>
          <button onClick={() => handleNav("/about")}>About</button>
          <button onClick={() => handleNav("/contact-us")}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
