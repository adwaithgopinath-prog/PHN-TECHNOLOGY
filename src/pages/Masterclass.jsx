import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ArrowRight, PlayCircle, Star, CheckCircle, 
  Cpu, Layout, Users, GraduationCap, Briefcase, 
  MessageCircle, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Masterclass.css';

const Masterclass = () => {
  const [activeStack, setActiveStack] = useState('ai');
  const [openAcc, setOpenAcc] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const stackData = {
    ai: [
      { q: "Learn AI Faster Than You Thought Possible", a: "Our accelerated curriculum focuses on high-impact concepts, cutting through the noise to get you building immediately." },
      { q: "The AI Masterclass Everyone Is Talking About", a: "Join the session that has transformed how students approach artificial intelligence, from theory to practical application." },
      { q: "Build Your First AI Model Before the Session Ends", a: "Hands-on implementation where you'll actually deploy a working model during our live interactive workshop." },
      { q: "Unlock Your AI Potential in Just 45 Minutes", a: "A concentrated burst of knowledge designed to give you a clear roadmap for your AI career journey." }
    ],
    iot: [
      { q: "Understand Sensors, Devices, and Data Flow", a: "Master the physical layer of the internet of things and how data moves from silicon to the cloud." },
      { q: "Build Your First Smart IoT Workflow", a: "Connect disparate devices into a cohesive smart ecosystem using industry-standard protocols." },
      { q: "Learn IoT Protocols With Practical Examples", a: "Deep dive into MQTT, HTTP, and other essential protocols through real-world deployment scenarios." },
      { q: "Connect Hardware Thinking With Real Applications", a: "Bridge the gap between electronic components and software solutions that solve real industry problems." }
    ]
  };

  const faqs = [
    { q: "Do I need a technical background?", a: "No. The session is beginner-friendly and suitable for all streams. We start from the absolute basics." },
    { q: "What is the fee and what do I get?", a: "The masterclass fee is ₹39. You get a focused live session, practical guidance, career clarity, and mentor-led learning." },
    { q: "Can I choose between AI&ML and IoT?", a: "Yes. You can choose the masterclass that best matches your interest and career goals." },
    { q: "Will this help my career?", a: "Yes. The session is designed to help you understand practical skills, real-world applications, and career pathways in emerging technologies." },
    { q: "How will I get the registration link for masterclass?", a: "After registration, the session details and joining link will be shared through the contact details you provide." }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mc-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="mc-hero">
        <div className="mc-hero-bg">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Classroom" />
        </div>
        <div className="mc-hero-overlay"></div>
        <div className="mc-container">
          <motion.div 
            className="mc-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mc-hero-eyebrow">Masterclass</span>
            <h1 className="mc-hero-title">
              Build Your <span className="mc-gradient-text">Tech Career in 2026</span>
            </h1>
            <p className="mc-hero-sub">
              Join focused, mentor-led masterclasses designed to help students and professionals learn real industry skills in AI/ML, IoT, and emerging technologies.
            </p>
            
            <div className="flex gap-4">
              <Link to="/contact" className="btn-premium btn-primary">Register Now</Link>
              <button onClick={() => scrollToSection('choose')} className="btn-premium btn-glass">Explore Courses</button>
            </div>

            <div className="mc-hero-ratings">
              <div className="mc-rating-card">
                <span className="mc-rating-val">4.5/5</span>
                <span className="mc-rating-label">AmbitionBox</span>
              </div>
              <div className="mc-rating-card">
                <span className="mc-rating-val">4.7/5</span>
                <span className="mc-rating-label">Google Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Choose Your Masterclass */}
      <section className="mc-section" id="choose">
        <div className="mc-container">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Choose Your Masterclass</h2>
            <div className="divider-glow mx-auto" style={{ width: '100px' }}></div>
          </div>

          <div className="mc-cards-grid">
            {/* AI/ML Card */}
            <motion.div 
              className="mc-course-card ai"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mc-card-banner">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop" alt="AI" />
                <span className="mc-card-label">AI/ML Specialization</span>
              </div>
              <div className="mc-card-body">
                <h3 className="mc-card-title">Master AI & Machine Learning Fundamentals</h3>
                <div className="mc-price-row">
                  <span className="mc-current-price">₹39</span>
                  <span className="mc-old-price">₹99</span>
                </div>
                <ul className="mc-bullets">
                  <li>Strong AI & ML fundamentals</li>
                  <li>Real-world use cases</li>
                  <li>Career roadmap guidance</li>
                  <li>Live mentor interaction</li>
                </ul>
                <div className="mc-card-actions">
                  <Link to="/contact" className="btn-premium btn-primary">Register Now</Link>
                  <button onClick={() => scrollToSection('innovation')} className="btn-premium btn-glass">Learn More</button>
                </div>
              </div>
            </motion.div>

            {/* IoT Card */}
            <motion.div 
              className="mc-course-card iot"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mc-card-banner">
                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop" alt="IoT" />
                <span className="mc-card-label">IoT Specialization</span>
              </div>
              <div className="mc-card-body">
                <h3 className="mc-card-title">Build Smart Ecosystems With Internet of Things</h3>
                <div className="mc-price-row">
                  <span className="mc-current-price">₹39</span>
                  <span className="mc-old-price">₹99</span>
                </div>
                <ul className="mc-bullets">
                  <li>IoT architecture & protocols</li>
                  <li>Live device-level demos</li>
                  <li>Industry applications</li>
                  <li>Mentor-led session</li>
                </ul>
                <div className="mc-card-actions">
                  <Link to="/contact" className="btn-premium btn-primary">Register Now</Link>
                  <button onClick={() => scrollToSection('innovation')} className="btn-premium btn-glass">Learn More</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Skill Unlock Section */}
      <section className="mc-section bg-alt">
        <div className="mc-container">
          <div className="mc-unlock-grid">
            <motion.div 
              className="mc-unlock-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="mc-visual-card">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Lab Training" />
              </div>
              <div className="mc-floating-badge">
                <span className="mc-badge-title">AI & IoT Expertise</span>
                <span className="mc-badge-sub">From Zero to Industry Ready</span>
              </div>
            </motion.div>

            <div className="mc-unlock-content">
              <h2 className="section-title-global">Unlock Industry-Ready Skills in Just One Masterclass</h2>
              <p className="body-text-global">
                These masterclasses break down how real engineers think, build, and grow in the industry, helping you move from confusion to clarity.
              </p>
              <ul className="mc-checklist">
                <li>
                  <CheckCircle className="mc-check-icon" size={24} />
                  <span>See how real-world projects are built and evaluated</span>
                </li>
                <li>
                  <CheckCircle className="mc-check-icon" size={24} />
                  <span>Learn directly from industry professionals, not textbooks</span>
                </li>
                <li>
                  <CheckCircle className="mc-check-icon" size={24} />
                  <span>Understand what skills actually matter in today’s tech roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Innovation Stack */}
      <section className="mc-section" id="innovation">
        <div className="mc-container">
          <div className="text-center mb-12">
            <h2 className="section-title-global">Your Innovation Stack</h2>
            <p className="body-text-global max-w-3xl mx-auto">
              The essential toolkit for the modern engineer. Master the core algorithms, hardware, and integration techniques that drive today’s smart economy.
            </p>
          </div>

          <div className="mc-stack-tabs">
            <button 
              className={`mc-tab-btn ${activeStack === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveStack('ai')}
            >
              AI&ML Master Class
            </button>
            <button 
              className={`mc-tab-btn ${activeStack === 'iot' ? 'active' : ''}`}
              onClick={() => setActiveStack('iot')}
            >
              IoT Master Class
            </button>
          </div>

          <div className="mc-accordion">
            {stackData[activeStack].map((item, idx) => (
              <div key={idx} className="mc-acc-item">
                <button 
                  className="mc-acc-trigger"
                  onClick={() => setOpenAcc(openAcc === idx ? null : idx)}
                >
                  {item.q}
                  <ChevronDown className={`transition-transform ${openAcc === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openAcc === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="mc-acc-content">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who Should Join and Why */}
      <section className="mc-section bg-deep">
        <div className="mc-container">
          <div className="mc-who-grid">
            <div className="mc-who-illust">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Teamwork" />
            </div>
            <div className="mc-who-content">
              <h2 className="section-title-global">Who Should Join and Why</h2>
              <p className="body-text-global">One program. Multiple objectives. A future-ready edge for everyone.</p>
              
              <div className="mc-audience-list">
                <div className="mc-audience-card">
                  <div className="mc-aud-icon"><GraduationCap size={28} /></div>
                  <div className="mc-aud-info">
                    <h4>Students</h4>
                    <p>Move beyond surface-level knowledge. Understand how concepts actually work, where they are applied, and how they translate into real projects and careers.</p>
                  </div>
                </div>
                <div className="mc-audience-card">
                  <div className="mc-aud-icon"><Briefcase size={28} /></div>
                  <div className="mc-aud-info">
                    <h4>Professionals</h4>
                    <p>Refresh what you know and deepen what you use. Gain practical clarity on modern tools, workflows, and how today’s technologies are implemented in real environments.</p>
                  </div>
                </div>
                <div className="mc-audience-card">
                  <div className="mc-aud-icon"><Users size={28} /></div>
                  <div className="mc-aud-info">
                    <h4>Teachers & Educators</h4>
                    <p>Go beyond definitions and frameworks. Strengthen your understanding of applied concepts and real-world use cases to better guide and inspire students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="mc-section">
        <div className="mc-container">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Frequently Asked Questions</h2>
            <div className="divider-glow mx-auto" style={{ width: '100px' }}></div>
          </div>

          <div className="mc-faq-stack">
            {faqs.map((faq, idx) => (
              <div key={idx} className="mc-acc-item">
                <button 
                  className="mc-acc-trigger"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="mc-acc-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Masterclass;
