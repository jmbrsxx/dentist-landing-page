import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Smile Dental</h3>
          <p className="footer-tagline">
            Your trusted partner for a healthier, brighter smile.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="#">General Dentistry</a></li>
            <li><a href="#">Cosmetic Dentistry</a></li>
            <li><a href="#">Orthodontics</a></li>
            <li><a href="#">Dental Implants</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Smile Dental. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
