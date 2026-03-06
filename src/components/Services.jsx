import React from 'react';
import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ToothIcon from '../assets/icons/tooth.svg';
import SparkleIcon from '../assets/icons/sparkle.svg';
import ToolIcon from '../assets/icons/tool.svg';
import BoneIcon from '../assets/icons/bone.svg';
import DiamondIcon from '../assets/icons/diamond.svg';
import ElderlyIcon from '../assets/icons/elderly.svg';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: ToothIcon,
      title: 'Limpeza Dental',
      description: 'Remove placa bacteriana e tártaro para manter seus dentes saudáveis e gengivas em bom estado.',
      button: 'Saiba mais'
    },
    {
      icon: SparkleIcon,
      title: 'Clareamento Dental',
      description: 'Deixe seu sorriso mais branco e brilhante com técnicas seguras e eficientes.',
      button: 'Saiba mais'
    },
    {
      icon: ToolIcon,
      title: 'Tratamento de Canal',
      description: 'Salve dentes comprometidas com procedimentos modernos e sem dor.',
      button: 'Saiba mais'
    },
    {
      icon: BoneIcon,
      title: 'Extração Dentária',
      description: 'Procedimentos seguros e indolores para remoção de dentes com segurança.',
      button: 'Saiba mais'
    },
    {
      icon: DiamondIcon,
      title: 'Implantes Dentários',
      description: 'Recupere a função e estética dos dentes perdidos com implantes de qualidade.',
      button: 'Saiba mais'
    },
    {
      icon: ElderlyIcon,
      title: 'Atendimento para Idosos',
      description: 'Carecimento especial e adaptado para pacientes da terceira idade.',
      button: 'Saiba mais'
    }
  ];

  return (
    <section id="services" className={`services fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>
        <p className="services-subtitle">
          Tratamentos odontológicos completos para toda a família
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-btn">{service.button}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
