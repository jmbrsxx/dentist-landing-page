import React from 'react';
import './Testimonials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'Carol Veeck',
      text: 'Sou muito grata pelo carinho que tiveram com minha mãe de 92 anos. Atendimento eficiente com ótimos profissionais.',
      rating: 5
    },
    {
      name: 'Augusto Kaiser',
      text: 'Procedimento realizado com muita profissionalismo e preocupação em explicar cada etapa do tratamento.',
      rating: 5
    },
    {
      name: 'Mariana Silva',
      text: 'Equipe extremamente competente. Meu clareamento ficou perfeito! Recomendo para todos.',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      text: 'Ótimo atendimento desde o primeiro contato. Meu implante foi um sucesso total.',
      rating: 5
    }
  ];

  return (
    <section className={`testimonials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="testimonials-container">
        <h2 className="testimonials-title">O que nossos pacientes dizem</h2>
        <p className="testimonials-subtitle">
          Avaliações reais de quem confia no nosso trabalho
        </p>
        <div className="testimonials-rating">
          <div className="rating-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
          <span className="rating-value">5,0</span>
          <span className="rating-count">Baseado em 147+ avaliações no Google</span>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <a 
            href="https://g.page/r/-" 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-review-btn"
          >
            <i className="fas fa-star"></i> Deixar avaliação no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
