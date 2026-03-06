import React from 'react';
import './FinalCTA.css';
import ToothIcon from '../assets/icons/tooth.svg';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FinalCTA = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section className={`final-cta fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="final-cta-container">
        <h2 className="final-cta-title">
          <img src={ToothIcon} alt="" className="cta-tooth-icon" />
          Cuide do seu sorriso hoje mesmo
        </h2>
        <p className="final-cta-subtitle">
          Agende sua consulta e descubra como é fácil ter um sorriso saudável e bonito
        </p>
        <div className="final-cta-buttons">
          <a href="#contact" className="cta-primary">
            📅 Agendar Consulta
          </a>
          <a 
            href="https://wa.me/5551993111020" 
            className="cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="cta-chat-icon" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
