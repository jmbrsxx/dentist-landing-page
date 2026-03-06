import React from 'react';
import './Hero.css';
import ChatIcon from '../assets/icons/whatsapp.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-star">⭐</span>
          <span>5,0 estrelas</span>
          <span className="badge-divider">•</span>
          <span>147+ avaliações</span>
        </div>
        <h1 className="hero-title">
          Dentista em Canoas com <span className="highlight">Atendimento Humanizado</span>
        </h1>
        <p className="hero-subtitle">
          Mais de 147 avaliações 5 estrelas e atendimento especializado para cuidar do seu sorriso.
          Nossa missão é proporcionar qualidade, conforto e segurança em cada consulta.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <span className="btn-icon">📅</span>
            Agendar consulta
          </a>
          <a 
            href="https://wa.me/555130311020" 
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ChatIcon} alt="WhatsApp" className="btn-icon-img" />
            Falar no WhatsApp
          </a>
          <a href="tel:5130311020" className="btn btn-secondary">
            <span className="btn-icon">📞</span>
            Ligar agora
          </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop" 
              alt="Clínica Odontológica NovaOdonto" 
              className="hero-tooth-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
