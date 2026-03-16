import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    { src: '/images/treatment-before-after-1.jpg', alt: 'Before & After Treatment 1' },
    { src: '/images/treatment-before-after-2.jpg', alt: 'Before & After Treatment 2' },
    { src: '/images/clinic-interior-1.jpg', alt: 'Modern Clinic Facilities' },
    { src: '/images/team-photo.jpg', alt: 'Professional Dental Team' },
    { src: '/images/treatment-smile-1.jpg', alt: 'Smile Transformation 1' },
    { src: '/images/equipment-modern.jpg', alt: 'Advanced Dental Equipment' },
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