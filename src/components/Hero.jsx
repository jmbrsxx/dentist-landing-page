import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Your Smile, Our Passion
        </h1>
        <p className="hero-subtitle">
          Expert dental care for you and your family. 
          Modern techniques, gentle treatment, and beautiful results.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <span className="feature-icon">✦</span>
          <span>10+ Years Experience</span>
        </div>
        <div className="feature">
          <span className="feature-icon">✦</span>
          <span>5000+ Happy Patients</span>
        </div>
        <div className="feature">
          <span className="feature-icon">✦</span>
          <span>Modern Technology</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
