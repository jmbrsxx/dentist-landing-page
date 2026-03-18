import React, { useState } from 'react';
import './Navigation.css';
import ToothIcon from '../assets/icons/tooth.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
    closeMenu();
  };

  const services = [
    { label: 'Antes e Depois', link: '#antes-depois' },
    { label: 'Próteses', link: '#dentaduras' },
    { label: 'Resultados', link: '#resultados' },
    { label: 'Procedimentos', link: '#procedimentos' }
  ];

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
          <li className="nav-item-with-dropdown">
            <button className="nav-link-button" onClick={toggleServices}>
              Serviços
              <span className={`dropdown-arrow ${isServicesOpen ? 'active' : ''}`}>▼</span>
            </button>
            <div className={`dropdown-menu ${isServicesOpen ? 'active' : ''}`}>
              {services.map((service, index) => (
                <a key={index} href={service.link} className="dropdown-link" onClick={closeServices}>
                  {service.label}
                </a>
              ))}
            </div>
          </li>
          <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Agendar Consulta</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
