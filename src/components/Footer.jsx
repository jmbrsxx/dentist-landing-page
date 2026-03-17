import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">NovaOdonto</h3>
          <p className="footer-tagline">
            Sua clínica de confiança para cuidar do seu sorriso em Canoas.
          </p>
          <div className="footer-contact">
            <p><i className="fas fa-map-marker-alt"></i> R. Quinze de Janeiro, 373 - Sala 604</p>
            <p>Centro, Canoas - RS, 9210-300</p>
            <p><i className="fas fa-phone"></i> (51) 3031-1020 </p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#contact">Agendar Consulta</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#contact">Limpeza Dental</a></li>
            <li><a href="#contact">Clareamento</a></li>
            <li><a href="#contact">Tratamento de Canal</a></li>
            <li><a href="#contact">Implantes</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NovaOdonto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
