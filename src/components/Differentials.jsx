import React from 'react';
import './Differentials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import HeartIcon from '../assets/icons/heart.svg';
import TrophyIcon from '../assets/icons/trophy.svg';
import StarIcon from '../assets/icons/sparkle.svg';
import HomeIcon from '../assets/icons/home.svg';
import UserIcon from '../assets/icons/user.svg';

const Differentials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const differentials = [
    {
      icon: HeartIcon,
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada paciente com carinho e atenção personalizada'
    },
    {
      icon: TrophyIcon,
      title: 'Profissionais Qualificados',
      description: 'Equipe com formação especializada e experiência comprovada'
    },
    {
      icon: StarIcon,
      title: 'Excelentes Avaliações',
      description: '5,0 estrelas no Google com +147 pacientes satisfeitos'
    },
    {
      icon: HomeIcon,
      title: 'Clínica Acolhedora',
      description: 'Ambiente moderno, limpo e confortável para você'
    },
    {
      icon: UserIcon,
      title: 'Atendimento Personalizado',
      description: 'Plano de tratamento individualizado para suas necessidades'
    }
  ];

  return (
    <section className={`differentials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="differentials-container">
        <h2 className="differentials-title">Por que escolher a Clínica?</h2>
        <p className="differentials-subtitle">
          Nossos diferenciais que fazem a diferença no seu tratamento
        </p>
        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <div key={index} className={`differential-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="differential-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
