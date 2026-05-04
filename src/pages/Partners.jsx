import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, X, ExternalLink, Award, Globe, Building2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Partners.css';

const partnersData = [
  {
    id: 1,
    name: "IIT Patna",
    category: "IIT",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    description: "PHN Technology has established a cutting-edge Centre of Excellence (CoE) at IIT Patna, focusing on advanced Robotics, AI, and IoT research. This partnership bridges the gap between academic research and industrial application, empowering students with hands-on experience on world-class infrastructure.",
    shortDesc: "Strategic CoE for advanced Robotics, AI, and IoT research and development.",
    featured: true
  },
  {
    id: 2,
    name: "IIT Jammu",
    category: "IIT",
    image: "https://images.unsplash.com/photo-1523050853064-dbad350c7467?q=80&w=1000&auto=format&fit=crop",
    description: "Our collaboration with IIT Jammu focuses on building a robust innovation ecosystem in the region. The PHN CoE at IIT Jammu provides students with access to high-end development kits and mentorship from industry experts to solve real-world challenges.",
    shortDesc: "Fostering innovation and skill development through regional tech hubs.",
    featured: true
  },
  {
    id: 3,
    name: "IIT Bombay",
    category: "IIT",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000&auto=format&fit=crop",
    description: "Working with IIT Bombay on technical workshops and industrial exposure programs, ensuring students stay ahead of the curve in emerging technologies like machine learning and autonomous systems.",
    shortDesc: "Collaborative technical workshops and industry exposure initiatives.",
    featured: false
  },
  {
    id: 4,
    name: "IIT Madras",
    category: "IIT",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
    description: "Engagement with IIT Madras focuses on R&D initiatives and talent acquisition programs, identifying top engineering talent for advanced robotics projects.",
    shortDesc: "Research and development focus paired with high-end talent scouting.",
    featured: false
  },
  {
    id: 5,
    name: "IIT Guwahati",
    category: "IIT",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    description: "The PHN CoE Lab at IIT Guwahati serves as a lighthouse for tech education in Northeast India, providing specialized training in IoT and embedded systems.",
    shortDesc: "Regional hub for specialized IoT and embedded systems training.",
    featured: false
  },
  {
    id: 6,
    name: "NIT Delhi",
    category: "NIT",
    image: "https://images.unsplash.com/photo-1498243639359-2830cbd75951?q=80&w=1000&auto=format&fit=crop",
    description: "Partnering with NIT Delhi to modernize engineering labs and integrate industry-certified training modules into the curriculum.",
    shortDesc: "Modernizing engineering labs with industry-certified training modules.",
    featured: false
  },
  {
    id: 7,
    name: "NIT Puducherry",
    category: "NIT",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    description: "Launch of specialized labs for drone technology and smart systems at NIT Puducherry to enhance practical learning.",
    shortDesc: "Dedicated labs for drone technology and smart systems innovation.",
    featured: false
  },
  {
    id: 8,
    name: "NIT Manipur",
    category: "NIT",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    description: "Empowering students in the Northeast through comprehensive skill development programs in robotics and automation.",
    shortDesc: "Comprehensive robotics skill development for regional empowerment.",
    featured: false
  },
  {
    id: 9,
    name: "IIIT Vadodara",
    category: "IIIT",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    description: "Academic partnership focused on software engineering and AI applications in industrial robotics.",
    shortDesc: "Bridging software excellence with industrial robotics applications.",
    featured: false
  },
  {
    id: 10,
    name: "IIIT Surat",
    category: "IIIT",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
    description: "Collaborating on next-generation computing and IoT frameworks to drive innovation in smart city solutions.",
    shortDesc: "Developing next-gen computing frameworks for smart city tech.",
    featured: false
  },
  {
    id: 11,
    name: "IIIT Bhopal",
    category: "IIIT",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    description: "Upcoming launch of a state-of-the-art Innovation Lab to nurture student-led startups and research.",
    shortDesc: "State-of-the-art Innovation Lab for startups and research.",
    featured: false
  },
  {
    id: 12,
    name: "BELOP",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    description: "Strategic alliance for manufacturing and deployment of defense-grade robotics and surveillance systems.",
    shortDesc: "Defence-grade robotics and surveillance system manufacturing.",
    featured: false
  },
  {
    id: 13,
    name: "TCIL",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    description: "Partnership for nation-wide implementation of smart education tools and digital transformation projects.",
    shortDesc: "National implementation of smart education and digital tools.",
    featured: false
  },
  {
    id: 14,
    name: "ITI Ltd.",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    description: "Joint development of indigenous IoT hardware and networking solutions for industrial applications.",
    shortDesc: "Joint development of indigenous IoT hardware and solutions.",
    featured: false
  }
];

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [filteredPartners, setFilteredPartners] = useState(partnersData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredPartners(partnersData);
    } else {
      setFilteredPartners(partnersData.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  const featuredPartner = partnersData.find(p => p.name === "IIT Patna") || partnersData[0];

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="hero-circuit-bg"></div>
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-inner"
          >
            <span className="hero-tagline">Partners & Collaboration</span>
            <h1 className="hero-title-main">Building India’s Future-Ready Innovation Network</h1>
            <p className="hero-subtitle-main">
              Strategic academic and industry partnerships advancing robotics, AI, IoT, research, and hands-on learning.
            </p>
            
            <div className="credibility-chips">
              <span className="credibility-chip">IIT Collaborations</span>
              <span className="credibility-chip">NIT Partnerships</span>
              <span className="credibility-chip">IIIT Network</span>
              <span className="credibility-chip">Industry Alliances</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="filter-section">
        <div className="container-custom">
          <div className="filter-bar-inner">
            <div className="segmented-control">
              {['All', 'IIT', 'NIT', 'IIIT', 'Industry'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="results-count">
              Showing {filteredPartners.length} {filteredPartners.length === 1 ? 'collaboration' : 'collaborations'}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collaboration */}
      <section className="featured-collaboration">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="featured-card"
          >
            <div className="featured-img-side">
              <img src={featuredPartner.image} alt={featuredPartner.name} className="featured-img" />
              <div className="featured-img-overlay"></div>
            </div>
            <div className="featured-content-side">
              <span className="featured-badge">Featured Partnership</span>
              <h2 className="featured-title">CoE Lab at {featuredPartner.name}</h2>
              <p className="featured-desc">{featuredPartner.description}</p>
              <button className="btn-details" onClick={() => handlePartnerClick(featuredPartner)}>
                View Details <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-grid-section">
        <div className="container-custom">
          <div className="partners-grid">
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner, idx) => (
                <motion.div
                  layout
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  className="partner-card"
                  onClick={() => handlePartnerClick(partner)}
                >
                  <div className="partner-img-container">
                    <img src={partner.image} alt={partner.name} className="partner-logo" />
                    <span className="partner-category-badge">{partner.category}</span>
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-title">{partner.name}</h3>
                    <p className="partner-excerpt">{partner.shortDesc}</p>
                  </div>
                  <button className="btn-card-details">View Details</button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-box"
          >
            <h2 className="cta-title">Ready to build future-ready talent?</h2>
            <p className="cta-subtitle">
              Partner with PHN Technology for robotics, AI, IoT labs, training programs, and innovation ecosystems.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary-gold">Partner With PHN</Link>
              <Link to="/programs" className="btn-secondary-glass">Explore Programs</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="partner-modal-overlay" onClick={closeModal}>
            <motion.div 
              className="partner-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button className="modal-close-btn" onClick={closeModal}><X size={24} /></button>
              <div className="modal-inner">
                <img src={selectedPartner.image} alt={selectedPartner.name} className="modal-hero-img" />
                <div className="modal-body-content">
                  <div className="modal-meta">
                    <span className="partner-category-badge">{selectedPartner.category}</span>
                    <span style={{ color: '#808080', fontSize: '0.9rem' }}>Official Academic Partner</span>
                  </div>
                  <h2 className="modal-title">{selectedPartner.name}</h2>
                  <p className="modal-full-desc">{selectedPartner.description}</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-details" onClick={closeModal}>Close Details</button>
                    <button className="btn-secondary-glass" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Visit Website <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Partners;
