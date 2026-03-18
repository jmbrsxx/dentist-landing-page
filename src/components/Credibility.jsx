import React from 'react';
import './Credibility.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PeopleIcon from '../assets/icons/people.svg';
import TrophyIcon from '../assets/icons/trophy.svg';
import DentistIcon from '../assets/icons/dentist.svg';

const CounterCard = ({ icon, count, suffix, label, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="counter-card" ref={ref}>
      <div className="counter-icon">
      </div>
      <div className="counter-content">
        <span className="counter-value">
          {inView ? (
            <CountUp end={count} duration={4} delay={delay} separator="." />
          ) : (
            '0'
          )}
          {suffix}
        </span>
        <span className="counter-label">{label}</span>
      </div>
    </div>
  );
};

const Credibility = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="credibilidade" className="credibility" ref={ref}>
      <div className="credibility-container">
        <h2 className="credibility-title">Nossos Números</h2>
        <p className="credibility-subtitle">
          Compromisso com a excelência e satisfação dos nossos pacientes
        </p>
        <div className="counters-grid">
          <CounterCard 
            icon={PeopleIcon} 
            count={5000} 
            suffix="+" 
            label="Pacientes Atendidos" 
            delay={0}
          />
          <CounterCard 
            icon={TrophyIcon} 
            count={10} 
            suffix="" 
            label="Anos de Experiência" 
            delay={0.3}
          />
          <CounterCard 
            count={1200} 
            suffix="+" 
            label="Implantes Realizados" 
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Credibility;
