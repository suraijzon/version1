import React, { useEffect, useState } from "react";
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose }) => {
  const [budget, setBudget] = useState(30000); // Track slider value

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  // Calculate slider background fill
  const sliderBackground = `linear-gradient(to right, #000 0%, #000 ${
    ((budget - 30000) / (65000 - 30000)) * 100
  }%, #ddd ${((budget - 30000) / (65000 - 30000)) * 100}%, #ddd 100%)`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close icon */}
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

          {/* Contact info moved to bottom */}
          <div className="popup-contact">
            <span>
              <i className="fa-solid fa-envelope"></i> ahamsuraij@gmail.com
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

          <form className="popup-form">
            <div className="form-grid">
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Company / Organization" />
              <input type="tel" placeholder="Phone Number*" />
              <input type="email" placeholder="Email*" />
            </div>

            <select>
              <option>You are interested in</option>
              <option>Website Development</option>
              <option>SEO</option>
              <option>AI Solutions</option>
              <option>UI/UX Design</option>
            </select>

            <label className="budget-label">
              Estimated Budget (AED): {budget}
            </label>
            <input
              type="range"
              min="30000"
              max="65000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{ background: sliderBackground }}
            />

            <textarea placeholder="Tell us about the project"></textarea>

            <div className="popup-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;