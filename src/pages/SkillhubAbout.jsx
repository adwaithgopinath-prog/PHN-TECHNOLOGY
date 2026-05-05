import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Award, Users, GraduationCap, 
  ChevronDown, BookOpen, UserCheck, Briefcase, Sparkles, 
  Target, Eye, Quote, ChevronUp
} from 'lucide-react';
import founderImg from '../assets/founder_ceo.png';
import './SkillhubAbout.css';

const SkillhubAbout = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFaqTab, setActiveFaqTab] = useState('Program Overview');

  const stats = [
    { value: '8L+', label: 'Students Trained' },
    { value: '35+', label: 'Academic Partners' },
    { value: '300+', label: 'Expert Trainers' },
    { value: '5+', label: 'Awards Received' }
  ];

  const networkLogos = [
    { name: 'IIT Madras / Pravartak', placeholder: 'IIT Madras' },
    { name: 'IIT Jammu', placeholder: 'IIT Jammu' },
    { name: 'IIT Patna', placeholder: 'IIT Patna' },
    { name: 'NIT / IIT placeholder', placeholder: 'NIT / IIT' },
    { name: 'PHN Skillhub', placeholder: 'PHN Skillhub' }
  ];

  const differences = [
    {
      title: 'Practical, Project-Based Learning',
      desc: 'Every course is designed around application, not memorization.',
      icon: <Cpu size={24} />
    },
    {
      title: 'Mentorship That Feels Human',
      desc: 'Learners receive guidance from trainers, experts, and practitioners.',
      icon: <UserCheck size={24} />
    },
    {
      title: 'Career-Focused Outcomes',
      desc: 'Programs are structured to support portfolios, interviews, certifications, and confidence.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Flexible Learning Paths',
      desc: 'Learners can choose courses, live webinars, and structured programs based on their goals.',
      icon: <Sparkles size={24} />
    }
  ];

  const numbers = [
    { label: 'Courses & Learning Assets', value: '1,548+' },
    { label: 'Mentor-Led Tracks', value: '5+' },
    { label: 'Learner Community', value: '800K' },
    { label: 'Partners & Institutions', value: '80+' }
  ];

  const testimonials = [
    {
      name: 'Rohini Mehta',
      quote: 'This platform helped me structure my learning and finally feel confident applying my skills to real work.',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Rahul Gupta',
      quote: 'The courses were practical, clear, and mentor-supported. I finally understood how industry projects are built.',
      role: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Adya Reddy',
      quote: 'PHN Skillhub made learning feel achievable. The project-first approach helped me build a stronger portfolio.',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const faqTabs = [
    'Program Overview', 
    'Eligibility & Admissions', 
    'Fees & Payments', 
    'Class Schedule', 
    'Student Support', 
    'Placement Opportunities'
  ];

  const faqs = {
    'Program Overview': [
      { q: 'What is PHN Skillhub?', a: 'PHN Skillhub is a practical, industry-driven learning platform designed to bridge the gap between academic education and real-world employment skills.' },
      { q: 'Who can learn through PHN Skillhub?', a: 'Anyone from students to working professionals who want to upgrade their technical skills or switch careers.' },
      { q: 'Are the courses beginner-friendly?', a: 'Yes, we offer foundational courses for beginners as well as advanced specializations.' },
      { q: 'Will I receive a certificate?', a: 'Yes, every course completion includes an industry-recognized certificate from PHN Technology and our partners.' },
      { q: 'Do courses include projects?', a: 'Every course is project-centric, ensuring you build a portfolio of work while you learn.' },
      { q: 'How do I start learning?', a: 'Simply choose a course from our library, register, and start your learning journey immediately.' }
    ],
    'Eligibility & Admissions': [
      { q: 'What are the eligibility criteria?', a: 'Most programs are open to anyone with a basic understanding of computers. Specific technical tracks may have prerequisites listed on the course page.' },
      { q: 'How do I register for a program?', a: 'You can register directly through the "Start Learning" or "Register" buttons on our website.' }
    ],
    'Fees & Payments': [
      { q: 'What are the payment options?', a: 'We support all major credit/debit cards, UPI, and net banking. EMI options are available for premium certification tracks.' },
      { q: 'Is there a refund policy?', a: 'Refund policies vary by course type. Please refer to the specific terms during enrollment.' }
    ],
    'Class Schedule': [
      { q: 'Are classes live or recorded?', a: 'We offer both. Most certification tracks include live mentor sessions, while individual courses provide self-paced recorded content.' },
      { q: 'Can I access the content anytime?', a: 'Yes, once enrolled, you have lifetime access to the recorded materials and learning assets.' }
    ],
    'Student Support': [
      { q: 'How can I get help during the course?', a: 'You can use the community forum, attend weekly doubt-clearing sessions, or contact our dedicated support team via email.' }
    ],
    'Placement Opportunities': [
      { q: 'Do you provide placement assistance?', a: 'Yes, our career-focused tracks include resume building, portfolio review, and interview preparation to help you land your dream job.' }
    ]
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="skillhub-about-page">
      {/* 1. Hero Section */}
      <section className="sha-hero">
        <div className="sha-hero-bg">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" alt="Students learning" />
          <div className="sha-hero-overlay"></div>
        </div>
        <div className="sha-container sha-hero-content">
          <motion.span 
            className="sha-hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            13+ Years · 8Lakh+ Students Trained
          </motion.span>
          <motion.h1 
            className="sha-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Bridging Education and <br /><span>Real-World Skills</span>
          </motion.h1>
          <motion.p 
            className="sha-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            PHN Skillhub is built to help learners move beyond theory through practical courses, live mentorship, industry projects, and career-focused learning pathways.
          </motion.p>
          <motion.div 
            className="sha-hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/phn-skillhub/courses" className="sha-btn sha-btn-primary">Explore Courses</Link>
            <Link to="/phn-skillhub/courses" className="sha-btn sha-btn-glass">Start Learning</Link>
          </motion.div>
          <motion.div 
            className="sha-hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="trust-chip"><CheckCircle2 size={16} /> Industry-led learning</span>
            <span className="trust-chip"><CheckCircle2 size={16} /> Mentor-guided programs</span>
            <span className="trust-chip"><CheckCircle2 size={16} /> Certification-focused outcomes</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Stats */}
      <section className="sha-stats">
        <div className="sha-container">
          <div className="sha-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="sha-stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Academic & Industry Network */}
      <section className="sha-network">
        <div className="sha-container">
          <div className="sha-section-header">
            <h2>Strong Academic & Industry Network</h2>
            <p>Our learning ecosystem is strengthened by collaborations, institutional partnerships, and industry-aligned program design.</p>
          </div>
          <div className="sha-logo-row">
            {networkLogos.map((logo, idx) => (
              <div key={idx} className="sha-logo-box">
                <span>{logo.placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Story */}
      <section className="sha-story">
        <div className="sha-container">
          <div className="sha-story-grid">
            <div className="sha-story-content">
              <h2>Started With A Simple Idea: <br /><span>Learning Should Lead To Real Skills.</span></h2>
              <p>PHN Skillhub was created to make technical education more practical, accessible, and career-focused. We believe learners should not just watch lessons — they should build, practice, ask questions, receive guidance, and create proof of skill.</p>
              <div className="sha-quote-card">
                <Quote className="quote-icon" />
                <p>“Every learner has potential. The right guidance, environment, and confidence can turn that potential into real achievement.”</p>
                <div className="quote-author">
                  <strong>Dr. Pradip Hanumant Narayankar</strong>
                  <span>Founder, CEO & MD, PHN Technology Pvt. Ltd.</span>
                </div>
              </div>
            </div>
            <div className="sha-story-visual">
              <div className="sha-founder-card">
                <img src={founderImg} alt="Dr. Pradip Hanumant Narayankar" />
                <div className="founder-label">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Makes PHN Skillhub Different */}
      <section className="sha-diff">
        <div className="sha-container">
          <div className="sha-section-header">
            <h2>Why Learners Choose PHN Skillhub</h2>
          </div>
          <div className="sha-diff-grid">
            {differences.map((diff, idx) => (
              <div key={idx} className="sha-diff-card">
                <div className="diff-icon">{diff.icon}</div>
                <h3>{diff.title}</h3>
                <p>{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Built For Every Learner */}
      <section className="sha-learner-stage">
        <div className="sha-container">
          <div className="sha-split-grid">
            <div className="sha-split-visual">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Learning" />
            </div>
            <div className="sha-split-content">
              <span className="sha-eyebrow">Learning for Every Stage</span>
              <h2>Built for Learners at Every Stage</h2>
              <p>Whether someone is just starting, switching domains, preparing for interviews, or upgrading professional skills, PHN Skillhub gives them a structured path to keep moving forward.</p>
              <Link to="/phn-skillhub/courses" className="sha-link">Explore Learning Paths <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Skills You Can Apply */}
      <section className="sha-apply">
        <div className="sha-container">
          <div className="sha-split-grid reverse">
            <div className="sha-split-content">
              <span className="sha-eyebrow">Learning Outcomes</span>
              <h2>Skills You Can Apply, Not Just Learn</h2>
              <p>Our courses focus on real examples, practical workflows, guided projects, and certification-ready outcomes. The goal is simple: help learners build confidence they can use outside the classroom.</p>
              <Link to="/phn-skillhub/courses" className="sha-btn sha-btn-primary">See Courses</Link>
            </div>
            <div className="sha-split-visual">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Practical Skills" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Numbers That Matter */}
      <section className="sha-numbers-band">
        <div className="sha-container">
          <div className="sha-numbers-grid">
            {numbers.map((num, idx) => (
              <div key={idx} className="sha-number-item">
                <h4>{num.value}</h4>
                <p>{num.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Learner Stories */}
      <section className="sha-testimonials">
        <div className="sha-container">
          <div className="sha-section-header">
            <span className="sha-eyebrow">Learner Stories</span>
            <h2>Real People. Real Results.</h2>
            <p>Stories from learners who used PHN Skillhub to build confidence, skills, and career direction.</p>
          </div>
          <div className="sha-testimonials-grid">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="sha-testimonial-card">
                <Quote className="testi-quote-icon" />
                <p className="testi-quote">{testi.quote}</p>
                <div className="testi-profile">
                  <img src={testi.image} alt={testi.name} />
                  <div className="testi-info">
                    <strong>{testi.name}</strong>
                    <span>{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Mission / Vision Section */}
      <section className="sha-mission-vision">
        <div className="sha-container">
          <div className="sha-mv-grid">
            <div className="sha-mv-card mission">
              <Target size={40} className="mv-icon" />
              <h3>Our Mission</h3>
              <p>To make industry-ready education practical, accessible, and outcome-driven for every learner.</p>
            </div>
            <div className="sha-mv-card vision">
              <Eye size={40} className="mv-icon" />
              <h3>Our Vision</h3>
              <p>To become India’s most trusted platform for applied learning, mentorship, and future-ready skill development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="sha-faq">
        <div className="sha-container">
          <div className="sha-section-header">
            <h2>FAQs</h2>
          </div>
          <div className="sha-faq-tabs">
            {faqTabs.map(tab => (
              <button 
                key={tab} 
                className={`faq-tab-btn ${activeFaqTab === tab ? 'active' : ''}`}
                onClick={() => setActiveFaqTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="sha-faq-content">
            {(faqs[activeFaqTab] || faqs['Program Overview']).map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for Cpu icon if missing
const Cpu = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>;

export default SkillhubAbout;
