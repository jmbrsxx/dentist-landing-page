import React from 'react';
import './SocialNetworks.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BASE_URL = import.meta.env.BASE_URL;

const SocialNetworks = () => {
  const [ref, isVisible] = useScrollAnimation();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/novaodontocanoas',
      link: 'facebook.com/novaodontocanoas'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/novaodontocanoas',
      link: 'instagram.com/novaodontocanoas'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/555130311020',
      link: 'wa.me/555130311020'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:contato@novaodontocanoas.com.br',
      link: 'contato@novaodontocanoas.com.br'
    }
  ];

  return (
    <section id="social-networks" className={`social-networks fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="social-networks-container">
        <div className="social-content">
          <h2 className="social-title">Siga nossas Redes Sociais</h2>
          <p className="social-subtitle">
            Acompanhe nosso dia a dia, dicas de saúde bucal e resultados incríveis de nossos pacientes
          </p>
          <div className="social-icons-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title={social.name}
              >
                <i className={social.icon}></i>
                <span className="social-link-text">{social.link}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="social-video-container">
          <div className="social-video-placeholder">
            <video 
              src={`${BASE_URL}videos/marketing.mp4`}
              autoPlay
              muted
              loop
              className="video-bg" 
            />
            
            <video 
              src={`${BASE_URL}videos/marketing.mp4`}
              autoPlay
              muted
              loop
              className="video-main" 
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworks;
