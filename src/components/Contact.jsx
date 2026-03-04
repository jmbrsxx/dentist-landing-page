import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Book Your Appointment</h2>
        <p className="contact-subtitle">
          Take the first step towards a healthier smile
        </p>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="general">General Dentistry</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="implants">Dental Implants</option>
                <option value="pediatric">Pediatric Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Tell us about your dental concerns..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Request Appointment
            </button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Dental Street<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@smiledental.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 9AM - 6PM<br />Sat: 9AM - 2PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
