import React from 'react';
import './Hero.css';
import ChatIcon from '../assets/icons/whatsapp.svg';

const BASE_URL = import.meta.env.BASE_URL;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-star"></i>
          <span>5,0 estrelas</span>
          <span className="badge-divider">•</span>
          <span>155+ avaliações</span>
        </div>
        <h1 className="hero-title">
          <span className="highlight">NovaOdonto</span> - Dentista em Canoas
        </h1>
        <p className="hero-subtitle">
          Mais de 155 avaliações 5 estrelas e atendimento especializado para cuidar do seu sorriso.
          Nossa missão é proporcionar qualidade, conforto e segurança em cada consulta.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-calendar-alt"></i>
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
          <a href="tel:555130311020" className="btn btn-secondary">
            <i className="fas fa-phone"></i>
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
