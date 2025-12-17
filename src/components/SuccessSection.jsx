import React from "react";
import "../styles/successsection.css";
import item1 from "../assets/icons/healthyfit.png";
import item2 from "../assets/icons/aviation.png"; 
import item3 from "../assets/icons/fleet-management.png"; 
import item4 from "../assets/icons/lvita.jpg";  

const SuccessSection = () => {
  const projects = [
    { id: 1, name: "E-Commerce Website", desc: "Shopify-based platform for healthy products with seamless API integration.",
       extra: [
      { text: "Shopify", color: "#0047ab" },
      { text: "Shopify APIs", color: "#ff6b91" },
      { text: "Laravel", color: "#00bfc1" },
      { text: "Boostrap", color: "#ffe400" },
    ], img: item1 },
    { id: 2, name: "Aviation Management System", desc: "Comprehensive aviation management platform with real-time flight tracking, task management, and crew scheduling.",
       extra: [
      { text: "Angular", color: "#0047ab" },
      { text: "Firebase", color: "#ff6b91" },
      { text: "MongoDB", color: "#00bfc1" },
      { text: "Node.js", color: "#ffe400" },
      { text: "Flightaware APIs", color: "#1e8449" }
    ], img: item2 },
    { id: 3, name: "Fleet Management System", desc: "Comprehensive platform for real-time fleet tracking, rider management, and performance analytics.",
       extra: [
      { text: "React", color: "#0047ab" },
      { text: "Java", color: "#ff6b91" },
      { text: "Spring Boot", color: "#00bfc1" },
      { text: "Next.js", color: "#ffe400" },
      { text: "Google Maps APIs", color: "#1e8449" }
    ], img: item3 },
    { id: 4, name: "E-Commerce System", desc: "Developed the admin portal, vendor portal, user mobile app, and vendor mobile app to manage the system.",
       extra: [
      { text: "Angular", color: "#0047ab" },
      { text: "Swift", color: "#ff6b91" },
      { text: "Node.js", color: "#00bfc1" },
      { text: "Java(Android Studio)", color: "#ffe400" },
      { text: "MongoDB", color: "#1e8449" },
      { text: "Firebase", color: "#1e8449" }
    ], img: item4 },
    
  ];

  return (
    <section className="success-section">
      <div className="success-header">
        <span className="success-tag">See </span>
        <span className="tag2"> Our Success in Action</span>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, Not Just Promises
        </h2>

        <p className="success-subtitle">
          Our recent projects highlight our expertise in delivering tailored <br />
          solutions that meet the unique needs and objectives of our clients.
        </p>

        {/*<button className="all-works-btn">
          <span className="btn-text">
            <span>ALL WORKS ↗</span>
            <span>ALL WORKS ↗</span>
          </span>
        </button>*/}
      </div>

      <div className="projects-slider">
         <div className="projects-track">
          {[...projects, ...projects].map((project, index) => (
             <div key={index} className="project-card">


            <img src={project.img} alt={project.name} className="project-img" />

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SuccessSection;
