import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import './Media.css';

export const latestNewsData = [
  {
    id: 1,
    date: 'July 5, 2025',
    title: 'WSS Awards 2025: PHN Technology Leader Recognized for Vision and Excellence',
    description: 'Mr. Pradip Narayankar, Founder, CEO & MD of PHN Technology, has been honored with the Outstanding Entrepreneur in Education & Innovation award at the World School Summit 2025 in Bangkok, Thailand.',
    image: './src/assets/news-wss.png',
    category: 'Awards',
    badge: 'AWARD'
  },
  {
    id: 2,
    date: 'March 17, 2025',
    title: 'Shaping Tomorrow: Inauguration of PHN CoE Lab at IIT Jammu',
    description: 'The CoE Lab plays a pivotal role in shaping the next generation of innovators and tech leaders.',
    image: './src/assets/news-jammu.png',
    category: 'CoE Launches',
    badge: 'LAUNCH'
  },
  {
    id: 3,
    date: 'March 15, 2025',
    title: 'IIT Jammu Launches Robotics & AI Research Hub',
    description: 'IIT Jammu introduces cutting-edge robotics, AI, and IoT labs to boost research and innovation.',
    image: './src/assets/news-jammu.png',
    category: 'CoE Launches',
    badge: 'RESEARCH'
  },
  {
    id: 4,
    date: 'Feb 6, 2025',
    title: 'PHN CoE Lab Inaugurated at IIIT Vadodara: Advancing Robotics, AI & IoT',
    description: 'The CoE Lab plays a pivotal role in shaping the next generation of innovators and tech leaders.',
    image: './src/assets/news-vadodara.png',
    category: 'CoE Launches',
    badge: 'LAUNCH'
  },
  {
    id: 5,
    date: 'Feb 1, 2025',
    title: 'COE Lab Opens for Robotics & IoT Excellence',
    description: 'A cutting-edge lab for AI, robotics, and IoT research is now operational at SIIT.',
    image: './src/assets/news-guwahati.png',
    category: 'CoE Launches',
    badge: 'EXCELLENCE'
  },
  {
    id: 6,
    date: 'Jan 21, 2025',
    title: 'Advancing Education: PHN CoE Lab Inaugurated at NIT Delhi',
    description: 'This initiative connects students with real-world applications and industry demands.',
    image: './src/assets/news-delhi.png',
    category: 'CoE Launches',
    badge: 'EDUCATION'
  },
  {
    id: 7,
    date: 'Jan 15, 2025',
    title: 'NIT Delhi Establishes Robotics & AI Excellence Hub',
    description: 'In collaboration with PHN Tech, NIT Delhi now offers an advanced center for robotics and AI.',
    image: './src/assets/news-delhi.png',
    category: 'CoE Launches',
    badge: 'HUB'
  },
  {
    id: 8,
    date: 'Dec 22, 2024',
    title: 'Pioneering the Future: Inauguration of PHN CoE Lab at IIT Patna',
    description: 'This initiative will drive cutting-edge advancements and empower the next generation of tech leaders.',
    image: './src/assets/news-patna.png',
    category: 'CoE Launches',
    badge: 'LAUNCH'
  },
  {
    id: 9,
    date: 'Dec 15, 2024',
    title: 'IIT Patna Unveils Center for Robotics & AI',
    description: 'IIT Patna’s new research hub promotes AI, robotics, and industrial innovation for future tech leaders.',
    image: './src/assets/news-patna.png',
    category: 'CoE Launches',
    badge: 'RESEARCH'
  },
  {
    id: 10,
    date: 'Nov 10, 2024',
    title: 'Science Lab Inauguration at Patoda ZP School',
    description: 'Students showcase their scientific talent by creating innovative models and experiments at the new lab.',
    image: './src/assets/school-hero-bg.png',
    category: 'School Labs',
    badge: 'SCHOOL'
  },
  {
    id: 11,
    date: 'Oct 25, 2024',
    title: 'Pradip Narayankar’s Legacy Brings Tech to School',
    description: 'A rural school now boasts a tech lab, empowering students with futuristic learning tools.',
    image: './src/assets/founder-pradip.jpg',
    category: 'School Labs',
    badge: 'LEGACY'
  },
  {
    id: 12,
    date: 'Sep 15, 2024',
    title: 'Affordable Tech Learning with PHN Technology',
    description: 'A hands-on robotics and coding initiative making tech education accessible to all.',
    image: './src/assets/job-training.png',
    category: 'Media Coverage',
    badge: 'MEDIA'
  },
  {
    id: 13,
    date: 'Aug 20, 2024',
    title: 'PHN Techno Lab Unveiled at Taj Mahal Palace',
    description: 'A groundbreaking initiative making robotics education affordable and accessible for students.',
    image: './src/assets/college-hero-v3.png',
    category: 'Media Coverage',
    badge: 'MEDIA'
  },
  {
    id: 14,
    date: 'July 10, 2024',
    title: 'PHN Technology: A Visionary Leap in Robotics Education',
    description: 'An innovative, hands-on learning approach shaping the future of student robotics training.',
    image: './src/assets/news-guwahati.png',
    category: 'Media Coverage',
    badge: 'MEDIA'
  },
  {
    id: 15,
    date: 'June 5, 2024',
    title: 'Bollywood Stars Applaud PHN Technology lab Initiative',
    description: 'Affordable tech education is shaping young minds with PHN Technology lab’s groundbreaking efforts.',
    image: './src/assets/news-wss.png',
    category: 'Media Coverage',
    badge: 'MEDIA'
  }
];

