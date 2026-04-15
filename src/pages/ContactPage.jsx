import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";
import SEO from "../components/SEO";
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

// ✅ MESSAGE STATE
const [responseMessage, setResponseMessage] = useState("");
const [isSuccess, setIsSuccess] = useState(false);

const handleInputChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);
setResponseMessage("");


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

// ✅ ALWAYS CLEAR FORM (your requirement)
setFormData({
  name: "",
  company: "",
  phone: "",
  email: "",
  project: ""
});

setSelectedService("");
setBudget(5000);

setIsSubmitting(false);

setTimeout(() => {
  setResponseMessage("");
}, 5000);


};

const percentage = ((budget - 5000) / (65000 - 5000)) * 100;

const sliderBackground = `linear-gradient(
    to right,     #8e24aa 0%,     #8e24aa ${percentage}%,     #ddd ${percentage}%,     #ddd 100%
  )`;

 const services = [
"AI Web Application Development",
"AI Software Development",
"Full-Stack Website Development",
"AI Website Design & UX",
"SEO Services",
"AI Search Optimization (GEO)",
"E-commerce Development\n& Optimization",
"AI Automation & Integrations",
"Website Performance,Security\n & Maintenance",
];

const steps = [
"We review your message",
"We analyze your website or idea",
"We schedule a call or send a proposal",
];

return (
<> <SEO
     title="Contact Zonzoctech | Start Your Digital Growth"
     description="Speak with our AI and SEO experts to discuss your project."
   />


  <div className="cp__wrapper">

    <Navbar />
    <Breadcrumb />

    <section className="cp__form_section">
      <div className="cp__container">

        <h2 className="cp__heading">Send Us a Message</h2>

        {/* ✅ MESSAGE */}
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

          <textarea name="project" placeholder="Tell us about the project" value={formData.project} onChange={handleInputChange} required />

          <button type="submit" className="cp__submit_btn" disabled={isSubmitting}>
            {isSubmitting ? "SENDING..." : "Submit"}
          </button>

        </form>

      </div>
    </section>
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

    <Footer />

  </div>
</>


);
};

export default ContactPage;
