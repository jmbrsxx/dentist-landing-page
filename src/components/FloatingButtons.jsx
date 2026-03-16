import React from 'react';
import './FloatingButtons.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a 
        href="https://wa.me/5554999999999" 
        className="floating-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" className="floating-btn-icon" />
      </a>
      <a 
        href="tel:5459999999999" 
        className="floating-btn call-btn"
        aria-label="Ligar"
      >
        <span className="floating-btn-icon">📞</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
