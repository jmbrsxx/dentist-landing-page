import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function TeethResultsSlider() {
  const teethImages = [
    'dentes (1).jpeg',
    'dentes (2).jpeg',
    'dentes (3).jpeg',
    'dentes (4).jpeg',
    'dentes (5).jpeg',
  ];

  return (
    <section id="resultados" className="gallery-section teeth-section">
      <div className="section-container">
        <h2 className="section-title">Resultados Dentários</h2>
        <p className="section-subtitle">Dentes brancos e saudáveis</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="gallery-swiper"
        >
          {teethImages.map((image, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img 
                src={`${BASE_URL}images/${image}`} 
                alt={`Dente ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
