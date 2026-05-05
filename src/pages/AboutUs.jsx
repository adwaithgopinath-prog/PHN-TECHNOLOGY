import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Quote, Award, 
  Users, Building2, GraduationCap, ArrowRight,
  CheckCircle2, Globe, Sparkles, TrendingUp,
  Cpu, Rocket, Star, Layout
} from 'lucide-react';
import founderImg from '../assets/founder_ceo.png';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: '2013', text: 'PHN Technology was founded with a mission to redefine technical education and empower students through hands-on learning.' },
    { year: '2015', text: 'Expanded workshops and training programs across Maharashtra, making STEM education more accessible to students.' },
    { year: '2018', text: 'Incorporated as PHN Technology Pvt. Ltd., marking structured growth and large-scale impact.' },
    { year: '2021', text: 'Launched Centers of Excellence & Foundation Labs, transforming education with AI, IoT, and robotics-driven learning.' },
    { year: '2023', text: 'Strengthened partnerships with IITs, NITs, and defense PSUs, scaling industry collaborations for student advancement.' },
    { year: '2024', text: 'Established global collaborations and strategic alliances, expanding PHN Technology globally.' }
  ];

  return (
    <div className="about-page">
      {/* 1. Premium Hero Section */}
      <section className="about-hero-premium">
        <div className="hero-bg-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Building" 
            className="hero-bg-img"
          />
          <div className="hero-overlay-premium"></div>
          <div className="hero-glow-layer"></div>
          <div className="hero-circuit-overlay"></div>
        </div>
        
        <div className="container-ab hero-content-premium">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-panel"
          >
            <span className="hero-eyebrow-premium">ABOUT PHN TECHNOLOGY</span>
            <h1 className="hero-title-premium">PHN Technology</h1>
            <div className="hero-title-divider"></div>
            <h2 className="hero-headline-premium">
              Building Future-Ready Learning Through Robotics, AI, and Industry Innovation
            </h2>
            <p className="hero-intro-premium">
              PHN Technology bridges the gap between traditional education and industry needs through hands-on STEM learning, robotics labs, AI/IoT training, and institutional partnerships across India.
            </p>

            <div className="credibility-chips">
              <div className="cred-chip-v2">
                <span className="chip-val">12+ Years</span>
                <span className="chip-lab">Expertise</span>
              </div>
              <div className="cred-chip-v2">
                <span className="chip-val">2500+</span>
                <span className="chip-lab">Institutions</span>
              </div>
              <div className="cred-chip-v2">
                <span className="chip-val">8Lac+</span>
                <span className="chip-lab">Students Trained</span>
              </div>
              <div className="cred-chip-v2">
                <span className="chip-val">IIT/NIT</span>
                <span className="chip-lab">Collaborations</span>
              </div>
            </div>

            <div className="hero-ctas-premium">
              <button 
                className="btn-premium-ab btn-solid"
                onClick={() => document.getElementById('milestones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Journey <ArrowRight size={20} />
              </button>
              <button 
                className="btn-premium-ab btn-glass-v2"
                onClick={() => window.location.href = '/partners'}
              >
                View Collaborations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview Section */}
      <section className="who-we-are">
        <div className="container-ab">
          <div className="overview-row">
            <motion.div 
              className="overview-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="sec-h2-ab">Who We Are</h2>
              <p className="intro-p-ab">
                <strong>PHN Technology</strong> is revolutionizing education by delivering comprehensive, industry-driven learning solutions. 
                Founded by <strong>Mr. Pradip H. Narayankar</strong>, PHN Technology was established to bridge the gap between traditional education and industry requirements.
              </p>
              <p className="intro-p-ab">
                With 12+ years of expertise, we have collaborated with 2500+ institutions across India, integrating STEM, robotics, AI, and IoT into academic frameworks. 
                Our programs foster creativity and problem-solving, helping students transition seamlessly into tech-driven careers.
              </p>
              <div className="overview-icons">
                <div className="o-icon-item"><Cpu size={32} /> <span>Robotics</span></div>
                <div className="o-icon-item"><Sparkles size={32} /> <span>AI Vision</span></div>
                <div className="o-icon-item"><Globe size={32} /> <span>IoT</span></div>
                <div className="o-icon-item"><Users size={32} /> <span>Partnerships</span></div>
              </div>
            </motion.div>

            <motion.div 
              className="impact-dashboard"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="dash-card">
                <div className="dash-inner">
                  <div className="dash-stat">
                    <h3>2500+</h3>
                    <p>Associated Schools</p>
                  </div>
                  <div className="dash-stat">
                    <h3>8Lac+</h3>
                    <p>Trained Students</p>
                  </div>
                  <div className="dash-stat">
                    <h3>12+</h3>
                    <p>Years in Innovation</p>
                  </div>
                  <div className="dash-stat">
                    <h3>300+</h3>
                    <p>Expert Trainers</p>
                  </div>
                </div>
                <div className="dash-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="vision-mission-ab">
        <div className="container-ab">
          <div className="sec-header-ab">
            <h2 className="sec-h2-ab">Purpose That Drives Us</h2>
          </div>
          <div className="vm-grid">
            <motion.div 
              className="vm-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="vm-visual v-img">
                <div className="vm-icon-box"><Eye size={32} /></div>
              </div>
              <div className="vm-content">
                <h3>Our Vision</h3>
                <p>To nurture future leaders and innovators by providing hands-on, entrepreneurial technical education and empowering India’s youth while expanding our impact on a global scale.</p>
              </div>
              <div className="vm-glow blue"></div>
            </motion.div>

            <motion.div 
              className="vm-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="vm-visual m-img">
                <div className="vm-icon-box"><Target size={32} /></div>
              </div>
              <div className="vm-content">
                <h3>Our Mission</h3>
                <p>To make technical education practical and accessible, empowering student innovation and leadership across India and beyond, fostering globally competitive technologists.</p>
              </div>
              <div className="vm-glow gold"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Founder Story Section */}
      <section className="founder-story">
        <div className="container-ab">
          <div className="founder-row">
            <motion.div 
              className="founder-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="f-img-frame">
                <img 
                  src={founderImg} 
                  alt="Mr. Pradip H. Narayankar" 
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'; 
                  }}
                />
                <div className="f-accent"></div>
              </div>
            </motion.div>

            <motion.div 
              className="founder-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="quote-box">
                <Quote size={48} className="quote-icon" />
                <blockquote>
                  “In life, you don’t get what you deserve, you get what you’re willing to work for. And if you have the vision to back it, you can change everything.”
                </blockquote>
              </div>
              
              <div className="story-text">
                <p>PHN Technology began as an idea—one driven by the vision to redefine how students engage with technology. From the start, we believed that education should go beyond textbooks, offering an immersive experience that fosters curiosity.</p>
                <p>The journey was not without challenges. Encouraging institutions to rethink traditional models and assembling a passionate team were crucial steps in shaping our mission.</p>
                <p>Over time, PHN has evolved into a dynamic solution provider, expanding its impact from local classrooms to global conversations, empowering students to build, create, and innovate.</p>
              </div>

              <div className="founder-sign">
                <div className="sign-line"></div>
                <h4>Mr. Pradip H. Narayankar</h4>
                <p className="founder-role">Founder, CEO & MD | PHN Technology Private Limited</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Milestones & Impact Section */}
      <section id="milestones" className="milestones-ab">
        <div className="container-ab">
          <div className="sec-header-ab">
            <h2 className="sec-h2-ab">Our Milestones</h2>
          </div>

          <div className="milestone-grid">
            <div className="timeline-col">
              <div className="t-line"></div>
              {milestones.map((m, i) => (
                <motion.div 
                  key={i} 
                  className="t-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="t-dot"></div>
                  <div className="t-year">{m.year}</div>
                  <div className="t-card">
                    <p>{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="stats-col-ab">
              <div className="stat-p-card">
                <Award size={40} className="stat-icon-ab" />
                <div className="stat-info-ab">
                  <h4>5+</h4>
                  <p>Awards Received</p>
                </div>
              </div>
              <div className="stat-p-card">
                <Users size={40} className="stat-icon-ab" />
                <div className="stat-info-ab">
                  <h4>300+</h4>
                  <p>Expert Trainers</p>
                </div>
              </div>
              <div className="stat-p-card">
                <Building2 size={40} className="stat-icon-ab" />
                <div className="stat-info-ab">
                  <h4>2500+</h4>
                  <p>Schools Associated</p>
                </div>
              </div>
              <div className="stat-p-card">
                <GraduationCap size={40} className="stat-icon-ab" />
                <div className="stat-info-ab">
                  <h4>8Lac+</h4>
                  <p>Students Trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Awards Section */}
      <section className="awards-ab">
        <div className="container-ab">
          <div className="sec-header-ab text-center">
            <h2 className="sec-h2-ab">Awards & Recognition</h2>
          </div>
          <div className="awards-grid-ab">
            {[
              { title: 'International Glory Award', img: 'https://images.unsplash.com/photo-1578353121590-29c490a15e10?auto=format&fit=crop&q=80&w=400' },
              { title: 'Robotics Startup Award', img: 'https://images.unsplash.com/photo-1578353121590-29c490a15e10?auto=format&fit=crop&q=80&w=400' },
              { title: 'Udyog Bhushan Puraskar', img: 'https://images.unsplash.com/photo-1578353121590-29c490a15e10?auto=format&fit=crop&q=80&w=400' }
            ].map((award, i) => (
              <motion.div 
                key={i} 
                className="award-card-ab"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="award-img">
                  <img src={award.img} alt={award.title} />
                  <div className="award-shine"></div>
                </div>
                <div className="award-name-ab">
                  <div className="laurel"><Star size={16} /></div>
                  <h4>{award.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why PHN Matters */}
      <section className="why-matters-ab">
        <div className="container-ab">
          <div className="sec-header-ab text-center">
            <h2 className="sec-h2-ab">Why PHN Matters</h2>
          </div>
          <div className="matters-grid-ab">
            {[
              { icon: <TrendingUp size={24}/>, title: 'Bridges Education & Industry', text: 'Closing the gap with practical skills.' },
              { icon: <Cpu size={24}/>, title: 'Practical Technology Skills', text: 'Hands-on learning for job readiness.' },
              { icon: <Rocket size={24}/>, title: 'Hands-on Innovation Labs', text: 'Creating space for creativity.' },
              { icon: <Users size={24}/>, title: 'Connects Students to Mentors', text: 'Expert guidance for growth.' },
              { icon: <Layout size={24}/>, title: 'Scalable Solutions', text: 'Helping institutions grow efficiently.' },
              { icon: <Sparkles size={24}/>, title: 'Future-Ready Learning', text: 'Preparing for the jobs of tomorrow.' }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                className="matter-card-ab"
                whileHover={{ backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
              >
                <div className="matter-icon-ab">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="about-cta">
        <div className="container-ab">
          <motion.div 
            className="cta-card-ab"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-h2-ab">Let’s Build the Future of Practical Learning</h2>
            <p className="cta-p-ab">Partner with PHN Technology to bring robotics, AI, IoT, and industry-ready education to your institution.</p>
            <div className="cta-btns-ab">
              <button className="btn-ab-primary">Partner With PHN <ArrowRight size={18} /></button>
              <button className="btn-ab-outline">Explore Programs</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
