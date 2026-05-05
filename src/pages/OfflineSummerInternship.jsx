import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Download, CheckCircle, Building2, MapPin, 
  ArrowRight, Target, Award, Lightbulb, Users, Star, 
  Clock, CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './SummerInternshipShared.css';

const OfflineSummerInternship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    { num: "01", title: "Online Foundation", desc: "1 week of theory, problem statements, and tools setup from home." },
    { num: "02", title: "Campus Lab Training", desc: "3 weeks of hands-on lab sessions at your chosen IIT/NIT campus." },
    { num: "03", title: "Project Build", desc: "Design, build, and optimize your solution from scratch with campus experts." },
    { num: "04", title: "Certification & Beyond", desc: "Receive your IIT/NIT-affiliated certificate and industry LOR." }
  ];

  const campuses = [
    { name: "IIT Patna", badge: "PATNA CAMPUS", tech: "AI/ML · Robotics · IoT · Automation", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" },
    { name: "IIT Jammu", badge: "JAMMU CAMPUS", tech: "AI/ML · Robotics · IoT · Automation", img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" },
    { name: "IIT Guwahati", badge: "GUWAHATI CAMPUS", tech: "AI/ML · Robotics · IoT · Automation", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
    { name: "NIT Warangal", badge: "WARANGAL CAMPUS", tech: "AI/ML · Robotics · IoT · Automation", img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop" },
    { name: "IIT Bhopal", badge: "BHOPAL CAMPUS", tech: "AI/ML · Robotics · IoT · Automation", img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" }
  ];

  const values = [
    { title: "IIT/NIT Campus Lab Access", desc: "3 Weeks of lab use.", val: "₹1,000 - ₹5,000 value" },
    { title: "Hardware Components Kit", desc: "Take your project home.", val: "₹10,000 value" },
    { title: "3D Printing Support", desc: "For Humanoid/Robotic builds.", val: "₹9,000 value" },
    { title: "Dual Mentorship + Certificate", desc: "IIT Alumni + Professor.", val: "Exclusive" },
    { title: "Custom PCB Design Support", desc: "Full fabrication support.", val: "₹5,000 value" }
  ];

  const capabilities = [
    { title: "Industry-Level Project Building", icon: <Target size={32} /> },
    { title: "High-Impact Project Portfolio", icon: <Award size={32} /> },
    { title: "Research Paper & Patent Support", icon: <Lightbulb size={32} /> },
    { title: "IIT/NIT Campus Exposure", icon: <Building2 size={32} /> },
    { title: "Expert Mentorship & Certification", icon: <Users size={32} /> },
    { title: "Real Engineering Experience", icon: <Star size={32} /> }
  ];

  const faqs = [
    { q: "Will I get a certificate?", a: "Yes, you will receive a co-branded Industry Certificate from PHN Technology and the respective IIT/NIT Center of Excellence." },
    { q: "Will there be support for research papers and patents?", a: "Selected high-impact projects will receive guidance from IIT alumni and PhD scholars for drafting research papers." },
    { q: "What is the duration of the program?", a: "The total duration is 30 days, divided into one week of online foundation and three weeks of offline campus training." },
    { q: "Will accommodation and food be provided?", a: "We provide assistance in finding nearby PG/hostel accommodation. Food and stay are usually available at actual costs." },
    { q: "Where will the offline training be conducted?", a: "Offline training is held at the Center of Excellence labs within the premises of IIT Patna, IIT Jammu, IIT Guwahati, or NIT Delhi/Warangal." },
    { q: "What makes this program different from regular internships?", a: "The campus exposure, lab access, and hands-on guidance from IIT/NIT researchers set this apart from theoretical internships." },
    { q: "How do I enroll?", a: "Click 'Reserve My Seat Now' to pay the registration fee and select your preferred campus." },
    { q: "Is this program suitable for beginners?", a: "Yes. The first week of online training is specifically designed to bring all students up to the same technical baseline." }
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
                Offline Summer <br />
                <span className="si-gradient-text">Internship 2026</span>
              </h1>
              <p className="si-hero-sub">
                Get IIT/NIT campus exposure, hands-on lab training, expert mentorship, and a certificate-backed project experience.
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
                  <span className="si-trust-val">Limited</span>
                  <span className="si-trust-label">40 Seats/Batch</span>
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
                    src="https://www.youtube.com/embed/ydrgK9BUInQ?autoplay=0&mute=1"
                    title="Offline Summer Internship"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="si-video-chips">
                  <span className="si-pills">IIT/NIT CAMPUS</span>
                  <span className="si-pills">DUAL MENTORSHIP</span>
                  <span className="si-pills">COE LAB ACCESS</span>
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
            <span className="si-logo-text">NIT Warangal</span>
            <span className="si-logo-text">NSDC</span>
            <span className="si-logo-text">STEM Accredited</span>
          </div>
        </div>
      </div>

      {/* --- How It Works --- */}
      <section className="si-section">
        <div className="si-container">
          <div className="text-center mb-20">
            <h2 className="section-title-global">Your 30-Day Campus Journey</h2>
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

      {/* --- Pick Your Favourite Campus --- */}
      <section className="si-section bg-alt" id="campuses">
        <div className="si-container">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <h2 className="section-title-global mb-4">Pick Your Favourite Campus</h2>
              <p className="body-text-global">Select the IIT/NIT campus that best fits your goals.</p>
            </div>
            <Link to="/contact" className="btn-premium btn-glass">Explore All Campuses <ArrowRight size={18} /></Link>
          </div>

          <div className="si-card-grid">
            {campuses.map((campus, idx) => (
              <motion.div 
                key={idx} 
                className="si-item-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="si-card-img"><img src={campus.img} alt={campus.name} /></div>
                <div className="si-card-overlay"></div>
                <div className="si-card-content">
                  <span className="si-card-badge">{campus.badge}</span>
                  <h3 className="si-card-title">{campus.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{campus.tech}</p>
                  <Link to="/contact" className="btn-premium btn-primary w-full py-3">Apply Now</Link>
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

      {/* --- Everything You Need To Win --- */}
      <section className="si-section bg-alt">
        <div className="si-container">
          <div className="text-center mb-20">
            <h2 className="section-title-global">Everything You Need To Win</h2>
          </div>

          <div className="si-value-pricing-grid">
            <div className="si-value-list">
              {values.map((v, i) => (
                <div key={i} className="si-value-item">
                  <div className="si-value-info">
                    <h4>{v.title}</h4>
                    <p className="text-white/40 text-sm">{v.desc}</p>
                  </div>
                  <span className="si-value-tag">{v.val}</span>
                </div>
              ))}
              <div className="text-right mt-6">
                <span className="text-2xl font-black text-white">Total Value ₹25,000+</span>
              </div>
            </div>

            <div className="si-sticky-price">
              <motion.div 
                className="si-price-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-white/40 line-through text-xl">₹10,000</span>
                <div className="si-price-main">₹5,999</div>
                <ul className="si-check-list">
                  <li><CheckCircle size={18} className="text-green-400" /> 30-day residential program</li>
                  <li><CheckCircle size={18} className="text-green-400" /> IIT/NIT campus access</li>
                  <li><CheckCircle size={18} className="text-green-400" /> Co-branded certificate</li>
                  <li><CheckCircle size={18} className="text-green-400" /> Research paper guidance</li>
                  <li><CheckCircle size={18} className="text-green-400" /> Alumni community access</li>
                </ul>
                <Link to="/contact" className="btn-premium btn-primary w-full py-5 text-xl font-black">Reserve Seat</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="si-section">
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
            <button onClick={() => document.getElementById('campuses')?.scrollIntoView({ behavior: 'smooth' })} className="btn-premium btn-glass px-12 py-5 text-xl font-bold">View All Campuses</button>
          </div>
          <div className="si-trust-row justify-center mt-12 opacity-50">
            <div className="si-note-item flex items-center gap-2"><CheckCircle size={16} /> Only 40 seats per campus</div>
            <div className="si-note-item flex items-center gap-2"><CheckCircle size={16} /> Batch starts soon</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfflineSummerInternship;
