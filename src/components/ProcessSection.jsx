import React from "react";
import '../styles/process.css';
import DiscoverIcon from "../assets/icons/discover.svg";
import StrategyIcon from "../assets/icons/strategy.svg";
import LaunchIcon from "../assets/icons/launch.svg";
import SupportIcon from "../assets/icons/support.svg";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description:
        "We begin by understanding your unique goals, challenges, and opportunities through in-depth discussions and research.",
      icon: DiscoverIcon,
    },
    {
      number: "2",
      title: "Strategize & Build",
      description:
        "We create tailored digital solutions — websites, SEO, or AI integrations — that align with your business objectives.",
      icon: StrategyIcon,
    },
    {
      number: "3",
      title: "Launch & Optimize",
      description:
        "Once tested and perfected, we launch your solution and continuously optimize it for better performance.",
      icon: LaunchIcon,
    },
    {
      number: "4",
      title: "Support & Grow",
      description:
        "We stay with you after launch, offering ongoing support, updates, and growth strategies for long-term success.",
      icon: SupportIcon,
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Proven Process – How It Works</h2>
        <p className="process-subtitle">Our 4-Step Success Blueprint</p>

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
