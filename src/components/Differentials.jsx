import React from 'react';
import './Differentials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Differentials = () => {
  const [ref, isVisible] = useScrollAnimation();

  const highlights = [
    {
      title: 'Excelência Comprovada',
      description: 'Avaliação 5,0 estrelas no Google com mais de 147 pacientes satisfeitos',
      icon: '⭐'
    },
    {
      title: 'Profissionais Especializados',
      description: 'Equipe com formação especializada e experiência comprovada em todas as áreas',
      icon: '👨‍⚕️'
    },
    {
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado e atenção individualizada para cada paciente',
      icon: '💜'
    }
  ];

  return (
    <section className={`differentials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="differentials-container">
        <h2 className="differentials-title">Por que escolher a NovaOdonto?</h2>
        
        <p className="differentials-intro">
          Na NovaOdonto, acreditamos que excelência odontológica vai além da técnica. Somos comprometidos em oferecer um atendimento humanizado, acolhedor e orientado aos resultados que nossos pacientes buscam.
        </p>

        <div className="differentials-highlights">
          {highlights.map((item, index) => (
            <div key={index} className={`highlight-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="differentials-closing">
          Cada paciente recebe um plano de tratamento personalizado, desenvolvido em um ambiente moderno e confortável. Isso é o que nos diferencia: o compromisso real com o sucesso do seu tratamento e com sua satisfação.
        </p>
      </div>
    </section>
  );
};

export default Differentials;
