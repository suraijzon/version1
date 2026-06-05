'use client';
import React, { useEffect, useState } from "react";
import { 
  User, 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare, 
  HelpCircle
} from "lucide-react";
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  // Lowered budget start range value from 5000 to 500
  const [budget, setBudget] = useState(500);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: ""
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      message: formData.project,   
      service: selectedService,
      budget: budget
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
        setSubmitStatus("success");
      
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          project: ""
        });
        setSelectedService("");
        setBudget(500); // Reset budget back to 500
        
        setTimeout(() => {
          onClose();
          setSubmitStatus("");
        }, 2500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  if (!open) return null;

  // Percentage slider range tracks from 500 up to 65000
  const percentage = ((budget - 500) / (65000 - 500)) * 100;
  const sliderBackground = `linear-gradient(to right, #38bdf8 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>

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
              <a href="https://wa.me/94740309534" target="_blank" rel="noopener noreferrer" title="WhatsApp Us">
                {/* Embedded SVG WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ transition: 'transform 0.2s' }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.815 1.481 5.426 0 9.843-4.414 9.846-9.843.001-2.63-1.012-5.101-2.855-6.946C16.611 1.998 14.135 1.01 11.51 1.01c-5.43 0-9.848 4.416-9.851 9.847-.001 1.73.475 3.42 1.378 4.895l-.994 3.63 3.731-.978c1.455.85 3.014 1.29 4.603 1.29zm9.522-6.83c-.263-.131-1.554-.767-1.795-.853-.24-.087-.416-.13-.591.132-.175.263-.679.853-.831 1.029-.153.175-.306.197-.569.066-.263-.131-1.112-.41-2.119-1.31-.783-.698-1.31-1.562-1.464-1.825-.153-.263-.016-.405.115-.536.118-.118.263-.306.394-.46.131-.153.175-.263.263-.438.088-.175.044-.328-.022-.46-.066-.131-.591-1.424-.81-1.95-.213-.514-.429-.444-.591-.452-.153-.007-.328-.008-.503-.008-.175 0-.46.066-.7.328-.24.263-.92.898-.92 2.193s.941 2.544 1.072 2.72c.131.175 1.851 2.827 4.485 3.968.627.272 1.115.434 1.496.555.63.201 1.203.172 1.657.104.506-.076 1.554-.634 1.774-1.246.22-.612.22-1.138.153-1.246-.066-.109-.24-.153-.503-.284z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                {/* Embedded SVG LinkedIn Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00448f" style={{ transition: 'transform 0.2s' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:info@zonzoctech.com" title="Email Us">
                <Mail size={20} color="#ea4335" style={{ transition: 'transform 0.2s' }} />
              </a>
            </div>
          </div>

          <div className="popup-contact">
            <span>
              <Mail size={16} style={{ marginRight: '12px', color: '#00448f' }} />
              info@zonzoctech.com
            </span>
            <span>
              {/* WhatsApp Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" style={{ marginRight: '12px' }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.815 1.481 5.426 0 9.843-4.414 9.846-9.843.001-2.63-1.012-5.101-2.855-6.946C16.611 1.998 14.135 1.01 11.51 1.01c-5.43 0-9.848 4.416-9.851 9.847-.001 1.73.475 3.42 1.378 4.895l-.994 3.63 3.731-.978c1.455.85 3.014 1.29 4.603 1.29zm9.522-6.83c-.263-.131-1.554-.767-1.795-.853-.24-.087-.416-.13-.591.132-.175.263-.679.853-.831 1.029-.153.175-.306.197-.569.066-.263-.131-1.112-.41-2.119-1.31-.783-.698-1.31-1.562-1.464-1.825-.153-.263-.016-.405.115-.536.118-.118.263-.306.394-.46.131-.153.175-.263.263-.438.088-.175.044-.328-.022-.46-.066-.131-.591-1.424-.81-1.95-.213-.514-.429-.444-.591-.452-.153-.007-.328-.008-.503-.008-.175 0-.46.066-.7.328-.24.263-.92.898-.92 2.193s.941 2.544 1.072 2.72c.131.175 1.851 2.827 4.485 3.968.627.272 1.115.434 1.496.555.63.201 1.203.172 1.657.104.506-.076 1.554-.634 1.774-1.246.22-.612.22-1.138.153-1.246-.066-.109-.24-.153-.503-.284z"/>
              </svg>
              +94 74 030 9534
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="popup-right">
          <h2>Let's Build Something Incredible Together</h2>
          <p className="popup-subtext">
            Tell us what you're looking for and our experts will get back to you.
          </p>

          {submitStatus === "success" && (
            <div className="alert alert-success">
              ✓ Message sent successfully! We'll contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="alert alert-error">
              ✗ Failed to send message. Please try again.
            </div>
          )}

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Name field wrapped with SVG Icon */}
              <div className="popup-input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Company field wrapped with SVG Icon */}
              <div className="popup-input-wrapper">
                <Building2 className="input-icon" size={18} />
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              {/* Phone field wrapped with SVG Icon */}
              <div className="popup-input-wrapper">
                <Phone className="input-icon" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email field wrapped with SVG Icon */}
              <div className="popup-input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Service dropdown wrapped with SVG Icon */}
            <div className="popup-input-wrapper">
              <HelpCircle className="input-icon" size={18} />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">You are interested in</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Website Growth Audit">Free Website Growth Plan</option> 
                <option value="SEO">SEO</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Website Development">Website Development</option>                          
              </select>
            </div>

            <label className="budget-label">
              Estimated Budget (USD): <span className="budget-value">${budget.toLocaleString()}</span>
            </label>

            {/* Slider tracks from 500 up to 65000 */}
            <input
              type="range"
              min="500"
              max="65000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{ background: sliderBackground }}
            />

            {/* Textarea wrapped with SVG Icon */}
            <div className="popup-input-wrapper textarea-wrapper">
              <MessageSquare className="input-icon" size={18} />
              <textarea
                name="project"
                placeholder="Tell us about the project"
                value={formData.project}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                {isSubmitting ? "SENDING..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;