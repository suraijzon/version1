'use client';
import React from "react";
import { useRouter } from "next/navigation";
import "../styles/hero.css";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-copy">

          <h1 className="hero-main-title">
            AI-Powered Web Development Agency Trusted by Businesses in the UK & USA
          </h1>

          <p className="hero-description">
            We design high-converting websites, drive targeted organic traffic, and automate your business with AI — so you grow faster without working harder.
          </p>

          <button
            className="hero-contact-btn"
            onClick={() => router.push("/contact")}
          >
            Get Free Growth Plan
          </button>

          <a
            href="/#portfolio"
            className="hero-secondary-btn"
          >
            See Our Work ↓
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;