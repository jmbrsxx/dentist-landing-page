import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span className="about-emoji">👨‍⚕️</span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">About Our Practice</h2>
          <p className="about-text">
            With over 10 years of experience in dental care, we are committed to 
            providing the highest quality dental services in a comfortable and 
            relaxing environment. Our team of certified professionals uses the 
            latest technology and techniques to ensure the best possible care for 
            you and your family.
          </p>
          <p className="about-text">
            We believe in preventive care and patient education, helping you 
            maintain optimal oral health for life. Our warm and friendly staff 
            is dedicated to making your dental visit a positive experience.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Patients</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
