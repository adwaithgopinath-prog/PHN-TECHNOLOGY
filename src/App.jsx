import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight, ArrowUp, Menu, X, MapPin, Mail, PlayCircle, Award, Users, BookOpen, Building2, Sparkles, GraduationCap, Globe } from 'lucide-react';
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
import Programs from './pages/Programs';
import IPP from './pages/IPP';
import ProgramsTopBar from './components/ProgramsTopBar';
import PartnersSection from './components/PartnersSection';
import WorkshopPage from './pages/WorkshopPage';


import { advisoryBoardData } from './data/advisoryBoard';
import './GlobalDesign.css';

// --- Icons & Logos ---
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

// --- Global Navbar ---
const GlobalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', items: [{name: 'School Solution', path: '/schoolsolution'}, {name: 'College Solution', path: '/collegesolution'}, {name: 'Robotics Development', path: '/roboticsdevelopment'}, {name: 'IT Development', path: '/itdevelopment'}, {name: 'Products', path: '/products'}] },
    { label: 'Our Company', items: [{name: 'About Us', path: '/about'}, {name: 'Partners & Collaboration', path: '/partners'}, {name: 'Advisory Board', path: '/advisory-board'}] },
    { label: 'Media', items: [{name: 'Latest News', path: '/news'}, {name: 'Gallery', path: '/gallery'}, {name: 'Testimonials', path: '/testimonials'}, {name: 'Industrial Visits', path: '/industrial-visits'}] },
    { label: 'PHN Skillhub', path: '/skillhub', badge: 'New' },
    { 
      label: 'Programs', 
      path: '/programs',
      items: [
        {name: 'Programs Overview', path: '/programs'}, 
        {name: 'IIT / NIT / IIIT Workshop', path: '/programs/workshop/institute'}, 
        {name: 'University Workshop', path: '/programs/workshop/university'}, 
        {name: 'Workshops', path: '/programs/workshops'}, 
        {name: 'Masterclasses', path: '/programs/masterclasses'}, 
        {name: 'Internships', path: '/programs/internships'}, 
        {name: 'Summer Internship', path: '/programs/summer-internship'}

      ] 
    },
    { label: 'Career', path: '/career' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-premium header-inner">
        <Link to="/" className="logo-link">
          <BluePhnLogo height={40} />
        </Link>
        <nav className="desktop-nav">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav-item">
              {item.items ? (
                <div className="dropdown-wrapper">
                  {item.path ? (
                    <Link to={item.path} className="nav-link">
                      {item.label} <ChevronDown size={14} />
                    </Link>
                  ) : (
                    <button className="nav-link">
                      {item.label} <ChevronDown size={14} />
                    </button>
                  )}
                  <div className="dropdown-menu">
                    {item.items.map((sub, sidx) => (
                      <Link key={sidx} to={sub.path} className="dropdown-item">{sub.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.path || "#"} className="nav-link">
                  {item.label}
                  {item.badge && <span className="badge-new">{item.badge}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <div className="social-icons-header">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LinkedinIcon /></a>
            <a href="#"><YoutubeIcon /></a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="mobile-drawer"
          >
            <div className="mobile-drawer-inner">
              {navItems.map((item, idx) => (
                <div key={idx} className="mobile-nav-item">
                  {item.items ? (
                    <>
                      <div className="mobile-nav-label">{item.label}</div>
                      <div className="mobile-nav-subs">
                        {item.items.map((sub, sidx) => (
                          <Link key={sidx} to={sub.path} className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>{sub.name}</Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path || "#"} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                      {item.badge && <span className="badge-new ml-2">{item.badge}</span>}
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

// --- Home Components ---
const HeroSection = () => (
  <section className="hero-premium">
    <div className="hero-video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/7g8hTFcW-4A?autoplay=1&mute=1&controls=0&loop=1&playlist=7g8hTFcW-4A&playsinline=1&rel=0&modestbranding=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
    <div className="hero-overlay-premium"></div>
    <div className="hero-content-premium container-premium">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="hero-eyebrow">IN COLLABORATION WITH</span>
        <h1 className="hero-title-main">IIT PATNA</h1>
        <h3 className="hero-subtitle">Prof. T. N. Singh, Director, IIT Patna</h3>
        <div className="hero-divider"></div>
        <h2 className="hero-focus">Center of Excellence (CoE) Lab</h2>
        
        <div className="hero-tags">
          <span>Robotics</span>
          <span>AI</span>
        </div>

        <div className="hero-ctas">
          <Link to="/partners" className="btn-premium btn-primary">KNOW MORE</Link>
          <a href="https://www.youtube.com/watch?v=7g8hTFcW-4A" target="_blank" rel="noreferrer" className="btn-premium btn-glass">
            <PlayCircle size={20} /> WATCH LIVE
          </a>
        </div>
      </motion.div>
    </div>
    <div className="hero-particles"></div>
  </section>
);

const WhatsHappening = () => {
  const [activeTab, setActiveTab] = useState('Latest News');
  const tabs = ['Latest News', 'Recents', 'Upcoming Events', 'Programs'];

  const newsItems = [
    { title: "WSS Awards 2025", desc: "Recognizing excellence in tech and innovation.", image: "/assets/images/wss.jpg" },
    { title: "IIT Jammu CoE Lab", desc: "Inauguration of the advanced robotics lab.", image: "/assets/images/iit-jammu.jpg" },
    { title: "IIT Guwahati CoE Lab", desc: "Partnering for future-ready education.", image: "/assets/images/iit-guwahati.jpg" },
    { title: "NIT Delhi CoE Lab", desc: "Establishing AI and IoT ecosystems.", image: "/assets/images/nit-delhi.jpg" }
  ];

  const upcomingEvents = [
    { title: "IIIT Bhopal", date: "Coming Soon" },
    { title: "NIT Warangal", date: "Coming Soon" },
    { title: "NIT Puducherry", date: "Coming Soon" },
    { title: "Seri International, Pune", date: "Coming Soon" },
    { title: "Queen's College, Varanasi", date: "Coming Soon" }
  ];

  return (
    <section className="section-full bg-deep updates-premium-section">
      <div className="container-premium">
        <div className="section-header-center">
          <h2 className="section-title-global">What’s Happening at PHN?</h2>
          <p className="section-subtitle">Tech that Transforms, Events that Inspire.</p>
        </div>

        <div className="segmented-controls">
          {tabs.map(tab => (
            <button key={tab} className={`segment-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content-area">
          {activeTab === 'Latest News' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane">
              <div className="news-carousel">
                {newsItems.map((item, idx) => (
                  <div key={idx} className="news-card-compact">
                    <div className="news-img"><img src={item.image} alt={item.title} onError={(e) => { e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=News' }} /></div>
                    <div className="news-info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                      <Link to="/news" className="read-more-link">Read More <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link to="/news" className="btn-premium btn-glass">View All News</Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'Upcoming Events' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane">
              <div className="events-grid">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="event-card-preview">
                    <div className="event-date-chip">{event.date}</div>
                    <h4>{event.title}</h4>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link to="/news" className="btn-premium btn-glass">View All Events</Link>
              </div>
            </motion.div>
          )}

          {(activeTab === 'Recents' || activeTab === 'Programs') && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-pane text-center py-20">
              <h3 className="text-2xl text-white mb-6">Explore our {activeTab}</h3>
              <Link to={activeTab === 'Programs' ? '/programs' : '/news'} className="btn-premium btn-primary">Discover More</Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const OurServices = () => {
  const services = [
    { title: "School Solution", label: "K-12 Education", desc: "Empowering young minds with foundational robotics and STEM education setups.", link: "/schoolsolution", icon: <BookOpen size={32} /> },
    { title: "College Solution", label: "Higher Ed", desc: "Advanced AI and IoT labs tailored for technical institutions and universities.", link: "/collegesolution", icon: <GraduationCap size={32} /> },
    { title: "IT Development", label: "Software", desc: "Custom software solutions, web and app development for enterprises.", link: "/itdevelopment", icon: <Building2 size={32} /> },
    { title: "Robotics Development", label: "Hardware", desc: "Industrial automation and custom robotics manufacturing.", link: "/roboticsdevelopment", icon: <Award size={32} /> },
    { title: "Products", label: "Innovations", desc: "Explore our range of market-ready technological products.", link: "/products", icon: <Globe size={32} /> }
  ];

  return (
    <section className="section-full bg-alt services-section">
      <div className="container-premium">
        <h2 className="section-title-global text-center mb-16">Our Services</h2>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <Link to={svc.link} key={idx} className="service-card-premium block">
              <div className="svc-icon-wrapper">{svc.icon}</div>
              <span className="svc-label">{svc.label}</span>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-link">Read More <ArrowRight size={16} /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};



const ImpactStats = () => (
  <section className="impact-stats-band">
    <div className="container-premium">
      <div className="stats-grid">
        <div className="stat-card-glass">
          <div className="stat-num">8L+</div>
          <div className="stat-label">Students Trained</div>
        </div>
        <div className="stat-card-glass">
          <div className="stat-num">2500+</div>
          <div className="stat-label">Institutions</div>
        </div>
        <div className="stat-card-glass">
          <div className="stat-num">300+</div>
          <div className="stat-label">Expert Trainers</div>
        </div>
        <div className="stat-card-glass">
          <div className="stat-num">5+</div>
          <div className="stat-label">Awards Received</div>
        </div>
      </div>
    </div>
  </section>
);

const NetworkSection = () => {
  const logos = ['IIT Jammu', 'IIT Patna', 'IIT Guwahati', 'NIT Delhi', 'IIIT Vadodara', 'TCIL', 'ITI Ltd.', 'BELOP'];
  return (
    <section className="section-full bg-deep network-section text-center">
      <div className="container-premium">
        <h2 className="section-title-global">Strong Academic & Industry Network</h2>
        <p className="section-subtitle mb-12">Backed by collaborations with leading institutes and industry partners.</p>
        
        <div className="logo-strip-container">
          <div className="logo-strip">
            {logos.map((logo, idx) => (
              <div key={idx} className="network-logo-card">
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link to="/partners" className="btn-premium btn-glass">Explore Collaborations <ArrowRight size={20}/></Link>
        </div>
      </div>
    </section>
  );
};

const AdvisoryPreview = () => {
  const advisors = [
    advisoryBoardData.defence.members[0],
    advisoryBoardData.global.members[0],
    advisoryBoardData.academic.members[0],
    advisoryBoardData.academic.members[1],
    advisoryBoardData.public.members[0],
    advisoryBoardData.industry.members[0]
  ].filter(Boolean); // safety check

  return (
    <section className="section-full bg-alt advisory-preview-section">
      <div className="container-premium text-center">
        <h2 className="section-title-global">Guided by Experts. Built for Impact.</h2>
        <p className="section-subtitle mb-12 max-w-3xl mx-auto">PHN Technology is supported by leaders across defence, academia, public sector, and industry.</p>
        
        <div className="advisory-carousel">
          {advisors.map((adv, idx) => (
            <div key={idx} className="advisory-mini-card">
              <div className="adv-img"><img src={adv.image} alt={adv.name} /></div>
              <div className="adv-info">
                <h4>{adv.name}</h4>
                <p className="adv-designation text-accent-blue text-sm font-bold">{adv.designation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/advisory-board" className="btn-premium btn-glass">View Full Advisory Board</Link>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section-full final-cta-section relative">
    <div className="container-premium text-center relative z-10">
      <h2 className="section-title-global text-white text-5xl mb-6">Ready to build future-ready talent?</h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Partner with PHN Technology for robotics, AI, IoT labs, training programs, and innovation ecosystems.</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link to="/contact" className="btn-premium btn-primary">Partner With PHN</Link>
        <Link to="/programs" className="btn-premium btn-glass">Explore Programs</Link>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <HeroSection />
    <WhatsHappening />
    <OurServices />
    <ImpactStats />
    <NetworkSection />
    <AdvisoryPreview />
    <FinalCTA />
  </>
);

// --- Footer ---
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="main-footer-premium">
      <div className="footer-circuit-bg"></div>
      <div className="container-premium relative z-10">
        <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="footer-brand">
            <BluePhnLogo height={42} className="mb-6" />
            <p className="text-white/60 text-sm mb-6">PHN Technology is a premier technology solutions provider, specializing in robotics, AI, and IT development for various industries.</p>
            <div className="social-icons-footer flex gap-4">
              <a href="#" className="social-link"><FacebookIcon /></a>
              <a href="#" className="social-link"><InstagramIcon /></a>
              <a href="#" className="social-link"><LinkedinIcon /></a>
              <a href="#" className="social-link"><YoutubeIcon /></a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/schoolsolution" className="footer-link">School Solution</Link></li>
              <li><Link to="/collegesolution" className="footer-link">College Solution</Link></li>
              <li><Link to="/about" className="footer-link">Our Company</Link></li>
              <li><Link to="/news" className="footer-link">Latest News</Link></li>
              <li><Link to="/career" className="footer-link">Career</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-accent-blue shrink-0 mt-1" />
                <p>Pune, Maharashtra, India</p>
              </div>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-accent-blue shrink-0 mt-1" />
                <a href="mailto:info@phntechnology.com" className="hover:text-accent-yellow transition-colors">info@phntechnology.com</a>
              </div>
            </div>
          </div>

          <div className="footer-gallery-col">
            <h4 className="text-white font-bold mb-6">Recent Event Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map((_, i) => (
                <div key={i} className="gallery-thumb bg-white/5 rounded overflow-hidden aspect-square">
                  <img src={`https://placehold.co/100x100/1e293b/ffffff?text=${i+1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 PHN Technology Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button className="back-to-top w-10 h-10 rounded-full bg-white/5 hover:bg-accent-blue flex items-center justify-center text-white transition-colors border border-white/10" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

// --- App Shell ---
const NavbarRouter = () => {
  const location = useLocation();
  const isProgramsRoute = location.pathname.startsWith('/programs');
  return isProgramsRoute ? <ProgramsTopBar /> : <GlobalNavbar />;
};

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-container">
        <JobTrainingPopup />
        <NavbarRouter />

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
            <Route path="/gallery" element={<Media />} />
            <Route path="/testimonials" element={<Media />} />
            <Route path="/industrial-visits" element={<Media />} />
            <Route path="/skillhub" element={<div className="pt-32 text-center text-3xl">PHN Skillhub (New)</div>} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/ipp" element={<IPP />} />
            <Route path="/programs/workshop/institute" element={<WorkshopPage />} />
            <Route path="/programs/workshop/university" element={<WorkshopPage />} />
            <Route path="/programs/*" element={<Programs />} />

            <Route path="/career" element={<div className="pt-32 text-center text-3xl">Career</div>} />
            <Route path="/contact" element={<div className="pt-32 text-center text-3xl">Contact Us</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
