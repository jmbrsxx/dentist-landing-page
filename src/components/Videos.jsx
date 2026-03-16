import React from 'react';
import './Videos.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Videos = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const videos = [
    {
      id: 1,
      title: 'Apresentação da Clínica',
      description: 'Conheça nossa estrutura moderna e acolhedora',
      thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Tratamentos Odontológicos',
      description: 'Saiba mais sobre nossos serviços especializados',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Depoimento de Pacientes',
      description: 'Veja o que nossos pacientes dizem sobre nós',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="videos" className={`videos-section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="videos-container">
        <h2 className="videos-title">Vídeos da NovaOdonto</h2>
        <p className="videos-subtitle">
          Assista nossos vídeos e conheça mais sobre nossos tratamentos e estrutura
        </p>
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={video.id} className={`video-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="video-wrapper">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <span>▶</span>
                  </div>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="videos-cta">
          <a 
            href="https://wa.me/5554999999999" 
            className="video-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📹 Ver mais vídeos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
