import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, PlayCircle, Download, CheckCircle, 
  Target, Award, Lightbulb, Users, MessageSquare 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './InternshipsShared.css';

const UniversityInternship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const domainCards = [
    { title: "AI & Machine Learning", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop" },
    { title: "Internet of Things (IoT)", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop" },
    { title: "Data Engineering", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "Business Analytics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" }
  ];

  const benefits = [
    { title: "Industry-Relevant Skills", desc: "Gain mastery over tools and technologies used by top tech firms." },
    { title: "Thesis & Project Workshop", desc: "Specialized support for academic projects and industry thesis work." },
    { title: "Expert Guidance & Certification", desc: "Learn from veterans and earn recognized internship certificates." },
    { title: "Entrepreneurship & Ideathon", desc: "Participate in startup-focused events and build innovative products." },
    { title: "Soft Skills & Career Boost", desc: "Enhance your communication and professional presence." },
    { title: "Career Counselling & Mock Interviews", desc: "Get ready for the job market with expert feedback." }
  ];

  const faqs = [
    { q: "What internship programs are available under the University Internship initiative?", a: "We offer specializations in AI & Machine Learning, Internet of Things (IoT), Data Engineering, and Business Analytics." },
    { q: "Who can enroll in these internships?", a: "Students from engineering, science, and management backgrounds looking for practical industry exposure are welcome." },
    { q: "What is the format and mode of training for these internships?", a: "These are delivered as hybrid programs with hands-on sessions, real projects, and mentor-led workshops." },
    { q: "Will I get a certificate after completing the internship?", a: "Yes, you will receive an Internship Completion Certificate from PHN Technology, recognized by industry partners." },
    { q: "What kind of projects will I build during the internship?", a: "You will build multiple mini-projects and one major industry-scale project that can be showcased in your portfolio." },
    { q: "Who conducts the training and mentorship?", a: "Training is conducted by industry professionals and experts from our CoE labs with years of real-world experience." },
    { q: "What career support is provided along with the internship?", a: "We provide career counseling, resume building sessions, and mock interviews to prepare you for placements." },
    { q: "Are these internships beginner-friendly?", a: "Yes, we start from the basics. No advanced coding background is required as we provide foundational training." },
    { q: "Are these internship certificates recognized?", a: "Yes, our certifications are valued by institutes and industry partners due to the rigorous hands-on nature of the training." }
  ];

  return (
    <div className="internship-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="hero-internship">
        <div className="container-custom">
          <div className="hero-grid">
            <motion.div 
              className="hero-text-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Delivered at your College<br />
                <span className="mc-gradient-text">Designed for real Careers</span>
              </h1>
              <p>
                Hands-on specializations in AI/ML and IoT guided by experts, real projects, and internship certificate.
              </p>
              <div className="flex gap-4">
                <a href="#" className="btn-premium btn-primary"><Download size={20} /> Download Brochure</a>
              </div>
            </motion.div>

            <motion.div 
              className="hero-visual-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="video-card-premium">
                <div className="video-placeholder">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Students" />
                  <div className="play-overlay">
                    <div className="play-button"><PlayCircle size={40} fill="currentColor" /></div>
                    <span className="text-xl font-bold">Invest in Your Career</span>
                    <span className="text-sm opacity-80">Enroll Now</span>
                  </div>
                </div>
                <h3>Watch Our Training Journey</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Career Domain Section */}
      <section className="section-spacing bg-deep">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Choose Your Career Domain</h2>
            <p className="body-text-global max-w-2xl mx-auto">
              Specialize in the technology that aligns with your interests and career goals.
            </p>
          </div>

          <div className="domain-grid">
            {domainCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                className="domain-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="domain-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="domain-info">
                  <h3>{card.title}</h3>
                  <Link to="/contact" className="btn-premium btn-glass w-full">Explore</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Skill Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="skill-grid">
            <motion.div 
              className="skill-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1593508512855-994450a97935?q=80&w=2014&auto=format&fit=crop" alt="VR Training" />
            </motion.div>
            <div className="skill-content">
              <h2>Learn In-Demand Skills That Move Your Career Forward</h2>
              <div className="benefit-stack">
                <div className="benefit-item">
                  <div className="benefit-icon-box"><Users size={24} /></div>
                  <div className="benefit-info">
                    <h4>Expert Mentorship</h4>
                    <p>Get guidance from experts mentors and industry professionals who support your projects end-to-end.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-box"><Target size={24} /></div>
                  <div className="benefit-info">
                    <h4>Mega Project & Portfolio</h4>
                    <p>Build multiple mini-projects and a full-scale industry project to strengthen your resume and showcase real abilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Collaboration Section */}
      <section className="section-spacing bg-deep text-center">
        <div className="container-custom">
          <span className="collab-chip">Our collaboration</span>
          <div className="logo-row">
            <div className="partner-logo-box">IIT Guwahati</div>
            <div className="partner-logo-box">IIT Jammu</div>
            <div className="partner-logo-box">IIT Patna</div>
            <div className="partner-logo-box">NIT Delhi</div>
            <div className="partner-logo-box">ISRO Registered Space Tutor</div>
            <div className="partner-logo-box">STEM Accredited</div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Unlock the Top Benefits of Industry-Ready Training</h2>
            <div className="divider-glow mx-auto" style={{ width: '100px' }}></div>
          </div>

          <div className="benefits-grid-main">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="benefit-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{benefit.title}</h3>
                <p className="body-text-global text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="section-spacing bg-deep">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Frequently Asked Questions</h2>
          </div>

          <div className="faq-stack">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-trigger"
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
                      <div className="faq-content">
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

export default UniversityInternship;
