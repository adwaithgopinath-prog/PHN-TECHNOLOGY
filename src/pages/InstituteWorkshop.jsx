import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, BookOpen, Cpu, ShieldCheck, 
  Globe, Award, Star, ChevronDown, ChevronUp,
  Monitor, Layout, Database, BarChart, HardDrive
} from 'lucide-react';
import './WorkshopsShared.css';

const InstituteWorkshop = () => {
  const [activeTab, setActiveTab] = useState('offline');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerLogos = [
    "IIT Patna", "IIT Jammu", "NIT Delhi", 
    "IIT Guwahati", "STEM Accredited", "NSDC"
  ];

  const benefits = [
    { 
      title: "Certified Workshops", 
      desc: "Get industry-recognized certificates that boost your credibility instantly.",
      icon: <Award size={30} />
    },
    { 
      title: "Hands On", 
      desc: "Experience learning that is 100% practical and built for real results.",
      icon: <Zap size={30} />
    },
    { 
      title: "Portfolio Building", 
      desc: "We turn your learning into tangible projects that make you stand out.",
      icon: <Layout size={30} />
    }
  ];

  const testimonials = [
    { name: "Priya Nair", role: "IIT Patna Student", quote: "The hands-on exposure to robotics kinematics was beyond my expectations. Highly recommended!" },
    { name: "Rahul Verma", role: "NIT Delhi Participant", quote: "PHN's mentors really know their tech. The 3D printing workshop was a game changer for my project." },
    { name: "Aayush Jain", role: "IIIT Student", quote: "The combination of theory and real-world industrial IoT protocols made this workshop invaluable." },
    { name: "Bhavin Jain", role: "Tech Enthusiast", quote: "Professional, detailed, and extremely practical. Best certification I've earned this year." },
    { name: "Mehak Sharma", role: "Engineering Graduate", quote: "I built my first autonomous drone thanks to the PHN workshop at IIT Guwahati." },
    { name: "Shashank Patil", role: "System Architect", quote: "A deep dive into AI & ML that actually makes sense for industrial applications." }
  ];

  const faqs = [
    { q: "What is the IIT/NIT/IIIT Workshop Track?", a: "It is a premium technical program designed specifically for elite national institutes, focusing on high-end technology implementations like industrial robotics, advanced AI, and IoT ecosystems." },
    { q: "Is this certification industry-validated?", a: "Yes, all our programs are accredited and validated by industry leaders, ensuring your skills are recognized by top tech employers." },
    { q: "Will we get hands-on access to hardware?", a: "Absolutely. Our workshops emphasize 100% practical learning, providing access to professional-grade hardware and lab equipment." }
  ];

  return (
    <div className="ws-page-wrapper">
      {/* Hero Section */}
      <section className="ws-hero">
        <div className="ws-hero-glow"></div>
        <div className="ws-container">
          <div className="ws-hero-content">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="ws-hero-chip">IIT / NIT / IIIT Track</span>
              <h1 className="ws-hero-title">Hands-On<br />Workshop</h1>
              <p className="ws-hero-subtitle">
                On leading tech campuses with hands-on experience, expert mentorship, and prestigious industry-validated certifications in collaboration with IIT, NIT, and IIIT institutions.
              </p>
              
              <div className="ws-rating-group">
                <div className="ws-rating-card">
                  <div className="ws-rating-val">4.7 / 5</div>
                  <div className="stars">
                    {[1,2,3,4].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    <Star size={14} fill="currentColor" style={{ opacity: 0.5 }} />
                  </div>
                  <div className="ws-rating-label">Google Rating</div>
                </div>
                <div className="ws-rating-card">
                  <div className="ws-rating-val">4.5 / 5</div>
                  <div className="stars">
                    {[1,2,3,4].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    <Star size={14} fill="currentColor" style={{ opacity: 0.5 }} />
                  </div>
                  <div className="ws-rating-label">Program Rating</div>
                </div>
              </div>

              <div className="ws-actions">
                <button className="btn-ph-primary px-10 py-5 text-lg">Register Now <ArrowRight className="ml-2" size={20} /></button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="IIT Workshop" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating Chips */}
              <div className="floating-chips-container">
                <div className="floating-chip" style={{ top: '10%', left: '-10%', animationDelay: '0s' }}>IoT</div>
                <div className="floating-chip" style={{ top: '30%', right: '-5%', animationDelay: '1s' }}>AI & ML</div>
                <div className="floating-chip" style={{ bottom: '20%', left: '-5%', animationDelay: '2s' }}>3D Printing</div>
                <div className="floating-chip" style={{ bottom: '10%', right: '10%', animationDelay: '3.5s' }}>Certified Programs</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Row */}
      <div className="ws-logos-section">
        <div className="ws-container">
          <div className="logos-track">
            {partnerLogos.map((logo, i) => (
              <span key={i} className="partner-logo">{logo}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Domain Selection */}
      <section className="ws-section">
        <div className="ws-container">
          <div className="text-center mb-12">
            <h2 className="section-title-global">Choose Your Career Domain</h2>
            <p className="section-subtitle">Select the mode that fits your learning style.</p>
          </div>

          <div className="segmented-tabs">
            <button className={`tab-trigger ${activeTab === 'offline' ? 'active' : ''}`} onClick={() => setActiveTab('offline')}>Offline Programs</button>
            <button className={`tab-trigger ${activeTab === 'online' ? 'active' : ''}`} onClick={() => setActiveTab('online')}>Online Programs</button>
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="ws-empty-state"
              >
                <div className="empty-icon"><Monitor size={64} className="mx-auto" /></div>
                <h3 className="text-2xl font-bold text-white/50">{activeTab === 'offline' ? 'Offline' : 'Online'} Programs Coming Soon</h3>
                <p className="text-slate-500 mt-4">We are finalizing high-end technical curriculum. Stay tuned!</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="domain-grid mt-20">
            {[
              { title: "Advanced Robotics", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=600", icon: <Cpu /> },
              { title: "Industrial IoT", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600", icon: <Globe /> },
              { title: "Computer Vision", img: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=600", icon: <ShieldCheck /> },
              { title: "AI Architecture", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600", icon: <Zap /> }
            ].map((domain, i) => (
              <div key={i} className="domain-card">
                <div className="domain-img-wrapper">
                  <img src={domain.img} alt={domain.title} />
                </div>
                <div className="domain-content">
                  <div className="text-accent-blue mb-4">{domain.icon}</div>
                  <h3>{domain.title}</h3>
                  <button className="btn-domain-explore">Explore Program <ArrowRight size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="ws-section bg-slate-900/40">
        <div className="ws-container">
          <div className="advantage-grid">
            <div className="advantage-content">
              <h2>The Advantage<br />You Get With Us</h2>
              <p>We go beyond theory to deliver hands-on learning, real-world exposure, and career-focused outcomes that prepare you for industry from day one.</p>
            </div>
            <div className="benefit-stack">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon">{b.icon}</div>
                  <div className="benefit-info">
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="ws-section">
        <div className="ws-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="section-title-global text-left">Past Workshops / Upcoming</h2>
              <p className="section-subtitle text-left">Industry-Led Learning, Global Perspective. Gain hands-on exposure through programs delivered by industry leaders, designed to match real-world standards and evolving technology demands.</p>
            </div>
            <div className="segmented-tabs m-0!">
              <button className="tab-trigger active">Past Workshops</button>
              <button className="tab-trigger">Upcoming</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { t: "3D Printing", l: "NIT Delhi", i: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=400" },
              { t: "Industrial IoT", l: "IIT Patna", i: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400" },
              { t: "Robotics Kinematics", l: "IIT Jammu", i: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" },
              { t: "AI Architecture", l: "IIT Guwahati", i: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=400" }
            ].map((p, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video border border-white/5">
                <img src={p.i} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" alt={p.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-white font-bold">{p.t}</h4>
                  <p className="text-accent-blue text-sm">{p.l}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[40px] overflow-hidden h-[500px] border border-white/10 shadow-2xl relative">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Collage" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
               <h3 className="text-4xl font-black text-white">Experience Immersive Tech Excellence</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ws-section bg-slate-900/20">
        <div className="ws-container">
          <div className="text-center mb-16">
            <h2 className="section-title-global">What People Are Saying</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Discover how this program turned ordinary students into confident, industry-ready innovators.</p>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-header">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div className="testi-user">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
                <p className="testi-quote">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ws-section">
        <div className="ws-container">
          <div className="text-center">
            <h2 className="section-title-global">Program FAQs</h2>
            <p className="section-subtitle">Common questions about the Institute Track.</p>
          </div>
          <div className="faq-stack">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q} {openFaq === i ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-content"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="ws-cta-band">
        <div className="cta-bg-anim"></div>
        <div className="ws-container">
          <div className="cta-inner">
            <h2 className="cta-title">Experience the Future of Learning with Experts</h2>
            <p className="text-xl text-slate-300 mb-10">Join PHN Technology’s exclusive workshops and dive into hands-on sessions in AI, Robotics, and IoT. Unlock your innovation potential through real-time mentorship and practical learning.</p>
            <button className="btn-ph-primary px-12 py-5 text-xl">Get Started Today</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstituteWorkshop;
