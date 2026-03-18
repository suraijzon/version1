import React, { useState } from "react";
import "../styles/careers.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {

  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Frontend Developer (React)",
      location: "Remote",
      type: "Full Time",
      description:
        "We are looking for a React developer to build modern UI components and scalable web applications."
    },
    {
      title: "SEO Specialist",
      location: "Remote",
      type: "Full Time",
      description:
        "Help businesses grow with advanced SEO strategies including AI search optimization and technical SEO."
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full Time",
      description:
        "Work with modern technologies like React, Node.js, and cloud platforms to build scalable solutions."
    }
  ];

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);

    setTimeout(() => {
      const form = document.getElementById("apply-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="careers-container">

        {/* HERO */}
        <div className="careers-hero">
          <h1>Join Our Team</h1>
          <p>
            At Zonzoctech, we build innovative AI-powered solutions for modern
            businesses. Join our team and help shape the future of technology.
          </p>
        </div>

        {/* JOB LIST */}
        <div className="careers-jobs">

          {jobs.map((job, index) => (
            <div key={index} className="job-card">

              <h2>{job.title}</h2>

              <div className="job-meta">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>

              <p>{job.description}</p>

              <button
                className="apply-btn"
                onClick={() => handleApply(job.title)}
              >
                Apply Now
              </button>

            </div>
          ))}

        </div>

        {/* APPLICATION FORM */}

        {selectedJob && (

          <div id="apply-form" className="apply-form-section">

            <h2>Apply for {selectedJob}</h2>

            <form className="apply-form" onSubmit={handleSubmit}>

              <div className="form-grid">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="text"
                  placeholder="LinkedIn Profile (optional)"
                />

              </div>

              <textarea
                placeholder="Tell us about yourself"
              />

              <div className="cv-upload">
                <label>Upload Your CV</label>
                <input type="file" accept=".pdf,.doc,.docx" />
              </div>

              <button type="submit" className="submit-application">
                Submit Application
              </button>

            </form>

          </div>

        )}

      </div>

      <Footer />
    </>
  );
};

export default Careers;