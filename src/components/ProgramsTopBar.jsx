import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Home, FileText, BookOpen, GraduationCap, 
  Briefcase, Sun, Mail, ChevronDown, Menu, X 
} from 'lucide-react';
import './ProgramsTopBar.css';

// Reuse the BluePhnLogo from App
const BluePhnLogo = ({ height = 32, className = "" }) => (
  <svg height={height} viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
    <defs>
      <linearGradient id="logoBlueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#003399" />
      </linearGradient>
      <linearGradient id="logoFoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0099FF" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    <path d="M10 10H35C45 10 50 15 50 22.5C50 30 45 35 35 35H22V50H10V10Z" fill="url(#logoBlueGrad2)" />
    <path d="M10 10L22 22V10H10Z" fill="url(#logoFoldGrad2)" opacity="0.8" />
    <path d="M22 10H35C42 10 46 13 46 18.5C46 24 42 27 35 27H22V10Z" fill="white" opacity="0.1" />
    <path d="M60 10H72V25H90V10H102V50H90V35H72V50H60V10Z" fill="url(#logoBlueGrad2)" />
    <path d="M72 25L81 30V25H72Z" fill="url(#logoFoldGrad2)" opacity="0.6" />
    <path d="M112 10H124L142 40V10H154V50H142L124 20V50H112V10Z" fill="url(#logoBlueGrad2)" />
    <path d="M124 10L142 40V10H124Z" fill="url(#logoFoldGrad2)" opacity="0.8" />
  </svg>
);

const ProgramsTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: <Home size={18} /> },
    { label: 'IPP', path: '/programs/ipp', icon: <FileText size={18} />, badge: 'New' },
    { 
      label: 'Workshop', 
      path: '/programs/workshops', 
      icon: <BookOpen size={18} />,
      items: [
        { name: 'All Workshops', path: '/programs/workshops' },
        { name: 'IIT / NIT / IIIT', path: '/programs/workshop/institute' },
        { name: 'University', path: '/programs/workshop/university' },
        { name: 'Robotics Workshop', path: '/programs/workshops/robotics' },
        { name: 'AI Workshop', path: '/programs/workshops/ai' }
      ]

    },
    { label: 'Masterclass', path: '/programs/masterclasses', icon: <GraduationCap size={18} /> },
    { 
      label: 'Internship', 
      path: '/programs/internships', 
      icon: <Briefcase size={18} />,
      items: [
        { name: 'Internship Overview', path: '/programs/internships' },
        { name: 'Web Development Internship', path: '/programs/internships/web-development' },
        { name: 'Robotics Internship', path: '/programs/internships/robotics' },
        { name: 'AI/ML Internship', path: '/programs/internships/ai-ml' }
      ]
    },
    { 
      label: 'Summer Internship', 
      path: '/programs/summer-internship', 
      icon: <Sun size={18} />,
      items: [
        { name: 'Summer Internship Overview', path: '/programs/summer-internship' },
        { name: '4 Week Program', path: '/programs/summer-internship/4-week' },
        { name: '8 Week Program', path: '/programs/summer-internship/8-week' }
      ]
    },
    { label: 'Contact', path: '/contact', icon: <Mail size={18} /> }
  ];

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const toggleMobileItem = (label) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const isActive = (path, items) => {
    if (location.pathname === path) return true;
    if (items) {
      return items.some(item => location.pathname === item.path);
    }
    return false;
  };

  return (
    <header className={`programs-top-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="ptb-container">
        
        {/* Left Side: Back + Logo */}
        <div className="ptb-left">
          <button onClick={handleBack} className="ptb-back-btn" aria-label="Go Back">
            <ArrowLeft size={20} />
          </button>
          <Link to="/" className="ptb-logo">
            <BluePhnLogo height={36} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="ptb-desktop-nav">
          {navItems.map((item, idx) => {
            const active = isActive(item.path, item.items);
            return (
              <div key={idx} className={`ptb-nav-item ${active ? 'active' : ''}`}>
                {item.items ? (
                  <div className="ptb-dropdown-wrapper">
                    <Link to={item.path} className="ptb-nav-link">
                      <span className="ptb-icon">{item.icon}</span>
                      <span className="ptb-label">{item.label}</span>
                      <ChevronDown size={14} className="ptb-chevron" />
                    </Link>
                    <div className="ptb-dropdown-menu">
                      {item.items.map((sub, sidx) => (
                        <Link key={sidx} to={sub.path} className="ptb-dropdown-item">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} className="ptb-nav-link">
                    <span className="ptb-icon">{item.icon}</span>
                    <span className="ptb-label">{item.label}</span>
                    {item.badge && <span className="ptb-badge">{item.badge}</span>}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button className="ptb-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="ptb-mobile-drawer"
          >
            <div className="ptb-mobile-inner">
              {navItems.map((item, idx) => (
                <div key={idx} className="ptb-mobile-item">
                  {item.items ? (
                    <>
                      <button 
                        className={`ptb-mobile-link ${expandedMobileItem === item.label ? 'expanded' : ''}`}
                        onClick={() => toggleMobileItem(item.label)}
                      >
                        <div className="ptb-mobile-link-left">
                          <span className="ptb-icon">{item.icon}</span>
                          {item.label}
                        </div>
                        <ChevronDown size={18} className="ptb-mobile-chevron" />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileItem === item.label && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ptb-mobile-subnav"
                          >
                            {item.items.map((sub, sidx) => (
                              <Link 
                                key={sidx} 
                                to={sub.path} 
                                className="ptb-mobile-sublink"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="ptb-mobile-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="ptb-mobile-link-left">
                        <span className="ptb-icon">{item.icon}</span>
                        {item.label}
                        {item.badge && <span className="ptb-badge ml-2">{item.badge}</span>}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ProgramsTopBar;
