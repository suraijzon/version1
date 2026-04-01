import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import heroImg from "../assets/icons/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">

        <div className="hero-copy">

          <div className="hero-sub">
            <p>Turn Your Website Into a Lead-Generating Machine</p>
          </div>

          <div className="hero-sub2">
            <p>
              We build high-converting websites, drive targeted traffic, and automate your business with AI to help you grow faster.
            </p>
          </div>

          {/* ✅ CONTACT BUTTON */}
          <button
            className="hero-contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

        </div>

        <div className="hero-media">
          <img src={heroImg} alt="Digital solutions illustration" />
        </div>

      </div>
    </section>
  );
};

export default Hero;