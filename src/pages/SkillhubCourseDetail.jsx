import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, BookOpen, Users, Star, Clock, Globe, Award, 
  CheckCircle, ChevronDown, ChevronUp, ChevronLeft 
} from 'lucide-react';
import { skillhubCourses } from '../data/skillhubCoursesData';
import './SkillhubCourseDetail.css';

const SkillhubCourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = skillhubCourses.find(c => c.id === parseInt(courseId));

  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  if (!course) {
    return (
      <div className="sh-detail-not-found">
        <h2>Course Not Found</h2>
        <button onClick={() => navigate('/phn-skillhub/courses')} className="btn-premium btn-primary">Back to Courses</button>
      </div>
    );
  }

  const curriculum = [
    { title: "Module 1: Introduction to Fundamentals", duration: "2 hours", lessons: 4 },
    { title: "Module 2: Core Concepts and Implementation", duration: "4 hours", lessons: 8 },
    { title: "Module 3: Advanced Techniques", duration: "5 hours", lessons: 6 },
    { title: "Module 4: Real-world Projects & Case Studies", duration: "10 hours", lessons: 6 }
  ];

  const faqs = [
    { q: "Do I need prior experience?", a: "No, this course is designed for beginners. We start from the absolute basics." },
    { q: "How long do I have access?", a: "You get lifetime access to the course materials and updates." },
    { q: "Will I get a certificate?", a: "Yes, upon completion you will receive an industry-recognized certificate." },
    { q: "Can I access the course on mobile?", a: "Absolutely! Our platform is fully responsive and works on all devices." },
    { q: "Is there a community or support?", a: "Yes, you will get access to our private Discord community and mentor support." }
  ];

  return (
    <div className="sh-course-detail-page">
      {/* 1. Hero Band */}
      <section className="sh-cd-hero">
        <div className="container-premium">
          <Link to="/phn-skillhub/courses" className="sh-back-link">
            <ChevronLeft size={16} /> Back to Courses
          </Link>
          
          <div className="sh-cd-hero-grid">
            <div className="sh-cd-hero-content">
              <div className="sh-cd-badges">
                <span className="badge-cat">{course.category}</span>
                <span className="badge-level">{course.level}</span>
              </div>
              <h1>{course.title}</h1>
              <p className="sh-cd-desc">{course.description}</p>
              
              <div className="sh-cd-meta-row">
                <div className="cd-meta-item">
                  <Star fill="#fbbc04" color="#fbbc04" size={16}/>
                  <span className="text-white font-bold">{course.rating}</span>
                  <span className="text-white/60">(4.5k ratings)</span>
                </div>
                <div className="cd-meta-item">
                  <Users size={16} className="text-blue-400"/>
                  <span className="text-white">{course.students} Students</span>
                </div>
                <div className="cd-meta-item">
                  <Globe size={16} className="text-cyan-400"/>
                  <span className="text-white">English, Hindi</span>
                </div>
              </div>

              <div className="sh-cd-instructor">
                Created by <span className="font-bold text-white">{course.instructor}</span>
              </div>
            </div>

            {/* Mobile Video/Preview Card (Shows here on mobile, floats on desktop) */}
            <div className="sh-cd-floating-card-mobile">
               <div className="video-preview-box">
                 <img src={`https://placehold.co/600x320/1b1f22/ffffff?text=${encodeURIComponent(course.title)}`} alt="Course Preview" />
                 <button className="play-btn"><Play fill="currentColor" size={24}/></button>
               </div>
               <div className="floating-card-body">
                 <div className="price-row">
                   <div className="current-price">₹{course.price}</div>
                   <div className="old-price">₹{course.oldPrice}</div>
                 </div>
                 <Link to="/contact" className="btn-premium btn-primary w-full text-center mt-4">Enroll Now</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="sh-cd-main container-premium">
        <div className="sh-cd-layout">
          {/* Left Content */}
          <div className="sh-cd-left">
            
            {/* Stats Row */}
            <div className="sh-cd-stats-bar">
              <div className="stat-item"><Clock size={20}/> <div><span>Duration</span><p>24 Hours</p></div></div>
              <div className="stat-item"><BookOpen size={20}/> <div><span>Lessons</span><p>{course.lessons}</p></div></div>
              <div className="stat-item"><Award size={20}/> <div><span>Certificate</span><p>Yes</p></div></div>
            </div>

            {/* About */}
            <div className="sh-cd-section">
              <h2>About This Course</h2>
              <p>This comprehensive program is designed to take you from a complete beginner to a confident professional. You will learn the theoretical foundations, practical implementations, and industry best practices. Through hands-on projects and real-world case studies, you will build a portfolio that stands out to recruiters.</p>
            </div>

            {/* Who is it for */}
            <div className="sh-cd-section">
              <h2>Who Is This Course For?</h2>
              <ul className="sh-cd-check-list">
                <li><CheckCircle size={18} className="text-green-400"/> Beginners looking to start a career in {course.category}.</li>
                <li><CheckCircle size={18} className="text-green-400"/> Professionals wanting to upskill or transition.</li>
                <li><CheckCircle size={18} className="text-green-400"/> Students needing practical, project-based knowledge.</li>
              </ul>
            </div>

            {/* Curriculum */}
            <div className="sh-cd-section">
              <h2>Course Curriculum</h2>
              <div className="sh-cd-accordion-list">
                {curriculum.map((mod, idx) => (
                  <div key={idx} className={`cd-acc-item ${openModule === idx ? 'open' : ''}`}>
                    <button className="cd-acc-header" onClick={() => setOpenModule(openModule === idx ? -1 : idx)}>
                      <div className="acc-title">
                        {openModule === idx ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                        {mod.title}
                      </div>
                      <div className="acc-meta">{mod.lessons} lessons • {mod.duration}</div>
                    </button>
                    <AnimatePresence>
                      {openModule === idx && (
                        <motion.div 
                          className="cd-acc-body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <ul className="lesson-list">
                            <li><Play size={14}/> Lesson 1: Introduction <span className="duration">10:00</span></li>
                            <li><Play size={14}/> Lesson 2: Core Setup <span className="duration">15:30</span></li>
                            <li><Play size={14}/> Lesson 3: First Project <span className="duration">25:00</span></li>
                            <li><Play size={14}/> Lesson 4: Review and Quiz <span className="duration">05:00</span></li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Reviews */}
            <div className="sh-cd-section">
              <h2>Student Reviews</h2>
              <div className="reviews-summary-box">
                <div className="rating-big">
                  <h3>{course.rating}</h3>
                  <div className="stars"><Star fill="#fbbc04" color="#fbbc04" size={20}/><Star fill="#fbbc04" color="#fbbc04" size={20}/><Star fill="#fbbc04" color="#fbbc04" size={20}/><Star fill="#fbbc04" color="#fbbc04" size={20}/><Star fill="#fbbc04" color="#fbbc04" size={20}/></div>
                  <p>Course Rating</p>
                </div>
                <div className="rating-bars">
                  <div className="bar-row"><span>5 Star</span><div className="bar-track"><div className="bar-fill" style={{width: '70%'}}></div></div><span>70%</span></div>
                  <div className="bar-row"><span>4 Star</span><div className="bar-track"><div className="bar-fill" style={{width: '20%'}}></div></div><span>20%</span></div>
                  <div className="bar-row"><span>3 Star</span><div className="bar-track"><div className="bar-fill" style={{width: '7%'}}></div></div><span>7%</span></div>
                  <div className="bar-row"><span>2 Star</span><div className="bar-track"><div className="bar-fill" style={{width: '2%'}}></div></div><span>2%</span></div>
                  <div className="bar-row"><span>1 Star</span><div className="bar-track"><div className="bar-fill" style={{width: '1%'}}></div></div><span>1%</span></div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="sh-cd-section">
              <h2>Certification</h2>
              <div className="cert-card">
                <div className="cert-info">
                  <h3>Earn an Industry-Recognized Certificate</h3>
                  <p>Upon successfully completing the course, you'll receive a verifiable certificate that you can share with your professional network and on LinkedIn.</p>
                </div>
                <div className="cert-img">
                  <img src="https://placehold.co/300x200/1e293b/ffffff?text=Certificate+Preview" alt="Certificate" />
                </div>
              </div>
            </div>

            {/* Group Enrollment */}
            <div className="sh-cd-section">
              <h2>Group Enrollment</h2>
              <p className="mb-6 text-white/70">Want to enroll your entire team? Check out our group discounts.</p>
              <div className="sh-cd-pricing-grid">
                <div className="cd-price-card">
                  <h4>Solo</h4>
                  <div className="price">₹499 <span>/person</span></div>
                </div>
                <div className="cd-price-card popular">
                  <div className="pop-badge">Popular</div>
                  <h4>Group of 10</h4>
                  <div className="price">₹399 <span>/person</span></div>
                </div>
                <div className="cd-price-card">
                  <h4>Group of 20</h4>
                  <div className="price">₹324 <span>/person</span></div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="sh-cd-section mb-12">
              <h2>Frequently Asked Questions</h2>
              <div className="sh-cd-faq-list">
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`cd-faq-item ${openFaq === idx ? 'open' : ''}`}>
                    <button className="cd-faq-header" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                      {faq.q}
                      {openFaq === idx ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div 
                          className="cd-faq-body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Sticky Sidebar */}
          <div className="sh-cd-right">
            <div className="sh-cd-floating-card-desktop">
               <div className="video-preview-box">
                 <img src={`https://placehold.co/600x320/1b1f22/ffffff?text=${encodeURIComponent(course.title)}`} alt="Course Preview" />
                 <button className="play-btn"><Play fill="currentColor" size={24}/></button>
               </div>
               <div className="floating-card-body">
                 <div className="price-row">
                   <div className="current-price">₹{course.price}</div>
                   {course.oldPrice && <div className="old-price">₹{course.oldPrice}</div>}
                 </div>
                 
                 <div className="coupon-box">
                   <input type="text" placeholder="Enter Coupon Code" />
                   <button>Apply</button>
                 </div>

                 <Link to="/contact" className="btn-premium btn-primary w-full text-center mt-4">Enroll Now</Link>
                 <p className="money-back">30-Day Money-Back Guarantee</p>
                 
                 <div className="sidebar-list-group">
                   <h4>Skills You'll Gain</h4>
                   <ul>
                     <li><CheckCircle size={14}/> Foundational Concepts</li>
                     <li><CheckCircle size={14}/> Practical Application</li>
                     <li><CheckCircle size={14}/> Industry Tools</li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="sh-cd-final-cta">
        <div className="container-premium text-center">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join students already learning with PHN Technology.</p>
          <Link to="/contact" className="btn-premium btn-primary">Enroll Now</Link>
        </div>
      </section>

    </div>
  );
};

export default SkillhubCourseDetail;
