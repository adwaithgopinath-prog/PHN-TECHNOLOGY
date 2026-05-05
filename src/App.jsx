import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ArrowRight, ArrowUp, Menu, X, MapPin, Mail, 
  PlayCircle, Award, BookOpen, Building2, GraduationCap, Globe 
} from 'lucide-react';

import JobTrainingPopup from './components/JobTrainingPopup';
import AdvisoryBoardPage from './pages/AdvisoryBoard';
import SchoolSolution from './pages/SchoolSolution';
import CollegeSolution from './pages/CollegeSolution';
import RoboticsDevelopment from './pages/RoboticsDevelopment';
import ITDevelopment from './pages/ITDevelopment';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Media from './pages/Media';
import Programs from './pages/Programs';
import IPP from './pages/IPP';
import Contact from './pages/Contact';
import Career from './pages/Career';

import Skillhub from './pages/Skillhub';
import SkillhubCourses from './pages/SkillhubCourses';
import SkillhubCourseDetail from './pages/SkillhubCourseDetail';
import SkillhubTrending from './pages/SkillhubTrending';
import SkillhubAbout from './pages/SkillhubAbout';

import SkillhubLayout from './components/SkillhubLayout';
import ProgramsLayout from './components/ProgramsLayout';

import InstituteWorkshop from './pages/InstituteWorkshop';
import UniversityWorkshop from './pages/UniversityWorkshop';
import Masterclass from './pages/Masterclass';
import UniversityInternship from './pages/UniversityInternship';
import InstituteInternship from './pages/InstituteInternship';
import OnlineSummerInternship from './pages/OnlineSummerInternship';
import OfflineSummerInternship from './pages/OfflineSummerInternship';

import { advisoryBoardData } from './data/advisoryBoard';
import './GlobalDesign.css';

// --- Shared Logos ---
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
    </defs>
    <path d="M10 10H35C45 10 50 15 50 22.5C50 30 45 35 35 35H22V50H10V10Z" fill="url(#logoBlueGrad)" />
    <path d="M60 10H72V25H90V10H102V50H90V35H72V50H60V10Z" fill="url(#logoBlueGrad)" />
    <path d="M112 10H124L142 40V10H154V50H142L124 20V50H112V10Z" fill="url(#logoBlueGrad)" />
  </svg>
);

