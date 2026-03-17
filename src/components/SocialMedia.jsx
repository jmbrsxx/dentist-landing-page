import React from 'react';
import './SocialMedia.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BASE_URL = import.meta.env.BASE_URL;

const SocialMedia = () => {
  const [ref, isVisible] = useScrollAnimation();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/novaodontocanoas',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/novaodontocanoas',
      color: '#E4405F'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/555130311020',
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:contato@novaodontocanoas.com.br',
      color: '#EA4C89'
    }
  ];

  return (
    <section id="social-media" className={`social-media fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="social-media-container">
        <div className="social-media-content">
          <h2 className="social-media-title">Siga Nossas Redes Sociais</h2>
          <p className="social-media-subtitle">
            Acompanhe nossos conteúdos, antes e depois, dicas de saúde bucal e muito mais
          </p>
          
          <div className="social-links-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                style={{ '--social-color': social.color }}
                title={`Visite nosso ${social.name}`}
              >
                <i className={social.icon}></i>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <p className="social-media-text">
            Compartilhe seu resultado e apareça no nosso feed de pacientes satisfeitos!
          </p>
        </div>

        <div className="social-media-video">
          <div className="social-video-placeholder">
            <div className="social-video-blur-background">
              <video 
                src={`${BASE_URL}videos/marketing.mp4`}
                autoPlay
                muted
                loop
                className="social-video-blur" 
              />
            </div>
            <video 
              src={`${BASE_URL}videos/marketing.mp4`}
              autoPlay
              muted
              loop
              className="social-video" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
