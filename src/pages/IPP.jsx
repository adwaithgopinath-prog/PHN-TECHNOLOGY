import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, ShieldCheck, Cpu, 
  MonitorPlay, Briefcase, Users, 
  Award, FileText, Zap, PhoneCall, GraduationCap
} from 'lucide-react';
import './IPP.css';

const IPP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '1000+', label: 'Students Trained' },
    { value: '13+', label: 'Years of Industry Exp.' },
    { value: '50%+', label: 'Cost Savings' },
    { value: '100%', label: 'Placement Support' }
  ];

  const pillars = [
    { title: 'Industrial Training Programs', icon: <Briefcase size={28} /> },
    { title: 'Faculty Development Programs', icon: <Users size={28} /> },
    { title: 'CoE Lab Access', icon: <Cpu size={28} /> },
    { title: 'Hackathons & Mentorship', icon: <Zap size={28} /> },
    { title: 'Placement Readiness', icon: <TrendingUp size={28} /> },
    { title: 'NAAC Documentation Engine', icon: <FileText size={28} /> }
  ];

  const domains = [
    { title: 'AI & ML', desc: 'Master machine learning algorithms and build intelligent systems.', color: 'blue' },
    { title: 'Robotics & IoT', desc: 'Design connected devices and automated robotic solutions.', color: 'purple' },
    { title: 'Business Analytics', desc: 'Transform data into strategic business insights.', color: 'orange' },
    { title: 'Data Engineering', desc: 'Architect scalable data pipelines and big data infrastructure.', color: 'cyan' }
  ];

  const pricingRows = [
    { feature: 'Year 1 - Domain Certifications per student', our: '₹1,000', market: '₹3,000' },
    { feature: 'Year 2 - Workshops & Sessions', our: '₹1,000', market: '₹2,000' },
    { feature: 'Year 2 - Industrial Visit', our: '₹500', market: '₹500' },
    { feature: 'Year 3 - Industrial Training Program', our: '₹5,000', market: '₹8,000' },
    { feature: 'Year 4 - Placement Readiness & Support', our: 'Included', market: '₹15,000+' }
  ];

  const benefits = [
    { title: 'Faculty Development Programs' },
    { title: 'Advisory & Guest Lectures' },
    { title: 'Industry Mentorship & Guidance' }
  ];

  const steps = [
    { num: 1, title: '30-Min Strategic Briefing' },
    { num: 2, title: 'Tailored Gap Analysis' },
    { num: 3, title: 'Pilot a Single Cohort' },
    { num: 4, title: 'Scale Institution-Wide' }
  ];

  return (
    <div className="ipp-page">
      {/* 1. Hero */}
      <section className="ipp-hero">
        <div className="ipp-bg-glow"></div>
        <div className="container-premium ipp-hero-grid">
          <motion.div 
            className="ipp-hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="ipp-eyebrow">Applications Open - Institution Partnership Program</span>
            <h1 className="ipp-title">Institution Partnership Program <span>2026</span></h1>
            <p className="ipp-subtitle">
              Empower your institution with industry-integrated programs, cutting-edge domains, and comprehensive support at 50%+ savings.
            </p>
            
            <div className="ipp-hero-ctas">
              <a href="#" className="btn-ipp-primary">
                Download Brochure <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="btn-ipp-secondary">
                <PhoneCall size={18} /> Schedule a Call
              </Link>
            </div>
            
            <div className="ipp-benefits-chips">
              <span className="chip"><CheckCircle size={14}/> Internship Certificate</span>
              <span className="chip"><CheckCircle size={14}/> AI/ML · Robotics · UX/UI · Analytics</span>
              <span className="chip"><CheckCircle size={14}/> Research Paper Support</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="ipp-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="video-card-glass">
              <div className="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/mmULVUOoCMw?autoplay=1&mute=1&loop=1&playlist=mmULVUOoCMw" 
                  title="PHN Technology IPP"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-card-glow"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Partner Logo Strip */}
      <section className="ipp-partners">
        <div className="container-premium text-center">
          <h4 className="partners-title">Academic & Industry Partners</h4>
          <div className="logo-marquee-container">
            <div className="logo-marquee">
              <span>IIT Guwahati</span>
              <span>IIT Jammu</span>
              <span>IIT Patna</span>
              <span>NIT Delhi</span>
              <span>NSDC</span>
              <span>STEM</span>
              {/* Duplicate for infinite loop effect */}
              <span>IIT Guwahati</span>
              <span>IIT Jammu</span>
              <span>IIT Patna</span>
              <span>NIT Delhi</span>
              <span>NSDC</span>
              <span>STEM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Stats */}
      <section className="ipp-stats-section">
        <div className="container-premium">
          <div className="ipp-stats-grid">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="ipp-stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Six Integrated Pillars */}
      <section className="ipp-pillars-section">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">Six Integrated Pillars</h2>
            <p className="section-subtitle">A comprehensive framework designed to elevate institutional excellence.</p>
          </div>
          
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pick Your Career Domain */}
      <section id="domains" className="ipp-domains-section">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">Pick Your Career Domain</h2>
            <p className="section-subtitle">Cutting-edge technologies shaping the future of work.</p>
          </div>
          
          <div className="domains-grid">
            {domains.map((domain, idx) => (
              <motion.div 
                key={idx} 
                className={`domain-card theme-${domain.color}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="domain-card-inner">
                  <h3>{domain.title}</h3>
                  <p>{domain.desc}</p>
                  <div className="domain-glow"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual Value (Institutional Excellence / Career Transformation) */}
      <section className="ipp-dual-value-section">
        <div className="container-premium">
          <div className="dual-value-grid">
            <motion.div 
              className="dv-card for-institutions"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="dv-icon"><Award size={40} /></div>
              <h3>For Institutions</h3>
              <ul>
                <li><CheckCircle size={18}/> Enhanced NAAC & NBA accreditation scores</li>
                <li><CheckCircle size={18}/> Industry partnerships with IITs, NITs, IIITs</li>
                <li><CheckCircle size={18}/> Free faculty development programs</li>
                <li><CheckCircle size={18}/> Reduced operational costs by 50%+</li>
                <li><CheckCircle size={18}/> Improved student placement outcomes</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="dv-card for-students"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="dv-icon"><GraduationCap size={40} /></div>
              <h3>For Students</h3>
              <ul>
                <li><CheckCircle size={18}/> Industry-recognized certifications</li>
                <li><CheckCircle size={18}/> Hands-on training in cutting-edge domains</li>
                <li><CheckCircle size={18}/> Mentorship from industry experts</li>
                <li><CheckCircle size={18}/> Resume building & interview preparation</li>
                <li><CheckCircle size={18}/> Placement readiness</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Structured Value / Pricing */}
      <section className="ipp-pricing-section">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">Structured Value. <span className="text-accent-blue">50%+ Savings.</span></h2>
            <p className="section-subtitle">Transparent investment for maximum institutional ROI.</p>
          </div>
          
          <div className="pricing-table-wrapper">
            <table className="ipp-pricing-table">
              <thead>
                <tr>
                  <th>What’s Included</th>
                  <th className="highlight-col">Our Price</th>
                  <th>Market Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, idx) => (
                  <tr key={idx} className={idx === pricingRows.length - 1 ? 'total-row' : ''}>
                    <td>{row.feature}</td>
                    <td className="highlight-col">{row.our}</td>
                    <td className="strike-through">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pricing-highlight">
              <h3>Save ₹17,500+ Per Student</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-ipp-primary">Get Started Today <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      {/* 8. Added Benefits */}
      <section className="ipp-added-benefits">
        <div className="container-premium">
          <h3 className="text-center text-2xl font-bold mb-10 text-white">Value-Added Institutional Benefits</h3>
          <div className="added-benefits-grid">
            {benefits.map((ben, idx) => (
              <motion.div 
                key={idx} 
                className="added-benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4>{ben.title}</h4>
                <div className="free-badge">FREE</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. How To Get Started */}
      <section className="ipp-steps-section">
        <div className="container-premium">
          <div className="section-header-center">
            <h2 className="section-title-global">How To Get Started</h2>
          </div>
          
          <div className="steps-timeline-grid">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="step-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="ipp-final-cta">
        <div className="ipp-bg-glow-alt"></div>
        <div className="container-premium text-center relative z-10">
          <h2 className="section-title-global text-5xl">The Future Belongs to Data-Driven Institutions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Transform your institution into an industry-ready hub. Join 12+ institutions already benefiting from our comprehensive partnership program.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-ipp-primary">Schedule a Call <ArrowRight size={18}/></Link>
            <button className="btn-ipp-secondary" onClick={() => document.getElementById('domains').scrollIntoView({behavior: 'smooth'})}>
              View All Domains
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fallback for missing icon
const TrendingUp = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;

export default IPP;
