import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(5000);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    project: ''
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (preSelectedService) {
        setSelectedService(preSelectedService);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, preSelectedService]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration 
    const serviceID = 'service_nq9sanx';        // ✅ Your Service ID
    const templateID = 'template_ae2jgo2'; // 📝 PASTE YOUR TEMPLATE ID HERE
    const publicKey = 'r3l8L0Rdu85cn7oZc';   // 📝 PASTE YOUR PUBLIC KEY HERE

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      phone: formData.phone,
      from_email: formData.email,
      service: selectedService,
      budget: `$${budget.toLocaleString()}`,
      project: formData.project,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          project: ''
        });
        setSelectedService('');
        setBudget(5000);

        // Close popup after 2 seconds
        setTimeout(() => {
          setSubmitStatus('');
          onClose();
        }, 2000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus('error');
        setIsSubmitting(false);

        // Clear error after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      });
  };

  if (!open) return null;

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;
  const sliderBackground = `linear-gradient(to right, #000 0%, #000 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        {/* LEFT PANEL */}
        <div className="popup-left">
          <div className="popup-left-top">
            <h3>Speak to Our Experts</h3>
            <p>Let's create your vision together.</p>

            <div className="popup-review">
              <strong>zonzoc</strong>
              <p>
                "Excellent IT resource outsourcing service. They provided highly
                skilled developers who integrated seamlessly with our team."
              </p>
            </div>

            <div className="contactmedia">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>

          <div className="popup-contact">
            <span>
              <i className="fa-solid fa-envelope"></i> info@zonzoctech.com
            </span>
            <span>
              <i className="fa-brands fa-whatsapp"></i> +94 74 030 9534
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="popup-right">
          <h2>Let's Build Something Incredible Together</h2>
          <p className="popup-subtext">
            Tell us what you're looking for and our experts will get back to you
            with tailored solutions to meet your needs.
          </p>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              ✓ Thank you! Your message has been sent successfully. We'll contact you soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert alert-error">
              ✗ Something went wrong. Please try again or email us at info@zonzoctech.com
            </div>
          )}

          <form onSubmit={handleSubmit} className="popup-form">
            <div className="form-grid">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name*" 
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input 
                type="text" 
                name="company"
                placeholder="Company / Organization" 
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number*" 
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email*" 
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <select 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              disabled={isSubmitting}
            >
              <option value="">You are interested in</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO">SEO</option>
              <option value="Get a Free Website Growth Audit">Get a Free Website Growth Audit</option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>

            <label className="budget-label">
              Estimated Budget (USD): ${budget.toLocaleString()}
            </label>
            <input
              type="range"
              min="5000"
              max="65000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{ background: sliderBackground }}
              disabled={isSubmitting}
            />

            <textarea 
              name="project"
              placeholder="Tell us about the project" 
              value={formData.project}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />

            <div className="popup-actions">
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;