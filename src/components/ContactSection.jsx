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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  const steps = [
    { number: '01', text: 'Share your requirements' },
    { number: '02', text: 'Discuss them with our experts' },
    { number: '03', text: 'Receive a customized proposal' },
    { number: '04', text: 'Launch your project successfully' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <div className="you-are-here">
            <span className="here-text">YOU ARE HERE</span>
            <div className="here-line"></div>
          </div>

          <h2 className="contact-title">Let's Start</h2>
          <p className="contact-subtitle">
            Initiating Your Journey to Success and Growth.
          </p>

          <div className="contact-email">
            <div className="email-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <span className="email-text">info@zonzoctech.com</span>
          </div>

          <div className="contact-steps">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <div className="form-header">
            <i className="fa-solid fa-handshake"></i>
            <span className="form-header-text">LET'S CONNECT!</span>
          </div>

          <h3 className="form-title">
            Send us a message, and we'll promptly discuss your project with you.
          </h3>

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
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND REQUEST <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;