import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight, ArrowUp, Menu, X, Users, ShieldCheck, Globe, GraduationCap, Building2, Briefcase, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import JobTrainingPopup from './components/JobTrainingPopup';
import AdvisoryBoardPage from './pages/AdvisoryBoard';
import SchoolSolution from './pages/SchoolSolution';
import CollegeSolution from './pages/CollegeSolution';
import RoboticsDevelopment from './pages/RoboticsDevelopment';
import ITDevelopment from './pages/ITDevelopment';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Media, { latestNewsData } from './pages/Media';
import PartnersSection from './components/PartnersSection';

import { advisoryBoardData } from './data/advisoryBoard';
import './GlobalDesign.css';

// Custom SVG Icons
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

const BluePhnLogo = ({ height = 32, className = "" }) => (
  <svg height={height} viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
    <defs>
      <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#003399" />
      </linearGradient>
      <linearGradient id="logoFoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0099FF" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    <path d="M10 10H35C45 10 50 15 50 22.5C50 30 45 35 35 35H22V50H10V10Z" fill="url(#logoBlueGrad)" />
    <path d="M10 10L22 22V10H10Z" fill="url(#logoFoldGrad)" opacity="0.8" />
    <path d="M22 10H35C42 10 46 13 46 18.5C46 24 42 27 35 27H22V10Z" fill="white" opacity="0.1" />
    <path d="M60 10H72V25H90V10H102V50H90V35H72V50H60V10Z" fill="url(#logoBlueGrad)" />
    <path d="M72 25L81 30V25H72Z" fill="url(#logoFoldGrad)" opacity="0.6" />
    <path d="M112 10H124L142 40V10H154V50H142L124 20V50H112V10Z" fill="url(#logoBlueGrad)" />
    <path d="M124 10L142 40V10H124Z" fill="url(#logoFoldGrad)" opacity="0.8" />
  </svg>
);

const AdvisoryBoardPreview = () => {
  const members = [
    advisoryBoardData.defence.members[0],
    advisoryBoardData.global.members[0],
    advisoryBoardData.academic.members[0]
  ];

  return (
    <section className="section-full bg-alt">
      <div className="container-premium">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="label-small">Guiding Force</span>
            <h2 className="section-title-global">Our Advisory Board</h2>
          </div>
          <Link to="/advisory-board" className="btn-premium btn-glass">
            View All Members <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="card-premium"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="member-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <div>
                  <h3 className="card-title-global text-xl">{member.name}</h3>
                  <p className="text-accent-blue font-bold text-sm uppercase tracking-wider">{member.designation}</p>
                </div>
              </div>
              <p className="body-text-global text-base line-clamp-3">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-container hero">
        <div className="hero-video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/7g8hTFcW-4A?autoplay=1&mute=1&loop=1&playlist=7g8hTFcW-4A&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="Hero Video"
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title-global">Next-Gen Robotics & AI</h1>
            <p className="body-text-global text-white/90">Pioneering the future of industrial automation and smart technology solutions.</p>
            <div className="flex gap-4 mt-8">
              <Link to="/partners" className="btn-premium btn-primary">Our Partners</Link>
              <Link to="/about" className="btn-premium btn-glass">About PHN</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Preview */}
      <AdvisoryBoardPreview />
      
      {/* Partners Section */}
      <PartnersSection />
    </>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = latestNewsData.slice(0, 6).map(news => news.image);

  return (
    <footer className="main-footer">
      <div className="footer-circuit-bg"></div>
      <div className="container-premium">
        <div className="footer-grid">
          <div className="footer-col">
            <BluePhnLogo height={42} className="mb-6" />
            <p className="footer-desc">PHN Technology is a premier technology solutions provider, specializing in robotics, AI, and IT development for various industries.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/schoolsolution">School Solution</Link></li>
              <li><Link to="/collegesolution">College Solution</Link></li>
              <li><Link to="/about">Our Company</Link></li>
              <li><Link to="/media">Latest News</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-item"><MapPin size={16} /> <p>Pune, Maharashtra, India</p></div>
            <div className="contact-item"><Mail size={16} /> <a href="mailto:info@phntechnology.com">info@phntechnology.com</a></div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Event Gallery</h4>
            <div className="footer-gallery-grid">
              {galleryImages.map((img, idx) => (
                <Link to="/media" key={idx} className="footer-gallery-item">
                  <img src={img} alt={`Event ${idx}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PHN Technology Pvt. Ltd. All Rights Reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}><ArrowUp size={24} /></button>
        </div>
      </div>
    </footer>
  );
};

const GlobalNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSchoolRoute = location.pathname === '/schoolsolution';

  const navItems = [
    { label: 'Services', items: ['School Solution', 'College Solution', 'Robotics Development', 'IT Development', 'Products'] },
    { label: 'Our Company', items: ['About Us', 'Partners & Collaboration', 'Advisory Board'] },
    { label: 'Media', items: ['Latest News', 'Gallery', 'Testimonials', 'Industrial Visits'] },
    { label: 'Programs' },
    { label: 'Career' },
    { label: 'Contact us' }
  ];

  return (
    <header className={isSchoolRoute ? "school-hero-navbar" : ""}>
      <div className="container-premium flex items-center justify-between" style={{ height: '80px' }}>
        <Link to="/" className="flex items-center no-underline">
          <BluePhnLogo height={42} />
        </Link>
        <nav className="hidden lg:flex items-center">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav-item">
              {item.items ? (
                <button className="nav-link">
                  {item.label} <ChevronDown size={14} />
                </button>
              ) : (
                <Link to={item.path || "#"} className="nav-link">
                  {item.label}
                  {item.badge && <span className="badge-new">{item.badge}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="social-icons hidden md:flex">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
          </div>
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Upcoming Events');

  return (
    <div className="app-shell">
      <div className="app-container">
        <JobTrainingPopup />
        <GlobalNavbar />

        <Routes>
          <Route path="/" element={<HomePage activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/advisory-board" element={<AdvisoryBoardPage />} />
          <Route path="/schoolsolution" element={<SchoolSolution />} />
          <Route path="/collegesolution" element={<CollegeSolution />} />
          <Route path="/roboticsdevelopment" element={<RoboticsDevelopment />} />
          <Route path="/itdevelopment" element={<ITDevelopment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
