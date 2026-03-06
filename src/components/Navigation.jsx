import React from 'react';
import './Navigation.css';
import ToothIcon from '../assets/icons/tooth.svg';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src={ToothIcon} alt="Logo" className="nav-logo-icon" />
          NovaOdonto
        </a>
        <ul className="nav-menu">
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#contact" className="nav-cta">Agendar Consulta</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
