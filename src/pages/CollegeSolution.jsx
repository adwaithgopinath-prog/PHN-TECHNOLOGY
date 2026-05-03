import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, BookOpen, Star, Trophy, Target, Globe, Settings, Cpu,
  Lightbulb, Code, Gamepad2, Building2, Puzzle, Microscope, Send, Blocks, Atom, Cloud, PenTool, GraduationCap,
  CheckCircle2, Brain, Palette, Monitor, Zap, Plane, Heart, Beaker, Users, Sparkles, Presentation, Wrench,
  Shield, PieChart, BarChart, Briefcase, XCircle, ChevronRight, Award, TrendingUp, MonitorPlay
} from 'lucide-react';
import './CollegeSolution.css';

const CollegeSolution = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({
    name: '', phone: '', email: '', subject: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.email && formState.subject && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="college-solution-page">
      {/* 1. Hero Section */}
      <section className="college-hero">
        <div className="college-hero-overlay"></div>
        <div className="college-hero-pattern"></div>
        
        <div className="college-container">
          <div className="hero-flex-layout">
            <motion.div 
              className="hero-text-side"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-eyebrow">
                <span className="badge-pill">COLLEGE SOLUTION</span>
              </div>
              <h1 className="hero-main-headline">
                College is Not Just About a Degree — <span className="highlight-text">It’s About Your Future.</span>
              </h1>
              <p className="hero-subheadline">
                PHN Technology bridges academic learning and industry-ready skills through live projects, certifications, expert mentoring, and innovation-driven training.
              </p>
              
              <div className="hero-cta-group">
                <button className="cta-btn-primary">
                  Explore Degree Certification <ArrowRight size={18} />
                </button>
                <button className="cta-btn-outline">Get In Touch</button>
              </div>

              <div className="hero-skill-badges">
                {[
                  { icon: <Briefcase size={16} />, label: 'Live Projects' },
                  { icon: <Users size={16} />, label: 'Industry Mentors' },
                  { icon: <Award size={16} />, label: 'Certifications' },
                  { icon: <TrendingUp size={16} />, label: 'Career Skills' }
                ].map((badge, i) => (
                  <motion.div 
                    key={i} 
                    className="skill-badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                  >
                    {badge.icon} <span>{badge.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="hero-visual-side"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="visual-composition">
                <div className="main-visual-orb"></div>
                <div className="floating-elements">
                  <motion.div className="float-card card-1" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <MonitorPlay size={24} className="text-phn-blue" />
                    <div>
                      <div className="f-label">Live Learning</div>
                      <div className="f-val">Real-time Projects</div>
                    </div>
                  </motion.div>
                  <motion.div className="float-card card-2" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
                    <Award size={24} className="text-phn-gold" />
                    <div>
                      <div className="f-label">Certified</div>
                      <div className="f-val">Global Standards</div>
                    </div>
                  </motion.div>
                  <motion.div className="float-card card-3" animate={{ x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                    <TrendingUp size={24} className="text-phn-cyan" />
                    <div>
                      <div className="f-label">Success Rate</div>
                      <div className="f-val">98% Placed</div>
                    </div>
                  </motion.div>
                </div>
                <div className="visual-center-piece">
                  <div className="path-glow"></div>
                  <Cpu size={120} className="center-icon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section: Get Industry-Ready */}
      <section className="college-intro-section">
        <div className="college-container">
          <div className="intro-split-layout">
            <motion.div 
              className="intro-visual"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="premium-image-frame">
                <img src="https://images.unsplash.com/photo-1523240715630-99152e3d1721?auto=format&fit=crop&q=80&w=800" alt="College Transformation" />
                <div className="frame-overlay"></div>
                <div className="image-caption">
                  <div className="caption-glow"></div>
                  <p>“From degree-focused learning to skill-first growth.”</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="intro-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get Industry-Ready from Day 1</h2>
              <p className="section-text">
                Most students hope for good jobs, valuable experience, and enjoyable learning. 
                But how many graduates feel prepared? PHN Technology helps students go beyond subjects 
                and build real-world capability.
              </p>
              
              <div className="benefit-chips-row">
                {[
                  { text: 'Live Projects', color: '#0ea5e9' },
                  { text: 'Industry Mentors', color: '#facc15' },
                  { text: 'Job-Ready Skills', color: '#10b981' }
                ].map((chip, i) => (
                  <div key={i} className="benefit-chip" style={{ '--chip-bg': chip.color + '15', '--chip-text': chip.color }}>
                    <CheckCircle2 size={16} /> {chip.text}
                  </div>
                ))}
              </div>

              <div className="intro-callout">
                <div className="callout-icon"><Rocket size={24} /></div>
                <p>Empowering the next generation of engineers, creators, and innovators with the practical edge colleges often miss.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Transformation Section */}
      <section className="career-transformation-section">
        <div className="college-container">
          <div className="section-header-centered">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              From Degree-Only Learning to Career-Ready Growth
            </motion.h2>
            <p className="section-subtitle">
              PHN helps colleges move beyond exam-focused education into industry exposure, practical projects, and measurable student outcomes.
            </p>
          </div>

          <div className="career-journey-grid">
            {/* Left Panel */}
            <motion.div 
              className="journey-panel traditional-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="panel-tag">Traditional College Model</div>
              <h3>TRADITIONAL MODEL</h3>
              <ul className="journey-list">
                <li><span className="bullet-cross">✕</span> Exam pressure</li>
                <li><span className="bullet-cross">✕</span> Limited industry exposure</li>
                <li><span className="bullet-cross">✕</span> Ordinary degree</li>
                <li><span className="bullet-cross">✕</span> Passive learning</li>
              </ul>
            </motion.div>

            {/* Center Transformation */}
            <div className="journey-bridge">
              <div className="bridge-visual">
                <motion.div 
                  className="bridge-ring"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="bridge-path">
                  <motion.div 
                    className="path-glow-strip"
                    animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <ArrowRight size={50} className="path-icon" />
                </div>
              </div>
              <div className="bridge-label">PHN CAREER TRANSFORMATION</div>
            </div>

            {/* Right Panel */}
            <motion.div 
              className="journey-panel phn-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="panel-tag phn">PHN College Solution</div>
              <h3>PHN COLLEGE SOLUTION</h3>
              <ul className="journey-list">
                <li><CheckCircle2 size={20} className="bullet-check" /> Practical learning</li>
                <li><CheckCircle2 size={20} className="bullet-check" /> Live projects</li>
                <li><CheckCircle2 size={20} className="bullet-check" /> Job-ready skills</li>
                <li><CheckCircle2 size={20} className="bullet-check" /> Career opportunities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Key Highlights Comparison */}
      <section className="college-highlights-section">
        <div className="college-container">
          <div className="section-header-centered">
            <h2 className="section-title">Key Highlights</h2>
            <p className="section-subtitle">Traditional learning vs PHN Technology’s career-ready model.</p>
          </div>

          <div className="comparison-board-premium">
            <div className="comparison-col traditional-col">
              <div className="col-header">Traditional Learning</div>
              <div className="col-content">
                {[
                  'Memorization-heavy',
                  'Limited hands-on exposure',
                  'Unclear career direction',
                  'Minimal mentorship'
                ].map((item, i) => (
                  <div key={i} className="comp-item">
                    <XCircle size={18} className="text-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="vs-center">
              <div className="vs-orb">VS</div>
            </div>

            <div className="comparison-col phn-col">
              <div className="col-header">PHN Technology</div>
              <div className="col-content">
                {[
                  'Real-world applications',
                  'Hands-on projects',
                  'Industry-ready training',
                  'Mentorship network'
                ].map((item, i) => (
                  <div key={i} className="comp-item">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Career Launch Path */}
      <section className="career-path-section">
        <div className="college-container">
          <div className="section-header-centered">
            <h2 className="section-title">Your Career Launch Path</h2>
          </div>

          <div className="path-journey-wrapper">
            <div className="path-line"></div>
            {[
              { title: 'Learn', text: 'Master practical technologies.', icon: <BookOpen size={24}/> },
              { title: 'Build', text: 'Work on real-world projects.', icon: <Wrench size={24}/> },
              { title: 'Certify', text: 'Earn proof of skill.', icon: <Award size={24}/> },
              { title: 'Showcase', text: 'Build a portfolio.', icon: <Monitor size={24}/> },
              { title: 'Get Career-Ready', text: 'Prepare for opportunities.', icon: <Briefcase size={24}/> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="path-node"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="node-icon-wrapper">
                  <div className="node-glow"></div>
                  {step.icon}
                  <div className="node-number">{i + 1}</div>
                </div>
                <div className="node-text">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Innovate, Learn, Succeed */}
      <section className="college-features-section">
        <div className="college-container">
          <div className="section-header-centered">
            <h2 className="section-title">PHN Technology: Innovate, Learn, Succeed</h2>
          </div>

          <div className="features-glass-grid">
            {[
              { 
                title: "Practical Learning", 
                text: "Learn industry skills with real-world projects, not just theoretical knowledge.",
                icon: <Code size={30} />,
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Industry Exposure", 
                text: "Work on live projects, join workshops, and connect with global industry experts.",
                icon: <Globe size={30} />,
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Job-Ready Skills", 
                text: "Build essential in-demand skills now, not just before placements begin.",
                icon: <TrendingUp size={30} />,
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Job Opportunities", 
                text: "Stand out with certifications, hands-on experience, and professional portfolios.",
                icon: <Award size={30} />,
                img: "https://images.unsplash.com/photo-1454165833767-1290b00c3b3c?auto=format&fit=crop&q=80&w=800"
              }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                className="feature-glass-card"
                whileHover={{ y: -12 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-image-wrapper">
                  <img src={f.img} alt={f.title} />
                  <div className="card-icon-overlay">{f.icon}</div>
                </div>
                <div className="card-info">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="college-contact-section">
        <div className="college-container">
          <div className="contact-premium-layout">
            <motion.div 
              className="contact-visual-side"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-heading">Start Building an Industry-Ready Campus</h2>
              <p className="contact-desc">
                Connect with PHN Technology to bring skill-first, project-based learning to your college.
              </p>
              
              <div className="contact-benefit-chips">
                {[
                  { icon: <GraduationCap size={20}/>, text: 'Degree Certification' },
                  { icon: <Cpu size={20}/>, text: 'Live Projects' },
                  { icon: <Users size={20}/>, text: 'Industry Training' }
                ].map((chip, i) => (
                  <div key={i} className="contact-benefit-chip">
                    <span className="chip-icon">{chip.icon}</span>
                    <span className="chip-text">{chip.text}</span>
                  </div>
                ))}
              </div>

              <div className="contact-illustration-area">
                <div className="illus-blob"></div>
                <div className="illus-grid"></div>
                <motion.div 
                  className="illus-icon icon-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ><Award size={40} /></motion.div>
                <motion.div 
                  className="illus-icon icon-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                ><Zap size={40} /></motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-side"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="college-form-card">
                {isSubmitted ? (
                  <div className="form-success">
                    <CheckCircle2 size={60} className="text-green-500 mb-4" />
                    <h3>Inquiry Sent!</h3>
                    <p>We'll reach out to your institution shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-college-form">
                    <div className="form-row-dual">
                      <div className="input-group">
                        <label>Name *</label>
                        <input type="text" name="name" required placeholder="Full Name" value={formState.name} onChange={handleInputChange} />
                      </div>
                      <div className="input-group">
                        <label>Phone *</label>
                        <input type="tel" name="phone" required placeholder="Contact Number" value={formState.phone} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>College Email *</label>
                      <input type="email" name="email" required placeholder="email@college.edu" value={formState.email} onChange={handleInputChange} />
                    </div>
                    <div className="input-group">
                      <label>Subject *</label>
                      <input type="text" name="subject" required placeholder="Training Inquiry" value={formState.subject} onChange={handleInputChange} />
                    </div>
                    <div className="input-group">
                      <label>Message *</label>
                      <textarea name="message" required placeholder="Tell us about your campus needs..." rows="4" value={formState.message} onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit" className="college-submit-btn">
                      Submit Now <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeSolution;
