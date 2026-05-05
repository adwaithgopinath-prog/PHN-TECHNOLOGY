import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, CheckCircle, ArrowRight, ShieldCheck, 
  Users, Award, BookOpen, Globe, Cpu, 
  ChevronRight, Calendar, MapPin, Building2
} from 'lucide-react';
import './WorkshopPage.css';

const WorkshopPage = () => {
  const { type } = useParams(); // 'institute' or 'university'
  const isInstitute = type === 'institute';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    institute: {
      title: "Workshops for IIT, NIT & IIIT",
      subtitle: "Bridging Advanced Research with Practical Industry Execution",
      eyebrow: "CENTER OF EXCELLENCE PROGRAMS",
      desc: "Custom-tailored technical workshops designed for premier national institutes. We focus on high-end robotics, AI architecture, IoT ecosystems, and industrial automation protocols.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
      features: [
        { title: "Advanced Robotics", icon: <Cpu size={24} />, desc: "ROS-based systems, kinematic modeling, and autonomous navigation." },
        { title: "AI & ML Frameworks", icon: <Zap size={24} />, desc: "Edge AI, computer vision, and deep learning for industrial applications." },
        { title: "Industrial IoT", icon: <Globe size={24} />, desc: "Real-time data telemetry, sensor networks, and cloud integration." },
        { title: "Embedded Systems", icon: <Zap size={24} />, desc: "Hardware-level programming and PCB design for smart systems." }
      ]
    },
    university: {
      title: "Workshops for Universities",
      subtitle: "Empowering Next-Gen Innovators with Industry-Ready Skills",
      eyebrow: "SKILL DEVELOPMENT PROGRAMS",
      desc: "Dynamic and interactive workshops for engineering universities and technical colleges. We help students transition from classroom theory to building market-ready technology solutions.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      features: [
        { title: "Robotics Fundamentals", icon: <Cpu size={24} />, desc: "Building and programming mobile robots from scratch." },
        { title: "Full-Stack Development", icon: <Globe size={24} />, desc: "Modern web and mobile app architecture with industry standards." },
        { title: "Cloud Computing", icon: <ShieldCheck size={24} />, desc: "AWS/Azure infrastructure and serverless deployments." },
        { title: "Cybersecurity", icon: <ShieldCheck size={24} />, desc: "Network defense, ethical hacking, and secure coding practices." }
      ]
    }
  };

  const currentContent = content[type] || content.university;

  return (
    <div className="workshop-page">
      {/* Hero Section */}
      <section className="workshop-hero">
        <div className="ws-bg-glow"></div>
        <div className="container-premium ws-hero-inner">
          <motion.div 
            className="ws-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="ws-eyebrow">{currentContent.eyebrow}</span>
            <h1 className="ws-title">{currentContent.title}</h1>
            <p className="ws-subtitle">{currentContent.subtitle}</p>
            <p className="ws-desc">{currentContent.desc}</p>
            <div className="ws-actions">
              <button className="btn-ws-primary">Request Proposal <ArrowRight size={20} /></button>
              <Link to="/contact" className="btn-ws-secondary">Contact Us</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="ws-hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="ws-main-image">
              <img src={currentContent.image} alt={currentContent.title} />
              <div className="ws-image-overlay"></div>
            </div>
            <div className="ws-floating-card">
              <div className="fc-icon"><Award size={24} /></div>
              <div className="fc-text">
                <strong>Certified Training</strong>
                <span>Industry-recognized credentials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="ws-breadcrumbs container-premium">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <Link to="/programs">Programs</Link>
        <ChevronRight size={14} />
        <span>Workshops</span>
      </div>

      {/* Features Grid */}
      <section className="ws-features-section">
        <div className="container-premium">
          <div className="ws-section-header">
            <h2 className="section-title-global">Program Specializations</h2>
            <p className="section-subtitle">Deep-dive modules designed for technical excellence.</p>
          </div>
          
          <div className="ws-features-grid">
            {currentContent.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="ws-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="wf-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="ws-details-section">
        <div className="container-premium">
          <div className="ws-details-grid">
            <div className="ws-details-content">
              <h2 className="section-title-global text-left">Why Partner with PHN?</h2>
              <div className="ws-checklist">
                {[
                  "IIT/NIT Alumni & Industry Expert Trainers",
                  "100% Practical & Project-Based Learning",
                  "State-of-the-art Hardware & Lab Equipment Support",
                  "Joint Certification Opportunities",
                  "Post-Workshop Mentorship & Career Guidance",
                  "Placement & Internship Support for Top Performers"
                ].map((item, i) => (
                  <div key={i} className="ws-check-item">
                    <CheckCircle size={20} className="text-accent-blue" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="ws-stats-side">
              <div className="ws-stat-box">
                <div className="ws-stat-val">2500+</div>
                <div className="ws-stat-lab">Institutes Impacted</div>
              </div>
              <div className="ws-stat-box">
                <div className="ws-stat-val">12+</div>
                <div className="ws-stat-lab">Years in Tech Ed</div>
              </div>
              <div className="ws-stat-box">
                <div className="ws-stat-val">300+</div>
                <div className="ws-stat-lab">Expert Trainers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ws-final-cta">
        <div className="container-premium text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to bring industry-grade learning to your campus?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">Collaborate with PHN Technology to host world-class workshops and establish advanced technology ecosystems.</p>
          <div className="flex gap-4 justify-center">
            <button className="btn-ws-primary">Schedule a Call</button>
            <Link to="/contact" className="btn-ws-secondary">Send Inquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopPage;
