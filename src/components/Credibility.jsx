import React from 'react';
import './Credibility.css';
import StarIcon from '../assets/icons/sparkle.svg';
import PeopleIcon from '../assets/icons/people.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Credibility = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section className={`credibility fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="credibility-container">
        <div className="credibility-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <img src={StarIcon} alt="Estrelas" />
            </div>
            <div className="stat-content">
              <span className="stat-value">5,0</span>
              <span className="stat-label">Estrelas no Google</span>
              <div className="stat-stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src={PeopleIcon} alt="Pacientes" />
            </div>
            <div className="stat-content">
              <span className="stat-value">147+</span>
              <span className="stat-label">Pacientes satisfeitos</span>
            </div>
          </div>
        </div>
        <div className="credibility-quotes">
          <div className="quote-card">
            <p className="quote-text">"Ótima clínica com profissionais de excelência e muito competentes."</p>
          </div>
          <div className="quote-card">
            <p className="quote-text">"Recomendo a todos, ótimos preços e excelência em atendimento."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
