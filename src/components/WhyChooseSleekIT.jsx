import React from "react";
import "../styles/WhyChooseSleekIT.css";

// Replace these with your actual image paths
import consultation from "../assets/icons/future-empower.png";
import fastDelivery from "../assets/icons/earning-line.png";
import affordable from "../assets/icons/affordable.png";
import noHidden from "../assets/icons/no-hidden.png";

const WhyChooseSleekIT = () => {
  const features = [
    {
      id: 1,
      title: "Free Project Consultation",
      description: "Expert guidance to shape your idea into a solid plan.",
      image: consultation,
    },
    {
      id: 2,
      title: "Fast Project Delivery",
      description: "Timely execution with rapid turnaround.",
      image: fastDelivery,
    },
    {
      id: 3,
      title: "Affordable Packages",
      description: "Flexible pricing tailored to your business needs.",
      image: affordable,
    },
    {
      id: 4,
      title: "No Hidden Charges",
      description: "Transparent pricing with zero surprises.",
      image: noHidden,
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-header">
          <h2>Why Choose Sleek IT?</h2>
          <p>
            We don’t just build solutions — we deliver future-ready digital
            experiences powered by innovation.
          </p>
        </div>

        <div className="why-cards">
          {features.map((item) => (
            <div className="why-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="why-icon"
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSleekIT;
