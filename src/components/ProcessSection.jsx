'use client';
import React from "react";
import '../styles/process.css';

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "We listen to your goals and gather key requirements",
      icon: "/images/discover.svg",
    },
    {
      number: "2",
      title: "Design",
      description:
        "UI/UX designs and system architecture tailored to your needs.",
      icon: "/images/strategy.svg",
    },
    {
      number: "3",
      title: "Development",
      description:
        "Agile development of web, mobile, and desktop solutions.",
      icon: "/images/launch.svg",
    },
    {
      number: "4",
      title: "Launch",
      description:
        "Final testing, deployment, and go-live across platforms.",
      icon: "/images/launch4.svg",
    },
    {
      number: "5",
      title: "Support",
      description:
        "Continuous maintenance and updates to ensure success.",
      icon: "/images/support.svg",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Proven Process – How It Works</h2>
        <p className="process-subtitle">Our 5-Step Success Blueprint</p>

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
                <div className="step-number" style={{color:"white", borderColor:"rgba(255, 255, 255, 0.15)"}}>{step.number}</div>
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
