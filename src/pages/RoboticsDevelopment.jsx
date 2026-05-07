import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Rocket, Cpu, Globe, Settings, Box, 
  Layers, Zap, CheckCircle2, MessageSquare, 
  Activity, Monitor, Factory, Microscope, Truck, 
  Sprout, HeartPulse, Building, ChevronRight, 
  Wrench, ShieldCheck, Database, Share2, Server, 
  Search, Brain, Target, Gauge, Cpu as AIChip
} from 'lucide-react';
import './RoboticsDevelopment.css';

const RoboticsDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleInquiry = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="robotics-page">
      {/* Background Atmosphere */}
      <div className="blueprint-background">
        <div className="grid-lines"></div>
        <div className="circuit-traces"></div>
      </div>

      {/* 1. Futuristic Hero Section */}
      <section className="robotics-hero-premium">
        <div className="robotics-container">
          <div className="hero-split-layout">
            <motion.div 
              className="hero-text-module"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="hero-eyebrow-tech">
                <Settings size={14} className="spin-slow" />
                <span>Advanced Robotic Ecosystem</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-main-headline">
                Empowering Industries <br />
                with <span className="text-gradient-orange">Advanced Robotic</span> <br />
                Automation.
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-lead-text">
                PHN Technology delivers high-precision robotic systems that integrate intelligence, automation, and industrial-grade control for the next generation of manufacturing.
              </motion.p>

              <motion.div variants={itemVariants} className="hero-actions-row">
                <button className="btn-industrial-primary">
                  <span>Explore Solutions</span>
                  <Rocket size={18} />
                </button>
                <button className="btn-industrial-outline">
                  <span>Consult an Engineer</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="hero-capability-stack">
                {['AI Robotics', 'IoT Systems', 'Automation', 'Smart Manufacturing'].map((tag, i) => (
                  <div key={i} className="capability-chip">
                    <div className="status-dot"></div>
                    <span>{tag}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-visual-module"
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="robotics-control-core">
                <div className="core-central-hub">
                  <div className="hub-outer"></div>
                  <div className="hub-inner">
                    <Cpu size={64} />
                  </div>
                </div>
                
                <div className="orbiting-nodes">
                  <div className="orbit-ring orbit-1"></div>
                  <div className="orbit-ring orbit-2"></div>
                </div>

                <div className="floating-telemetry-card telemetry-1">
                  <div className="status-dot"></div>
                  <div className="telemetry-text">
                    <span>SYSTEM STATE</span>
                    <strong>OPTIMIZED</strong>
                  </div>
                </div>

                <div className="floating-telemetry-card telemetry-2">
                  <Activity size={20} className="text-orange-500" />
                  <div className="telemetry-text">
                    <span>DATA STREAM</span>
                    <strong>ENCRYPTED</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Intelligent Automation Section */}
      <section className="automation-prop-module">
        <div className="robotics-container">
          <div className="prop-split-layout">
            <motion.div 
              className="prop-visual-panel"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              <div className="engineering-frame">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Robotics Engineering" />
                <div className="frame-telemetry-overlay">
                  <div className="telemetry-header">CORE DIAGNOSTICS</div>
                  <div className="telemetry-bars">
                    <div className="bar"><div className="bar-fill" style={{ width: '85%' }}></div></div>
                    <div className="bar"><div className="bar-fill" style={{ width: '60%' }}></div></div>
                    <div className="bar"><div className="bar-fill" style={{ width: '92%' }}></div></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="prop-content-panel"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
            >
              <span className="hero-eyebrow-tech">Intelligent Integration</span>
              <h2 className="module-title">Pioneering Future-Ready <br /><span className="text-orange">Robotic Systems.</span></h2>
              <p className="hero-lead-text">
                Our approach to robotics combines mechanical precision with advanced AI logic. We specialize in creating systems that not only move but think, adapt, and optimize in real-time.
              </p>
              
              <div className="benefit-stack">
                {[
                  { icon: <Target />, title: 'Precision Automation', desc: 'Micron-level accuracy for complex industrial tasks.' },
                  { icon: <AIChip />, title: 'AI-Enabled Logic', desc: 'Predictive analytics and adaptive control systems.' },
                  { icon: <Database />, title: 'Industry-Ready Data', desc: 'Seamless integration with existing enterprise ERPs.' }
                ].map((item, i) => (
                  <div key={i} className="benefit-item">
                    <div className="benefit-icon-box">{item.icon}</div>
                    <div className="benefit-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Robotics Solutions Grid */}
      <section className="robotics-solutions-section">
        <div className="robotics-container">
          <div className="section-head-3d">
            <h2>Our Robotics Solutions</h2>
            <p>End-to-end robotic systems designed for automation, intelligence, and large-scale industrial productivity.</p>
          </div>

          <div className="solutions-dynamic-grid">
            {[
              {
                title: "Industrial Automation",
                text: "Streamlining large-scale production with precision-engineered robotic arms and automated workflows.",
                icon: <Factory size={24} />,
                img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "AI-Powered Robotics",
                text: "Integrating computer vision and machine learning for advanced object recognition and sorting.",
                icon: <Brain size={24} />,
                img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "IoT & Smart Systems",
                text: "Connected robotic networks that communicate in real-time to optimize entire floor operations.",
                icon: <Share2 size={24} />,
                img: "https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Autonomous Robotics",
                text: "Mobile robots designed for logistics, warehousing, and secure navigation in dynamic spaces.",
                icon: <Box size={24} />,
                img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Robotic System Design",
                text: "Custom mechanical architecture and control logic engineering for specialized industrial needs.",
                icon: <Layers size={24} />,
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Custom Solutions",
                text: "Tailored automation packages that solve unique operational bottlenecks with smart engineering.",
                icon: <Settings size={24} />,
                img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=600"
              }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                className="solution-module-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="module-visual-area">
                  <img src={sol.img} alt={sol.title} />
                  <div className="module-icon-overlay">{sol.icon}</div>
                </div>
                <div className="module-content-area">
                  <h3>{sol.title}</h3>
                  <p>{sol.text}</p>
                  <button className="module-learn-btn">
                    <span>Detailed Specs</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Workflow */}
      <section className="robotics-workflow-system">
        <div className="robotics-container">
          <div className="section-head-3d">
            <h2>From Idea to Intelligent Automation</h2>
          </div>

          <div className="workflow-connector-beam">
            <div className="beam-pulse"></div>
          </div>
          
          <div className="workflow-flex-grid">
            {[
              { title: 'DIAGNOSE', text: 'Analyze gaps and bottlenecks.', icon: <Search size={24}/> },
              { title: 'DESIGN', text: 'Engineer system architecture.', icon: <Layers size={24}/> },
              { title: 'PROTOTYPE', text: 'Build and validate systems.', icon: <Wrench size={24}/> },
              { title: 'INTEGRATE', text: 'Deploy with expert support.', icon: <Box size={24}/> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="workflow-step-node"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="step-node-visual">
                  <div className="node-outer-ring">
                    <div className="node-inner-icon">{step.icon}</div>
                  </div>
                  <div className="step-index-tag">{i + 1}</div>
                </div>
                <div className="step-info-box">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose PHN Technology - Matrix */}
      <section className="robotics-value-matrix">
        <div className="robotics-container">
          <div className="section-head-3d">
            <h2>Why Choose PHN Technology?</h2>
          </div>

          <div className="value-matrix-grid">
            {[
              {
                title: "Industrial-Grade Expertise",
                text: "Our team of specialized engineers delivers robust automation that thrives in high-demand environments.",
                img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Scalable Architectures",
                text: "We build systems that grow with you, ensuring your investment remains relevant as tech evolves.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Unified Integration",
                text: "Seamlessly connect robotic hardware with existing IoT, Cloud, and AI intelligence layers.",
                img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Global Support Cycle",
                text: "From consultation to calibration, we provide 24/7 technical oversight for your deployment.",
                img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="value-matrix-item"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="value-image-area">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="value-content-area">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Capability Matrix */}
      <section className="robotics-industries-section">
        <div className="robotics-container">
          <div className="section-head-3d">
            <h2>Industries We Automate</h2>
          </div>

          <div className="industries-capability-matrix">
            {[
              { icon: <Factory />, name: 'Manufacturing', desc: 'Precision production lines.' },
              { icon: <Microscope />, name: 'Education Labs', desc: 'Research & Skill building.' },
              { icon: <Truck />, name: 'Logistics', desc: 'Autonomous warehousing.' },
              { icon: <Sprout />, name: 'Agriculture', desc: 'Smart farming robots.' },
              { icon: <HeartPulse />, name: 'Healthcare', desc: 'Medical automation systems.' },
              { icon: <Building />, name: 'Smart Cities', desc: 'Infrastructure automation.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="industry-matrix-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="matrix-icon-box">{item.icon}</div>
                <div className="matrix-text-box">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Inquiry Section */}
      <section className="robotics-inquiry-section">
        <div className="robotics-container">
          <div className="inquiry-split-grid">
            <motion.div 
              className="inquiry-content"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
            >
              <h2 className="inquiry-title">Build Your Robotic <br /><span className="text-orange">Future.</span></h2>
              <p className="inquiry-lead">Engineer your transition to intelligent automation with PHN Technology’s expertise.</p>
              
              <div className="inquiry-badge-card">
                <ShieldCheck className="badge-icon" size={32} />
                <div className="badge-text">
                  <strong>Enterprise-Ready Deployment</strong>
                  <span>Certified Industrial Standards</span>
                </div>
              </div>

              <div className="inquiry-perks-list">
                {[
                  'Custom robotics consultation',
                  'AI + IoT integration',
                  'Scalable deployment support'
                ].map((perk, i) => (
                  <div key={i} className="inquiry-perk">
                    <CheckCircle2 size={18} />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="inquiry-form-module"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
            >
              <div className="form-industrial-card">
                <div className="form-head">
                  <h3>Automation Inquiry</h3>
                  <p>Request a technical consultation today.</p>
                </div>

                <form onSubmit={handleInquiry} className="industrial-form">
                  <div className="form-row">
                    <div className="form-input-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-input-group">
                      <label>Contact Number</label>
                      <input type="tel" placeholder="+91" required />
                    </div>
                  </div>
                  <div className="form-input-group">
                    <label>Enterprise Email</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="form-input-group">
                    <label>Inquiry Nature</label>
                    <input type="text" placeholder="Industrial Automation / AI / IoT" required />
                  </div>
                  <div className="form-input-group">
                    <label>Project Details</label>
                    <textarea rows="4" placeholder="Describe your automation goals..." required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-form-submit">
                    <span>Initiate Consultation</span>
                    <ArrowRight size={20} />
                  </button>

                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.div 
                        className="form-feedback-overlay"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <CheckCircle2 size={48} className="text-green-500" />
                        <p>Request Received Successfully.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoboticsDevelopment;
