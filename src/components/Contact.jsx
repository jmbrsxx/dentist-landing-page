import React from 'react';
import './Contact.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="contact-container">
        <h2 className="contact-title">Agende sua Consulta na NovaOdonto</h2>
        <p className="contact-subtitle">
          Fale conosco via WhatsApp e marque seu atendimento de forma rápida e prática
        </p>
        
        <div className="contact-content">
          <div className="contact-info-grid">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Endereço</h4>
                <p>R. Quinze de Janeiro, 373 - Sala 604 - Centro<br />Centro, Canoas - RS, 92010-300</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Telefone</h4>
                <p>(51) 3031-1020</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>Segunda a Sexta: 9h às 20h<br />Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>

          <div className="whatsapp-cta-section">
            <div className="whatsapp-message">
              <h3>Prefere conversar com a gente?</h3>
              <p>Clique no botão abaixo e fale conosco pelo WhatsApp. Nosso time está pronto para agendar sua consulta!</p>
            </div>
            <a 
              href="https://wa.me/555130311020" 
              className="whatsapp-cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-cta-icon" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps?q=Rua+Quinze+de+Janeiro%2C+373+-+Sala+604+Canoas+RS+Brazil&output=embed" 
            width="100%" 
            height="350" 
            style={{border: 0, borderRadius: '12px'}} 
            allowFullScreen="" 
            loading="lazy"
            title="Localização"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
