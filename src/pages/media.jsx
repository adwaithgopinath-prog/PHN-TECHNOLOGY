import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Play, Image as ImageIcon, Video, FileText } from 'lucide-react';
import { latestNewsData } from '../data/newsData';

const Media = () => {
  return (
    <div className="media-page pt-32 pb-20 bg-[#05070f] min-h-screen">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">Media & Updates</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Latest news, events, and insights from the world of PHN Technology.</p>
        </div>

        {/* Latest News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {latestNewsData.map((news) => (
            <motion.div 
              key={news.id}
              className="news-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                  <Calendar size={14} /> {news.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-3">{news.excerpt}</p>
                <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resources / Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <ImageIcon />, label: 'Gallery', count: '120+ Photos' },
            { icon: <Video />, label: 'Video Library', count: '45+ Videos' },
            { icon: <FileText />, label: 'Press Releases', count: '30+ Files' },
            { icon: <Play />, label: 'Webinars', count: '12+ Sessions' }
          ].map((cat, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5 text-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h4 className="text-white font-bold mb-1">{cat.label}</h4>
              <p className="text-white/40 text-xs">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
