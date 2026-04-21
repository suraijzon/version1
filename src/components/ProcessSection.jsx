'use client';
import React from "react";
import '../styles/process.css';

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "01 — Discovery",
      description:
        "We dig deep into your business goals, audience, and competitors before writing a single line of code.",
      icon: "/images/discover.svg",
    },
    {
      number: "2",
      title: "02 — Strategy & Design",
      description:
        "Wireframes, UI/UX design and system architecture built specifically around your users and goals.",
      icon: "/images/strategy.svg",
    },
    {
      number: "3",
      title: "03 — Development",
      description:
        "Agile, sprint-based development across web, mobile and AI — with full transparency at each step.",
      icon: "/images/launch.svg",
    },
    {
      number: "4",
      title: "04 — Launch",
      description:
        "Thorough QA testing, performance checks and a smooth go-live across all platforms.",
      icon: "/images/launch4.svg",
    },
    {
      number: "5",
      title: "05 — Ongoing Support",
      description:
        "We don't disappear after launch. Continuous updates, monitoring and growth support included.",
      icon: "/images/support.svg",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">How We Work — Our 5-Step Process</h2>
        <p className="process-subtitle">Every project follows a proven blueprint designed to deliver results on time, every time.</p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                {/* Icon box */}
                <div className="step-icon-wrapper">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="step-icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>

                {/* Step number */}
                <div className="step-number">{step.number}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
