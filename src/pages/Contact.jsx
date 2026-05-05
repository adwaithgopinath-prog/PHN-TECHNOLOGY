import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Phone, MessageSquare, 
  Clock, 
  Star, ChevronRight 
} from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    
    if (!formData.mobile) tempErrors.mobile = "Mobile is required";
    else if (formData.mobile.length < 10) tempErrors.mobile = "Mobile must be at least 10 digits";
    
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-shell">
        <div className="contact-grid">
          
          {/* Left Panel: Map & Address */}
          <div className="contact-map-card">
            <div className="contact-map-container">
              <iframe
                title="PHN Technology Location"
                src="https://www.google.com/maps?q=PHN%20Technology%20Pvt.%20Ltd.%20Tower%20A%20Giga%20Platinum%20Viman%20Nagar%20Pune&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-address-content">
              <h3>PHN Technology Pvt. Ltd.</h3>
              <div className="contact-rating">
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                <span>4.7 Google rating</span>
              </div>
              <p className="contact-address-text">
                Tower A, Giga Platinum, Viman Nagar Rd, near Akoya Skoda Showroom, Clover Park, Viman Nagar, Pune, Maharashtra 411014
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=PHN%20Technology%20Pvt.%20Ltd.%20Tower%20A%20Giga%20Platinum%20Viman%20Nagar%20Pune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-open-map"
              >
                Open Map <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Panel: Form & Shortcuts */}
          <div className="contact-panel">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Have a question, partnership idea, internship query, or program request? Send us a message and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="form-input-wrapper">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-input-wrapper">
                  <input 
                    type="tel" 
                    name="mobile"
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={errors.mobile ? 'error' : ''}
                  />
                  {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                </div>
              </div>

              <div className="form-input-wrapper">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-input-wrapper">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-input-wrapper">
                <textarea 
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-send-message">
                Send Message
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="form-success-banner"
                  >
                    Thank you. Our team will contact you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <div className="contact-shortcuts">
              <a href="mailto:info@phntechnology.com" className="shortcut-card">
                <Mail size={20} />
                <div className="shortcut-info">
                  <span>Email</span>
                  <strong>info@phntechnology.com</strong>
                </div>
              </a>
              <a href="https://wa.me/918600586005" target="_blank" rel="noopener noreferrer" className="shortcut-card">
                <MessageSquare size={20} />
                <div className="shortcut-info">
                  <span>WhatsApp</span>
                  <strong>+91 8600586005</strong>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/phn-technology" target="_blank" rel="noopener noreferrer" className="shortcut-card">
                <LinkedinIcon size={20} />
                <div className="shortcut-info">
                  <span>LinkedIn</span>
                  <strong>PHN Technology</strong>
                </div>
              </a>
              <div className="shortcut-card info-only">
                <Clock size={20} />
                <div className="shortcut-info">
                  <span>Office Hours</span>
                  <strong>Mon - Sat, 10 AM - 6 PM</strong>
                </div>
              </div>
            </div>

            <div className="contact-social-pills">
              <a href="https://www.instagram.com/phn_technology/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={18} /></a>
              <a href="https://www.facebook.com/phntechnology" target="_blank" rel="noopener noreferrer"><FacebookIcon size={18} /></a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
