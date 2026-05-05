import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, Cpu, Globe, Settings, Box, 
  Cpu as AIChip, Layers, Zap, CheckCircle2, 
  MessageSquare, Layout, Activity, Monitor, 
  Factory, Microscope, Truck, Sprout, HeartPulse, 
  Building, ChevronRight, Play, Wrench, ShieldCheck, 
  Database, Share2, Server, BarChart3, Search
} from 'lucide-react';
const roboticsRealImg = './src/assets/robotics-automation-real.jpg';
import './RoboticsDevelopment.css';

const RoboticsDevelopment = () => {
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
    <div className="robotics-page">
      {/* 1. Hero Section */}
      <section className="robotics-hero">
        <div className="hero-blueprint-bg"></div>
        <div className="hero-grid-overlay"></div>
        <div className="robotics-container hero-flex">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-eyebrow">
              <span className="orange-line"></span>
              ROBOTICS DEVELOPMENT
            </div>
            <h1 className="hero-headline">
              Empowering Industries with <span className="glow-text">Advanced Robotic Automation</span>
            </h1>
            <p className="hero-subheadline">
              PHN Technology delivers intelligent robotic systems that improve efficiency, 
              productivity, precision, and innovation across industries.
            </p>
            <div className="hero-btns">
              <button className="btn-primary-orange">
                Explore Robotics Solutions <ArrowRight size={18} />
              </button>
              <button className="btn-outline-white">Get In Touch</button>
            </div>

            <div className="hero-floating-tags">
              {['AI Robotics', 'IoT Systems', 'Automation', 'Smart Manufacturing'].map((tag, i) => (
                <motion.div 
                  key={i} 
                  className="floating-tag"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <div className="tag-dot"></div>
                  {tag}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="industrial-composition">
              <div className="circle-portal"></div>
              <div className="circuit-lines"></div>
              <div className="robotic-arm-mock">
                <div className="arm-base"></div>
                <div className="arm-joint-1"></div>
                <div className="arm-joint-2"></div>
                <div className="arm-tool"></div>
              </div>
              <div className="floating-data-nodes">
                <motion.div className="node node-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}><Zap size={20} /></motion.div>
                <motion.div className="node node-2" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}><Activity size={20} /></motion.div>
                <motion.div className="node node-3" animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}><AIChip size={20} /></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="robotics-intro">
        <div className="robotics-container">
          <div className="intro-split">
            <motion.div 
              className="intro-visual-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="tech-frame">
                <img src={roboticsRealImg} alt="Pioneering Intelligent Automation - PHN Team discussing robotics" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'; }} />
                <div className="frame-scanner"></div>
                <div className="frame-corners"></div>
              </div>
            </motion.div>

            <motion.div 
              className="intro-text-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="intro-heading">Pioneering Intelligent Automation</h2>
              <p className="intro-desc">
                PHN Technology specializes in delivering cutting-edge robotics solutions for businesses across various industries. 
                Our expertise in robotic automation enables organizations to enhance efficiency, improve productivity, 
                and drive innovation with intelligent, automated systems.
              </p>
              
              <div className="metric-chips">
                <div className="metric-chip">
                  <div className="chip-icon"><Zap size={18} /></div>
                  <span>Precision Automation</span>
                </div>
                <div className="metric-chip">
                  <div className="chip-icon"><AIChip size={18} /></div>
                  <span>AI-Enabled Systems</span>
                </div>
                <div className="metric-chip">
                  <div className="chip-icon"><Globe size={18} /></div>
                  <span>Industry-Ready Integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Robotics Solutions */}
      <section className="robotics-solutions">
        <div className="robotics-container">
          <div className="section-header-centered">
            <h2 className="section-title">Our Robotics Solutions</h2>
            <p className="section-subtitle">End-to-end robotic systems designed for automation, intelligence, monitoring, and productivity.</p>
          </div>

          <div className="solutions-grid">
            {[
              {
                title: "Industrial Automation",
                text: "We provide robotic solutions that streamline manufacturing and industrial processes, ensuring precision and efficiency.",
                icon: <Factory size={32} />,
                img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "AI-Powered Robotics",
                text: "Our AI-driven robotics solutions enhance automation with advanced decision-making capabilities.",
                icon: <Brain size={32} />,
                img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "IoT & Smart Robotics",
                text: "We develop smart, connected robotic systems that integrate with IoT platforms for real-time monitoring and automation.",
                icon: <Share2 size={32} />,
                img: "https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Autonomous Robotics",
                text: "We design and develop autonomous robotic systems for various industries, enhancing mobility, efficiency, and productivity.",
                icon: <Box size={32} />,
                img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Robotic System Design",
                text: "We offer tailored robotic automation solutions designed to meet the unique needs of businesses across different domains.",
                icon: <Layers size={32} />,
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Customized Robot",
                text: "We design and develop customized robotic systems for various industries, enhancing precision, efficiency, and productivity.",
                icon: <Settings size={32} />,
                img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=600"
              }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                className="solution-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card-visual">
                  <img src={sol.img} alt={sol.title} />
                  <div className="card-icon-floating">{sol.icon}</div>
                </div>
                <div className="card-body">
                  <h3>{sol.title}</h3>
                  <p>{sol.text}</p>
                  <button className="card-link">Learn More <ChevronRight size={16} /></button>
                </div>
                <div className="card-edge-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Robotics Workflow */}
      <section className="robotics-workflow">
        <div className="robotics-container">
          <div className="section-header-centered">
            <h2 className="section-title">From Idea to Intelligent Automation</h2>
          </div>

          <div className="workflow-line-wrapper">
            <div className="workflow-main-line"></div>
            {[
              { step: '1.Diagnose', desc: 'Understand automation gaps.', icon: <Search size={24}/> },
              { step: '2.Design', desc: 'Engineer robotic architecture.', icon: <Layers size={24}/> },
              { step: '3.Prototype', desc: 'Build and test systems.', icon: <Wrench size={24}/> },
              { step: '4.Integrate', desc: 'Deploy with existing workflows.', icon: <Box size={24}/> },
              { step: '5.Optimize', desc: 'Improve performance with data.', icon: <Activity size={24}/> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="workflow-step"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="step-node">
                  <div className="node-glow"></div>
                  <div className="node-icon">{item.icon}</div>
                </div>
                <div className="step-text">
                  <h4>{item.step}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose PHN Technology? */}
      <section className="robotics-why">
        <div className="robotics-container">
          <div className="section-header-centered">
            <h2 className="section-title">Why Choose PHN Technology?</h2>
          </div>

          <div className="why-rows-wrapper">
            <div className="vertical-timeline-glow"></div>
            {[
              {
                title: "Industry-Leading Expertise",
                text: "Our team of robotics engineers and AI specialists deliver cutting-edge solutions tailored to industry requirements.",
                img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Scalable & Future-Ready Solutions",
                text: "Our robotics solutions are designed to scale with your business, ensuring long-term efficiency and growth.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Advanced Technology Integration",
                text: "We leverage AI, IoT, and cloud technologies to develop high-performance, intelligent robotic systems.",
                img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "End-to-End Support & Consultation",
                text: "From ideation to implementation, we provide complete support for your robotics automation journey.",
                img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={`why-row ${i % 2 === 1 ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="row-image">
                  <img src={item.img} alt={item.title} />
                  <div className="image-border-orange"></div>
                </div>
                <div className="row-content">
                  <div className="row-num-badge">{i + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Automate */}
      <section className="robotics-industries">
        <div className="robotics-container">
          <div className="section-header-centered">
            <h2 className="section-title">Industries We Automate</h2>
          </div>

          <div className="industries-tiles-grid">
            {[
              { icon: <Factory size={28}/>, name: 'Manufacturing', desc: 'Precision production lines.' },
              { icon: <Microscope size={28}/>, name: 'Education Labs', desc: 'Research & Skill building.' },
              { icon: <Truck size={28}/>, name: 'Logistics', desc: 'Autonomous warehousing.' },
              { icon: <Sprout size={28}/>, name: 'Agriculture', desc: 'Smart farming robots.' },
              { icon: <HeartPulse size={28}/>, name: 'Healthcare', desc: 'Medical automation systems.' },
              { icon: <Building size={28}/>, name: 'Smart Cities', desc: 'Infrastructure automation.' }
            ].map((tile, i) => (
              <motion.div 
                key={i} 
                className="industry-tile"
                whileHover={{ scale: 1.05 }}
              >
                <div className="tile-icon-box">{tile.icon}</div>
                <div className="tile-info">
                  <h4>{tile.name}</h4>
                  <p>{tile.desc}</p>
                </div>
                <div className="tile-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Get In Touch Section */}
      <section className="robotics-contact">
        <div className="robotics-container">
          <div className="contact-split">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-title">Build Your Robotics Automation Roadmap</h2>
              <p className="contact-subtitle">Tell us your automation challenge and PHN Technology will help design the right robotics solution.</p>
              
              <div className="contact-visual-panel">
                <div className="blueprint-overlay"></div>
                <div className="engineer-card">
                  <div className="e-avatar">
                    <ShieldCheck size={30} className="text-orange-500" />
                  </div>
                  <div className="e-text">
                    <strong>PHN Robotics Engineer</strong>
                    <span>Systems Architecture & AI Expert</span>
                  </div>
                </div>
              </div>

              <ul className="contact-list">
                <li><div className="list-dot"></div> Custom robotics consultation</li>
                <li><div className="list-dot"></div> AI + IoT integration</li>
                <li><div className="list-dot"></div> Scalable deployment support</li>
              </ul>
            </motion.div>

            <motion.div 
              className="contact-form-side"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="robotics-form-card">
                {isSubmitted ? (
                  <div className="success-screen">
                    <CheckCircle2 size={60} className="text-green-500 mb-4" />
                    <h3>Roadmap Request Sent!</h3>
                    <p>Our automation experts will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="robotics-premium-form">
                    <div className="form-row-dual">
                      <div className="field-group">
                        <label>Name *</label>
                        <input type="text" name="name" required placeholder="Full Name" value={formState.name} onChange={handleInputChange} />
                      </div>
                      <div className="field-group">
                        <label>Phone *</label>
                        <input type="tel" name="phone" required placeholder="Contact Number" value={formState.phone} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="field-group">
                      <label>Email *</label>
                      <input type="email" name="email" required placeholder="email@company.com" value={formState.email} onChange={handleInputChange} />
                    </div>
                    <div className="field-group">
                      <label>Subject *</label>
                      <input type="text" name="subject" required placeholder="Automation Interest" value={formState.subject} onChange={handleInputChange} />
                    </div>
                    <div className="field-group">
                      <label>Message *</label>
                      <textarea name="message" required placeholder="Describe your automation challenge..." rows="4" value={formState.message} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-agree">
                      <input type="checkbox" id="agree" required />
                      <label htmlFor="agree">I agree to be contacted by PHN Technology.</label>
                    </div>
                    <button type="submit" className="robotics-submit-btn">
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

// Placeholder Brain icon if not in lucide-react (some versions don't have it)
const Brain = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path>
  </svg>
);

export default RoboticsDevelopment;
