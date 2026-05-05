import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Play, Users, Award, MonitorPlay, Video, Plus, Minus, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Skillhub.css';

// Data
const coursesData = [
  {
    id: 1,
    title: "Fundamentals Of Supply Chain Management",
    category: "Programming",
    level: "Beginner",
    price: "799",
    oldPrice: "999",
    bullets: ["AI/ML fundamentals", "Practical-based learning", "100+ students", "Certification on Completion"]
  },
  {
    id: 2,
    title: "Basics Of Product Management",
    category: "Programming",
    level: "Beginner",
    price: "799",
    oldPrice: "999",
    bullets: ["Client interaction", "Project-based learning", "200+ students", "Certification on Completion"]
  },
  {
    id: 3,
    title: "Fundamentals Of Data Analytics With Excel and SQL",
    category: "Data Science",
    level: "Beginner",
    price: "699",
    oldPrice: "799",
    bullets: ["Hands-on live instruction", "Practical-based learning", "250+ students", "Certification on Completion"]
  }
];

const testimonialsData = [
  {
    id: 1,
    name: "Rohini Mehta",
    role: "Data Scientist at Meta",
    quote: "I Landed a Data Scientist role at Meta within 3 months.",
    stars: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Full Stack Developer at Razorpay",
    quote: "Went from zero coding to a ₹18 LPA offer at Razorpay.",
    stars: 5
  },
  {
    id: 3,
    name: "Adya Reddy",
    role: "Designer at Swiggy",
    quote: "Got promoted to Lead Designer after completing the UX Course.",
    stars: 5
  }
];

const faqsData = [
  {
    category: "Program Overview",
    items: [
      { q: "What is the program duration?", a: "The duration varies by course, typically ranging from 4 to 12 weeks of structured learning." },
      { q: "What mode of delivery does the program use?", a: "Programs are delivered 100% online through a mix of recorded sessions and live instructor-led webinars." },
      { q: "Will I receive a certificate upon completion?", a: "Yes, all successful graduates receive an industry-recognized certificate from PHN Skillhub and our partners." }
    ]
  },
  { category: "Eligibility & Admissions", items: [{ q: "Who can apply?", a: "Anyone with a passion for learning! Specific courses may have recommended prerequisites." }] },
  { category: "Fees & Payments", items: [{ q: "Are there EMI options?", a: "Yes, we offer flexible EMI options for select comprehensive programs." }] },
  { category: "Class Schedule", items: [{ q: "Are live classes mandatory?", a: "Live classes are highly recommended, but recordings are available if you miss one." }] }
];

