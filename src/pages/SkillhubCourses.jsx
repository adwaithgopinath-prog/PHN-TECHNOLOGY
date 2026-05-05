import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, Users, Star } from 'lucide-react';
import { skillhubCourses } from '../data/skillhubCoursesData';
import './SkillhubCourses.css';

const SkillhubCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialTab = searchParams.get('tab') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState(initialTab === 'trending' ? 'LMS' : 'All Content');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Categories
  const categories = [
    'All Categories',
    'Programming',
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Cloud Computing',
    'Cyber Security'
  ];

  const types = ['All Content', 'LMS Courses', 'Webinars'];

  // Handle URL change if 'trending' is clicked
  useEffect(() => {
    if (initialTab === 'trending') {
      // In a real app, you might have a 'trending' flag. We'll just filter by LMS as an example,
      // or sort by students. For now, we just clear the tab so it doesn't lock them in.
    }
  }, [initialTab]);

  // Filtering
  const filteredCourses = skillhubCourses.filter(course => {
    // Type Filter
    if (activeType === 'LMS Courses' && course.type !== 'LMS') return false;
    if (activeType === 'Webinars' && course.type !== 'Webinar') return false;
    
    // Category Filter
    if (activeCategory !== 'All Categories' && course.category !== activeCategory) return false;
    
    // Search Filter
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentCourses = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="sh-courses-page">
      {/* Hero Section */}
      <section className="sh-courses-hero">
        <div className="sh-courses-hero-overlay"></div>
        <div className="container-premium relative z-10 text-center">
          <h1 className="hero-title-global">Choose the Right Course for Your <span className="text-blue-400">Career Growth</span></h1>
          <p className="body-text-global mx-auto mt-4 max-w-2xl">
            Unlock your potential with industry-leading courses and live webinars designed by experts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="sh-courses-main container-premium">
        <div className="sh-courses-header">
          <div>
            <h2>Explore Our Library</h2>
            <p className="text-white/60 mt-1">Courses, live webinars, and recorded sessions — all curated by industry experts.</p>
          </div>
          
          <div className="sh-courses-search">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
        </div>

        <div className="sh-courses-layout">
          {/* Sidebar */}
          <aside className="sh-courses-sidebar">
            <div className="sidebar-group">
              <h3>Content Type</h3>
              <ul className="sidebar-filter-list">
                {types.map(type => (
                  <li key={type}>
                    <button 
                      className={activeType === type ? 'active' : ''}
                      onClick={() => { setActiveType(type); setCurrentPage(1); }}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-group mt-8">
              <h3>Category</h3>
              <ul className="sidebar-filter-list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      className={activeCategory === cat ? 'active' : ''}
                      onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="sh-courses-grid-wrapper">
            {filteredCourses.length === 0 ? (
              <div className="no-courses-msg">No courses found matching your criteria.</div>
            ) : (
              <>
                <div className="sh-courses-grid-inner">
                  {currentCourses.map(course => (
                    <div key={course.id} className="sh-course-full-card">
                      <div className="course-card-img">
                        <img src={`https://placehold.co/600x320/1e293b/ffffff?text=${encodeURIComponent(course.category)}`} alt={course.title} />
                        <div className="course-badges">
                          <span className="badge-cat">{course.category}</span>
                          <span className="badge-level">{course.level}</span>
                        </div>
                      </div>
                      
                      <div className="course-card-body">
                        <h3 className="course-title" onClick={() => navigate(`/phn-skillhub/courses/${course.id}`)}>
                          {course.title}
                        </h3>
                        
                        <div className="course-instructor">By {course.instructor}</div>
                        
                        <div className="course-meta-row">
                          <span className="meta-item"><BookOpen size={14}/> {course.lessons} Lessons</span>
                          <span className="meta-item"><Users size={14}/> {course.students}</span>
                          <span className="meta-item"><Star size={14} fill="#fbbc04" color="#fbbc04"/> {course.rating}</span>
                        </div>
                        
                        <div className="course-footer">
                          <div className="course-price-block">
                            <span className="price-new">₹{course.price}</span>
                            {course.oldPrice && <span className="price-old">₹{course.oldPrice}</span>}
                          </div>
                          <button 
                            className="btn-view-course-outline"
                            onClick={() => navigate(`/phn-skillhub/courses/${course.id}`)}
                          >
                            View Course
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="sh-pagination">
                    {[...Array(totalPages)].map((_, i) => (
                      <button 
                        key={i} 
                        className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillhubCourses;
