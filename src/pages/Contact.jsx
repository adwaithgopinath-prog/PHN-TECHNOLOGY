import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, Phone, Send, CheckCircle, Star
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.mobile) tempErrors.mobile = "Mobile is required";
    else if (formData.mobile.length < 10) tempErrors.mobile = "Invalid mobile number";
    
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="contact-page-container">
      
      <section className="contact-main-section">
        
        {/* Left: Map Section */}
        <div className="contact-map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3782.2613173278896!2d73.9118!3d18.5636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b2075d%3A0xed017a561f5f3e9b!2sPHN%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin" 
            className="contact-map-iframe"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="PHN Technology Pune Office"
          ></iframe>

          <div className="map-overlay-card">
            <h3>PHN Technology Pvt. Ltd.</h3>
            <p>
              Tower A, Giga Platinum, Viman Nagar Rd, near Akoya Skoda Showroom, Clover Park, Viman Nagar, Pune, Maharashtra 411014
            </p>
            <div className="map-rating">
              4.7 <span>★★★★★</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/uX3f5K8Mv9U5n7s8A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-open-map"
            >
              Open Map
            </a>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="contact-form-wrapper">
          <motion.div 
            className="contact-form-inner"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p className="subtitle">Fill up the form and our team will get back to you within 24 Hours</p>

            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  className={`form-input ${errors.name ? 'error' : ''}`} 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="mobile"
                  placeholder="Enter Mobile number" 
                  className={`form-input ${errors.mobile ? 'error' : ''}`} 
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Input your email address" 
                  className={`form-input ${errors.email ? 'error' : ''}`} 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  className={`form-input ${errors.subject ? 'error' : ''}`} 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <textarea 
                  name="message"
                  placeholder="Write your message" 
                  className={`form-input ${errors.message ? 'error' : ''}`} 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="btn-send-message">
                  Send Message
                </button>
              </div>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="form-success-msg"
                >
                  Thank you. Our team will contact you shortly.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="contact-social-shortcuts">
              <a href="mailto:info@phntechnology.com" className="social-shortcut-btn">
                <Mail size={18} /> info@phntechnology.com
              </a>
              <a href="https://www.linkedin.com/company/phn-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-shortcut-btn">
                <Linkedin size={18} /> PHN Technology
              </a>
              <a href="#" className="social-shortcut-btn">
                <Instagram size={18} /> PHN Technology
              </a>
              <a href="#" className="social-shortcut-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> PHN Technology
              </a>
            </div>

          </motion.div>
        </div>

      </section>

    </div>
  );
};

export default Contact;
