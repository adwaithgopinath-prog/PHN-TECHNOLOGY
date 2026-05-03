import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, X } from 'lucide-react';

export const partnerData = [
  {
    id: 1,
    category: 'Industry',
    tag: 'Industry Partner',
    name: 'BELOP',
    title: 'PHN Technology Pvt Ltd and BELOP Establish a Strategic Collaboration',
    description: "PHN Technology and BELOP have joined forces to advance educational solutions and empower students with future-ready skills, strengthening PHN's tech and education initiatives.",
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'IIT',
    tag: 'IIT Collaboration',
    name: 'IIT Bombay',
    title: 'IIT Bombay and PHN Technology: Best foot forward towards Technology and future!',
    description: 'PHN Technology has partnered with IIT Bombay to establish a Center of Excellence in AI and robotics. This collaboration aims to inspire students by providing cutting-edge labs and nurturing entrepreneurial skills through interactive learning.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'IIT',
    tag: 'IIT Collaboration',
    name: 'IIT Madras',
    title: 'One More Step Forward Towards Technology - Collaboration with IIT Madras',
    description: "PHN Technology's MoU with IIT Madras focuses on advanced technology and robotics training. The partnership aims to achieve breakthrough innovations through hands-on learning and ample resources.",
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'IIT',
    tag: 'IIT Collaboration',
    name: 'IIT Guwahati',
    title: 'Robotics and AI: PHN Technology and IIT Guwahati Open Up New Boundaries',
    description: 'PHN Technology and IIT Guwahati have signed an MoU to advance research and development in robotics and AI. This strategic partnership focuses on delivering practical and affordable tech solutions while promoting educational excellence.',
    image: 'https://images.unsplash.com/photo-1523050335102-c32509142270?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'IIT',
    tag: 'IIT Collaboration',
    name: 'IIT Patna',
    title: 'IIT Patna and PHN Technology Establish Landmark Partnership',
    description: 'PHN Technology is collaborating with IIT Patna to set up advanced AI and robotics labs. This partnership aims to inspire future tech leaders by fostering innovation and entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    category: 'IIT',
    tag: 'IIT Collaboration',
    name: 'IIT Jammu',
    title: 'A Significant Milestone in Robotics and AI: The Partnership with IIT Jammu',
    description: "In partnership with IIT Jammu's I3C, PHN Technology has established a Center of Excellence in robotics, AI, and IoT. This initiative provides hands-on training and supports tech innovation and entrepreneurship in Jammu and Kashmir.",
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    category: 'NIT',
    tag: 'NIT Collaboration',
    name: 'NIT Delhi',
    title: 'Prominent Partnership with NIT Delhi',
    description: "PHN Technology's collaboration with NIT Delhi aims to revolutionize education using state-of-the-art robotics labs and AI technologies. The partnership focuses on enhancing research, fostering creativity, and hands-on learning experiences.",
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    category: 'NIT',
    tag: 'NIT Collaboration',
    name: 'NIT Puducherry',
    title: 'NIT Puducherry and PHN Technology Join Hands for Technical Advancement!',
    description: 'PHN Technology is collaborating with NIT Puducherry to promote advanced learning in robotics, AI/ML, drones, AR/VR, and IoT. This partnership emphasizes practical learning and supports research and innovation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    category: 'NIT',
    tag: 'NIT Collaboration',
    name: 'NIT Manipur',
    title: 'NIT Manipur and PHN Technology: Bringing Innovation to the North-East!',
    description: 'Partnering with NIT Manipur, PHN Technology is establishing a Center of Excellence in robotics and AI. This initiative provides hands-on training and encourages leadership and entrepreneurship among students in North-East India.',
    image: 'https://images.unsplash.com/photo-1498243639351-a0604b1263bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 10,
    category: 'IIIT',
    tag: 'IIIT Collaboration',
    name: 'IIIT Vadodara',
    title: 'With the Indian Institute of Information Technology, Vadodara (IIIT Vadodara)',
    description: "PHN Technology's MoU with IIIT Vadodara aims to revolutionize education using cutting-edge robotics labs and AI technologies. The partnership emphasizes hands-on learning through workshops, real-world projects, and interactive sessions.",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 11,
    category: 'IIIT',
    tag: 'IIIT Collaboration',
    name: 'IIIT Surat',
    title: 'IIIT Surat and PHN Technology: Leading the Way for Tech Innovation',
    description: 'PHN Technology has partnered with IIIT Surat to enhance education in robotics, AI, and IoT. This collaboration focuses on hands-on learning through workshops and real-world projects, empowering students with the skills needed for future tech challenges.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 12,
    category: 'IIIT',
    tag: 'IIIT Collaboration',
    name: 'IIIT Bhopal',
    title: 'IIIT Bhopal and PHN Technology: Shaping the Future of Education and Innovation!',
    description: 'PHN Technology and IIIT Bhopal are collaborating to enhance technical education and research in robotics, AI, and IoT. This partnership emphasizes hands-on training and promotes a culture of innovation.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 13,
    category: 'Industry',
    tag: 'Industry Partner',
    name: 'TCIL',
    title: 'Trailblazing Partnership with TCIL: Empowering Telecom Innovation',
    description: "PHN Technology is proud to sign an MoU with TCIL, a trusted name in telecommunications. This agreement combines TCIL's practical expertise with PHN's commitment to advanced tech education, aiming to shorten learning cycles, support hands-on research, and open fresh avenues for industry growth.",
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 14,
    category: 'Industry',
    tag: 'Industry Partner',
    name: 'ITI Ltd.',
    title: 'Driven by Innovation: A Collaboration with ITI Ltd.',
    description: 'PHN Technology has partnered with ITI Limited to provide ICT-based e-Governance, software and cloud solutions, drone technology, and distance learning solutions, driving innovation in technology and education.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

const PartnerCard = ({ partner, onClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="card-perspective"
    >
      <motion.div
        className="partner-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateX: rotateX, 
          rotateY: rotateY,
          translateZ: rotateX !== 0 ? 20 : 0
        }}
        onClick={onClick}
      >
        <div className="card-image-wrapper">
          <img src={partner.image} alt={partner.name} className="card-image" />
          <div className="card-tag">{partner.tag}</div>
        </div>
        <div className="card-content">
          <h3 className="card-partner-name">{partner.name}</h3>
          <h4 className="card-title">{partner.title}</h4>
          <p className="card-desc">{partner.description.substring(0, 100)}...</p>
          
          <div className="card-footer">
            <div className="card-divider"></div>
            <button className="view-details-btn">
              View Details <ArrowRight size={14} />
            </button>
          </div>
        </div>
        <div className="card-shine"></div>
      </motion.div>
    </motion.div>
  );
};

