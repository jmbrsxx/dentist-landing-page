import React, { useState } from 'react';
import './Navigation.css';
import ToothIcon from '../assets/icons/tooth.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src='images/novaodontologo.png' alt="Logo" className="nav-logo-icon" />
          NovaOdonto
        </a>
        
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Serviços</a></li>
          <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Agendar Consulta</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
