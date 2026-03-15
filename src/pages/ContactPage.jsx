import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";
import SEO from "../components/SEO";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: ""
  });

  const [budget, setBudget] = useState(5000);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      service: selectedService,
      budget
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          project: ""
        });

        setSelectedService("");
        setBudget(5000);

      } else {
        alert("Error sending message");
      }

    } catch {
      alert("Server error");
    }

    setIsSubmitting(false);
  };

  /* ===== SLIDER COLOR LOGIC ===== */

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;

  const sliderBackground = `linear-gradient(
    to right,
    #8e24aa 0%,
    #8e24aa ${percentage}%,
    #ddd ${percentage}%,
    #ddd 100%
  )`;

  const services = [
    "AI Web Application Development",
    "AI Software Development",
    "Full-Stack Website Development",
    "AI Website Design & UX",
    "SEO Services",
    "AI Search Optimization (GEO)",
    "E-commerce Development & Optimization",
    "AI Automation & Integrations",
    "Website Performance, Security & Maintenance",
  ];

  const steps = [
    "We review your message",
    "We analyze your website or idea",
    "We schedule a call or send a proposal",
  ];

  const faqs = [
    {
      q: "Do you work with international clients?",
      a: "Yes. We work with clients globally and collaborate remotely.",
    },
    {
      q: "Do you offer free audits or consultations?",
      a: "Yes. We offer free website, SEO, and AI feasibility reviews.",
    },
    {
      q: "How soon can you start?",
      a: "Depending on scope, projects usually start within 3–7 days.",
    },
    {
      q: "Do you work with startups and small businesses?",
      a: "Absolutely. We tailor solutions based on stage and budget.",
    },
  ];

  const whyContact = [
    "AI + development + SEO expertise",
    "Clear communication",
    "Business-focused solutions",
    "No generic packages",
    "Built for long-term growth",
  ];

  return (
    <>
      <SEO
        title="Contact Zonzoctech | Start Your Digital Growth"
        description="Speak with our AI and SEO experts to discuss your project, strategy, and scalable digital transformation plans."
      />

      <div className="cp__wrapper">

        <Navbar />

        {/* HERO */}
        <section className="cp__hero">
          <div className="cp__hero_container">
            <h1 className="cp__hero_title">Contact ZonzocTech</h1>
            <p className="cp__hero_text">
              Let’s Build Something That Grows Your Business.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="cp__help_section">
          <div className="cp__container">

            <h2 className="cp__heading">How Can We Help You?</h2>
            <p className="cp__subtitle">You can contact us for:</p>

            <div className="cp__services_grid">
              {services.map((service, index) => (
                <div key={index} className="cp__service_card">
                  <span className="cp__service_icon">✔</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONSULTATION */}
        <section className="cp__consult_section">
          <div className="cp__container">

            <h2 className="cp__heading">Request a Free Consultation</h2>

            <div className="cp__steps_grid">
              {steps.map((step, index) => (
                <div key={index} className="cp__step_card">
                  <div className="cp__step_number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="cp__form_section">

          <div className="cp__container">

            <h2 className="cp__heading">Send Us a Message</h2>

            <form className="cp__form" onSubmit={handleSubmit}>

              <div className="cp__form_grid">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">You are interested in</option>
                <option value="Website Development">Website Development</option>
                <option value="SEO">SEO</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>

              <label className="cp__budget">
                Estimated Budget (USD): ${budget}
              </label>

              <input
                className="cp__slider"
                type="range"
                min="5000"
                max="65000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ background: sliderBackground }}
              />

              <textarea
                name="project"
                placeholder="Tell us about the project"
                value={formData.project}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="cp__submit_btn">
                {isSubmitting ? "SENDING..." : "Submit"}
              </button>

            </form>

          </div>

        </section>

        <Footer />

      </div>
    </>
  );
};

export default ContactPage;