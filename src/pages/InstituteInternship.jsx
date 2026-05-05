import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, PlayCircle, Download, Target, Users, 
  MapPin, Clock, Calendar, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './InternshipsShared.css';

const InstituteInternship = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hrs: 8, min: 45, sec: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hrs, min, sec } = prev;
        if (sec > 0) sec--;
        else {
          sec = 59;
          if (min > 0) min--;
          else {
            min = 59;
            if (hrs > 0) hrs--;
            else {
              hrs = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const campusCards = [
    { 
      title: "AI & Machine Learning Mastery Program - IIT Patna Edition", 
      location: "Patna Center", 
      seats: "Limited 30 seats",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
      badge: "IIT PATNA"
    },
    { 
      title: "Building Smart Ecosystems with Internet of Things - IIT Jammu Edition", 
      location: "Jammu Center", 
      seats: "Limited 30 seats",
      img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop",
      badge: "IIT JAMMU"
    },
    { 
      title: "AI & Machine Learning Mastery Program - NIT Delhi Edition", 
      location: "Delhi Center", 
      seats: "Limited 30 seats",
      img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop",
      badge: "NIT DELHI"
    }
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
    { q: "What programs are offered under PHN Technology’s technical training?", a: "We primarily offer specialized training in AI & Machine Learning and Internet of Things (IoT)." },
    { q: "Who can enroll for these programs?", a: "Students currently enrolled in engineering or technical degrees who want to bridge the gap between theory and industry practice." },
    { q: "Where will the offline training be conducted?", a: "Training is conducted at our Center of Excellence labs in partner institutes like IIT Patna, IIT Jammu, and NIT Delhi." },
    { q: "What is the duration and format of the programs?", a: "Durations vary from 4 to 8 weeks, delivered through intensive offline sessions and hands-on laboratory work." },
    { q: "What kind of projects will I build?", a: "You will work on industry-defined problem statements and develop full-scale prototypes using our advanced lab equipment." },
    { q: "Will I receive certification after completing the course?", a: "Yes, you will receive a certificate jointly recognized by PHN Technology and the respective Center of Excellence." },
    { q: "Who will conduct the sessions?", a: "Sessions are conducted by senior engineers from PHN Technology and visiting researchers from our partner institutes." },
    { q: "What kind of career support will I get?", a: "We provide placement assistance, resume reviews, and direct access to our network of hiring partners." },
    { q: "How do I enroll?", a: "You can apply through our online portal. Shortlisted candidates will be invited for a brief technical assessment." },
    { q: "How do we proceed after enrollment?", a: "Once enrolled, you will receive a joining kit with all schedules, prerequisites, and location details." },
    { q: "Is accommodation provided?", a: "We can assist in finding nearby accommodation, but it is not directly provided by PHN Technology unless specified for a particular batch." }
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
                Industrial Training<br />
                <span className="mc-gradient-text">Internship Program</span>
              </h1>
              <p>
                PHN Technology brings its flagship Industrial Training & Internship Program directly to your campus, transforming students from theory-dependent learners into industry-ready professionals.
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
                  <iframe 
                    src="https://www.youtube.com/embed/7g8hTFcW-4A?autoplay=0&mute=1"
                    title="PHN Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3>Excellence in Action</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Campus & Domain Section */}
      <section className="section-spacing bg-deep">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Choose Your Favorite Campus and Career Domain</h2>
            <div className="divider-glow mx-auto" style={{ width: '100px' }}></div>
          </div>

          <div className="campus-grid">
            {campusCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                className="campus-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="campus-img">
                  <img src={card.img} alt={card.title} />
                  <span className="campus-badge">{card.badge}</span>
                </div>
                <div className="campus-info">
                  <span className="seat-line">{card.seats} - {card.location}</span>
                  <h3>{card.title}</h3>
                  <Link to="/contact" className="btn-premium btn-glass w-full mt-4">Apply Now</Link>
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
            <div className="partner-logo-box">IIT Patna</div>
            <div className="partner-logo-box">IIT Jammu</div>
            <div className="partner-logo-box">NIT Delhi</div>
            <div className="partner-logo-box">IIT Guwahati</div>
            <div className="partner-logo-box">ISRO Registered Space Tutor</div>
            <div className="partner-logo-box">NSDC</div>
            <div className="partner-logo-box">STEM Accredited</div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title-global">Unlock the Top Benefits of Industry-Ready Training</h2>
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

      {/* 7. Final Countdown / CTA Section */}
      <section className="countdown-section">
        <div className="countdown-bg">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Students working" />
        </div>
        <div className="countdown-overlay"></div>
        <div className="container-custom countdown-content">
          <span className="collab-chip">Why Choose Us</span>
          <h2 className="section-title-global text-5xl mb-6">Technology Alone Doesn’t Change the World.<br />Innovative Minds Do.</h2>
          <p className="text-xl text-white/80">Your Course Starts In ....</p>
          
          <div className="countdown-grid">
            <div className="timer-box">
              <span className="timer-val">{timeLeft.days}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
              <span className="timer-val">{timeLeft.hrs}</span>
              <span className="timer-label">Hrs</span>
            </div>
            <div className="timer-box">
              <span className="timer-val">{timeLeft.min}</span>
              <span className="timer-label">Min</span>
            </div>
            <div className="timer-box">
              <span className="timer-val">{timeLeft.sec}</span>
              <span className="timer-label">Sec</span>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-premium btn-primary px-12 py-5 text-xl">Enroll Now</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstituteInternship;
