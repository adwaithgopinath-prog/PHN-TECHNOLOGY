import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
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
import PartnersSection from './components/PartnersSection';
import { advisoryBoardData } from './data/advisoryBoard';
import './GlobalDesign.css';

// Custom SVG Icons
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const YoutubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

// Premium Blue PHN Logo SVG (Folded / 3D design)
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
    
    {/* P - Folded Style */}
    <path d="M10 10H35C45 10 50 15 50 22.5C50 30 45 35 35 35H22V50H10V10Z" fill="url(#logoBlueGrad)" />
    <path d="M10 10L22 22V10H10Z" fill="url(#logoFoldGrad)" opacity="0.8" />
    <path d="M22 10H35C42 10 46 13 46 18.5C46 24 42 27 35 27H22V10Z" fill="white" opacity="0.1" />

    {/* H - Bold Geometric */}
    <path d="M60 10H72V25H90V10H102V50H90V35H72V50H60V10Z" fill="url(#logoBlueGrad)" />
    <path d="M72 25L81 30V25H72Z" fill="url(#logoFoldGrad)" opacity="0.6" />

    {/* N - Folded Diagonal */}
    <path d="M112 10H124L142 40V10H154V50H142L124 20V50H112V10Z" fill="url(#logoBlueGrad)" />
    <path d="M124 10L142 40V10H124Z" fill="url(#logoFoldGrad)" opacity="0.8" />

    {/* TECHNOLOGY - Clean Sans-Serif */}
    <text x="8" y="72" fill="#003399" style={{ font: '700 24px Inter, sans-serif', letterSpacing: '6px' }}>TECHNOLOGY</text>
  </svg>
);

