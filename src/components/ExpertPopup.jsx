import React, { useEffect, useState } from "react";
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(5000);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  if (!open) return null;

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;
  const sliderBackground = `linear-gradient(to right, #000 0%, #000 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

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
            Tell us what you're looking for and our experts will get back to you.
          </p>

          <form
            action="https://formsubmit.co/info@zonzoctech.com"
            method="POST"
            className="popup-form"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* HIDDEN CONFIG */}
            <input type="hidden" name="_subject" value="New Expert Consultation Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* USER DATA */}
            <input type="hidden" name="Service" value={selectedService} />
            <input type="hidden" name="Budget" value={`$${budget}`} />

            <div className="form-grid">
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
              name="Interested Service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
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
            />

            <textarea
              name="project"
              placeholder="Tell us about the project"
              value={formData.project}
              onChange={handleInputChange}
              required
            />

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
