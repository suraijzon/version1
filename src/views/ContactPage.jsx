'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";
import Breadcrumb from "../components/Breadcrumb";

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
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const data = { ...formData, service: selectedService, budget };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setResponseMessage("✓ Message sent successfully!");
        setIsSuccess(true);
      } else {
        setResponseMessage("✗ Error sending message.");
        setIsSuccess(false);
      }
    } catch {
      setResponseMessage("✗ Server error.");
      setIsSuccess(false);
    }

    setFormData({ name: "", company: "", phone: "", email: "", project: "" });
    setSelectedService("");
    setBudget(5000);
    setIsSubmitting(false);
    setTimeout(() => { setResponseMessage(""); }, 5000);
  };

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;

  const sliderBackground = `linear-gradient(to right, #8e24aa 0%, #8e24aa ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

  const processSteps = [
    { title: "01 — We Review Your Message", desc: "We read every enquiry carefully and research your business, website and market before responding." },
    { title: "02 — Free Strategy Session", desc: "We schedule a free call to discuss your goals, challenges and what the right solution looks like for your specific situation." },
    { title: "03 — Custom Proposal", desc: "We send a clear, itemised proposal with no hidden costs — tailored to your goals, timeline and budget." },
    { title: "04 — We Start Building", desc: "Once approved we hit the ground running — with a dedicated team and clear milestones from day one." },
  ];

  const trustPoints = [
    { title: "✅ 24 Hour Response Guarantee", desc: "We respond to every enquiry within 24 hours — no chasing, no waiting weeks for a quote." },
    { title: "✅ No Obligation Consultation", desc: "Our initial consultation is completely free with no commitment required — just honest advice about what will work for your business." },
    { title: "✅ Transparent Pricing", desc: "No hidden fees. No surprise invoices. Every proposal is clear, itemised and agreed upfront before any work begins." },
    { title: "✅ Dedicated Project Team", desc: "You get direct access to your project team — not an account manager who passes messages. Real people, real communication." },
  ];

  const faqs = [
    { question: "How quickly do you respond to enquiries?", answer: "We respond to all enquiries within 24 hours — usually much faster during UK and USA business hours." },
    { question: "Do you work with businesses in the UK and USA?", answer: "Yes — the majority of our clients are based in the UK, USA and Europe. We work fully remotely across time zones with no difference in quality or communication compared to a local agency." },
    { question: "Is the initial consultation really free?", answer: "Yes. Our initial consultation is completely free with no commitment required. We will review your website or idea and give you honest, practical advice — whether you work with us or not." },
    { question: "What information should I include in my message?", answer: "The more context you give us the better. Tell us what you need, your rough timeline, your budget range and your business goals. This helps us prepare a more relevant and useful response for your first call." },
    { question: "Do you offer fixed price projects or monthly retainers?", answer: "We offer both. Fixed price for one-off projects like website builds and app development. Monthly retainers for ongoing services like SEO, maintenance and AI optimization." },
  ];

  return (
    <>
      <div className="cp__wrapper">
        <Navbar />
        <Breadcrumb />

        {/* Hero Section */}
        <section className="cp__consult_section">
          <div className="cp__container">
            <h1 className="cp__heading">Let's Build Something Great Together</h1>
            <p style={{ maxWidth: "680px", margin: "0 auto 24px", textAlign: "center", lineHeight: "1.7" }}>
              Whether you need a new website, an SEO strategy, AI automation or a full digital growth plan — we are ready to help. Tell us about your project and we will get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="cp__form_section">
          <div className="cp__container">
            <h2 className="cp__heading">Get In Touch</h2>
            <div className="cp__steps_grid">
              <div className="cp__step_card">
                <h3>Email Us</h3>
                <p>info@zonzoctech.com</p>
              </div>
              <div className="cp__step_card">
                <h3>WhatsApp & Phone</h3>
                <p>+94 74 030 9534</p>
              </div>
              <div className="cp__step_card">
                <h3>Working Hours</h3>
                <p>Monday to Friday — 9am to 6pm (UK & USA time zones)</p>
              </div>
              <div className="cp__step_card">
                <h3>Response Time</h3>
                <p>We respond to all enquiries within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="cp__form_section">
          <div className="cp__container">
            <h2 className="cp__heading">Send Us a Message</h2>
            <p style={{ textAlign: "center", marginBottom: "32px" }}>
              Fill in the form below and we will review your requirements and get back to you with a free consultation or proposal within 24 hours.
            </p>

            {responseMessage && (
              <div className={`alert ${isSuccess ? "alert-success" : "alert-error"}`}>
                {responseMessage}
              </div>
            )}

            <form className="cp__form" onSubmit={handleSubmit}>
              <div className="cp__form_grid">
                <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleInputChange} required />
                <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleInputChange} />
                <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required />
              </div>

              <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                <option value="">You are interested in</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Free Website Growth plan">Free Website Growth Plan</option>
                <option value="SEO">SEO</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Website Development">Website Development</option>
              </select>

              <label className="cp__budget">Estimated Budget (USD): ${budget}</label>

              <input
                className="cp__slider"
                type="range"
                min="5000"
                max="65000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ background: sliderBackground }}
              />

              <textarea name="project" placeholder="Tell us about the project" value={formData.project} onChange={handleInputChange} required />

              <button type="submit" className="cp__submit_btn" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "Submit"}
              </button>
            </form>
          </div>
        </section>

        {/* Process Section */}
        <section className="cp__consult_section">
          <div className="cp__container">
            <h2 className="cp__heading">What Happens After You Contact Us</h2>
            <div className="cp__steps_grid">
              {processSteps.map((step, i) => (
                <div key={i} className="cp__step_card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="cp__form_section">
          <div className="cp__container">
            <h2 className="cp__heading">Why Businesses Across the UK & USA Trust ZonzocTech</h2>
            <div className="cp__steps_grid">
              {trustPoints.map((point, i) => (
                <div key={i} className="cp__step_card">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="cp__consult_section">
          <div className="cp__container">
            <h2 className="cp__heading">Contact & Working Together — Frequently Asked Questions</h2>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <h3 style={{ marginBottom: "8px" }}>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="cp__form_section">
          <div className="cp__container" style={{ textAlign: "center" }}>
            <h2 className="cp__heading">Ready to Start?</h2>
            <p style={{ marginBottom: "24px" }}>
              Send us a message above or reach us directly on WhatsApp for a faster response.
            </p>
            <a
              href="https://wa.me/94740309534"
              className="cp__submit_btn"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Chat on WhatsApp →
            </a>
            <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.7 }}>No commitment. No spam. Just results.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