const latestNewsData = [
  {
    id: 1,
    date: 'July 5, 2025',
    title: 'WSS Awards 2025: PHN Technology Leader Recognized for Excellence',
    highlights: [
      { label: 'Recognizing Talent', desc: 'Mr. Pradip Narayankar honored for transforming education.' },
      { label: 'Inspiring Innovation', desc: 'Recognized for elevating Indian innovation globally.' }
    ],
    image: './src/assets/news-wss.png',
    thumbnails: ['./src/assets/news-wss.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: false,
    label: 'Award Moment'
  },
  {
    id: 2,
    date: 'March 17, 2025',
    title: 'PHN CoE Lab Inaugurated at IIT Guwahati: Empowering Innovation',
    highlights: [
      { label: 'State-of-the-Art', desc: 'PHN launches Robotics, AI, IoT hub at IIT Guwahati.' },
      { label: 'Empowering Talent', desc: 'Building industry-ready expertise for students.' }
    ],
    image: './src/assets/news-guwahati.png',
    thumbnails: ['./src/assets/news-guwahati.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: true,
    label: 'Featured Story'
  },
  {
    id: 3,
    date: 'Feb 19, 2025',
    title: 'Shaping Tomorrow: Inauguration of PHN CoE Lab at IIT Jammu',
    highlights: [
      { label: 'Tech Hub Launched', desc: 'PHN opens Robotics, AI, IoT lab at IIT Jammu.' },
      { label: 'Skill-Building', desc: 'Drives hands-on training for next-gen innovators.' }
    ],
    image: './src/assets/news-jammu.png',
    thumbnails: ['./src/assets/news-jammu.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: true,
    label: 'Featured Story'
  },
  {
    id: 4,
    date: 'January 21, 2025',
    title: 'Advancing Education: PHN CoE Lab Inaugurated at NIT Delhi',
    highlights: [
      { label: 'Innovative Lab', desc: 'Robotics, AI, IoT center fuels practical education.' },
      { label: 'Future-Ready', desc: 'Bridges academia and industry for student success.' }
    ],
    image: './src/assets/news-delhi.png',
    thumbnails: ['./src/assets/news-delhi.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: true,
    label: 'Featured Story'
  },
  {
    id: 5,
    date: '22 December, 2024',
    title: 'Pioneering the Future: Inauguration of PHN CoE Lab at IIT Patna',
    highlights: [
      { label: 'Tech Hub Unveiled', desc: 'Launching Robotics, AI, IoT lab at IIT Patna.' },
      { label: 'Visionary Lab', desc: 'Showcasing cutting-edge infrastructure and talks.' }
    ],
    image: './src/assets/news-patna.png',
    thumbnails: ['./src/assets/news-patna.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: true,
    label: 'Featured Story'
  },
  {
    id: 6,
    date: '06 February, 2025',
    title: 'Empowering Innovation: Inauguration of PHN CoE Lab at IIIT Vadodara',
    highlights: [
      { label: 'Advanced Launch', desc: 'New hub for Robotics and AI at IIIT Vadodara.' },
      { label: 'Industry Link', desc: 'Drives collaboration for cutting-edge technologies.' }
    ],
    image: './src/assets/news-vadodara.png',
    thumbnails: ['./src/assets/news-vadodara.png'],
    category: 'Latest News',
    badge: 'LATEST',
    isVideo: true,
    label: 'Featured Story'
  }
];

const upcomingEventsData = [
  {
    id: 1,
    institution: "IIIT Bhopal",
    badge: "UPCOMING",
    title: "Tech Lab Launch at IIIT Bhopal",
    description: "Empowering innovation: PHN Technology and IIIT Bhopal are set to launch an advanced tech lab designed to convert student ideas into real-world innovations. The facility will focus on hands-on robotics, IoT systems, and maker tools—empowering future tech leaders.",
    image: "./src/assets/event-iiit-bhopal.png",
    accent: "blue"
  },
  {
    id: 2,
    institution: "NIT Warangal",
    badge: "UPCOMING",
    title: "CoE Opening at NIT Warangal",
    description: "A new Centre of Excellence is coming soon to NIT Warangal in collaboration with PHN Technology. The space will provide hands-on access to cutting-edge tools in robotics, drones, and connected systems—fueling next-gen innovation and research.",
    image: "./src/assets/event-nit-warangal.png",
    accent: "yellow"
  },
  {
    id: 3,
    institution: "NIT Puducherry",
    badge: "UPCOMING",
    title: "Smart Lab at NIT Puducherry",
    description: "PHN Technology and NIT Puducherry are preparing to launch a Centre of Excellence focused on practical learning in robotics, drone tech, and IoT. Students will gain hands-on exposure to real-world problem-solving and tech experimentation.",
    image: "./src/assets/event-nit-puducherry.png",
    accent: "blue"
  },
  {
    id: 4,
    institution: "Seri International, Pune",
    badge: "UPCOMING",
    title: "Innovation Lab at Seri International",
    description: "PHN Technology is launching an Innovation Hub at Serii International School, Pune. This lab will empower students with tools to bring their creative ideas to life while nurturing a tech-first mindset aligned with industry needs.",
    image: "./src/assets/event-seri-pune.png",
    accent: "yellow"
  },
  {
    id: 5,
    institution: "Queen’s College, Varanasi",
    badge: "UPCOMING",
    title: "Tech Enrichment Zone at Queen’s College",
    description: "Queen’s College Varanasi will soon witness the opening of a Smart Lab powered by PHN Technology. The lab will focus on building problem-solving skills through hands-on projects rooted in local challenges and real-world tech.",
    image: "./src/assets/event-queen-college.png",
    accent: "blue"
  }
];

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (upcomingEventsData.length === 0) {
    return (
      <div className="empty-state container-premium">
        <p>No upcoming events currently. Check back soon for PHN’s next innovation launch.</p>
      </div>
    );
  }

  return (
    <div className="upcoming-events-list container-premium">
      {upcomingEventsData.map((event) => (
        <motion.div 
          key={event.id} 
          className={`event-card-wide ${event.accent}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="event-visual-side">
            <div className="event-img-container">
              <img src={event.image} alt={event.institution} className="event-visual-img" />
              <div className="visual-overlay"></div>
            </div>
            <div className="collaboration-tag">PHN x {event.institution}</div>
          </div>
          
          <div className="event-info-side">
            <div className="event-meta-row">
              <span className="upcoming-badge">{event.badge}</span>
              <span className="institution-label">{event.institution}</span>
            </div>
            <h3 className="event-title-main">{event.title}</h3>
            <p className="event-desc-main">{event.description}</p>
            
            <div className="event-actions">
              <button className="btn-details" onClick={() => setSelectedEvent(event)}>VIEW DETAILS</button>
              <button className="btn-notify">NOTIFY ME</button>
            </div>
          </div>
          <div className="card-accent-line"></div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const EventModal = ({ event, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="modal-content event-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <div className="modal-body event-modal-body">
          <div className="modal-image-side event-modal-img">
            <img src={event.image} alt={event.institution} />
            <div className="modal-img-overlay"></div>
          </div>
          <div className="modal-text-side event-modal-text">
            <div className="flex items-center gap-4 mb-4">
              <span className="upcoming-badge">{event.badge}</span>
              <span className="institution-label">{event.institution}</span>
            </div>
            <h2 className="modal-title">{event.title}</h2>
            <div className="modal-divider"></div>
            <p className="modal-desc">{event.description}</p>
            <div className="modal-meta-grid">
              <div className="meta-box">
                <span className="meta-title">COLLABORATION</span>
                <span className="meta-value">PHN Technology x {event.institution}</span>
              </div>
              <div className="meta-box">
                <span className="meta-title">STATUS</span>
                <span className="meta-value">Preparing for Launch</span>
              </div>
            </div>
            <button className="btn-notify-large" onClick={onClose}>Notify Me of Launch</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const NewsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % latestNewsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + latestNewsData.length) % latestNewsData.length);
  };

  const activeNews = latestNewsData[currentIndex];

  return (
    <div className="latest-news-wrapper">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
          className="latest-news-card"
        >
          <div className="latest-news-media">
            <img src={activeNews.image} alt={activeNews.title} />
            <div className="media-overlay-gradient"></div>
            <div className="media-label-badge">{activeNews.label}</div>
            {activeNews.isVideo && (
              <div className="play-btn-circle">
                <div className="play-icon-inner"></div>
              </div>
            )}
          </div>

          <div className="latest-news-content">
            <div className="content-top-row">
              <span className="premium-badge-latest">{activeNews.badge}</span>
              <span className="content-date-line">{activeNews.date}</span>
            </div>
            
            <h2 className="latest-news-title">{activeNews.title}</h2>

            <div className="latest-news-highlights">
              {activeNews.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="highlight-row-card">
                  <div className="highlight-dot-gold"></div>
                  <div className="highlight-text-box">
                    <span className="highlight-label">{item.label}</span>
                    <p className="highlight-desc limit-lines">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-footer-actions">
              <button className="read-more-btn-v2" onClick={() => setSelectedNews(activeNews)}>
                READ MORE <ArrowRight size={18} />
              </button>

              <div className="carousel-nav-controls">
                <button className="nav-arrow-v2 prev" onClick={prevSlide}><ChevronLeft size={20} /></button>
                <div className="nav-dots-v2">
                  {latestNewsData.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`nav-dot-v2 ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
                <button className="nav-arrow-v2 next" onClick={nextSlide}><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedNews && (
          <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const NewsModal = ({ news, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="modal-content news-modal"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <div className="modal-body">
          <div className="modal-image-side full-width">
            <img src={news.image} alt={news.title} />
          </div>
          <div className="modal-text-side">
            <div className="flex items-center gap-4 mb-4">
              <span className="news-badge">{news.badge}</span>
              <span className="news-date">{news.date}</span>
            </div>
            <h2 className="modal-title">{news.title}</h2>
            <div className="modal-divider"></div>
            <div className="news-full-desc body-text-global">
              {news.highlights.map((h, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}><strong>{h.label}:</strong> {h.desc}</p>
              ))}
              <p>PHN Technology continues to lead the way in technical education and industrial innovation through strategic partnerships and world-class laboratory facilities across India's premier institutions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ImpactSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10; 
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const stats = [
    { label: 'Institutions', value: '500+', icon: <Building2 size={36} strokeWidth={1.5} /> },
    { label: 'Students', value: '50k+', icon: <Users size={36} strokeWidth={1.5} /> },
    { label: 'Mentors', value: '100+', icon: <GraduationCap size={36} strokeWidth={1.5} /> },
    { label: 'Partners', value: '25+', icon: <Briefcase size={36} strokeWidth={1.5} /> }
  ];

  return (
    <section className="section-full impact-section-premium bg-alt" style={{ perspective: '1200px' }}>
      <div className="container-premium">
        <motion.div 
          className="impact-glass-panel"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="impact-glow-bg" style={{ transform: 'translateZ(-30px)' }}></div>
          <div className="impact-grid" style={{ transformStyle: 'preserve-3d' }}>
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="impact-stat-item"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="impact-icon-wrapper" style={{ transform: 'translateZ(40px)' }}>
                    {stat.icon}
                    <div className="icon-glow"></div>
                    <div className="glowing-node-line"></div>
                  </div>
                  <h3 className="impact-value" style={{ transform: 'translateZ(60px)' }}>{stat.value}</h3>
                  <p className="impact-label" style={{ transform: 'translateZ(30px)' }}>{stat.label}</p>
                </motion.div>
                {idx < stats.length - 1 && (
                  <div className="impact-divider" style={{ transform: 'translateZ(20px)' }}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AdvisoryBoardPreview = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: 'All', icon: <Users size={14} /> },
    { label: 'Defence', icon: <ShieldCheck size={14} /> },
    { label: 'Global Leadership', icon: <Globe size={14} /> },
    { label: 'Academic', icon: <GraduationCap size={14} /> },
    { label: 'Public Sector', icon: <Building2 size={14} /> },
    { label: 'Industry', icon: <Briefcase size={14} /> }
  ];

  const activeIndex = categories.findIndex(c => c.label === activeCategory);

  const goPrevCategory = () => {
    const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex].label);
  };

  const goNextCategory = () => {
    const nextIndex = (activeIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex].label);
  };

  const allMembers = [
    ...advisoryBoardData.defence.members.map(m => ({ ...m, category: 'Defence' })),
    ...advisoryBoardData.global.members.map(m => ({ ...m, category: 'Global Leadership' })),
    ...advisoryBoardData.academic.members.map(m => ({ ...m, category: 'Academic' })),
    ...advisoryBoardData.public.members.map(m => ({ ...m, category: 'Public Sector' })),
    ...advisoryBoardData.industry.members.map(m => ({ ...m, category: 'Industry' }))
  ];

  const filteredMembers = activeCategory === "All"
    ? allMembers.slice(0, 8) // Limit to 8 for the preview
    : allMembers.filter(m => m.category === activeCategory);

  return (
    <section className="advisory-preview-section section-full bg-deep">
      <div className="container-premium">
        <div className="preview-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="preview-title"
          >
            Guided by Experts. Built for Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="preview-subtitle"
          >
            PHN Technology is supported by leaders across defence, academia, public sector, and industry.
          </motion.p>
          
          <div className="preview-filters-container flex items-center justify-center gap-4 mt-8">
            <button className="preview-nav-arrow" onClick={goPrevCategory} aria-label="Previous advisory category">
              <ChevronLeft size={20} />
            </button>
            <div className="preview-chips">
              {categories.map((chip) => (
                <button 
                  key={chip.label} 
                  className={`preview-chip ${activeCategory === chip.label ? 'active' : ''}`}
                  onClick={() => setActiveCategory(chip.label)}
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
            <button className="preview-nav-arrow" onClick={goNextCategory} aria-label="Next advisory category">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="preview-carousel-wrapper">
          <AnimatePresence mode="wait">
            {filteredMembers.length > 0 ? (
              <motion.div 
                key={activeCategory}
                className="preview-cards-row"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filteredMembers.map((member, idx) => (
                  <div key={idx} className="preview-member-card">
                    <div className="preview-member-img">
                      <img src={member.image} alt={member.name} />
                      <div className="img-glow"></div>
                    </div>
                    <h4 className="preview-member-name">{member.name}</h4>
                    <p className="preview-member-role">{member.designation}</p>
                    <div className="gold-accent"></div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="empty-category-message"
              >
                No advisory members found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="preview-cta">
          <button className="view-full-btn" onClick={() => navigate('/advisory-board')}>
            View Full Advisory Board <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const HomePage = ({ partnersVisible, handleKnowMore, activeTab, setActiveTab }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-container">
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

            <a href="#updates" id="know-more-button" className="btn-gold" onClick={handleKnowMore}>
              KNOW MORE <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What’s Happening Section */}
      <section className="updates-section section-full bg-subtle" id="updates">
        <div className="container-premium">
          <div className="updates-header">
            <h2 className="updates-title">What’s Happening at PHN?</h2>
            <p className="updates-subtitle">Tech that Transforms, Events that Inspire.</p>
          </div>
          <div className="tabs-container">
            {['Latest News', 'Recents', 'Upcoming Events', 'Programs'].map((tab) => (
              <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="tabs-content">
            <AnimatePresence mode="wait">
              {activeTab === 'Latest News' ? (
                <motion.div key="latest-news" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <NewsShowcase />
                </motion.div>
              ) : activeTab === 'Upcoming Events' ? (
                <motion.div key="upcoming-events" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <UpcomingEvents />
                </motion.div>
              ) : (
                <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="updates-grid">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="update-card">
                      <div className="update-img-placeholder"></div>
                      <div className="update-info">
                        <span className="update-category">{activeTab}</span>
                        <h3 className="update-name">Feature Project {i}</h3>
                        <p className="update-desc">Exploring the frontier of AI and Robotics in industrial applications.</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Partners & Collaboration Section */}
      <div className={partnersVisible ? 'is-visible' : 'is-hidden'}>
        <PartnersSection />
      </div>

      {/* Impact / Stats Section */}
      <ImpactSection />

      {/* Advisory Board Preview */}
      <AdvisoryBoardPreview />
      
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
      
      {/* CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container-premium">
          <div className="cta-strip-content">
            <div className="cta-strip-text">
              <h3 className="cta-title">Ready to build future-ready talent?</h3>
              <p className="cta-subtitle">Partner with PHN Technology for robotics, AI, IoT labs, training programs, and innovation ecosystems.</p>
            </div>
            <div className="cta-strip-buttons">
              <Link to="/contact" className="cta-btn-primary">Partner With PHN <ArrowRight size={16} /></Link>
              <Link to="/programs" className="cta-btn-glass">Explore Programs <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-col brand-col">
              <Link to="/" onClick={scrollToTop} className="flex items-center no-underline footer-brand-link mb-4">
                <BluePhnLogo height={48} />
              </Link>
              <p className="footer-brand-tagline">India’s Most Trusted Destination For AI & Robotics Education</p>
              <div className="footer-credibility-line">
                Robotics • AI • IoT • Skill Development
              </div>
              <div className="footer-socials">
                <a href="#" className="social-btn" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" className="social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
                <a href="#" className="social-btn" aria-label="YouTube"><YoutubeIcon /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/schoolsolution"><span className="link-dot"></span> School Solution</Link></li>
                <li><Link to="/collegesolution"><span className="link-dot"></span> College Solution</Link></li>
                <li><Link to="/about"><span className="link-dot"></span> Our Company</Link></li>
                <li><Link to="/news"><span className="link-dot"></span> Latest News</Link></li>
                <li><Link to="/career"><span className="link-dot"></span> Career</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <p className="footer-contact-text">
                  PHN Technology Pvt Ltd., Tower A, Giga Platinum, Somnath Nagar Rd, near Akoya Skoda Showroom, Clover Park, Viman Nagar, Pune, Maharashtra 411014
                </p>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:info@phntechnology.com" className="footer-email">info@phntechnology.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+918412841200" className="footer-email">+91 8412 8412 00</a>
              </div>
              <div className="contact-item whatsapp-action">
                <MessageCircle size={16} className="contact-icon whatsapp-icon" />
                <a href="https://wa.me/918412841200" target="_blank" rel="noreferrer" className="footer-whatsapp">Chat on WhatsApp <ArrowRight size={14} /></a>
              </div>
            </div>

            {/* Column 4: Gallery */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Recent Event Gallery</h4>
              <div className="footer-gallery-grid">
                {galleryImages.map((img, idx) => (
                  <Link to="/gallery" key={idx} className="footer-gallery-item">
                    <img src={img} alt={`Gallery event ${idx + 1}`} />
                    <div className="gallery-overlay"></div>
                  </Link>
                ))}
              </div>
              <Link to="/gallery" className="view-gallery-link">View Gallery <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright-area">
              <p className="copyright-text">© Copyright 2025 - PHN Technology Pvt Ltd.</p>
              <div className="footer-status-pill">
                <div className="status-dot"></div>
                Innovation Ecosystem Active
              </div>
            </div>
            <div className="bottom-links">
              <Link to="/terms">Terms of Use</Link>
              <span className="divider">|</span>
              <Link to="/privacy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

const GlobalNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSchoolRoute = location.pathname === '/schoolsolution';

  const navItems = [
    { label: 'Services', items: ['School Solution', 'College Solution', 'Robotics Development', 'IT Development', 'Products'] },
    { label: 'Our Company', items: ['About Us', 'Partners & Collaborations', 'Advisory Board'] },
    { label: 'Media', items: ['Latest News', 'Gallery', 'Testimonials', 'Industrial Visits'] },
    { label: 'PHN Skillhub', badge: 'New' },
    { label: 'Programs' },
    { label: 'Career' },
    { label: 'Contact us' }
  ];

  return (
    <header className={isSchoolRoute ? "school-hero-navbar" : ""}>
      <div className="container flex items-center justify-between" style={{ height: '80px' }}>
        {/* Left: Logo */}
        <Link to="/" className="flex items-center no-underline" style={{ color: 'inherit' }}>
          <BluePhnLogo height={42} className={isSchoolRoute ? "school-nav-logo" : ""} />
        </Link>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center">
          {navItems.map((item, idx) => (
            <div key={idx} className="nav-item">
              <button className={`nav-link ${isSchoolRoute ? 'text-white' : ''}`}>
                {item.label}
                {item.items && <ChevronDown size={14} opacity={0.5} />}
                {item.badge && <span className="badge-new">{item.badge}</span>}
              </button>
              {item.items && (
                <div className="dropdown-menu">
                  {item.items.map((sub, sIdx) => {
                    let path = '#';
                    if (sub === 'Advisory Board') path = '/advisory-board';
                    if (sub === 'School Solution') path = '/schoolsolution';
                    if (sub === 'College Solution') path = '/collegesolution';
                    if (sub === 'Robotics Development') path = '/roboticsdevelopment';
                    if (sub === 'IT Development') path = '/itdevelopment';
                    if (sub === 'Products') path = '/products';
                    if (sub === 'About Us') path = '/about';
                    if (sub === 'Partners & Collaborations') path = '/partners';
                    return (
                      <Link key={sIdx} to={path} className="dropdown-item">{sub}</Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Branding Logo & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center" style={{ marginRight: '1rem' }}>
            <BluePhnLogo height={32} className={isSchoolRoute ? "school-nav-logo" : ""} />
          </div>
          <div className={`social-icons ${isSchoolRoute ? 'school-nav-socials' : ''}`}>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LinkedinIcon /></a>
            <a href="#"><YoutubeIcon /></a>
          </div>
          <button className={`lg:hidden ml-4 ${isSchoolRoute ? 'text-white' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Latest News');

  const handleKnowMore = (e) => {
    e.preventDefault();
    setPartnersVisible(true);
  };

  useEffect(() => {
    if (partnersVisible) {
      setTimeout(() => {
        const section = document.getElementById('partners');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [partnersVisible]);

  const navItems = [
    { label: 'Services', items: ['School Solution', 'College Solution', 'Robotics Development', 'IT Development', 'Products'] },
    { label: 'Our Company', items: ['About Us', 'Partners & Collaborations', 'Advisory Board'] },
    { label: 'Media', items: ['Latest News', 'Gallery', 'Testimonials', 'Industrial Visits'] },
    { label: 'PHN Skillhub', badge: 'New' },
    { label: 'Programs' },
    { label: 'Career' },
    { label: 'Contact us' }
  ];

  return (
    <Router>
      <div className="app-shell">
        <div className="app-container">
          <JobTrainingPopup />
          <GlobalNavbar />


        <Routes>
          <Route path="/" element={<HomePage partnersVisible={partnersVisible} handleKnowMore={handleKnowMore} activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/advisory-board" element={<AdvisoryBoardPage />} />
          <Route path="/schoolsolution" element={<SchoolSolution />} />
          <Route path="/collegesolution" element={<CollegeSolution />} />
          <Route path="/roboticsdevelopment" element={<RoboticsDevelopment />} />
          <Route path="/itdevelopment" element={<ITDevelopment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        
        <Footer />
        </div>
      </div>
    </Router>
  );
};


export default App;