const Modal = ({ partner, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <div className="modal-body">
          <div className="modal-image-side">
            <img src={partner.image} alt={partner.name} />
          </div>
          <div className="modal-text-side">
            <span className="modal-tag">{partner.tag}</span>
            <h2 className="modal-title">{partner.title}</h2>
            <div className="modal-divider"></div>
            <p className="modal-desc">{partner.description}</p>
            <div className="modal-meta">
              <div className="meta-item">
                <strong>Collaboration Type:</strong> {partner.category}
              </div>
              <div className="meta-item">
                <strong>Status:</strong> Active / Ongoing
              </div>
            </div>
            <button className="btn" style={{ marginTop: '2rem', padding: '0.75rem 2rem' }}>Get in Touch</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PartnersSection = ({ limitInitial = 6 }) => {
  const [filter, setFilter] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [visibleCount, setVisibleCount] = useState(limitInitial);

  const filteredPartners = filter === 'All' 
    ? partnerData 
    : partnerData.filter(p => p.category === filter);

  const visiblePartners = filteredPartners.slice(0, visibleCount);
  const filters = ['All', 'IIT', 'NIT', 'IIIT', 'Industry'];

  return (
    <section id="partners" className="partners-section">
      <div className="abstract-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            PARTNERS & COLLABORATION
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Strategic academic and industry partnerships driving robotics, AI, IoT and future-ready learning.
          </motion.p>
        </div>

        <div className="filter-container">
          <div className="tabs-container">
            {filters.map((f, idx) => (
              <button 
                key={idx}
                className={`tab-btn ${filter === f ? 'active' : ''}`}
                onClick={() => { setFilter(f); setVisibleCount(limitInitial); }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="partners-grid"
        >
          <AnimatePresence mode='popLayout'>
            {visiblePartners.map((partner) => (
              <PartnerCard 
                key={partner.id} 
                partner={partner} 
                onClick={() => setSelectedPartner(partner)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredPartners.length && (
          <div className="text-center mt-16">
            <button className="view-full-btn" onClick={() => setVisibleCount(prev => prev + 6)}>
              Load More Partnerships <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedPartner && (
          <Modal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PartnersSection;
