import React from "react";
import whatsappBanner from "../assets/icons/whatsapp-banner.png";
import "../styles/whatsapp.css";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/94740309534"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsappBanner} alt="Chat with us on WhatsApp" />
    </a>
  );
};

export default WhatsappFloat;