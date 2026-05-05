import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Career.css';

const jobsData = [
  {
    id: 1,
    title: "Senior Admission Manager",
    description: "We are seeking an experienced and mature Education / Admission Counsellor to join our Pune Head Office. The ideal candidate will have a strong background in student counselling, admissions, and education advisory, with the ability to guide prospective students and parents effectively through the enrolment process.",
    meta: [
      { icon: <MapPin size={16} />, text: "Pune, India" },
      { icon: <Briefcase size={16} />, text: "Sales and Marketing" }
    ]
  },
  {
    id: 2,
    title: "Education Counsellor",
    description: "Responsible for calling and coordinating with students and institutions for IIT/NIT workshops, certification, and internship programs — ensuring smooth registration, communication, and feedback collection.",
    meta: [
      { icon: <MapPin size={16} />, text: "Pune, India" }
    ]
  },
  {
    id: 3,
    title: "MarCom",
    description: "Perform assigned responsibilities, collaborate with team members, and adhere to company policies. Strong communication, problem-solving, and work ethic required. Adaptability, initiative, and willingness to learn are valued.",
    meta: [
      { icon: <MapPin size={16} />, text: "Pune, India" },
      { icon: <Clock size={16} />, text: "Full-Time" }
    ]
  },
  {
    id: 4,
    title: "Technology Educator and Operations Executive",
    description: "We are seeking a technically proficient and result-oriented individual to manage and operate the Center of Excellence (COE) Lab. The role involves end-to-end responsibility for planning, promoting, and executing technical programs such as workshops, internships, training sessions, and certification programs, along with driving student registrations through institutional outreach.",
    meta: [
      { icon: <MapPin size={16} />, text: "Pune, India" },
      { icon: <Briefcase size={16} />, text: "Sales and Marketing" },
      { icon: <Clock size={16} />, text: "Full-Time" }
    ]
  }
];

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobsData.filter(job => {
    const term = searchTerm.toLowerCase();
    const titleMatch = job.title.toLowerCase().includes(term);
    const descMatch = job.description.toLowerCase().includes(term);
    const metaMatch = job.meta.some(m => m.text.toLowerCase().includes(term));
    return titleMatch || descMatch || metaMatch;
  });

  return (
    <div className="career-page-container">
      {/* Top Banner / Search Area */}
      <section className="career-header-section">
        <div className="career-header-bg"></div>
        <div className="container-premium relative z-10 career-header-content">
          <div className="career-title-block">
            <h1 className="hero-title-global">Our Job Offers</h1>
            <p className="body-text-global">Join our team and help us build the future of technology and education.</p>
          </div>
          
          <div className="career-search-wrapper">
            <div className="career-search-bar">
              <input 
                type="text" 
                placeholder="Search jobs by title, location, or department..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="career-search-btn">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="career-main-section container-premium">
        <div className="career-grid">
          
          {/* Left Column: Job Listings */}
          <div className="career-listings-col">
            <div className="listings-header">
              <h3>{filteredJobs.length} {filteredJobs.length === 1 ? 'Opening' : 'Openings'} Available</h3>
            </div>

            <div className="job-cards-container">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div 
                    key={job.id} 
                    className="job-card-premium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="job-card-content">
                      <h2>{job.title}</h2>
                      
                      <div className="job-meta-tags">
                        {job.meta.map((m, idx) => (
                          <span key={idx} className="job-meta-tag">
                            {m.icon} {m.text}
                          </span>
                        ))}
                      </div>
                      
                      <p className="job-desc">{job.description}</p>
                    </div>
                    
                    <div className="job-card-actions">
                      <button 
                        className="btn-view-details"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                      <Link to="/contact" className="btn-apply-now">
                        Apply Now
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="no-jobs-found">
                  <div className="no-jobs-icon"><Search size={48} /></div>
                  <h3>No job openings found</h3>
                  <p>Try adjusting your search terms or check back later.</p>
                  <button className="btn-clear-search" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="career-sidebar-col">
            <div className="career-sidebar-card">
              <div className="sidebar-image-wrapper">
                <img src="/assets/images/team-culture.jpg" alt="Team Culture" onError={(e) => e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Team+Culture'} />
                <div className="sidebar-image-overlay"></div>
              </div>
              
              <div className="sidebar-content">
                <h3>Join Our Mission</h3>
                <p>
                  We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                </p>
                
                <div className="sidebar-contact-block">
                  <h4>Contact us</h4>
                  <a href="mailto:info@phntechnology.com">info@phntechnology.com</a>
                  <a href="mailto:outreach@phntechnology.com">outreach@phntechnology.com</a>
                  <a href="tel:+919766679494">+91 9766679494</a>
                </div>

                <div className="sidebar-socials">
                  <a href="https://www.facebook.com/phntechnology" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/phn_technology/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/phn-technology/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCCoKsPs0lsyr383TIZOoRUg" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            className="job-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              className="job-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="job-modal-close" onClick={() => setSelectedJob(null)}>
                <X size={24} />
              </button>
              
              <h2>{selectedJob.title}</h2>
              <div className="job-meta-tags modal-meta">
                {selectedJob.meta.map((m, idx) => (
                  <span key={idx} className="job-meta-tag">
                    {m.icon} {m.text}
                  </span>
                ))}
              </div>
              
              <div className="job-modal-body">
                <h3>About the Role</h3>
                <p>{selectedJob.description}</p>
                
                {/* Additional placeholder content for modal to make it look full */}
                <h3>Requirements</h3>
                <ul>
                  <li>Strong communication and interpersonal skills.</li>
                  <li>Ability to work well in a fast-paced environment.</li>
                  <li>Relevant experience in the respective field.</li>
                  <li>Proactive approach and willingness to learn.</li>
                </ul>
              </div>

              <div className="job-modal-footer">
                <Link to="/contact" className="btn-premium btn-primary w-full text-center">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Career;