const NewsModal = ({ news, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="modal-content news-modal-v3"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <div className="modal-body-v3">
          <div className="modal-media-side-v3">
            <img src={news.image} alt={news.title} />
            <div className="modal-img-overlay-v3"></div>
          </div>
          <div className="modal-text-side-v3">
            <div className="modal-meta-row-v3">
              <span className="modal-badge-v3">{news.badge}</span>
              <span className="modal-date-v3">{news.date}</span>
            </div>
            <h2 className="modal-title-v3">{news.title}</h2>
            <div className="modal-divider-v3"></div>
            <p className="modal-description-v3">{news.description}</p>
            <div className="modal-phn-context">
              <p>PHN Technology is committed to transforming education and industrial training through cutting-edge Robotics, AI, and IoT solutions. This milestone represents our continued dedication to fostering innovation across India's premier academic institutions.</p>
            </div>
            <button className="btn-modal-close-v3" onClick={onClose}>CLOSE DETAILS</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NewsTimeline = () => {
  const [filter, setFilter] = useState('All');
  const [selectedNews, setSelectedNews] = useState(null);

  const filterChips = ['All', 'Awards', 'CoE Launches', 'Media Coverage', 'School Labs'];

  const filteredNews = filter === 'All' 
    ? latestNewsData 
    : latestNewsData.filter(item => item.category === filter);

  return (
    <div className="news-timeline-container">
      <div className="timeline-header-premium">
        <h2 className="timeline-section-title">Latest News Timeline</h2>
        <p className="timeline-section-subtitle">PHN stories, recognitions, launches, and media features from across India.</p>
        
        <div className="timeline-filters">
          {filterChips.map(chip => (
            <button 
              key={chip} 
              className={`filter-chip-v3 ${filter === chip ? 'active' : ''}`}
              onClick={() => setFilter(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-v3-wrapper">
        <div className="timeline-vertical-line">
          <div className="line-glow-pulse"></div>
        </div>

        {filteredNews.map((news, idx) => (
          <motion.div 
            key={news.id} 
            className={`timeline-item-v3 ${idx % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="timeline-node">
              <div className="node-inner"></div>
            </div>

            <div className="timeline-card-v3">
              <div className="timeline-card-media">
                <img src={news.image} alt={news.title} />
                <div className="media-accent-line"></div>
                <div className="timeline-badge-v3">{news.badge}</div>
              </div>
              <div className="timeline-card-info">
                <span className="timeline-date-v3">{news.date}</span>
                <h3 className="timeline-card-title">{news.title}</h3>
                <p className="timeline-card-desc">{news.description}</p>
                <button className="timeline-read-more" onClick={() => setSelectedNews(news)}>
                  READ MORE <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedNews && (
          <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const Media = () => {
  const [activeMediaTab, setActiveMediaTab] = useState('Latest News');

  const mediaTabs = ['Latest News', 'Gallery', 'Testimonials', 'Industrial Visits'];

  return (
    <div className="media-page-wrapper">
      <section className="media-hero">
        <div className="container-premium">
          <h1 className="media-page-title">Media Hub</h1>
          <p className="media-page-subtitle">Capturing our journey of innovation and impact.</p>
        </div>
        <div className="media-hero-bg"></div>
      </section>

      <section className="media-content-section">
        <div className="container-premium">
          <div className="media-tabs-nav">
            {mediaTabs.map(tab => (
              <button 
                key={tab} 
                className={`media-tab-btn ${activeMediaTab === tab ? 'active' : ''}`}
                onClick={() => setActiveMediaTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="media-tab-content">
            <AnimatePresence mode="wait">
              {activeMediaTab === 'Latest News' && (
                <motion.div
                  key="latest-news-tab"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <NewsTimeline />
                </motion.div>
              )}
              {activeMediaTab !== 'Latest News' && (
                <motion.div
                  key="other-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="media-placeholder"
                >
                  <div className="placeholder-content">
                    <h3>{activeMediaTab} Content Coming Soon</h3>
                    <p>We are currently updating our {activeMediaTab.toLowerCase()} section. Stay tuned for more stories from PHN Technology.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
