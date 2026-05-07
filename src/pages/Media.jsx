import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Tag, ChevronRight, X, LayoutGrid, Clock } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedNews, setSelectedNews] = useState(null);

  const filters = ['All', 'IIT Collaborations', 'NIT Collaborations', 'Industry Partnerships', 'Innovation'];

  const getFilteredNews = () => {
    if (activeFilter === 'All') return newsData;
    if (activeFilter === 'IIT Collaborations') return newsData.filter(n => n.category === 'IITs');
    if (activeFilter === 'NIT Collaborations') return newsData.filter(n => n.category === 'NITs');
    if (activeFilter === 'Industry Partnerships') return newsData.filter(n => n.category === 'Partnerships');
    if (activeFilter === 'Innovation') return newsData.filter(n => n.category === 'Innovation');
    return newsData;
  };

  const currentNews = getFilteredNews();
  const featuredNews = currentNews[0];
  const secondaryNews = currentNews.slice(1, 3);
  const remainingNews = currentNews.slice(3);

  return (
    <div className="news-page-editorial min-h-screen pt-32 pb-20">
      <div className="container-premium">
        {/* Editorial Hero */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-blue-400 font-black tracking-widest text-xs uppercase mb-6"
          >
            <LayoutGrid size={16} /> PRESS & MEDIA
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Latest News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            Explore PHN Technology’s latest academic collaborations, institutional tie-ups, innovation milestones, and ecosystem growth.
          </motion.p>
        </div>

        {/* Featured Section */}
        {activeFilter === 'All' && featuredNews && (
          <div className="news-featured-row">
            <motion.div 
              className="card-news-featured group cursor-pointer"
              onClick={() => setSelectedNews(featuredNews)}
              whileHover={{ y: -5 }}
            >
              <div className="news-img-box">
                <img src={featuredNews.image} alt={featuredNews.title} />
              </div>
              <div className="news-content-box">
                <span className="news-tag-pill">{featuredNews.category}</span>
                <h2 className="news-title-featured text-white group-hover:text-blue-400 transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-white/60 mb-6 line-clamp-2">{featuredNews.summary}</p>
                <div className="flex items-center gap-4 text-white/40 text-sm font-bold">
                  <span className="flex items-center gap-2"><Clock size={14} /> 5 min read</span>
                  <span>•</span>
                  <span>{featuredNews.date}</span>
                </div>
              </div>
            </motion.div>

            <div className="news-secondary-col">
              {secondaryNews.map((news) => (
                <div 
                  key={news.id} 
                  className="card-news-compact group"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="news-img-mini">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="news-compact-info">
                    <span className="pill-small">{news.category}</span>
                    <h4 className="text-white group-hover:text-blue-400 transition-colors">{news.title}</h4>
                    <span className="text-white/30 text-xs font-bold">{news.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="segmented-filters">
          {filters.map((f) => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Editorial Grid */}
        <div className="news-main-grid">
          {(activeFilter === 'All' ? remainingNews : currentNews).map((news, i) => (
            <motion.div 
              key={news.id} 
              className="editorial-story-card group cursor-pointer"
              onClick={() => setSelectedNews(news)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="story-media">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="story-body">
                <span className="pill-small">{news.category}</span>
                <h3 className="text-white group-hover:text-blue-400 transition-colors">{news.title}</h3>
                <p>{news.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{news.date}</span>
                  <span className="btn-editorial-more">
                    READ STORY <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedNews(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full max-w-5xl bg-[#0d111d] border border-white/10 rounded-[40px] overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10"
              >
                <X size={24} />
              </button>
              
              <div className="overflow-y-auto">
                <div className="aspect-[21/9] w-full">
                  <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-10 md:p-16">
                  <span className="news-tag-pill">{selectedNews.category}</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    {selectedNews.title}
                  </h2>
                  <div className="flex items-center gap-6 mb-12 py-6 border-y border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">PHN</div>
                      <div>
                        <p className="text-white font-bold text-sm">PHN Editorial Team</p>
                        <p className="text-white/40 text-xs">Official Media Release</p>
                      </div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-white/40 text-sm font-bold">
                      <p>{selectedNews.date}</p>
                      <p>5 min read</p>
                    </div>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/70 text-xl leading-relaxed mb-8">
                      {selectedNews.content || selectedNews.summary}
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      PHN Technology continues to expand its reach through strategic academic and industrial partnerships. This latest milestone represents our commitment to building a future-ready innovation network that bridges the gap between theoretical learning and industrial excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsPage;