// --- Global Navbar ---
const GlobalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', items: [{name: 'School Solution', path: '/schoolsolution'}, {name: 'College Solution', path: '/collegesolution'}, {name: 'Robotics Development', path: '/roboticsdevelopment'}, {name: 'IT Development', path: '/itdevelopment'}, {name: 'Products', path: '/products'}] },
    { label: 'Our Company', items: [{name: 'About Us', path: '/about'}, {name: 'Partners & Collaboration', path: '/partners'}, {name: 'Advisory Board', path: '/advisory-board'}] },
    { label: 'Media', items: [{name: 'Latest News', path: '/news'}, {name: 'Gallery', path: '/gallery'}] },
    { label: 'PHN Skillhub', path: '/phn-skillhub', badge: 'New' },
    { label: 'Programs', path: '/programs' },
    { label: 'Career', path: '/career' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-premium header-inner">
        <Link to="/" className="logo-link"><BluePhnLogo height={40} /></Link>
        <nav className="desktop-nav">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav-item">
              {item.items ? (
                <div className="dropdown-wrapper">
                  <button className="nav-link">{item.label} <ChevronDown size={14} /></button>
                  <div className="dropdown-menu">
                    {item.items.map((sub, sidx) => (
                      <Link key={sidx} to={sub.path} className="dropdown-item">{sub.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.label}
                  {item.badge && <span className="badge-new">{item.badge}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <div className="social-icons-header">
            <a href="https://facebook.com/phntechnology" target="_blank" rel="noreferrer"><FacebookIcon /></a>
            <a href="https://instagram.com/phn_technology" target="_blank" rel="noreferrer"><InstagramIcon /></a>
            <a href="https://linkedin.com/company/phn-technology" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="mobile-drawer">
            <div className="mobile-drawer-inner">
              {navItems.map((item, idx) => (
                <div key={idx} className="mobile-nav-item">
                  <Link to={item.path || "#"} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Home Components ---
const HeroSection = () => (
  <section className="hero-premium">
    <div className="hero-video-wrapper">
      <iframe src="https://www.youtube.com/embed/7g8hTFcW-4A?autoplay=1&mute=1&controls=0&loop=1&playlist=7g8hTFcW-4A&playsinline=1" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
    </div>
    <div className="hero-overlay-premium"></div>
    <div className="hero-content-premium container-premium">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-ctas">
          <a href="#partners" className="btn-premium btn-primary">KNOW MORE</a>
        </div>
      </motion.div>
    </div>
    
    <div className="hero-yt-float">
      <a href="https://www.youtube.com/watch?v=7g8hTFcW-4A" target="_blank" rel="noopener noreferrer" className="yt-icon-btn">
        <YoutubeIcon />
      </a>
    </div>

    <div className="hero-scroll-indicator">
      <div className="mouse"></div>
    </div>
  </section>
);

const ImpactStats = () => (
  <section className="impact-stats-band">
    <div className="container-premium">
      <div className="stats-grid">
        {[
          { num: '8L+', label: 'Students Trained' },
          { num: '2500+', label: 'Schools Associated' },
          { num: '300+', label: 'Expert Trainers' },
          { num: '12+', label: 'Years of Innovation' }
        ].map((s, i) => (
          <motion.div 
            key={i} 
            className="stat-card-glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="section-full bg-deep">
    <div className="container-premium">
      <div className="section-header-center">
        <span className="label-small">OUR SOLUTIONS</span>
        <h2 className="section-title-global">Digital Transformation for All</h2>
      </div>
      <div className="services-grid">
        {[
          { title: 'School Solution', path: '/schoolsolution', icon: <GraduationCap />, desc: 'Modernizing K-12 education with Robotics & AI labs.' },
          { title: 'College Solution', path: '/collegesolution', icon: <Building2 />, desc: 'Bridging the industry-academia gap with CoE labs.' },
          { title: 'Robotics Development', path: '/roboticsdevelopment', icon: <Globe />, desc: 'Cutting-edge industrial robotics & automation.' },
          { title: 'IT Development', path: '/itdevelopment', icon: <PlayCircle />, desc: 'Scalable software and cloud-native IT solutions.' }
        ].map((svc, i) => (
          <Link key={i} to={svc.path} className="service-card-premium">
            <div className="svc-icon-wrapper">{svc.icon}</div>
            <h3 className="svc-title">{svc.title}</h3>
            <p className="svc-desc">{svc.desc}</p>
            <span className="svc-link">Learn More <ArrowRight size={16} /></span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const WhatIsHappening = () => (
  <section className="section-full bg-alt">
    <div className="container-premium">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="label-small">NEWS & EVENTS</span>
          <h2 className="section-title-global mb-0">What's Happening at PHN?</h2>
        </div>
        <Link to="/news" className="btn-premium btn-glass">VIEW ALL NEWS</Link>
      </div>
      <div className="news-carousel">
        {[
          { title: 'New MoU with IIT Jammu', date: 'Oct 2023', img: '/assets/news-wss.png', desc: 'Strategic collaboration for advanced robotics development.' },
          { title: 'Regional Office at IIT Delhi', date: 'Sep 2023', img: '/assets/news-delhi.png', desc: 'Expanding our reach to the national capital.' },
          { title: 'Innovation Summit 2024', date: 'Aug 2023', img: '/assets/news-vadodara.png', desc: 'Preparing for the largest tech fest in Western India.' }
        ].map((news, i) => (
          <div key={i} className="news-card-compact">
            <div className="news-img"><img src={news.img} alt={news.title} /></div>
            <div className="news-info">
              <span className="event-date-chip">{news.date}</span>
              <h4>{news.title}</h4>
              <p>{news.desc}</p>
              <Link to="/news" className="read-more-link">READ STORY <ArrowRight size={14}/></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NetworkStrip = () => (
  <section id="partners" className="py-20 bg-deep border-b border-white/5">
    <div className="container-premium mb-10 text-center">
      <span className="label-small">OUR NETWORK</span>
      <h3 className="text-3xl font-bold mt-2" style={{ color: '#0066ff' }}>Building India’s Future-Ready Innovation Network</h3>
    </div>
    <div className="logo-strip-container">
      <div className="logo-strip">
        {['IIT BOMBAY', 'IIT DELHI', 'IIT MADRAS', 'IIT GUWAHATI', 'NIT DELHI', 'NIT MANIPUR', 'IIIT VADODARA', 'TCIL', 'ITI LTD'].map((logo, i) => (
          <div key={i} className="network-logo-card">{logo}</div>
        ))}
        {/* Duplicate for infinite effect */}
        {['IIT BOMBAY', 'IIT DELHI', 'IIT MADRAS', 'IIT GUWAHATI', 'NIT DELHI', 'NIT MANIPUR', 'IIIT VADODARA', 'TCIL', 'ITI LTD'].map((logo, i) => (
          <div key={i+'_d'} className="network-logo-card">{logo}</div>
        ))}
      </div>
    </div>
  </section>
);

const AdvisoryPreview = () => {
  const members = advisoryBoardData.defence.members.slice(0, 4);
  return (
    <section className="section-full bg-alt">
      <div className="container-premium">
        <div className="section-header-center">
          <span className="label-small">THE EXPERTS</span>
          <h2 className="section-title-global">Advisory Board</h2>
          <p className="section-subtitle">Guided by the brightest minds from DRDO, ISRO, and National Security agencies.</p>
        </div>
        <div className="advisory-carousel">
          {members.map((m, i) => (
            <div key={i} className="advisory-mini-card">
              <div className="adv-img"><img src={m.image} alt={m.name} /></div>
              <div className="adv-info">
                <h4>{m.name}</h4>
                <p className="text-sm text-white/40">{m.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/advisory-board" className="btn-premium btn-glass">MEET THE FULL BOARD</Link>
        </div>
      </div>
    </section>
  );
};

const WordsOfTrust = () => (
  <section className="section-full bg-deep">
    <div className="container-premium">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="label-small">TESTIMONIALS</span>
          <h2 className="section-title-global">Words of Trust</h2>
          <p className="body-text-global mb-10">Listen to what education leaders and industry veterans say about PHN Technology's impact on the next generation.</p>
          <div className="card-premium">
            <p className="italic text-xl mb-6">"PHN's commitment to hands-on robotics education is unparalleled. They are truly bridging the gap between theoretical knowledge and industrial application."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">DR</div>
              <div>
                <h4 className="font-bold">Dr. Rajeev Shrivastav</h4>
                <p className="text-sm text-white/40">Senior Technocrat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="video-testimonial-frame">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/7g8hTFcW-4A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="frame-accent"></div>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <HeroSection />
    <ImpactStats />
    <SolutionsSection />
    <WhatIsHappening />
    <NetworkStrip />
    <AdvisoryPreview />
    <WordsOfTrust />
    <section className="section-full bg-alt text-center py-32">
      <div className="container-premium">
        <h2 className="section-title-global">Ready to shape the future?</h2>
        <p className="body-text-global mb-12">Connect with us today for institutional collaborations or career opportunities.</p>
        <Link to="/contact" className="btn-premium btn-primary">GET IN TOUCH</Link>
      </div>
    </section>
  </motion.div>
);

// --- Footer ---
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <footer className="main-footer-premium">
      <div className="container-premium">
        <div className="footer-top-grid">
          {/* Column 1: Identity */}
          <div className="footer-col identity-col">
            <BluePhnLogo height={60} className="footer-logo" />
            <p className="footer-tagline">
              India’s Most Trusted<br/>
              Destination For AI &<br/>
              Robotics Education
            </p>
            <div className="footer-social-circles">
              <a href="https://facebook.com/phntechnology" target="_blank" rel="noreferrer" className="social-circle"><FacebookIcon /></a>
              <a href="https://instagram.com/phn_technology" target="_blank" rel="noreferrer" className="social-circle"><InstagramIcon /></a>
              <a href="https://linkedin.com/company/phn-technology" target="_blank" rel="noreferrer" className="social-circle"><LinkedinIcon /></a>
              <a href="https://youtube.com/phntechnology" target="_blank" rel="noreferrer" className="social-circle"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-list">
              <Link to="/schoolsolution">School Solution</Link>
              <Link to="/collegesolution">College Solution</Link>
              <Link to="/about">Our Company</Link>
              <Link to="/news">Latest News</Link>
              <Link to="/career">Career</Link>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <p>
                PHN Technology Pvt Ltd., Tower A, Giga Platinum, Somnath Nagar Rd, near Akoya Skoda Showroom, Clover Park, Viman Nagar, Pune, Maharashtra 411014
              </p>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <p>info@phntechnology.com</p>
            </div>
          </div>

          {/* Column 4: Gallery */}
          <div className="footer-col gallery-col">
            <h4 className="footer-heading">Our Recent Event Gallery</h4>
            <div className="footer-gallery-grid">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-thumb">
                  <img src={img} alt={`Event ${i+1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PHN Technology Pvt. Ltd. All Rights Reserved.</p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

// --- App Shell ---
const App = () => {
  const location = useLocation();
  const isSpecialRoute = location.pathname.startsWith('/programs') || location.pathname.startsWith('/phn-skillhub');

  return (
    <div className="app-shell">
      <JobTrainingPopup />
      {!isSpecialRoute && <GlobalNavbar />}
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advisory-board" element={<AdvisoryBoardPage />} />
          <Route path="/schoolsolution" element={<SchoolSolution />} />
          <Route path="/collegesolution" element={<CollegeSolution />} />
          <Route path="/roboticsdevelopment" element={<RoboticsDevelopment />} />
          <Route path="/itdevelopment" element={<ITDevelopment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<Media />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/phn-skillhub/*" element={<SkillhubLayout />}>
            <Route index element={<Skillhub />} />
            <Route path="about" element={<SkillhubAbout />} />
            <Route path="courses" element={<SkillhubCourses />} />
            <Route path="courses/:courseId" element={<SkillhubCourseDetail />} />
            <Route path="trending" element={<SkillhubTrending />} />
          </Route>
          
          <Route path="/programs/*" element={<ProgramsLayout />}>
            <Route index element={<Programs />} />
            <Route path="ipp" element={<IPP />} />
            <Route path="workshop/institute" element={<InstituteWorkshop />} />
            <Route path="workshop/university" element={<UniversityWorkshop />} />
            <Route path="masterclass" element={<Masterclass />} />
            <Route path="internship/university" element={<UniversityInternship />} />
            <Route path="internship/institute" element={<InstituteInternship />} />
            <Route path="summer-internship/online" element={<OnlineSummerInternship />} />
            <Route path="summer-internship/offline" element={<OfflineSummerInternship />} />
          </Route>
        </Routes>
      </main>
      
      {!isSpecialRoute && <Footer />}
    </div>
  );
};

export default App;
