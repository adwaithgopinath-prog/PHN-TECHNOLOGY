import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, BookOpen, GraduationCap, 
  Briefcase, MonitorPlay, Zap, ShieldCheck,
  CheckCircle, Globe, Cpu
} from 'lucide-react';
import './Programs.css';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pathways = [
    {
      title: 'IIT / NIT / IIIT Workshops',
      icon: <Zap size={32} />,
      desc: 'Advanced technical sessions for premier national institutes focusing on high-end robotics and AI.',
      label: 'For Premier Institutes',
      link: '/programs/workshop/institute',
      color: 'blue'
    },
    {
      title: 'University Workshops',
      icon: <BookOpen size={32} />,
      desc: 'Industry-ready skill development programs for engineering universities and technical colleges.',
      label: 'For Universities',
      link: '/programs/workshop/university',
      color: 'purple'
    },

    {
      title: 'Expert-Led Masterclasses',
      icon: <MonitorPlay size={32} />,
      desc: 'Focused learning sessions led by experts from academia and industry.',
      label: 'For Enthusiasts',
      link: '/programs/masterclasses',
      color: 'purple'
    },
    {
      title: 'Internship Programs',
      icon: <Briefcase size={32} />,
      desc: 'Real-world projects, mentoring, and portfolio-building experience.',
      label: 'For College Students',
      link: '/programs/internships',
      color: 'gold'
    },
    {
      title: 'Summer Internship',
      icon: <Globe size={32} />,
      desc: 'Intensive seasonal learning for students who want practical exposure during breaks.',
      label: 'Seasonal',
      link: '/programs/summer-internship',
      color: 'blue'
    },
    {
      title: 'PHN Skillhub',
      icon: <Sparkles size={32} />,
      desc: 'Online courses and career-ready learning paths.',
      label: 'For Everyone',
      link: '/skillhub',
      color: 'purple'
    },
    {
      title: 'CoE Lab Programs',
      icon: <Cpu size={32} />,
      desc: 'Institutional lab-based learning around robotics, AI, and IoT.',
      label: 'For Institutions',
      link: '/collegesolution',
      color: 'gold'
    }
  ];

  const benefits = [
    { title: 'Expert Curriculum', icon: <BookOpen size={24} /> },
    { title: 'Hands-on Focus', icon: <Zap size={24} /> },
    { title: 'Verified Certification', icon: <ShieldCheck size={24} /> },
    { title: 'Career Guidance', icon: <Briefcase size={24} /> }
  ];

  const journeySteps = [
    { step: 1, title: 'Discover', icon: <Globe size={24} /> },
    { step: 2, title: 'Learn', icon: <BookOpen size={24} /> },
    { step: 3, title: 'Build', icon: <Cpu size={24} /> },
    { step: 4, title: 'Certify', icon: <ShieldCheck size={24} /> },
    { step: 5, title: 'Showcase', icon: <MonitorPlay size={24} /> },
    { step: 6, title: 'Grow', icon: <TrendingUp size={24} /> }
  ];

  const advisors = [
    { name: 'Dr. John Doe', role: 'Academic Lead', image: 'https://placehold.co/150x150/1e293b/ffffff?text=JD' },
    { name: 'Jane Smith', role: 'Industry Expert', image: 'https://placehold.co/150x150/1e293b/ffffff?text=JS' },
    { name: 'Prof. Alan Turing', role: 'AI Researcher', image: 'https://placehold.co/150x150/1e293b/ffffff?text=AT' },
    { name: 'Grace Hopper', role: 'Tech Visionary', image: 'https://placehold.co/150x150/1e293b/ffffff?text=GH' }
  ];

  return (
    <div className="programs-page">
      {/* 1. Hero: Learning Ecosystem */}
      <section className="programs-hero">
        <div className="ph-bg-gradient"></div>
        <div className="ph-grid-overlay"></div>
        
        <div className="container-premium ph-content">
          <div className="ph-text-col">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="ph-title">Transforming Education Through <span>Innovation</span></h1>
              <p className="ph-subtitle">
                Empowering students, schools, and colleges with future-ready programs built around robotics, AI, IoT, mentoring, and hands-on learning.
              </p>
              
              <div className="ph-stats">
                <div className="ph-stat-item">
                  <h3>1M+</h3>
                  <span>Students</span>
                </div>
                <div className="ph-stat-item">
                  <h3>400+</h3>
                  <span>Schools</span>
                </div>
                <div className="ph-stat-item">
                  <h3>1000+</h3>
                  <span>Colleges</span>
                </div>
                <div className="ph-stat-item">
                  <h3>12+</h3>
                  <span>Years Exp.</span>
                </div>
              </div>

              <div className="ph-ctas">
                <button className="btn-ph-primary" onClick={() => document.getElementById('pathways').scrollIntoView({behavior: 'smooth'})}>
                  Choose Program <ArrowRight size={20} />
                </button>
                <Link to="/contact" className="btn-ph-secondary">Talk to PHN</Link>
              </div>
            </motion.div>
          </div>
          
          <div className="ph-visual-col">
            <motion.div 
              className="orbit-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="orbit-center">
                <div className="orbit-center-inner">PHN Programs</div>
              </div>
              <div className="orbit-ring orbit-ring-1">
                <div className="orbit-node node-1">Workshops</div>
                <div className="orbit-node node-2">Skillhub</div>
              </div>
              <div className="orbit-ring orbit-ring-2">
                <div className="orbit-node node-3">Masterclasses</div>
                <div className="orbit-node node-4">Internships</div>
                <div className="orbit-node node-5">CoE Labs</div>
              </div>
              
              {/* Tilted Photo Card */}
              <div className="tilted-photo-card">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Students learning" />
                <div className="photo-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Program Pathways */}
      <section id="pathways" className="program-pathways">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">Choose Your Program Pathway</h2>
            <p className="section-subtitle">Explore our tailored programs designed to bridge the gap between academia and industry.</p>
          </div>
          
          <div className="pathways-grid">
            {pathways.map((path, idx) => (
              <motion.div 
                key={idx} 
                className={`pathway-card color-${path.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="pathway-icon-wrapper">
                  {path.icon}
                </div>
                <div className="pathway-label">{path.label}</div>
                <h3 className="pathway-title">{path.title}</h3>
                <p className="pathway-desc">{path.desc}</p>
                <Link to={path.link} className="pathway-link">
                  Explore <ArrowRight size={16} />
                </Link>
                <div className="pathway-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose PHN Programs */}
      <section className="why-choose-programs">
        <div className="container-premium">
          <div className="why-grid">
            <motion.div 
              className="why-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="why-image-wrapper">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Lab experience" />
                <div className="exp-badge">
                  <span>12+</span>
                  <small>Years Experience</small>
                </div>
              </div>
            </motion.div>
            
            <div className="why-content">
              <h2 className="section-title-global text-left">Why Choose PHN Technology?</h2>
              <p className="section-subtitle text-left mb-10">We don't just teach theory. We build an ecosystem of practical learning, mentoring, and real-world execution.</p>
              
              <div className="benefits-grid">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    className="benefit-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                  >
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h4>{benefit.title}</h4>
                    {idx < benefits.length - 1 && <div className="connector-line hidden md:block"></div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Sets Us Apart */}
      <section className="sets-apart-section">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">What Sets Us Apart</h2>
          </div>
          
          <div className="apart-grid">
            <motion.div 
              className="apart-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" alt="CoE Lab" className="apart-img" />
              <div className="apart-overlay">
                <div className="apart-icon"><Cpu size={32}/></div>
                <h3>CoE Lab</h3>
                <p>India’s most equipped technology lab experience.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="apart-card apart-card-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" alt="Certification" className="apart-img" />
              <div className="apart-overlay">
                <div className="apart-icon"><ShieldCheck size={32}/></div>
                <h3>Certification</h3>
                <p>Credentials from trusted institutions and programs.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="apart-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Immersive" className="apart-img" />
              <div className="apart-overlay">
                <div className="apart-icon"><Sparkles size={32}/></div>
                <h3>100% Immersive</h3>
                <p>Live, hands-on, project-based learning.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Program Journey */}
      <section className="program-journey">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">From Curiosity to Career Confidence</h2>
          </div>
          
          <div className="journey-timeline">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="journey-step-wrapper">
                <motion.div 
                  className="journey-step"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                </motion.div>
                {idx < journeySteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Advisory Preview */}
      <section className="advisory-preview-sec">
        <div className="container-premium text-center">
          <h2 className="section-title-global">Guided by India’s Academic Leaders</h2>
          <p className="section-subtitle mb-12">Expert guidance shaping our curriculum and programs.</p>
          
          <div className="adv-mini-grid">
            {advisors.map((adv, idx) => (
              <div key={idx} className="adv-card-mini">
                <img src={adv.image} alt={adv.name} />
                <div className="adv-info-mini">
                  <h4>{adv.name}</h4>
                  <p>{adv.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/advisory-board" className="btn-ph-secondary">View More <ArrowRight size={18} className="ml-2 inline" /></Link>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="programs-final-cta">
        <div className="ph-bg-gradient-alt"></div>
        <div className="container-premium relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to choose your future-ready program?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">Explore PHN programs designed to help students learn, build, and grow with real-world technology.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn-ph-primary" onClick={() => document.getElementById('pathways').scrollIntoView({behavior: 'smooth'})}>Explore Programs</button>
            <Link to="/contact" className="btn-ph-secondary bg-white/10 border border-white/20">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fallback for missing icon
const TrendingUp = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;

export default Programs;
