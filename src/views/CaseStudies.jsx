'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CaseStudies.css";
import Breadcrumb from "../components/Breadcrumb";

const CaseStudies = () => {
  const projects = [
    {
      title: "Basildon ACR",
      image: "/images/projects/basildon-acr-1.png",
      services: ["WordPress", "WooCommerce", "Local SEO"],
      link: "/case-studies/basildon-acr",
    },
    {
      title: "ASJ Hardscapes",
      image: "/images/projects/asj-hardscapes-1.png",
      services: ["Local SEO", "On-Page Optimisation"],
      link: "/case-studies/asj-hardscapes",
    },
    {
      title: "Frau Rauchfrei",
      image: "/images/projects/frau-rauchfrei-1.png",
      services: ["WordPress", "Security", "Maintenance"],
      link: "/case-studies/frau-rauchfrei",
    },
    {
      title: "Vitamina Project",
      image: "/images/projects/vitamina-project-1.png",
      services: ["SEO", "Technical Fixes"],
      link: "/case-studies/vitamina-project",
    },
    {
      title: "Koning Bamboe",
      image: "/images/projects/koning-bamboe-1.png",
      services: ["Lightspeed CMS", "SEO"],
      link: "/case-studies/koning-bamboe",
    },
    {
      title: "Best Life NL",
      image: "/images/projects/best-life-nl-1.png",
      services: ["SEO", "Content Strategy"],
      link: "/case-studies/best-life-nl",
    },
  ];

  return (
    <>
      <div className="cs__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="cs__hero">
          <div className="cs__hero_bg"></div>
          <div className="cs__hero_container">
            <h1 className="cs__hero_title">Real Projects. Real Results.</h1>
            <p className="cs__hero_description">
              Case studies from our work with businesses across the UK, USA and Europe.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="cs__studies_section">
          <div className="cs__container">
            <div className="cs__projects_grid">
              {projects.map((project, i) => (
                <a key={i} href={project.link} className="cs__project_card">
                  <div className="cs__project_image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="cs__project_info">
                    <h3 className="cs__project_title">{project.title}</h3>
                    <div className="cs__project_tags">
                      {project.services.map((service, j) => (
                        <span key={j} className="cs__project_tag">{service}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cs__container">
            <h2>Ready to Become Our Next Success Story?</h2>
            <p>Tell us about your project and we'll put together a free growth plan — no commitment required.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Start Your Project →</a>
            </div>
            <p className="cta-small-text">No commitment. No spam. Just results.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
