import React from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section id="about" className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=600&fit=crop" 
              alt="Dentista Profissional Clínica" 
              className="about-dentist-img" 
            />
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">Sobre a Clínica</h2>
          <p className="about-text">
            A <strong>Clínica Dentária</strong> é uma clínica odontológica dedicada a oferecer 
            atendimento humanizado e tratamentos modernos para garantir a saúde e estética do 
            sorriso de seus pacientes.
          </p>
          <p className="about-text">
            Nosso compromisso é proporcionar qualidade, conforto e segurança em cada consulta. 
            Com profissionais qualificados e estrutura moderna, cuidamos do seu sorriso com 
            carinho e excelência.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Mais de 10 anos de experiência</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Atendimento humanizado</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Equipamentos modernos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
