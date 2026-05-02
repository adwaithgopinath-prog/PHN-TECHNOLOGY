import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import jobImage from '../assets/job-training-real.png';

const JobTrainingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if shown in this session (Temporarily disabled for review)
    // const isShown = sessionStorage.getItem('phn_job_popup_shown');
    // if (!isShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Small delay for better UX
      return () => clearTimeout(timer);
    // }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // sessionStorage.setItem('phn_job_popup_shown', 'true');
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotateX: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <button 
              className="popup-close" 
              onClick={handleClose}
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="popup-container">
              {/* Left Content Area */}
              <div className="popup-content">
                <div className="brand-header">
                  <div className="brand-logo-mini">P</div>
                  <span className="brand-name">PHN TECHNOLOGY</span>
                </div>

                <div className="headline-group">
                  <h3 className="sub-headline">Join PHN’s Guaranteed</h3>
                  <h2 id="popup-title" className="main-headline">JOB TRAINING PROGRAM</h2>
                  <p className="question">Are you looking for a job?</p>
                </div>

                <div className="promise-box">
                  <div className="guarantee-badge">
                    <CheckCircle2 size={16} />
                    <span>100% GUARANTEE</span>
                  </div>
                  <p className="promise-text">
                    “First get job confirmation with an offer letter, then pay the fees.”
                  </p>
                  <p className="promise-hindi">
                    “पहले जॉब कन्फर्मेशन और ऑफर लेटर पाएं, फिर फीस जमा करें।”
                  </p>
                </div>

                <div className="quote">
                  “Your career deserves a strong beginning”
                </div>

                <div className="cta-footer">
                  <a href="https://www.phntechnology.com" className="apply-btn">
                    Limited Seats - Apply Now!
                  </a>
                  <div className="contact-links">
                    <a href="tel:+918412841200" className="phone-link">
                      <Phone size={20} />
                      <span>+91 8412 8412 00</span>
                    </a>
                    <a 
                      href="https://wa.me/918412841200" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp-btn"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Visual Area */}
              <div className="popup-visual">
                <div className="visual-image-container">
                  <img src={jobImage} alt="Job Training" />
                  <div className="visual-overlay"></div>
                </div>
                
                <div className="eligibility-box">
                  <h4>ELIGIBILITY</h4>
                  <ul>
                    <li>12th Pass</li>
                    <li>Any Graduate</li>
                    <li>B.Ed / D.Ed</li>
                  </ul>
                </div>

                <div className="location-info">
                  <p>PHN Technology, Pune</p>
                  <p className="site-link">www.phntechnology.com</p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JobTrainingPopup;
