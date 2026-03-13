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
        <h2 className="contact-title">Agende sua Consulta online</h2>
        <p className="contact-subtitle">
          Tire suas dúvidas e marque seu atendimento
        </p>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Endereço</h4>
                <p>XXXXXXXXXXXXXXXXXX<br />Caxias do Sul - RS</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Telefone</h4>
                <p>(51) XXXXXXXX</p>
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
                <p>(51) XXXXXX</p>
              </div>
            </div>
            <div className="contact-cta-buttons">
              <a href="tel:0000000000" className="cta-btn cta-call">
                📞 Ligar agora
              </a>
              <a 
                href="https://wa.me/55510000000000000" 
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
            src="https://www.google.com/maps?q=Avenida+Brasil+500+Centro+Passo+Fundo+RS+Brazil&output=embed" 
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
