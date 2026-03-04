import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Regular check-ups, cleanings, and preventive care to keep your smile healthy.'
    },
    {
      icon: '✨',
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.'
    },
    {
      icon: '🔧',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel natural.'
    },
    {
      icon: '👶',
      title: 'Pediatric Dentistry',
      description: 'Gentle and caring dental services for children of all ages.'
    },
    {
      icon: '🦴',
      title: 'Orthodontics',
      description: 'Traditional braces and clear aligners for straighter teeth.'
    },
    {
      icon: '💎',
      title: 'Cosmetic Dentistry',
      description: 'Veneers, bonding, and smile makeovers to transform your smile.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Comprehensive dental care for the whole family
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
