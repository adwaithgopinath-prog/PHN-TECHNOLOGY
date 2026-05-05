import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkillhubTopBar.css';

const SkillhubTopBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="skillhub-topbar">
      <div className="skillhub-topbar-inner">
        {/* 1. Logo */}
        <Link to="/phn-skillhub" className="skillhub-logo" onClick={closeMenu}>
          <span className="logo-text">PHN <span className="text-blue-500">Skillhub</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="skillhub-desktop-nav">
          {/* 2 & 3. Pills */}
          <div className="skillhub-pills">
            <Link to="/phn-skillhub/courses" className={`skillhub-pill ${location.pathname === '/phn-skillhub/courses' || location.pathname.startsWith('/phn-skillhub/courses/') ? 'active-pill' : ''}`}>Courses</Link>
            <Link to="/phn-skillhub/trending" className={`skillhub-pill ${location.pathname === '/phn-skillhub/trending' ? 'active-pill' : ''}`}>Trending Course</Link>
          </div>

          {/* 4, 5, 6. Text Links */}
          <nav className="skillhub-nav-links">
            <Link to="/phn-skillhub" className={`nav-text-link ${location.pathname === '/phn-skillhub' || location.pathname === '/phn-skillhub/' ? 'active' : ''}`}>Home</Link>
            <Link to="/phn-skillhub/about" className={`nav-text-link ${location.pathname === '/phn-skillhub/about' ? 'active' : ''}`}>About Us</Link>
            <Link to="/contact" className={`nav-text-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
          </nav>

          {/* 7 & 8. Auth Buttons */}
          <div className="skillhub-auth">
            <Link to="#" className="skillhub-login">Log In</Link>
            <Link to="/contact" className="skillhub-register">Register</Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="skillhub-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="skillhub-mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-drawer-content">
              <Link to="/phn-skillhub/courses" className="mobile-pill-link" onClick={closeMenu}>Courses</Link>
              <Link to="/phn-skillhub/trending" className="mobile-pill-link" onClick={closeMenu}>Trending Course</Link>
              
              <div className="mobile-nav-divider"></div>

              <Link to="/phn-skillhub" className="mobile-text-link" onClick={closeMenu}>Home</Link>
              <Link to="/phn-skillhub/about" className="mobile-text-link" onClick={closeMenu}>About Us</Link>
              <Link to="/contact" className="mobile-text-link" onClick={closeMenu}>Contact Us</Link>

              <div className="mobile-auth-stack">
                <Link to="#" className="skillhub-login w-full text-center" onClick={closeMenu}>Log In</Link>
                <Link to="/contact" className="skillhub-register w-full text-center" onClick={closeMenu}>Register</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SkillhubTopBar;
