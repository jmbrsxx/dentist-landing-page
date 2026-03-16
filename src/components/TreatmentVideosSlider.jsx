import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TreatmentVideosSlider.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function TreatmentVideosSlider() {
  const treatments = [
    {
      title: 'Limpeza Profissional',
      videos: ['lavagem.mp4', 'lavagem 1.mp4', 'lavagem 2.mp4'],
      icon: '🧼'
    },
    {
      title: 'Remoção de Tártaro',
      videos: ['limpando tártaro.mp4', 'limpando tártaro 1.mp4', 'limpando tártaro 2.mp4', 'limpando tártaro 3.mp4', 'limpando tártaro 4.mp4'],
      icon: '🦷'
    },
    {
      title: 'Polimento Dental',
      videos: ['polimento.mp4', 'polimento (2).mp4'],
      icon: '✨'
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="treatment-videos-section">
      <div className="section-container">
        <h2 className="section-title">Procedimentos em Ação</h2>
        <p className="section-subtitle">Veja nossos tratamentos dentários em movimento</p>
        
        <div className="treatment-tabs">
          {treatments.map((treatment, index) => (
            <button
              key={index}
              className={`treatment-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-icon">{treatment.icon}</span>
              {treatment.title}
            </button>
          ))}
        </div>

        <div className="treatment-content">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`treatment-videos ${activeTab === index ? 'active' : ''}`}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                  768: { slidesPerView: 2 },
                }}
                className="treatment-swiper"
              >
                {treatment.videos.map((video, videoIndex) => (
                  <SwiperSlide key={videoIndex} className="video-slide">
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
          ))}
        </div>
      </div>
    </section>
  );
}
