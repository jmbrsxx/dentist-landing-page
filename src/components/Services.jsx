import React from 'react';
import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
      title: 'Limpeza Profissional',
      description: 'Remove placa bacteriana, tártaro e manchas para manter seus dentes saudáveis, gengivas em perfeito estado e prevenir problemas periodontais.',
      button: 'Saiba mais'
    },
    {
      icon: SparkleIcon,
      title: 'Clareamento Dental',
      description: 'Deixe seu sorriso mais branco e brilhante com técnicas seguras, eficientes e aprovadas. Resultados visíveis em poucos dias.',
      button: 'Saiba mais'
    },
    {
      icon: ToolIcon,
      title: 'Tratamento de Canal',
      description: 'Salve dentes comprometidas com procedimentos modernos, minimamente invasivos e praticamente indolores. Receba atendimento especializado.',
      button: 'Saiba mais'
    },
    {
      icon: BoneIcon,
      title: 'Extração Dentária',
      description: 'Procedimentos seguros, indolores e delicados para remoção de dentes com segurança máxima e recuperação rápida.'
      button: 'Saiba mais'
    },
    {
      icon: DiamondIcon,
      title: 'Implantes Dentários',
      description: 'Recupere a função e estética dos dentes perdidos com implantes de qualidade premium. Solução duradoura para uma dentição completa.',
      button: 'Saiba mais'
    },
    {
      icon: ElderlyIcon,
      title: 'Atendimento Geriátrico',
      description: 'Atendimento especial e adaptado para pacientes da terceira idade. Cuidado humanizado com atenção às necessidades específicas.',
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

        {/* Gallery Section with Swiper */}
        <div className="services-gallery">
          <h3 className="gallery-title">Galeria de Serviços</h3>
          <p className="gallery-subtitle">
            Veja alguns dos nossos tratamentos e procedimentos
          </p>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-card">
                  <div className="gallery-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h4 className="gallery-card-title">{service.title}</h4>
                  <p className="gallery-card-description">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
