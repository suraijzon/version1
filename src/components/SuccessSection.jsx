'use client';
import React from "react";
import { useRouter } from "next/navigation";
import "../styles/successsection.css";

const SuccessSection = () => {
  const router = useRouter();
  const projects = [
    {
      id: 2,
      name: "Aviation Management System",
      desc: "Comprehensive aviation management platform with real-time flight tracking, task management, and crew scheduling.",
      extra: [
        { text: "Angular", Background: "#0047ab" },
        { text: "Firebase", Background: "#ff6b91" },
        { text: "Flightaware APIs", Background: "#1e8449" },
        { text: "MongoDB", Background: "#00bfc1" },
        { text: "Node.js", Background: "#ff7300ff" },
      ],
      img: "/images/aviation.png",
    },
    {
      id: 3,
      name: "Fleet Management System",
      desc: "Comprehensive platform for real-time fleet tracking, rider management, and performance analytics.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
        { text: "Google Maps APIs", Background: "#1e8449" },
      ],
      img: "/images/fleet-management.png",
    },
    {
      id: 4,
      name: "E-Commerce System",
      desc: "Developed the admin portal, vendor portal, user mobile app, and vendor mobile app to manage the system.",
      extra: [
        { text: "Angular", Background: "#0047ab" },
        { text: "Java(Android Studio)", Background: "#ff7300ff" },
        { text: "Swift", Background: "#ff6b91" },
        { text: "Node.js", Background: "#00bfc1" },
        { text: "MongoDB", Background: "#1e8449" },
        { text: "Firebase", Background: "#d90e0eff" },
      ],
      img: "/images/lvita.jpg",
    },
     {
      id: 6,
      name: "Website Maintenance and Web Security",
      desc: "We executed end-to-end website development for frau-rauchfrei.de, implementing strong security protocols, performance optimization, and ongoing protection against vulnerabilities.",
      extra: [
        { text: "React", Background: "#0047ab" },
        { text: "Java", Background: "#ff6b91" },
        { text: "Spring Boot", Background: "#00bfc1" },
        { text: "Next.js", Background: "#ff7300ff" },
      ],
      img: "/images/websitemaintence.jpeg",
    },
  ];

  return (
    <section className="success-section">
      <div className="success-header">
        <span className="success-tag">See </span>
        <span className="tag2"> Our Success in Action</span>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, That Drive Business Growth
        </h2>

        <p className="success-subtitle">
          See how we’ve helped businesses increase traffic, generate leads and
          <br />
          boost conversions through SEO, high-performing websites, and smart automation.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => router.push(`/project/${project.id}`)}
          >
            <img
              src={project.img}
              alt={project.name}
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-extra">
                {project.extra.map((item, idx) => (
                  <span key={idx}>{item.text}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;
