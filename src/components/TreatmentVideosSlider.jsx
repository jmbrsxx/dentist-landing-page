import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TreatmentVideosSlider.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BASE_URL = import.meta.env.BASE_URL;

export default function TreatmentVideosSlider() {
  const [ref, isVisible] = useScrollAnimation();

  const treatments = [
    {
      title: 'Limpeza Profissional',
      description: 'Remoção completa de placa bacteriana e resíduos para uma boca mais limpa e saudável',
      videos: ['lavagem.mp4', 'lavagem 1.mp4', 'lavagem 2.mp4'],
      icon: 'fa-spray-can'
    },
    {
      title: 'Remoção de Tártaro',
      description: 'Eliminação do tártaro acumulado que danifica os dentes e gengivas',
      videos: ['limpando tártaro.mp4', 'limpando tártaro 1.mp4', 'limpando tártaro 2.mp4', 'limpando tártaro 3.mp4', 'limpando tártaro 4.mp4'],
      icon: 'fa-tooth'
    },
    {
      title: 'Polimento Dental',
      description: 'Acabamento suave para deixar seus dentes brilhantes e irresistivelmente brancos',
      videos: ['polimento.mp4', 'polimento (2).mp4'],
      icon: 'fa-wand-magic-sparkles'
    }
  ];

  return (
    <section id="procedimentos" className={`treatment-videos-section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="section-container">
        <h2 className="section-title">Procedimentos em Ação</h2>
        <p className="section-subtitle">Veja nossos tratamentos dentários em movimento</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="treatments-main-swiper"
        >
          {treatments.map((treatment, index) => (
            <SwiperSlide key={index} className="treatment-card-slide">
              <div className="treatment-card">
                <div className="treatment-card-header">
                  <div className="treatment-card-icon"><i className={`fas ${treatment.icon}`}></i></div>
                  <div className="treatment-card-title-wrapper">
                    <h3 className="treatment-card-title">{treatment.title}</h3>
                    <p className="treatment-card-description">{treatment.description}</p>
                  </div>
                </div>

                <div className="treatment-card-videos">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className="treatment-videos-swiper"
                  >
                    {treatment.videos.map((video, videoIndex) => (
                      <SwiperSlide key={videoIndex} className="treatment-video-slide">
                        <video
                          width="100%"
                          height="100%"
                          autoPlay
                          muted
                          loop
                        >
                          <source src={`${BASE_URL}videos/${video}`} type="video/mp4" />
                          Seu navegador não suporta vídeos.
                        </video>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
