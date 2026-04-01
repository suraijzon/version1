import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/projectDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import item1 from "../assets/icons/healthyfit.png";
import item2 from "../assets/icons/aviation.png";
import item3 from "../assets/icons/fleet-management.png";
import item4 from "../assets/icons/lvita.jpg";
import item5 from "../assets/icons/searchengine.jpeg";
import item6 from "../assets/icons/websitemaintence.jpeg";
import item7 from "../assets/icons/webdevelopment.jpeg";

import img1 from "../assets/icons/img1.png";
import img2 from "../assets/icons/img2.png";
import img3 from "../assets/icons/img3.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      desc: "Shopify-based platform with seamless integrations.",
      challenge: "Managing product synchronization, payment gateway integration, and ensuring smooth performance across high traffic volumes was a key challenge. The system also needed to handle inventory updates and third-party API integrations efficiently.",
      solution: "We developed a scalable architecture using optimized APIs and a responsive frontend to ensure seamless shopping experiences. The platform was integrated with secure payment gateways and automated inventory management systems.",
      impact: "The solution improved user experience significantly, increased conversion rates by over 40%, and reduced page load times, resulting in better customer retention and higher sales.",
      heroImg: item1,
      challengeImg: img1,
      solutionImg: img2,
      impactImg: img3,
    },
    {
      id: 2,
      name: "Aviation Management System",
      desc: "Flight tracking and crew management.",
      challenge: "Handling real-time flight data, crew scheduling, and operational workflows while maintaining accuracy and system performance under heavy data loads was a major challenge.",
      solution: "We implemented a real-time data processing system using Firebase and integrated third-party aviation APIs to ensure accurate tracking, efficient scheduling, and seamless communication across teams.",
      impact: "The system improved operational efficiency by 60%, reduced manual errors, and enabled better decision-making through real-time insights and analytics.",
      heroImg: item2,
      challengeImg: img2,
      solutionImg: img3,
      impactImg: img1,
    },
    {
      id: 3,
      name: "Fleet Management System",
      desc: "Fleet tracking and analytics dashboard.",
      challenge: "Tracking vehicles in real-time using GPS data and managing large volumes of location-based data while ensuring accuracy and reliability posed a significant challenge.",
      solution: "We integrated Google Maps APIs with a custom analytics dashboard, enabling real-time tracking, route optimization, and performance monitoring for fleet operations.",
      impact: "The system reduced fuel costs, improved route efficiency, and provided better visibility into fleet performance, leading to enhanced operational control.",
      heroImg: item3,
      challengeImg: img3,
      solutionImg: img1,
      impactImg: img2,
    },
    {
      id: 4,
      name: "E-Commerce System",
      desc: "Multi-platform system with apps and admin.",
      challenge: "Managing multiple platforms including admin panel, vendor system, and mobile applications while maintaining synchronization and performance was complex.",
      solution: "We built a centralized backend system that connects all platforms, ensuring smooth data flow, real-time updates, and efficient management across the entire ecosystem.",
      impact: "This improved coordination between systems, reduced operational complexity, and enhanced overall performance and scalability of the platform.",
      heroImg: item4,
      challengeImg: img1,
      solutionImg: img2,
      impactImg: img3,
    },
    {
      id: 5,
      name: "SEO Optimization",
      desc: "Improved search visibility.",
      challenge: "Improving search engine rankings in a highly competitive niche while addressing technical SEO issues and content gaps was a major challenge.",
      solution: "We implemented a comprehensive SEO strategy including technical optimization, keyword targeting, content enhancement, and backlink building to improve visibility.",
      impact: "The website achieved significant growth in organic traffic, improved keyword rankings, and increased domain authority, leading to sustained business growth.",
      heroImg: item5,
      challengeImg: img2,
      solutionImg: img3,
      impactImg: img1,
    },
    {
      id: 6,
      name: "Website Security",
      desc: "Secure and maintain website.",
      challenge: "Protecting the website from vulnerabilities, cyber threats, and performance issues while ensuring continuous uptime and stability was critical.",
      solution: "We implemented advanced security protocols, regular monitoring, performance optimization, and automated updates to maintain a secure and efficient system.",
      impact: "The website experienced zero security breaches, improved performance, and enhanced reliability, ensuring a safe and smooth user experience.",
      heroImg: item6,
      challengeImg: img3,
      solutionImg: img1,
      impactImg: img2,
    },
    {
      id: 7,
      name: "Website Development",
      desc: "Full redesign and performance boost.",
      challenge: "Improving website performance, scalability, and user experience while redesigning the entire system without disrupting existing functionality was challenging.",
      solution: "We rebuilt the platform using modern technologies, optimized the frontend and backend, and introduced new features to enhance usability and performance.",
      impact: "The new system delivered faster load times, better responsiveness, and a significantly improved user experience, leading to increased engagement and satisfaction.",
      heroImg: item7,
      challengeImg: img1,
      solutionImg: img2,
      impactImg: img3,
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <>
    <Navbar/>
    <section className="project-page">

  {/* BACK */}
  <button className="back-btn" onClick={() => navigate("/")}>
    ← Back
  </button>

    {/* DESCRIPTION */}
  <div className="description-box">
    <h1>{project.name}</h1>
    <p>{project.desc}</p>
  </div>

  {/* HERO IMAGE ONLY */}
  <div className="hero">
    <img src={project.heroImg} alt={project.name} />
  </div>



  {/* CHALLENGE */}
<div className="section-row">
  <div className="text">
    <h2>CHALLENGE</h2>
    <p>{project.challenge}</p>
  </div>
  <img src={project.challengeImg} alt="" />
</div>

{/* SOLUTION (REVERSED) */}
<div className="section-row reverse">
  <img src={project.solutionImg} alt="" />
  <div className="text">
    <h2>SOLUTION</h2>
    <p>{project.solution}</p>
  </div>
</div>

{/* IMPACT */}
<div className="section-row">
  <div className="text">
    <h2>IMPACT</h2>
    <p>{project.impact}</p>
  </div>
  <img src={project.impactImg} alt="" />
</div>

</section>
<Footer/></>
  );
};

export default ProjectDetails;