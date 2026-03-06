import React from 'react';
import './Contact.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado! Em breve entraremos em contato.');
  };

  return (
    <section id="contact" className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="contact-container">
        <h2 className="contact-title">Agende sua Consulta</h2>
        <p className="contact-subtitle">
          Tire suas dúvidas e marque seu atendimento
        </p>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Endereço</h4>
                <p>R. Quinze de Janeiro, 373 - Sala 604<br />Centro, Canoas - RS</p>
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
            <div className="info-item">
              <img src={WhatsAppIcon} alt="WhatsApp" className="info-icon-img" />
              <div>
                <h4>WhatsApp</h4>
                <p>(51) 99311-1020</p>
              </div>
            </div>
            <div className="contact-cta-buttons">
              <a href="tel:5130311020" className="cta-btn cta-call">
                📞 Ligar agora
              </a>
              <a 
                href="https://wa.me/5551993111020" 
                className="cta-btn cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="cta-btn-icon" />
                WhatsApp
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="(51) 99999-9999"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Serviço de Interesse</label>
              <select id="service" name="service">
                <option value="">Selecione um serviço</option>
                <option value="limpeza">Limpeza Dental</option>
                <option value="clareamento">Clareamento Dental</option>
                <option value="canal">Tratamento de Canal</option>
                <option value="extracao">Extração Dentária</option>
                <option value="implante">Implante Dentário</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Conte-nos sobre seu problema dental..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.529137584258!2d-51.1786448!3d-29.9176832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519b4e5a7e8e8e8%3A0x9519b4e5a7e8e8e8!2sR.%20Quinze%20de%20Janeiro%2C%20373%20-%20Centro%2C%20Canoas%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1630000000000!5m2!1spt-BR!2sbr" 
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
