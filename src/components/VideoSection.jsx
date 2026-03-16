import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const videos = [
    {
      id: 'video1',
      title: 'Dental Implant Procedure',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 'video2',
      title: 'Professional Teeth Whitening',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <section className="video-section">
      <div className="container">
        <h2 className="video-title">Patient Education Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <iframe
                title={video.title}
                src={video.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;