const Skillhub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeFaqTab, setActiveFaqTab] = useState('Program Overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const filters = ['All', 'Programming', 'Data Science', 'Web Development'];
  
  const filteredCourses = activeFilter === 'All' 
    ? coursesData 
    : coursesData.filter(c => c.category === activeFilter);

  const activeFaqCategory = faqsData.find(f => f.category === activeFaqTab) || faqsData[0];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="skillhub-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="sh-hero-section relative">
        <div className="sh-hero-bg">
          <div className="sh-hero-glow glow-1"></div>
          <div className="sh-hero-glow glow-2"></div>
        </div>
        <div className="container-premium relative z-10 sh-hero-grid">
          <div className="sh-hero-content">
            <h1 className="hero-title-global">
              India’s First Virtual IoT Lab — Taught Live by <span className="text-gradient">IIT Madras Professors.</span>
            </h1>
            <p className="body-text-global">
              Designed for working professionals with 2+ years of experience who are ready to move beyond their current role — IIT Madras faculty guide you through the complete Edge AI, ML & IoT Systems pipeline to help you upgrade your skills and accelerate your career.
            </p>
            <div className="sh-hero-ctas">
              <Link to="/contact" className="btn-premium btn-primary">Register Now</Link>
              <a href="#courses" className="btn-premium btn-secondary">Learn More</a>
            </div>
          </div>
          
          <div className="sh-hero-visual">
            <div className="mentor-card-stack">
              <div className="mentor-card mentor-card-1">
                <div className="mentor-avatar bg-blue-500/20"><Users size={24} className="text-blue-400"/></div>
                <div className="mentor-info">
                  <h4>Prof. Babji Srinivasan</h4>
                  <p>IIT Madras Faculty</p>
                </div>
              </div>
              <div className="mentor-card mentor-card-main">
                <div className="mentor-badge">Premium Feature</div>
                <h3>Next-gen AI & IoT learning experience in India</h3>
                <div className="sh-hero-dots"><span></span><span></span><span></span></div>
              </div>
              <div className="mentor-card mentor-card-2">
                <div className="mentor-avatar bg-purple-500/20"><Users size={24} className="text-purple-400"/></div>
                <div className="mentor-info">
                  <h4>Dr. Ramji Srinivasan</h4>
                  <p>IoT Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partner Logo Strip */}
      <section className="sh-partner-strip">
        <div className="container-premium">
          <div className="sh-partner-logos">
            <div className="partner-logo">IIT Madras</div>
            <div className="partner-logo">IIT Jammu</div>
            <div className="partner-logo">IIT Patna</div>
            <div className="partner-logo">NIT Rourkela</div>
            <div className="partner-logo text-white font-bold">PHN Skillhub</div>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Path To Mastery */}
      <section id="courses" className="sh-section container-premium">
        <div className="section-header text-center">
          <h2>Choose Your Path To Mastery</h2>
          <p>Discover a wide range of industry-aligned programs designed to advance your career.</p>
        </div>

        <div className="sh-filter-chips">
          {filters.map(f => (
            <button 
              key={f} 
              className={`sh-filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="sh-courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="sh-course-card">
              <div className="course-card-top">
                <span className="course-badge">{course.category}</span>
                <span className="course-level">{course.level}</span>
              </div>
              <h3>{course.title}</h3>
              <ul className="course-bullets">
                {course.bullets.map((b, i) => (
                  <li key={i}><CheckCircle size={16} className="text-green-400" /> {b}</li>
                ))}
              </ul>
              <div className="course-card-bottom">
                <div className="course-price">
                  <span className="current-price">₹{course.price}</span>
                  <span className="old-price">₹{course.oldPrice}</span>
                </div>
                <button className="btn-view-course">View Course <ChevronRight size={16} /></button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 text-white/50">No courses found for this category.</div>
        )}

        <div className="text-center mt-12">
          <button className="btn-premium btn-secondary">View All Courses</button>
        </div>
      </section>

      {/* 4. Learning Path Band */}
      <section className="sh-learning-path-band">
        <div className="container-premium">
          <div className="learning-path-grid">
            <div className="learning-path-content">
              <h2>Choose your learning path based on your goal</h2>
              <p>Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.</p>
              <button className="btn-premium btn-primary mt-6">Explore</button>
            </div>
            <div className="learning-path-cards">
              <div className="path-card">
                <div className="path-icon"><MonitorPlay size={32} /></div>
                <h3>LMS Courses</h3>
                <p className="path-subtitle">Best for beginners & flexible learners</p>
                <ul>
                  <li>Learn anytime, anywhere</li>
                  <li>Step-by-step structured curriculum</li>
                  <li>Ideal if you’re starting from scratch</li>
                </ul>
              </div>
              <div className="path-card path-card-highlight">
                <div className="path-icon"><Video size={32} /></div>
                <h3>Live Webinars</h3>
                <p className="path-subtitle">Best for guided learning & fast progress</p>
                <ul>
                  <li>Live sessions with expert instructors</li>
                  <li>Ask questions in real-time</li>
                  <li>Stay accountable with scheduled classes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modern Skills Section */}
      <section className="sh-section container-premium">
        <div className="sh-modern-skills-grid">
          <div className="modern-video-wrapper">
            <div className="modern-video-card">
              <img src="/assets/images/learning-preview.jpg" alt="Platform Preview" onError={(e) => e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Platform+Preview'} />
              <button className="play-btn-overlay"><Play size={32} fill="currentColor" /></button>
            </div>
          </div>
          <div className="modern-skills-content">
            <h2>Modern skills need a modern learning approach</h2>
            <p>Learning shouldn’t be one-size-fits-all. For effective training, you need the right skills and the right modalities. That’s where we come in.</p>
            
            <div className="modern-accordion">
              <div className="mod-acc-item">
                <div className="mod-acc-header">
                  <Award size={24} className="text-accent-yellow" />
                  <h4>Job-Focused Learning</h4>
                </div>
                <div className="mod-acc-body">Curriculum designed by industry experts to make you day-one ready.</div>
              </div>
              <div className="mod-acc-item">
                <div className="mod-acc-header">
                  <Users size={24} className="text-accent-blue" />
                  <h4>Expert Mentorship</h4>
                </div>
                <div className="mod-acc-body">Get 1-on-1 guidance and feedback from top professionals.</div>
              </div>
              <div className="mod-acc-item">
                <div className="mod-acc-header">
                  <CheckCircle size={24} className="text-green-400" />
                  <h4>Industry-Recognised Certification</h4>
                </div>
                <div className="mod-acc-body">Earn certificates that top companies value and recognize.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Impact Stats */}
      <section className="sh-impact-band">
        <div className="sh-impact-bg"></div>
        <div className="container-premium relative z-10">
          <div className="sh-stats-grid">
            <div className="sh-stat-box">
              <h3>100+</h3>
              <p>Courses</p>
            </div>
            <div className="sh-stat-box">
              <h3>5+</h3>
              <p>Countries</p>
            </div>
            <div className="sh-stat-box">
              <h3>200K+</h3>
              <p>Students</p>
            </div>
            <div className="sh-stat-box">
              <h3>50+</h3>
              <p>Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Student Testimonials */}
      <section className="sh-section container-premium">
        <div className="section-header text-center">
          <span className="sh-eyebrow">Success Stories</span>
          <h2>What Our Students Say</h2>
          <p>Real outcomes from real students who transformed their careers.</p>
        </div>

        <div className="sh-testimonials-grid">
          {testimonialsData.map(testi => (
            <div key={testi.id} className="sh-testi-card">
              <div className="stars">
                {[...Array(testi.stars)].map((_, i) => <Star key={i} size={16} fill="#fbbc04" color="#fbbc04" />)}
              </div>
              <p className="testi-quote">"{testi.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{testi.name.charAt(0)}</div>
                <div className="testi-author-info">
                  <h4>{testi.name}</h4>
                  <p>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Group Enrollment Pricing */}
      <section className="sh-section container-premium">
        <div className="section-header text-center">
          <span className="sh-eyebrow">Group Enrollment</span>
          <h2>Learn Together, Save More</h2>
          <p>Bigger group = bigger discount. Base price ₹499/course per person.</p>
        </div>

        <div className="sh-pricing-grid">
          <div className="sh-pricing-card">
            <h4>Solo</h4>
            <div className="price">₹499 <span>onwards/person</span></div>
            <p className="pricing-desc">Just for yourself</p>
            <ul className="pricing-features">
              <li><CheckCircle size={16}/> 1 learner access</li>
              <li><CheckCircle size={16}/> Full course content</li>
              <li><CheckCircle size={16}/> Certificate</li>
              <li><CheckCircle size={16}/> 1 month access</li>
            </ul>
            <button className="btn-pricing">Start - 1 person</button>
          </div>

          <div className="sh-pricing-card">
            <h4>Group of 5</h4>
            <div className="price">₹449 <span>onwards/person</span></div>
            <p className="pricing-desc">Great for small teams</p>
            <ul className="pricing-features">
              <li><CheckCircle size={16}/> 5 learner access</li>
              <li><CheckCircle size={16}/> Full course content</li>
              <li><CheckCircle size={16}/> Certificate</li>
              <li><CheckCircle size={16}/> 3 months access</li>
            </ul>
            <button className="btn-pricing">Enroll group</button>
          </div>

          <div className="sh-pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h4>Group of 10</h4>
            <div className="price">₹399 <span>onwards/person</span></div>
            <p className="pricing-desc">Perfect for departments</p>
            <ul className="pricing-features">
              <li><CheckCircle size={16}/> 10 learner access</li>
              <li><CheckCircle size={16}/> Full course content</li>
              <li><CheckCircle size={16}/> Certificate</li>
              <li><CheckCircle size={16}/> 6 months access</li>
            </ul>
            <button className="btn-pricing btn-pricing-primary">Enroll group</button>
          </div>

          <div className="sh-pricing-card">
            <h4>Group of 20</h4>
            <div className="price">₹324 <span>onwards/person</span></div>
            <p className="pricing-desc">Best for organizations</p>
            <ul className="pricing-features">
              <li><CheckCircle size={16}/> 20 learner access</li>
              <li><CheckCircle size={16}/> Full course content</li>
              <li><CheckCircle size={16}/> Certificate</li>
              <li><CheckCircle size={16}/> Lifetime access</li>
            </ul>
            <button className="btn-pricing">Enroll group</button>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="sh-section container-premium mb-12">
        <div className="section-header text-center">
          <h2>FAQs</h2>
        </div>

        <div className="sh-faq-container">
          <div className="sh-faq-sidebar">
            {faqsData.map((f, idx) => (
              <button 
                key={idx}
                className={`faq-tab ${activeFaqTab === f.category ? 'active' : ''}`}
                onClick={() => { setActiveFaqTab(f.category); setOpenFaqIndex(0); }}
              >
                {f.category}
              </button>
            ))}
          </div>

          <div className="sh-faq-content">
            {activeFaqCategory.items.map((item, idx) => (
              <div key={idx} className={`faq-accordion-item ${openFaqIndex === idx ? 'open' : ''}`}>
                <button className="faq-accordion-header" onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  {openFaqIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div 
                      className="faq-accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="faq-accordion-inner">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Skillhub;
