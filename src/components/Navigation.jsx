import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">Smile Dental</a>
        <ul className="nav-menu">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Book Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
