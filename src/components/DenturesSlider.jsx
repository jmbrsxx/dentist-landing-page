import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function DenturesSlider() {
  const dentureImages = [
    'dentadura (1).jpeg',
    'dentadura (2).jpeg',
    'dentadura (3).jpeg',
  ];

  return (
    <section className="gallery-section dentures-section">
      <div className="section-container">
        <h2 className="section-title">Dentaduras</h2>
        <p className="section-subtitle">Soluções completas para sua saúde bucal</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 6000,
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
          {dentureImages.map((image, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img 
                src={`${BASE_URL}images/${image}`} 
                alt={`Dentadura ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
