import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Download, CheckCircle, Cpu, Layout, 
  BarChart, Globe, Target, Award, Users, Lightbulb, 
  ArrowRight, PlayCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './SummerInternshipShared.css';

const OnlineSummerInternship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    { num: "01", title: "Domain Orientation", desc: "1 week of intensive domain immersion and problem statement setup." },
    { num: "02", title: "Project Build Sprint", desc: "3 weeks of focused building with milestone-based mentor check-ins." },
    { num: "03", title: "Mentor Review", desc: "Weekly feedback sessions to sharpen your solution and fix critical gaps." },
    { num: "04", title: "Demo Day & Certificate", desc: "Present your industry-level project and receive your certification." }
  ];

  const domains = [
    { 
      title: "Artificial Intelligence and Machine Learning", 
      badge: "AI/ML",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    { 
      title: "EV & MATLAB Simulation", 
      badge: "EV SYSTEMS",
      tags: ["Matlab", "Simulink", "Powertrain"],
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "UX/UI Product Design", 
      badge: "DESIGN THINKING",
      tags: ["Figma", "Wireframing", "Case Study"],
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Business Analytics & Data Intelligence", 
      badge: "DATA SCIENCE",
      tags: ["Power BI", "SQL", "Python"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  const capabilities = [
    { title: "Industry-Oriented Project Building", icon: <Target size={32} /> },
    { title: "Strong Project Portfolio", icon: <Award size={32} /> },
    { title: "Expert Mentorship & Support", icon: <Users size={32} /> },
    { title: "Hands-On Practical Learning", icon: <Lightbulb size={32} /> }
  ];

  const faqs = [
    { q: "Will I get a certificate?", a: "Yes, you will receive an Internship Completion Certificate from PHN Technology, recognized by our academic and industry partners." },
    { q: "Will there be support for research papers and patents?", a: "Selected students with exceptional projects will receive expert guidance on drafting and submitting research papers or patents." },
    { q: "What is the duration of the program?", a: "The program spans 30 days, including orientation, project building, and review phases." },
    { q: "Is the internship conducted online or offline?", a: "This specific program is conducted entirely online through live mentor-led sessions and a dedicated project portal." },
    { q: "How do I enroll?", a: "You can reserve your seat by clicking 'Reserve My Seat Now' and completing the registration process." },
    { q: "What makes this program different from regular internships?", a: "We focus on 'Project Build Training' where you don't just observe but actually build an industry-level product from scratch." },
    { q: "Is this program suitable for beginners?", a: "Yes, we start with a foundation week to ensure students from all backgrounds can build their projects successfully." }
  ];

  return (
    <div className="si-page-wrapper">
      
      {/* --- Hero Section --- */}
      <section className="si-hero">
        <div className="si-container">
          <div className="si-grid-12">
            <motion.div 
              className="si-hero-content"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="si-eyebrow"><CheckCircle size={16} /> Applications Open - Summer 2026</span>
              <h1 className="si-hero-title">
                Online Summer <br />
                <span className="si-gradient-text">Internship 2026</span>
              </h1>
              <p className="si-hero-sub">
                Build real industry-level projects from anywhere with mentor-led training, domain specialization, and portfolio-ready outcomes.
              </p>
              
              <div className="flex gap-5 mb-10 flex-wrap">
                <Link to="/contact" className="btn-premium btn-primary px-8 py-4 text-lg">Reserve My Seat</Link>
                <a href="#" className="btn-premium btn-glass px-8 py-4 text-lg"><Download size={20} /> Download Brochure</a>
              </div>

              <div className="si-trust-row">
                <div className="si-trust-item">
                  <span className="si-trust-val">1,200+</span>
                  <span className="si-trust-label">Students Enrolled</span>
                </div>
                <div className="si-trust-item">
                  <span className="si-trust-val">4.9/5</span>
                  <span className="si-trust-label">Student Rating</span>
                </div>
                <div className="si-trust-item">
                  <span className="si-trust-val">100%</span>
                  <span className="si-trust-label">Certificate Issued</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="si-hero-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="si-video-premium">
                <div className="si-video-frame">
                  <iframe 
                    src="https://www.youtube.com/embed/gFk8AGkawQM?autoplay=0&mute=1"
                    title="Online Summer Internship"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="si-video-chips">
                  <span className="si-pills">INTERNSHIP CERTIFICATE</span>
                  <span className="si-pills">RESEARCH PAPER SUPPORT</span>
                  <span className="si-pills">LIVE MENTORSHIP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Partner Strip --- */}
      <div className="si-partner-strip">
        <div className="si-container">
          <div className="si-partner-logos">
            <span className="si-logo-text">IIT Guwahati</span>
            <span className="si-logo-text">IIT Jammu</span>
            <span className="si-logo-text">IIT Patna</span>
            <span className="si-logo-text">ISRO Space Tutor</span>
            <span className="si-logo-text">STEM Accredited</span>
            <span className="si-logo-text">NSDC</span>
          </div>
        </div>
      </div>

      {/* --- How It Works --- */}
      <section className="si-section">
        <div className="si-container">
          <div className="text-center mb-20">
            <h2 className="section-title-global">Your 30-Day Project Journey</h2>
            <p className="body-text-global max-w-2xl mx-auto">From fundamentals to a polished industry-level project in four structured steps.</p>
          </div>

          <div className="si-timeline">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="si-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="si-step-dot">{step.num}</div>
                <div className="si-step-info">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pick Your Career Domain --- */}
      <section className="si-section bg-alt" id="domains">
        <div className="si-container">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <h2 className="section-title-global mb-4">Pick Your Career Domain</h2>
              <p className="body-text-global">Specialize in the technologies that drive the future.</p>
            </div>
            <Link to="/contact" className="btn-premium btn-glass">Explore All Domains <ArrowRight size={18} /></Link>
          </div>

          <div className="si-card-grid">
            {domains.map((domain, idx) => (
              <motion.div 
                key={idx} 
                className="si-item-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="si-card-img"><img src={domain.img} alt={domain.title} /></div>
                <div className="si-card-overlay"></div>
                <div className="si-card-content">
                  <span className="si-card-badge">{domain.badge}</span>
                  <h3 className="si-card-title">{domain.title}</h3>
                  <div className="si-card-tags">
                    {domain.tags.map((tag, i) => <span key={i} className="si-pills">{tag}</span>)}
                  </div>
                  <Link to="/contact" className="btn-premium btn-primary w-full py-3">Explore Domain</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Capabilities --- */}
      <section className="si-section">
        <div className="si-container">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Industry-Ready Capabilities</h2>
          </div>

          <div className="si-feature-grid">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx} 
                className="si-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="si-feature-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p className="text-sm text-white/50">Gain practical exposure and build a portfolio that stands out to recruiters.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="si-section bg-alt">
        <div className="si-container">
          <div className="si-faq-layout">
            <div className="si-faq-intro">
              <span className="si-eyebrow">Support</span>
              <h2>Have Questions? We’ve Got Answers.</h2>
              <p className="body-text-global mb-10">Can't find what you're looking for? Talk to our career counselors for a direct one-on-one session.</p>
              <Link to="/contact" className="btn-premium btn-primary px-10">Talk to Us</Link>
            </div>

            <div className="si-accordion">
              {faqs.map((faq, idx) => (
                <div key={idx} className="si-acc-item">
                  <button 
                    className="si-acc-trigger"
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
                        <div className="si-acc-content">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="si-final-cta">
        <div className="si-container">
          <h2>Your IIT Moment Is Right Now</h2>
          <p>Don’t wait for the perfect opportunity. Build the project, meet the mentors, and create proof of skill this summer.</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link to="/contact" className="btn-premium btn-primary px-12 py-5 text-xl font-bold">Reserve My Seat</Link>
            <button onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })} className="btn-premium btn-glass px-12 py-5 text-xl font-bold">View All Domains</button>
          </div>
          <div className="si-trust-row justify-center mt-12 opacity-50">
            <div className="si-note-item flex items-center gap-2"><CheckCircle size={16} /> Only 40 seats per batch</div>
            <div className="si-note-item flex items-center gap-2"><CheckCircle size={16} /> Batch starts soon</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OnlineSummerInternship;
