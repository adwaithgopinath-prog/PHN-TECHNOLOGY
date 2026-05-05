import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YoutubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);
import './SkillhubFooter.css';

const SkillhubFooter = () => {
  return (
    <footer className="skillhub-footer">
      <div className="sh-footer-container">
        <div className="sh-footer-top">
          {/* Brand Col */}
          <div className="sh-footer-col brand-col">
            <Link to="/phn-skillhub" className="sh-footer-logo">
              <span className="logo-accent">PHN</span> Skillhub
            </Link>
            <p className="sh-footer-tagline">Empowering Innovation Through Technology</p>
            <div className="sh-footer-socials">
              <a href="https://www.facebook.com/phntechnology" target="_blank" rel="noreferrer"><FacebookIcon size={20} /></a>
              <a href="https://www.instagram.com/phn_technology/" target="_blank" rel="noreferrer"><InstagramIcon size={20} /></a>
              <a href="https://www.linkedin.com/company/phn-technology/" target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
              <a href="https://www.youtube.com/channel/UCCoKsPs0lsyr383TIZOoRUg" target="_blank" rel="noreferrer"><YoutubeIcon size={20} /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="sh-footer-col">
            <h4>Useful Links</h4>
            <ul className="sh-footer-links">
              <li><Link to="/phn-skillhub">Home</Link></li>
              <li><Link to="/phn-skillhub/courses">Courses</Link></li>
              <li><Link to="/phn-skillhub/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Other Works */}
          <div className="sh-footer-col">
            <h4>Other Works</h4>
            <ul className="sh-footer-links">
              <li><a href="/">PHN Website</a></li>
              <li><Link to="/programs">PHN Programs</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="sh-footer-col contact-col">
            <h4>Contact</h4>
            <ul className="sh-footer-contact">
              <li>
                <Phone size={18} />
                <span>+91 9766679494</span>
              </li>
              <li>
                <Mail size={18} />
                <span>lms@phntechnology.com</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Tower-A, Giga-Platinum, Viman Nagar, Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="sh-footer-bottom">
          <p>© 2026 PHN Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SkillhubFooter;
