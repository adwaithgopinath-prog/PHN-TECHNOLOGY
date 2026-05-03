import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Box, Cpu, Camera, 
  Gamepad2, Layers, Zap, Shield, Microscope, 
  Settings, Monitor, Share2, Search, Smartphone,
  Zap as Power, Activity, HardDrive, Layout, 
  ChevronRight, Globe, Award, TrendingUp, Sparkles,
  Database, Server, Code, Lock
} from 'lucide-react';
import './Products.css';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = [
    {
      id: 'shvana',
      name: 'Shvana Robot',
      tagline: 'The Intelligent Quadruped Explorer',
      desc: 'Shvana is a cutting-edge quadruped robot powered by Raspberry Pi and ROS, equipped with coreless servos and an HD wide-angle camera. It excels in AI-powered target recognition, obstacle avoidance, and customizable gait planning.',
      applications: ['Surveillance & Security', 'Defense & Military', 'Geomapping', 'Construction Site Monitoring'],
      features: [
        'Line following, object tracking, and tag recognition.',
        'Self-balancing mode using real-time IMU sensor data.',
        'Performance mode mimicking real-world dog behaviors.',
        'Equipped with HD wide-angle camera for AI vision.'
      ],
      img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800',
      icon: <Activity size={24} />
    },
    {
      id: 'krumi',
      name: 'Krumi Robot',
      tagline: 'Precision 5-DOF AI Robotic Arm',
      desc: 'Krumi is an AI-driven Raspberry Pi-based robot featuring a 5-DOF robotic arm and a wide-angle HD camera powered by OpenCV. It supports motion control, machine vision, and deep learning.',
      applications: ['Industrial Automation', 'Warehouse & Logistics', 'Hazardous Inspection', 'Space Exploration'],
      features: [
        'AI-powered 5-DOF vision arm for precise manipulation.',
        'Remote control via the PHN Bhritya app (Android/iOS).',
        'All-terrain adaptability for stable operation.',
        'Powered by Raspberry Pi & OpenCV for deep learning.'
      ],
      img: 'https://images.unsplash.com/photo-1561144443-f54683cb463c?auto=format&fit=crop&q=80&w=800',
      icon: <Layers size={24} />
    },
    {
      id: 'bionic',
      name: 'Bionic Hand',
      tagline: 'AI-Powered Gesture Recognition Prosthetic',
      desc: 'A highly advanced prosthetic device that mimics human hand movement using 3D printing, servo motors, and AI-powered gesture recognition.',
      applications: ['Medical Prosthetics', 'Rehabilitation', 'Industrial Automation', 'Robotics Research'],
      features: [
        'Real-time gesture recognition using Mediapipe & OpenCV.',
        'Arduino-controlled servo motors for precise movement.',
        'Smart learning algorithms that adapt to user movements.',
        'Modular 3D-printed design for lightweight durability.'
      ],
      img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
      icon: <Cpu size={24} />
    },
    {
      id: 'poppy',
      name: 'Poppy Humanoid',
      tagline: 'Modular STEM Research Humanoid',
      desc: 'A stationary humanoid robot with a 3D-printed modular structure, controlled by Arduino and servo motors to perform various human-like actions.',
      applications: ['STEM Education', 'AI Demonstrations', 'Medical Training', 'Human-Robot Interaction'],
      features: [
        '3D-printed customizable body for research and demos.',
        'Motion control via Arduino for precise limb movement.',
        'Autonomous and remote control operation modes.',
        'Modular structure for easy maintenance and upgrades.'
      ],
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800',
      icon: <Box size={24} />
    }
  ];

  return (
    <div className="products-page">
      {/* 1. Hero Section */}
      <section className="products-hero">
        <div className="hero-bg-accent">
          <div className="hexagon-grid"></div>
        </div>
        <div className="container-p hero-flex">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-badge">OUR PRODUCTS</div>
            <h1 className="hero-h1">
              Robotics Products Built for <span className="blue-gradient">Innovation</span>
            </h1>
            <p className="hero-p">
              Explore PHN Technology’s robotics systems designed for STEM education, 
              AI experimentation, automation, prosthetics, and intelligent mobility.
            </p>
          </motion.div>

          <div className="hero-product-stage">
            <div className="stage-pedestal">
              <div className="pedestal-top"></div>
              <div className="pedestal-glow"></div>
            </div>
            
            <div className="stage-robots">
              <motion.img 
                src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=400" 
                className="robot-float r1"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400" 
                className="robot-float r2"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>

            <div className="floating-labels">
              {['AI Vision', 'ROS', 'OpenCV', 'Arduino', 'Raspberry Pi', 'Gesture Recognition'].map((label, i) => (
                <motion.div 
                  key={i} 
                  className={`f-label l${i+1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Overview Section */}
      <section className="product-overview">
        <div className="container-p">
          <div className="overview-card">
            <p className="overview-p">
              PHN’s robotics products combine mechanical design, embedded systems, AI vision, 
              and hands-on experimentation to help students, researchers, and industries explore future-ready technologies.
            </p>
            <div className="category-chips">
              <div className="p-chip">STEM Robotics</div>
              <div className="p-chip">AI Vision</div>
              <div className="p-chip">Prosthetics</div>
              <div className="p-chip">Humanoid Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Showcase */}
      <section className="product-showcase">
        <div className="container-p">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className={`product-row ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="product-visual">
                <div className="visual-stage">
                  <div className="p-pedestal"></div>
                  <img src={product.img} alt={product.name} className="main-p-img" />
                  <div className="p-glow-ring"></div>
                </div>
              </div>

              <div className="product-details">
                <div className="d-icon">{product.icon}</div>
                <h2 className="p-title">{product.name}</h2>
                <h4 className="p-tagline">{product.tagline}</h4>
                <p className="p-desc">{product.desc}</p>
                
                <div className="app-tags">
                  {product.applications.map((app, i) => (
                    <span key={i} className="app-tag">{app}</span>
                  ))}
                </div>

                <div className="p-features">
                  {product.features.map((feat, i) => (
                    <div key={i} className="p-feature-item">
                      <CheckCircle2 size={18} className="feat-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-buttons">
                  <button className="btn-p-main">View Details</button>
                  <button className="btn-p-outline">Enquire Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Product Comparison Section */}
      <section className="product-comparison">
        <div className="container-p">
          <div className="sec-header">
            <h2 className="sec-h2">Compare Robotics Products</h2>
          </div>

          <div className="comparison-table-wrapper">
            <table className="p-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Platform</th>
                  <th>Best For</th>
                  <th>AI/Control</th>
                  <th>Key Capability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Shvana Robot', platform: 'Raspberry Pi + ROS', best: 'Mobility, surveillance', control: 'AI vision + IMU', cap: 'Quadruped mobility' },
                  { name: 'Krumi Robot', platform: 'Raspberry Pi + OpenCV', best: 'Object manipulation', control: 'Vision + 5-DOF', cap: 'Arm precision' },
                  { name: 'Bionic Hand', platform: 'Arduino + OpenCV', best: 'Prosthetics, research', control: 'Gesture rec.', cap: 'Motion mimicry' },
                  { name: 'Poppy Humanoid', platform: 'Arduino + Servos', best: 'STEM demos, training', control: 'Manual/Auto', cap: 'Humanoid actions' }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="row-name">{row.name}</td>
                    <td>{row.platform}</td>
                    <td>{row.best}</td>
                    <td>{row.control}</td>
                    <td className="row-cap">{row.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-mobile">
            {[
              { name: 'Shvana Robot', platform: 'Raspberry Pi + ROS', best: 'Mobility, surveillance', control: 'AI vision + IMU', cap: 'Quadruped mobility' },
              { name: 'Krumi Robot', platform: 'Raspberry Pi + OpenCV', best: 'Object manipulation', control: 'Vision + 5-DOF', cap: 'Arm precision' },
              { name: 'Bionic Hand', platform: 'Arduino + OpenCV', best: 'Prosthetics, research', control: 'Gesture rec.', cap: 'Motion mimicry' },
              { name: 'Poppy Humanoid', platform: 'Arduino + Servos', best: 'STEM demos, training', control: 'Manual/Auto', cap: 'Humanoid actions' }
            ].map((row, i) => (
              <div key={i} className="comp-card-m">
                <h4>{row.name}</h4>
                <div className="comp-row-m"><span>Platform:</span> {row.platform}</div>
                <div className="comp-row-m"><span>Best For:</span> {row.best}</div>
                <div className="comp-row-m"><span>Key Cap:</span> {row.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Use Cases Section */}
      <section className="product-use-cases">
        <div className="container-p">
          <div className="sec-header">
            <h2 className="sec-h2">Where These Products Create Impact</h2>
          </div>
          <div className="use-case-grid">
            {[
              { title: 'STEM Labs', text: 'Empowering future innovators.', icon: <Microscope size={24}/> },
              { title: 'Robotics Research', text: 'Advanced development platforms.', icon: <Settings size={24}/> },
              { title: 'AI Demonstrations', text: 'Visualizing computer vision.', icon: <Sparkles size={24}/> },
              { title: 'Industrial Training', text: 'Real-world skill development.', icon: <Award size={24}/> },
              { title: 'Assistive Tech', text: 'Innovation for healthcare.', icon: <Smartphone size={24}/> },
              { title: 'Field Robotics', text: 'All-terrain automation.', icon: <Globe size={24}/> }
            ].map((use, i) => (
              <motion.div 
                key={i} 
                className="use-case-tile"
                whileHover={{ y: -5 }}
              >
                <div className="tile-icon-p">{use.icon}</div>
                <h4>{use.title}</h4>
                <p>{use.text}</p>
                <div className="tile-glow-p"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product CTA Section */}
      <section className="product-cta">
        <div className="container-p">
          <motion.div 
            className="cta-card-p"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-h2">Bring PHN Robotics Products to Your Lab</h2>
            <p className="cta-p">Build hands-on learning, research, and automation experiences with PHN’s robotics product ecosystem.</p>
            <div className="cta-btns">
              <button className="btn-p-main">Enquire Now <ArrowRight size={18} /></button>
              <button className="btn-p-outline">Contact PHN</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
