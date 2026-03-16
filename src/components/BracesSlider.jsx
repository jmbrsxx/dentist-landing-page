import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';

const BASE_URL = import.meta.env.BASE_URL;

export default function BracesSlider() {
  const bracesImages = ['aparelho.jpeg'];

  return (
    <section className="gallery-section braces-section">
      <div className="section-container">
        <h2 className="section-title">Aparelhos Ortodônticos</h2>
        <p className="section-subtitle">Tratamento moderno para o seu sorriso</p>
        
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
          className="gallery-swiper"
        >
          {bracesImages.map((image, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img 
                src={`${BASE_URL}images/${image}`} 
                alt={`Aparelho Ortodôntico`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
