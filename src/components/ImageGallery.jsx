import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    { src: '/images/treatment-before-after-1.jpg', alt: 'Antes e Depois - Implante Dentário NovaOdonto' },
    { src: '/images/treatment-before-after-2.jpg', alt: 'Resultado de Tratamento Odontológico em Canoas' },
    { src: '/images/clinic-interior-1.jpg', alt: 'Clínica NovaOdonto - Espaço Moderno em Canoas' },
    { src: '/images/team-photo.jpg', alt: 'Equipe Profissional de Dentistas NovaOdonto' },
    { src: '/images/treatment-smile-1.jpg', alt: 'Transformação de Sorriso - Estética Dental' },
    { src: '/images/equipment-modern.jpg', alt: 'Equipamentos Modernos Clínica Odontológica' },
  ];

  return (
    <section className="image-gallery">
      <div className="container">
        <h2 className="gallery-title">Our Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;