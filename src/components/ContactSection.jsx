'use client';
import React, { useState } from 'react';
import '../styles/contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('');

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } else {
      setSubmitStatus('error');
    }

  } catch (error) {
    console.error(error);
    setSubmitStatus('error');
  }

  setIsSubmitting(false);
};

  const steps = [
    { number: '01', text: '01 — Share Your Requirements', desc: 'Tell us about your project, goals and timeline.' },
    { number: '02', text: '02 — Free Strategy Call', desc: 'We\'ll schedule a call to discuss your needs in detail.' },
    { number: '03', text: '03 — Receive a Custom Proposal', desc: 'Get a clear, itemised proposal with no hidden costs.' },
    { number: '04', text: '04 — We Start Building', desc: 'Once approved, we hit the ground running immediately.' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
<h2 className="contact-title">Ready to Grow Your Business?</h2>
          <p className="contact-subtitle">
            Tell us about your project and we'll put together a free, no-obligation growth plan within 24 hours.
          </p>

          <div className="contact-email">
            <div className="email-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <span className="email-text">info@zonzoctech.com</span>
          </div>

          <h3 className="steps-heading">Here's What Happens Next:</h3>
          <div className="contact-steps">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <div>
                  <p className="step-text">{step.text}</p>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <h3 className="form-title">Send Us a Message</h3>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert alert-error">
              ✗ Oops! Something went wrong. Please try again or email us directly at info@zonzoctech.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-building"></i>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <i className="fa-solid fa-comment"></i>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'Send My Free Proposal →'}
            </button>
            <p className="submit-note">No commitment. No spam. Just results.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;