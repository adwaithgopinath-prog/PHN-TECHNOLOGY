import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, BookOpen, Cpu, ShieldCheck, 
  Globe, Award, Star, ChevronDown, ChevronUp,
  Monitor, Layout, Database, BarChart, HardDrive
} from 'lucide-react';
import './WorkshopsShared.css';

const UniversityWorkshop = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerLogos = [
    "IIT Jammu", "ISRO Registered Space Tutor", "STEM Accredited", "NSDC"
  ];

  const domains = [
    { title: "AI & Machine Learning", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600", icon: <Zap /> },
    { title: "Internet of Things (IoT)", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600", icon: <Globe /> },
    { title: "Data Engineering", img: "https://images.unsplash.com/photo-1558494949-ef01091e9148?auto=format&fit=crop&q=80&w=600", icon: <Database /> },
    { title: "Business Analytics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", icon: <BarChart /> }
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
    { name: "Priya Nair", role: "University Student", quote: "The IoT workshop was incredible. I finally understand how to connect sensors to the cloud properly!" },
    { name: "Rahul Verma", role: "Engineering Participant", quote: "Data engineering basics were taught with such clarity. PHN mentors are truly expert." },
    { name: "Aayush Jain", role: "Tech Student", quote: "Building an AI model from scratch in just 3 days was an intense but rewarding experience." },
    { name: "Bhavin Jain", role: "Final Year Student", quote: "The certification helped me land my first internship. Companies really value practical knowledge." },
    { name: "Mehak Sharma", role: "CS Student", quote: "Learning business analytics opened a whole new career path for me. Thank you PHN!" },
    { name: "Shashank Patil", role: "Junior Developer", quote: "The project-based learning approach is what every university needs. Truly practical." }
  ];

  const faqs = [
    { 
      q: "What are the types of workshops offered under the University Workshop program?", 
      a: "We offer workshops in AI & Machine Learning, Internet of Things (IoT), Data Engineering, and Business Analytics, specifically designed for university students to bridge the academic-industry gap." 
    },
    { 
      q: "Are these workshops beginner-friendly or do they require prior experience?", 
      a: "Our workshops are designed to be accessible to all levels. We start from the fundamentals and gradually move to advanced project implementations." 
    },
    { 
      q: "What is the primary learning approach of these workshops?", 
      a: "We use a 100% immersive project-based learning approach. You don't just watch; you build real-world applications alongside experts." 
    },
    { 
      q: "Will I receive a certificate after completing a workshop?", 
      a: "Yes, every participant receives an industry-recognized certificate from PHN Technology, validated by our partner network including STEM accreditation." 
    },
    { 
      q: "Who conducts the workshops and what support do participants get?", 
      a: "Workshops are led by industry experts and academic veterans. Participants get real-time mentorship during the sessions and access to post-workshop resources." 
    },
    { 
      q: "Do workshops help in career preparation or job readiness?", 
      a: "Absolutely. We focus on building tangible portfolio projects and providing industry insights that directly contribute to your employability and job readiness." 
    }
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
              <span className="ws-hero-chip">University Workshop Track</span>
              <h1 className="ws-hero-title">Build a Tech Future<br />at Your Campus</h1>
              <p className="ws-hero-subtitle">
                Gain practical skills, expert mentorship, and industry-recognized certifications through immersive project-based learning for university students.
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
                <button className="btn-ph-primary px-10 py-5 text-lg">Inquire for Campus <ArrowRight className="ml-2" size={20} /></button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="University Workshop" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating Chips */}
              <div className="floating-chips-container">
                <div className="floating-chip" style={{ top: '15%', left: '-10%', animationDelay: '0s' }}>AI & ML</div>
                <div className="floating-chip" style={{ top: '40%', right: '-5%', animationDelay: '1.2s' }}>IoT</div>
                <div className="floating-chip" style={{ bottom: '25%', left: '-5%', animationDelay: '2.5s' }}>Business Analytics</div>
                <div className="floating-chip" style={{ bottom: '15%', right: '5%', animationDelay: '3.8s' }}>Data Engineering</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Row */}
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
          <div className="text-center mb-16">
            <h2 className="section-title-global">Choose Your Career Domain</h2>
            <p className="section-subtitle">Future-ready tracks designed for modern technical careers.</p>
          </div>

          <div className="domain-grid">
            {domains.map((domain, i) => (
              <div key={i} className="domain-card">
                <div className="domain-img-wrapper">
                  <img src={domain.img} alt={domain.title} />
                </div>
                <div className="domain-content">
                  <div className="text-accent-blue mb-4">{domain.icon}</div>
                  <h3>{domain.title}</h3>
                  <button className="btn-domain-explore">Explore Domain <ArrowRight size={16} /></button>
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

      {/* Workshop Gallery */}
      <section className="ws-section overflow-hidden">
        <div className="ws-container">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Workshop Experience</h2>
            <p className="section-subtitle">Real moments from our immersive technical programs.</p>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] w-full">
            <div className="flex gap-4 h-full animate-marquee-gallery">
               {[
                 "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
                 "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
                 "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
                 "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
               ].map((img, i) => (
                 <div key={i} className="h-full w-[300px] md:w-[500px] shrink-0 rounded-[30px] overflow-hidden border border-white/10 shadow-xl">
                   <img src={img} className="w-full h-full object-cover" alt="Workshop" />
                 </div>
               ))}
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
            <h2 className="section-title-global">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about University Workshops.</p>
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
            <p className="text-xl text-slate-300 mb-10">Join PHN Technology’s exclusive workshops and dive into hands-on sessions in AI, Robotics & IoT, Data Engineering and Business Analytics. Unlock your innovation potential through real-time mentorship and practical learning.</p>
            <button className="btn-ph-primary px-12 py-5 text-xl">Bring PHN to Your Campus</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityWorkshop;
