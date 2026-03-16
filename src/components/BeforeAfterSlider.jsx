import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './BeforeAfterSlider.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function BeforeAfterSlider() {
  const beforeAfterImages = [
    'antes e depois (1).jpeg',
    'antes e depois (2).jpeg',
    'antes e depois (3).jpeg',
    'antes e depois (4).jpeg',
    'antes e depois (5).jpeg',
    'antes e depois (8).jpeg',
    'antes e depois (9).jpeg',
  ];

  return (
    <section id="antes-depois" className="before-after-section">
      <div className="section-container">
        <h2 className="section-title">Antes e Depois</h2>
        <p className="section-subtitle">Veja a transformação dos nossos pacientes</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="before-after-swiper"
        >
          {beforeAfterImages.map((image, index) => (
            <SwiperSlide key={index} className="before-after-slide">
              <img 
                src={`${BASE_URL}images/${image}`} 
                alt={`Antes e Depois ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
