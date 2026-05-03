import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, Building2, Briefcase, ShieldCheck, Globe } from 'lucide-react';
import { advisoryBoardData } from '../data/advisoryBoard';

const AdvisoryBoardPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = [
    { id: 'All', label: 'All', icon: <Users size={16} /> },
    { id: 'Defence', label: 'Defence', icon: <ShieldCheck size={16} /> },
    { id: 'Global Leadership', label: 'Global Leadership', icon: <Globe size={16} /> },
    { id: 'Academic', label: 'Academic', icon: <GraduationCap size={16} /> },
    { id: 'Public Sector', label: 'Public Sector', icon: <Building2 size={16} /> },
    { id: 'Industry', label: 'Industry', icon: <Briefcase size={16} /> }
  ];

  const filteredData = useMemo(() => {
    const data = [
      { ...advisoryBoardData.defence, id: 'Defence' },
      { ...advisoryBoardData.global, id: 'Global Leadership' },
      { ...advisoryBoardData.academic, id: 'Academic' },
      { ...advisoryBoardData.public, id: 'Public Sector' },
      { ...advisoryBoardData.industry, id: 'Industry' }
    ];
    
    if (activeFilter === 'All') return data;
    return data.filter(cat => cat.id === activeFilter);
  }, [activeFilter]);

  return (
    <div className="advisory-page-container">
      <div className="advisory-hero section-full bg-deep">
        <div className="container-premium">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title-global"
          >
            Advisory Board
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="advisory-subtitle"
          >
            Experts guiding PHN’s mission across technology, education, research, defence, and industry.
          </motion.p>
        </div>
      </div>

      <div className="container-premium py-section">
        {/* Filter Tabs */}
        <div className="advisory-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-chip ${activeFilter === cat.id ? 'active' : ''}`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Member Sections */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="advisory-content"
          >
            {filteredData.map((section) => (
              <div key={section.id} className="category-section">
                <div className="category-header">
                  <h2 className="section-title-global">{section.title}</h2>
                  <p className="category-desc body-text-global">{section.description}</p>
                </div>
                
                <div className="member-grid">
                  {section.members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="member-glass-card"
    >
      <div className="member-image-wrapper">
        <img src={member.image} alt={member.name} className="member-image" />
        <div className="card-glow-blue"></div>
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-designation">{member.designation}</p>
        <div className="gold-accent-line"></div>
        <p className="member-expertise">{member.expertise}</p>
      </div>
      <div className="card-glow-gold"></div>
    </motion.div>
  );
};

export default AdvisoryBoardPage;
