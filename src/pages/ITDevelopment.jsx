import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Cpu as AIChip, Cloud, Shield, Database, Layout, 
  BarChart, Layers, Settings, Globe, Users, CheckCircle2, 
  ChevronRight, Laptop, Server, Code, Lock, LineChart, 
  Smartphone, Terminal, Search, Zap, Activity, MessageSquare
} from 'lucide-react';
import './ITDevelopment.css';

const ITDevelopment = () => {
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
    <div className="it-dev-page">
      {/* 1. Hero Section */}
      <section className="it-hero">
        <div className="it-hero-bg">
          <div className="code-dots"></div>
          <div className="cloud-glow"></div>
        </div>
        <div className="it-container hero-grid">
          <motion.div 
            className="hero-text-side"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">IT DEVELOPMENT</div>
            <h1 className="hero-title">
              Transforming Businesses with <span className="text-gradient">Cutting-Edge IT Solutions</span>
            </h1>
            <p className="hero-desc">
              PHN Technology builds scalable software, cloud systems, AI integrations, 
              cybersecurity solutions, and data-driven platforms that help businesses grow securely and efficiently.
            </p>
            <div className="hero-actions">
              <button className="btn-it-primary">Explore IT Services <ArrowRight size={18}/></button>
              <button className="btn-it-glass">Start a Project</button>
            </div>

            <div className="hero-tag-cloud">
              {['SaaS', 'Cloud', 'AI/ML', 'Cybersecurity', 'Analytics'].map((tag, i) => (
                <motion.span 
                  key={i} 
                  className="hero-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual-side"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="it-visual-container">
              <div className="visual-orbit">
                <div className="orbit-item it-1"><Cloud size={32} /></div>
                <div className="orbit-item it-2"><AIChip size={32} /></div>
                <div className="orbit-item it-3"><Lock size={32} /></div>
                <div className="orbit-item it-4"><LineChart size={32} /></div>
              </div>
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="dot"></div><div className="dot"></div><div className="dot"></div>
                </div>
                <div className="mockup-body">
                  <div className="code-line w-2/3"></div>
                  <div className="code-line w-full"></div>
                  <div className="code-line w-1/2"></div>
                  <div className="chart-bar-mock">
                    <div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div>
                  </div>
                </div>
              </div>
              <div className="hologram-effect"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="it-intro">
        <div className="it-container">
          <div className="intro-row">
            <motion.div 
              className="intro-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="dev-frame">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="Developer Dashboard" />
                <div className="glass-overlay"></div>
                <div className="stats-bubble">
                  <div className="bubble-icon"><Activity size={20} /></div>
                  <div className="bubble-text"><strong>99.9%</strong> Uptime Guaranteed</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="intro-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">Innovation at the Speed of Technology</h2>
              <p className="section-text">
                At PHN Technology, we offer a full spectrum of IT development services, providing businesses with innovative and scalable technology solutions. 
                Our expertise spans software development, cloud computing, AI integration, cybersecurity, and IT consulting—helping enterprises 
                achieve digital transformation with efficiency and security.
              </p>
              <div className="it-benefit-chips">
                <div className="it-chip"><div className="chip-dot"></div> Scalable Software</div>
                <div className="it-chip"><div className="chip-dot"></div> Secure Infrastructure</div>
                <div className="it-chip"><div className="chip-dot"></div> AI-Driven Systems</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our IT Services */}
      <section className="it-services">
        <div className="it-container">
          <div className="it-header-center">
            <h2 className="it-title">Our IT Services</h2>
            <p className="it-subtitle">End-to-end digital solutions for modern businesses.</p>
          </div>

          <div className="services-grid-it">
            {[
              {
                title: "SaaS Development",
                text: "We build tailored software solutions that meet your business needs.",
                icon: <Laptop size={32} />,
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Cloud Computing & DevOps",
                text: "Leverage the power of cloud technology to enhance your business operations.",
                icon: <Cloud size={32} />,
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "AI & ML Solutions",
                text: "Harness the potential of AI to optimize business and improve customer experiences.",
                icon: <AIChip size={32} />,
                img: "https://images.unsplash.com/photo-1555255707-c079664889ec?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Cybersecurity Management",
                text: "Protect your organization from cyber threats with our advanced security solutions.",
                icon: <Shield size={32} />,
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "IT Consulting",
                text: "Our IT experts provide strategic consulting to help businesses adopt the right technologies.",
                icon: <Users size={32} />,
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Data and Analytics",
                text: "Our AI solutions provide smart automation, predictive analytics, and intelligent insights.",
                icon: <BarChart size={32} />,
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className="it-service-card"
                whileHover={{ y: -12 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card-top">
                  <img src={service.img} alt={service.title} />
                  <div className="icon-overlay-it">{service.icon}</div>
                </div>
                <div className="card-content-it">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <button className="learn-more-it">Learn More <ChevronRight size={16}/></button>
                </div>
                <div className="card-border-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Digital Transformation Stack */}
      <section className="it-stack">
        <div className="it-container">
          <div className="it-header-center">
            <h2 className="it-title">Digital Transformation Stack</h2>
          </div>

          <div className="stack-pipeline">
            <div className="pipeline-track"></div>
            {[
              { label: 'Strategy', desc: 'Map business goals to technology.', icon: <Search size={24}/> },
              { label: 'Design', desc: 'Create intuitive digital experiences.', icon: <Layout size={24}/> },
              { label: 'Development', desc: 'Build scalable platforms.', icon: <Code size={24}/> },
              { label: 'Security', desc: 'Protect data and infrastructure.', icon: <Lock size={24}/> },
              { label: 'Scale', desc: 'Optimize systems for growth.', icon: <Zap size={24}/> }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="stack-module"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="module-visual">
                  <div className="module-circle">
                    <div className="inner-glow"></div>
                    {step.icon}
                  </div>
                  {i < 4 && <div className="module-connector">
                    <motion.div 
                      className="data-pulse"
                      animate={{ left: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    ></motion.div>
                  </div>}
                </div>
                <div className="module-info">
                  <h4>{step.label}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose PHN Technology? */}
      <section className="it-why">
        <div className="it-container">
          <div className="it-header-center">
            <h2 className="it-title">Why Choose PHN Technology?</h2>
          </div>

          <div className="why-it-grid">
            {[
              {
                title: "Industry Expertise",
                text: "With years of experience in IT development, our team delivers top-notch solutions tailored to your business needs.",
                icon: <Award size={32} />,
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Scalable & Future-Ready Solutions",
                text: "We build technology solutions that grow with your business, ensuring long-term sustainability.",
                icon: <TrendingUp size={32} />,
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Cutting-Edge Technology Stack",
                text: "Our developers utilize the latest frameworks, programming languages, and tools to build powerful IT solutions.",
                icon: <Terminal size={32} />,
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Security & Compliance Focused",
                text: "We prioritize security and ensure compliance with industry regulations, protecting your data and infrastructure.",
                icon: <ShieldCheck size={32} />,
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Agile Development & Timely Delivery",
                text: "We follow agile methodologies to deliver projects efficiently, ensuring flexibility and continuous improvements.",
                icon: <Zap size={32} />,
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={`why-it-row ${i % 2 === 1 ? 'it-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="why-it-visual">
                  <div className="visual-wrapper">
                    <img src={item.img} alt={item.title} />
                    <div className="visual-accent"></div>
                    <div className="it-num-badge">{i + 1}</div>
                  </div>
                </div>
                <div className="why-it-content">
                  <div className="content-icon-it">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Build */}
      <section className="it-builds">
        <div className="it-container">
          <div className="it-header-center">
            <h2 className="it-title">What We Build</h2>
          </div>

          <div className="build-tiles">
            {[
              { icon: <Globe size={24}/>, name: 'Business Web Apps', desc: 'Enterprise-grade web solutions.' },
              { icon: <Layers size={24}/>, name: 'SaaS Platforms', desc: 'Scalable subscription software.' },
              { icon: <Layout size={24}/>, name: 'Cloud Dashboards', desc: 'Real-time infrastructure monitoring.' },
              { icon: <AIChip size={24}/>, name: 'AI Automation Tools', desc: 'Smart tools for business tasks.' },
              { icon: <BarChart size={24}/>, name: 'Data Analytics Systems', desc: 'Insightful decision-making engines.' },
              { icon: <Lock size={24}/>, name: 'Secure Enterprise Portals', desc: 'Protected data access points.' }
            ].map((tile, i) => (
              <motion.div 
                key={i} 
                className="build-tile"
                whileHover={{ scale: 1.05 }}
              >
                <div className="tile-top-it">
                  <div className="it-tile-icon">{tile.icon}</div>
                  <h4>{tile.name}</h4>
                </div>
                <p>{tile.desc}</p>
                <div className="tile-glow-it"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Get In Touch Section */}
      <section className="it-contact">
        <div className="it-container">
          <div className="contact-it-row">
            <motion.div 
              className="contact-it-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-it-title">Start Your Digital Transformation</h2>
              <p className="contact-it-subtitle">Tell us your idea or business challenge, and PHN Technology will help design the right IT solution.</p>
              
              <div className="contact-it-visual">
                <div className="dashboard-preview">
                  <div className="d-header">
                    <span>Project Blueprint v2.0</span>
                  </div>
                  <div className="d-grid">
                    <div className="d-box"></div><div className="d-box"></div><div className="d-box"></div>
                  </div>
                </div>
              </div>

              <div className="it-contact-bullets">
                <div className="it-bullet">SaaS Development</div>
                <div className="it-bullet">Cloud & DevOps</div>
                <div className="it-bullet">AI + Cybersecurity</div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-it-form"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="it-form-card">
                {isSubmitted ? (
                  <div className="success-it">
                    <CheckCircle2 size={60} className="text-green-500 mb-4" />
                    <h3>Consultation Request Received!</h3>
                    <p>Our IT strategists will reach out to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-it-form">
                    <div className="form-split-it">
                      <div className="it-field">
                        <label>Name *</label>
                        <input type="text" name="name" required placeholder="Your Name" value={formState.name} onChange={handleInputChange} />
                      </div>
                      <div className="it-field">
                        <label>Phone *</label>
                        <input type="tel" name="phone" required placeholder="Phone Number" value={formState.phone} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="it-field">
                      <label>Email *</label>
                      <input type="email" name="email" required placeholder="business@company.com" value={formState.email} onChange={handleInputChange} />
                    </div>
                    <div className="it-field">
                      <label>Subject *</label>
                      <input type="text" name="subject" required placeholder="How can we help?" value={formState.subject} onChange={handleInputChange} />
                    </div>
                    <div className="it-field">
                      <label>Message *</label>
                      <textarea name="message" required placeholder="Tell us about your project..." rows="4" value={formState.message} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="it-agree">
                      <input type="checkbox" id="it-agree" required />
                      <label htmlFor="it-agree">I agree to be contacted by PHN Technology.</label>
                    </div>
                    <button type="submit" className="it-submit-btn">
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

// Placeholder icons for Lucide versions
const Brain = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path>
  </svg>
);
const Award = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
    <circle cx="12" cy="8" r="6"></circle>
  </svg>
);
const TrendingUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const ShieldCheck = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

export default ITDevelopment;
