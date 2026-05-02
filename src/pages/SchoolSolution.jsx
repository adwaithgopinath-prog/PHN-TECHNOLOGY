import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, BookOpen, Lightbulb, Target, Users, CheckCircle2, Send, GraduationCap, Building2, Briefcase, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchoolSolution = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate validation and submission
    if (formState.name && formState.phone && formState.email && formState.subject && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const features = [
    {
      title: "Passion-Driven Learning",
      icon: <BookOpen className="text-blue-500" size={32} />,
      content: "Every student has unique talents. We don't limit learning to textbooks; we help students explore technology, design, business, and more. Instead of just preparing for exams, we prepare students for life."
    },
    {
      title: "Hands-On Industry Exposure",
      icon: <Building2 className="text-blue-500" size={32} />,
      content: "First-of-its-kind education model where school students will visit IIT labs, PSU research centers & engage with top industry leaders. Real-world applications replace outdated, theoretical teaching."
    },
    {
      title: "Real-Time Problem Solving",
      icon: <Target className="text-blue-500" size={32} />,
      content: "Learning is based on solving real-world challenges, not just scoring marks. Industry collaborations ensure students work on projects that matter."
    },
    {
      title: "Self-Learning & Analytical Thinking",
      icon: <Lightbulb className="text-blue-500" size={32} />,
      content: "We encourage students to think, ask, and solve problems independently. No spoon-feeding—students develop skills that help them innovate and lead."
    }
  ];

  const benefits = [
    {
      title: "Entrance Exam Ready",
      text: "We ensure students are fully equipped to ace competitive exams and ready for their future.",
      icon: <GraduationCap size={24} />
    },
    {
      title: "Customized Curriculum",
      text: "We foster a learning environment that encourages growth and exploration.",
      icon: <Users size={24} />
    },
    {
      title: "Expert-Led Training",
      text: "Learn directly from industry leaders who bring practical insights to every lesson.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Education Beyond Exams",
      text: "We emphasize practical skills and knowledge that are essential in real world.",
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="school-solution-page">
      {/* Hero Section */}
      <section className="school-hero">
        <div className="school-hero-overlay"></div>
        <div className="container relative z-10">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>School Solution</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="school-title"
          >
            School Solution
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="school-headline"
          >
            Revolutionizing Education From Ordinary to Extraordinary
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a href="#contact" className="btn-gold">
              Get In Touch <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-dark-deep relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Breaking the cycle of <span className="text-blue-500">routine learning</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Today's education model is built around routine learning, standard exams, and a rigid curriculum. Students often juggle school and tuition, leaving little time to explore their true talent. At PHN Technology, we're breaking this cycle.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed font-semibold text-white">
                We don't just teach subjects—we nurture passion, encourage self-learning, and prepare students for real-world challenges.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-image-card">
                <img src="./src/assets/event-iiit-bhopal.png" alt="Innovation Lab" className="rounded-2xl" />
                <div className="glass-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights / Transformative Approach */}
      <section className="py-24 relative bg-dark-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge-highlight">Key Highlights</span>
            <div className="highlight-pill mx-auto mt-4">School Solution</div>
            <h2 className="text-5xl font-black mt-6">Our Transformative Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="feature-glass-card"
              >
                <div className="feature-icon-box">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.content}</p>
                <div className="card-accent-line"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-deep">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Why Choose Us</h2>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="benefit-card"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="contact" className="py-24 bg-dark-gradient relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-6">Get In Touch Now</h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to transform your school into a hub of innovation? Our team is here to guide you through the process of building a future-ready education ecosystem.
              </p>
              <div className="contact-info-boxes">
                <div className="contact-small-box">
                  <span className="text-yellow-500 font-bold block">Call Us</span>
                  <span className="text-white">+91 8412 8412 00</span>
                </div>
                <div className="contact-small-box mt-4">
                  <span className="text-blue-500 font-bold block">Email Us</span>
                  <span className="text-white">info@phntechnology.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-glass"
            >
              {isSubmitted ? (
                <div className="success-container">
                  <CheckCircle2 size={60} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-gray-400">Our team will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="school-contact-form">
                  <div className="form-group">
                    <label>Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Your Full Name"
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label>Phone *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="Email Address"
                        value={formState.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      required 
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                      name="message" 
                      required 
                      rows="4" 
                      placeholder="How can we help you?"
                      value={formState.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn-gold">
                    SUBMIT NOW <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolSolution;
