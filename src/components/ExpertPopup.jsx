import React, { useEffect } from "react";
import "../styles/ExpertPopup.css";

const ExpertPopup = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        {/* LEFT PANEL */}
        <div className="popup-left">
          <h3>Speak to Our Experts</h3>
          <p>Let’s create your vision together.</p>

          <div className="popup-review">
            <strong>zonzoc</strong>
            <p>
              “Excellent IT resource outsourcing service. They provided highly
              skilled developers who integrated seamlessly with our team.”
            </p>
          </div>

          <div className="contactmedia">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>

          <div className="popup-contact">
            <span>📧 ahamsuraij@gmail.com</span>
            <span><i class="fa-brands fa-whatsapp"></i> +94 74 030 9534</span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="popup-right">
          <h2>Let’s Build Something Incredible Together</h2>
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

            <label className="budget-label">Estimated Budget (AED)</label>
            <input type="range" min="30000" max="65000" />

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
