import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Play, Download, Calendar, Clock, 
  Award, Briefcase, TrendingUp, Cpu, MapPin, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkillhubTrending.css';

const SkillhubTrending = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 0,
      title: "ML Foundations for Edge",
      label: "MOD 01-02",
      meta: "Sessions 1-2 · 6 Hours",
      bullets: [
        "Core ML concepts for embedded AI perspective",
        "Understanding memory, latency, and constrained deployment",
        "What makes Edge AI different from cloud ML",
        "Environment setup and project orientation"
      ]
    },
    {
      id: 1,
      title: "Sensor Data Engineering",
      label: "MOD 03-05",
      meta: "Sessions 3-5 · 9 Hours",
      bullets: [
        "Sensor physics: accelerometers, microphones, temperature",
        "Signal sampling: aliasing, Nyquist, anti-aliasing filters",
        "Feature engineering: time-domain vs spectral (FFT, MFCC)",
        "Data pipeline design: windowing, labeling, training datasets",
        "Exposure to constrained TinyML environments"
      ]
    },
    {
      id: 2,
      title: "Model Training for Edge",
      label: "MOD 06-09",
      meta: "Sessions 6-9 · 12 Hours",
      bullets: [
        "Training with Edge Impulse & TinyML pipelines",
        "Model evaluation: confusion metrics, F1-score",
        "Classification on simulated sensor data",
        "Hyperparameter tuning for constrained virtual environments"
      ]
    },
    {
      id: 3,
      title: "Edge Deployment & Optimisation",
      label: "MOD 10-12",
      meta: "Sessions 10-12 · 9 Hours",
      bullets: [
        "Quantization: float32 → int8, pruning, knowledge distillation",
        "TensorFlow Lite for Microcontrollers deployment workflow",
        "On-device inference: latency, memory profiling",
        "Robustness: domain shift, dataset drift handling"
      ]
    },
    {
      id: 4,
      title: "Integration & Systems Thinking",
      label: "MOD 13-15",
      meta: "Sessions 13-15 · 9 Hours",
      bullets: [
        "Serial communication: transmitting inference outputs",
        "Systems integration: interfacing edge AI devices",
        "Introduction to ROS",
        "Use-case exploration: industrial and consumer applications",
        "Capstone sprint: integrate, deploy, and validate"
      ]
    },
    {
      id: 5,
      title: "Capstone Presentation",
      label: "SESSION 16",
      meta: "Live Demo · Expert Feedback",
      bullets: [
        "Live demo of deployed Edge AI system",
        "GitHub documentation of full pipeline",
        "Interview preparation with IIT Madras team",
        "Expert feedback & portfolio review"
      ]
    }
  ];

  return (
    <div className="sh-trending-page">
      
      {/* 1. Hero Section */}
      <section className="sht-hero">
        <div className="container-premium sht-hero-grid">
          <div className="sht-hero-content">
            <div className="sht-hero-badge">Professional Certificate</div>
            <h1>Edge AI ML And IoT System</h1>
            <p className="sht-subtitle">First Virtual IoT Access for high-fidelity simulations.</p>
            
            <div className="sht-hero-stats">
              <div className="stat-pill"><Clock size={16}/> 60 Live Hours</div>
              <div className="stat-pill"><Calendar size={16}/> 16 Sessions</div>
              <div className="stat-pill"><Calendar size={16}/> 4 Months</div>
            </div>

            <div className="sht-hero-ctas">
              <Link to="/contact" className="btn-premium btn-primary">Apply for Cohort 1</Link>
              <button className="btn-premium btn-outline-white">
                <Download size={18}/> Download Brochure
              </button>
            </div>
          </div>
          <div className="sht-hero-visual">
            <div className="sht-glass-card">
              <img src="https://placehold.co/600x400/111/fff?text=Edge+AI+Pipeline+Graphic" alt="Edge AI Graphic" className="rounded-lg w-full"/>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Logo Strip */}
      <section className="sht-logo-strip">
        <div className="container-premium text-center">
          <p className="eyebrow">Graduates hired at</p>
          <div className="sht-logos">
            <span>NVIDIA</span>
            <span>Qualcomm</span>
            <span>Google</span>
            <span>Intel</span>
            <span>IIT</span>
            <span>Tata</span>
            <span>Tesla</span>
          </div>
        </div>
      </section>

      {/* 3. About Program */}
      <section className="sht-section container-premium">
        <div className="sht-about-grid">
          <div className="sht-about-text">
            <h2>Mastering the Future of Edge Intelligence</h2>
            <p>The Professional Certification in Edge AI, ML and IoT Systems is a flagship initiative by IIT Pravartak Madras and PHN Technology. Participants gain hands-on experience through high-fidelity virtual simulations, learning to engineer models for constrained environments.</p>
          </div>
          <div className="sht-about-img">
            <img src="https://placehold.co/500x300/1e293b/ffffff?text=IIT+Pravartak+Technology+Foundation" alt="IIT Pravartak" />
          </div>
        </div>
      </section>

      {/* 4. Instructor Section */}
      <section className="sht-section sht-bg-alt">
        <div className="container-premium">
          <div className="section-header text-center">
            <h2>Built by Researchers. Delivered by Practitioners.</h2>
          </div>
          <div className="sht-instructor-grid">
            <div className="instructor-card">
              <div className="inst-avatar">BS</div>
              <h3>Prof. Babji Srinivasan</h3>
              <p className="inst-role">Professor, IIT Madras</p>
              <div className="inst-tags">
                <span>190+ Papers</span>
                <span>₹250M Funding</span>
                <span>27 Patents</span>
                <span>2300+ Citations</span>
              </div>
            </div>
            <div className="instructor-card">
              <div className="inst-avatar">RS</div>
              <h3>Dr. Ramji Srinivasan</h3>
              <p className="inst-role">Former AI Lead, Qualcomm</p>
              <div className="inst-tags">
                <span>23+ Yrs Leadership</span>
                <span>Patents</span>
                <span>Ex-IIT Guwahati</span>
                <span>Global Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curriculum Interactive */}
      <section className="sht-section container-premium">
        <div className="section-header">
          <h2>16 Sessions. 5 Modules. One Complete Stack.</h2>
        </div>
        <div className="sht-curriculum-container">
          <div className="sht-curr-sidebar">
            {modules.map((mod, idx) => (
              <button 
                key={mod.id} 
                className={`sht-curr-tab ${activeModule === idx ? 'active' : ''}`}
                onClick={() => setActiveModule(idx)}
              >
                <span className="tab-label">{mod.label}</span>
                <span className="tab-title">{mod.title}</span>
              </button>
            ))}
          </div>
          <div className="sht-curr-content">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeModule}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="curr-panel-inner"
              >
                <div className="curr-panel-header">
                  <h3>{modules[activeModule].title}</h3>
                  <p className="curr-meta">{modules[activeModule].meta}</p>
                </div>
                <ul className="curr-bullets">
                  {modules[activeModule].bullets.map((bullet, i) => (
                    <li key={i}><CheckCircle size={18} className="text-blue-400"/> {bullet}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. Live Case Studies */}
      <section className="sht-section sht-bg-alt">
        <div className="container-premium">
          <div className="section-header text-center">
            <h2>Real Systems. Not Hypothetical Examples.</h2>
          </div>
          <div className="sht-case-grid">
            <div className="case-card">
              <div className="case-img"><Cpu size={48} className="text-blue-400"/></div>
              <h3>Washer Prediction on Tiny ML Systems</h3>
            </div>
            <div className="case-card">
              <div className="case-img"><Play size={48} className="text-purple-400"/></div>
              <h3>Non-voice Audio Classification on Edge Devices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Audience & Outcomes */}
      <section className="sht-section container-premium">
        <div className="sht-dual-grid">
          <div className="audience-section">
            <h2>Who is this Course For?</h2>
            <div className="audience-cards">
              <div className="aud-card">
                <h4>Professional Experience</h4>
                <p>Minimum 2+ years of experience ideal for embedded systems engineers, IoT developers, ML engineers, and firmware developers.</p>
              </div>
              <div className="aud-card">
                <h4>Programming Skills</h4>
                <p>Proficiency in Python and basic understanding of C/C++.</p>
              </div>
              <div className="aud-card">
                <h4>Math Foundations</h4>
                <p>Basic knowledge of linear algebra, calculus, and statistics.</p>
              </div>
              <div className="aud-card">
                <h4>Academic Background</h4>
                <p>B.Tech/M.Tech/B.Sc/M.Sc in ECE, CSE, EEE, or related fields.</p>
              </div>
            </div>
          </div>
          
          <div className="outcomes-section">
            <h2>Capstone Deliverable</h2>
            <div className="sht-outcome-list">
              <div className="out-item"><CheckCircle size={20}/> Fully Functional Edge AI System</div>
              <div className="out-item"><CheckCircle size={20}/> Documented GitHub Pipeline</div>
              <div className="out-item"><CheckCircle size={20}/> IIT Pravartak Certificate</div>
              <div className="out-item"><CheckCircle size={20}/> Interview-ready Portfolio</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Market & Career */}
      <section className="sht-section sht-bg-alt">
        <div className="container-premium">
          <div className="section-header text-center">
            <h2>Edge AI is the Fastest Growing Tech Specialization</h2>
          </div>
          <div className="sht-stats-grid">
            <div className="stat-box"><h3>₹25L</h3><p>Max Salary</p></div>
            <div className="stat-box"><h3>3x</h3><p>Interview Score Multiplier</p></div>
            <div className="stat-box"><h3>82M</h3><p>New AIoT Jobs Globally</p></div>
            <div className="stat-box"><h3>↑72%</h3><p>Edge AI Job Growth</p></div>
          </div>
          
          <div className="sht-career-box mt-16">
            <div className="text-center mb-8">
              <h2>From ₹6-8 LPA to ₹14-22 LPA in 12 Months</h2>
            </div>
            <div className="salary-bars">
              <div className="s-bar-row">
                <span className="role">Edge AI Engineer</span>
                <div className="bar-wrapper"><div className="bar fill-1" style={{width: '90%'}}>₹18-25L</div></div>
              </div>
              <div className="s-bar-row">
                <span className="role">Embedded ML Dev</span>
                <div className="bar-wrapper"><div className="bar fill-2" style={{width: '75%'}}>₹14-18L</div></div>
              </div>
              <div className="s-bar-row">
                <span className="role">ML Systems Eng.</span>
                <div className="bar-wrapper"><div className="bar fill-3" style={{width: '80%'}}>₹15-20L</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Different */}
      <section className="sht-section container-premium text-center">
        <h2>8 Reasons This Programme is Different</h2>
        <div className="sht-reasons-grid mt-12">
          {["IIT-Backed Faculty", "Mentor-Ready Resume", "Capstone Portfolio", "Real Systems Focus", "Portfolio Artifact", "Weekend Only", "Interview Ready", "First Virtual IoT Access"].map((reason, i) => (
            <div key={i} className="reason-card">
              <span className="r-num">0{i+1}</span>
              <h4>{reason}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Pricing & Steps */}
      <section className="sht-section sht-bg-pricing">
        <div className="container-premium sht-pricing-layout">
          <div className="sht-pricing-info">
            <h2>Built For Ambitious Professionals Ready To Grow</h2>
            <ul className="pricing-bullets">
              <li><CheckCircle size={20}/> Learn from IIT professors & industry leaders</li>
              <li><CheckCircle size={20}/> Build real-world projects</li>
              <li><CheckCircle size={20}/> Exclusive 4-month program workshop</li>
              <li><CheckCircle size={20}/> Certificate of completion</li>
            </ul>
            
            <div className="sht-steps mt-12">
              <h3>3 Steps to Secure Your Seat</h3>
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-text">Apply Online</div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-text">Pay Reserve Amount</div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-text">Confirmation & Onboarding</div>
              </div>
            </div>
          </div>
          
          <div className="sht-pricing-card">
            <h3>Start Learning Today</h3>
            <div className="price-block">
              <span className="new-price">₹59,000</span>
              <span className="old-price">₹75,000</span>
            </div>
            <div className="payment-terms">
              One-time investment: ₹59,000
            </div>
            
            <div className="includes-list">
              <p>Includes:</p>
              <ul>
                <li><CheckCircle size={16}/> Live sessions</li>
                <li><CheckCircle size={16}/> Capstone project</li>
                <li><CheckCircle size={16}/> Certificate</li>
                <li><CheckCircle size={16}/> Portfolio support</li>
              </ul>
            </div>
            
            <Link to="/contact" className="btn-premium btn-primary w-full text-center py-4 text-lg">
              Pay ₹5,000 Now
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="sht-final-cta">
        <div className="container-premium text-center">
          <h2>100 Seats. One Cohort. June 5, 2026.</h2>
          <div className="sht-final-buttons">
            <Link to="/contact" className="btn-premium btn-primary">Apply for Cohort 1</Link>
            <button className="btn-premium btn-outline-white"><Download size={18}/> Download Brochure</button>
            <Link to="/phn-skillhub/courses?tab=webinars" className="btn-premium btn-secondary">Join Free Webinar</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SkillhubTrending;
