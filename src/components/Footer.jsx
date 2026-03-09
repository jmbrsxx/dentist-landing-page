import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Clínica XXXXXXXX</h3>
          <p className="footer-tagline">
            Sua clínica de confiança para cuidar do seu sorriso em Canoas.
          </p>
          <div className="footer-contact">
            <p>📍 R. XXXXXXXXXXXX</p>
            <p>Centro, Canoas - RS</p>
            <p>📞 (51) XXXXXXXXX</p>
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
        <p>© {new Date().getFullYear()} Clínica XXXXXXXX. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
