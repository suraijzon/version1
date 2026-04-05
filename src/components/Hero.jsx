import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-copy">

          {/* ✅ MAIN TITLE */}
          <h1 className="hero-main-title">
            Turn Your Website Into a Lead-Generating Machine
          </h1>

          {/* ✅ CLEAN DESCRIPTION (FIXED — NO BREAK ISSUE) */}
          <p className="hero-description">
            We build high-converting websites, drive targeted traffic, and automate your business with AI to help you grow faster.
          </p>

          {/* ✅ BUTTON */}
          <button
            className="hero-contact-btn"
            onClick={() => navigate("/contact")}
          >
            Get Free Growth Plan
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;