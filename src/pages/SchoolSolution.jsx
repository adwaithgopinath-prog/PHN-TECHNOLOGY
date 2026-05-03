import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SchoolSolution.css';
import { 
  ArrowRight, Rocket, BookOpen, Star, Trophy, Target, Globe, Settings, Cpu,
  Lightbulb, Code, Gamepad2, Building2, Puzzle, Microscope, Send, Blocks, Atom, Cloud, PenTool, GraduationCap,
  CheckCircle2, Brain, Palette, Monitor, Zap, Plane, Heart, Beaker, Users, Sparkles, Presentation, Wrench
} from 'lucide-react';

const SchoolSolution = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({
    name: '', phone: '', email: '', subject: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.email && formState.subject && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const adventureStops = [
    { title: "Passion-Driven Learning", icon: <Gamepad2 size={32} />, color: "#0ea5e9", desc: "Moving beyond textbook routine to explore real-world tech & business.", outcome: "Students discover what they love to build." },
    { title: "Hands-On Industry Exposure", icon: <Building2 size={32} />, color: "#fb7185", desc: "Visits to IIT labs and research centers for practical learning.", outcome: "Students experience how real labs and industries work." },
    { title: "Real-Time Problem Solving", icon: <Puzzle size={32} />, color: "#34d399", desc: "Working on industry-standard projects that matter.", outcome: "Students learn by solving meaningful challenges." },
    { title: "Self-Learning & Analytical Thinking", icon: <Microscope size={32} />, color: "#facc15", desc: "Fostering the ability to think, ask, and solve problems.", outcome: "Students become independent thinkers." }
  ];

  const exploreTiles = [
    { title: "Robotics Kits", icon: <Cpu size={28} />, desc: "Build & program real robots.", color: "#eff6ff", iconColor: "#2563eb" },
    { title: "Coding Basics", icon: <Code size={28} />, desc: "Master the language of the future.", color: "#fff7ed", iconColor: "#ea580c" },
    { title: "AI Experiments", icon: <Brain size={28} />, desc: "Explore the world of Artificial Intelligence.", color: "#f5f3ff", iconColor: "#7c3aed" },
    { title: "Drone Concepts", icon: <Plane size={28} />, desc: "Fly & understand aerial tech.", color: "#ecfdf5", iconColor: "#059669" },
    { title: "Design Thinking", icon: <Palette size={28} />, desc: "Solve problems with creative design.", color: "#fff1f2", iconColor: "#e11d48" },
    { title: "Innovation Challenges", icon: <Zap size={28} />, desc: "Compete in real-world tech hacks.", color: "#fefce8", iconColor: "#ca8a04" }
  ];

  const premiumBenefits = [
    { title: "Entrance Exam Ready", icon: <Trophy size={32} />, label: "Exam Confidence", desc: "Equipped to ace competitive exams with ease.", color: "#8b5cf6" },
    { title: "Customized Curriculum", icon: <BookOpen size={32} />, label: "Personalized Growth", desc: "Learning paths that evolve with the student.", color: "#0ea5e9" },
    { title: "Expert-Led Training", icon: <Star size={32} />, label: "Industry Mentorship", desc: "Mentorship from top industry pioneers.", color: "#facc15" },
    { title: "Education Beyond Exams", icon: <Rocket size={32} />, label: "Life Skills", desc: "Skills that prepare you for the real world.", color: "#10b981" }
  ];

  const journeySteps = [
    { label: "Discover", sub: "Discover talent", icon: <Target size={24} />, color: "#0ea5e9" },
    { label: "Build", sub: "Build projects", icon: <Blocks size={24} />, color: "#facc15" },
    { label: "Experiment", sub: "Experiment hands-on", icon: <Atom size={24} />, color: "#34d399" },
    { label: "Present", sub: "Present ideas", icon: <Globe size={24} />, color: "#fb7185" },
    { label: "Grow", sub: "Grow confidence", icon: <Rocket size={24} />, color: "#c084fc" }
  ];

  return (
    <div className="school-solution-playful">
      {/* ===== PREMIUM SCHOOL HERO ===== */}
      <section className="kid-hero" id="school-hero">

        {/* Layer 1 — Deep blue chalkboard gradient */}
        <div className="sh-layer sh-chalk-bg" />
        {/* Layer 2 — Dot-grid pattern */}
        <div className="sh-layer sh-dot-grid" />
        {/* Layer 3 — Radial spotlight behind text */}
        <div className="sh-layer sh-spotlight" />

        {/* Layer 4 — Far-background chalk doodle SVG */}
        <div className="sh-layer sh-svg-doodles" aria-hidden="true">
          <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.1}}>
            <g transform="translate(60,80)" stroke="white" strokeWidth="2" fill="none">
              <path d="M20,60 C20,20 10,10 10,0 C10,-10 30,-10 30,0 C30,10 20,20 20,60Z"/>
              <path d="M10,45 L0,60 L10,55Z M30,45 L40,60 L30,55Z"/>
              <circle cx="20" cy="20" r="5" fill="white" opacity="0.6"/>
            </g>
            <g transform="translate(1320,100)" stroke="white" strokeWidth="2" fill="none">
              <circle cx="30" cy="30" r="8" fill="white" opacity="0.5"/>
              <ellipse cx="30" cy="30" rx="28" ry="10"/>
              <ellipse cx="30" cy="30" rx="28" ry="10" transform="rotate(60 30 30)"/>
              <ellipse cx="30" cy="30" rx="28" ry="10" transform="rotate(120 30 30)"/>
            </g>
            <g transform="translate(640,18)" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7">
              <rect x="10" y="30" width="80" height="50"/>
              <polygon points="0,30 50,5 100,30"/>
              <rect x="30" y="50" width="15" height="30"/>
              <rect x="55" y="45" width="15" height="15"/>
            </g>
            <g transform="translate(140,420)" stroke="white" strokeWidth="2" fill="none">
              <rect x="0" y="0" width="40" height="52" rx="3"/>
              <line x1="6" y1="0" x2="6" y2="52"/>
              <line x1="10" y1="12" x2="36" y2="12"/>
              <line x1="10" y1="20" x2="36" y2="20"/>
              <line x1="10" y1="28" x2="36" y2="28"/>
            </g>
            <g transform="translate(1280,410)" stroke="white" strokeWidth="2" fill="none">
              <path d="M20,40 C20,28 8,22 8,12 C8,4 14,0 20,0 C26,0 32,4 32,12 C32,22 20,28 20,40Z"/>
              <line x1="14" y1="44" x2="26" y2="44"/>
              <line x1="15" y1="48" x2="25" y2="48"/>
            </g>
            <text x="4%" y="32%" fontSize="42" fill="white" fontWeight="bold" opacity="0.8">+</text>
            <text x="91%" y="55%" fontSize="36" fill="white" fontWeight="bold" opacity="0.8">÷</text>
            <text x="47%" y="93%" fontSize="28" fill="white" opacity="0.7">π</text>
            <text x="74%" y="90%" fontSize="24" fill="white" opacity="0.7">∞</text>
            <text x="22%" y="88%" fontSize="26" fill="white" opacity="0.7">Σ</text>
            <text x="8%" y="14%" fontSize="24" fill="white" opacity="0.9">★</text>
            <text x="87%" y="12%" fontSize="18" fill="white" opacity="0.9">★</text>
            <text x="52%" y="8%" fontSize="16" fill="white" opacity="0.8">✦</text>
            <text x="78%" y="80%" fontSize="20" fill="white" opacity="0.8">★</text>
            <text x="3%" y="92%" fontSize="32" fill="white" fontWeight="bold" fontStyle="italic" opacity="0.8">Aa</text>
            <text x="87%" y="90%" fontSize="28" fill="white" fontWeight="bold" opacity="0.8">Bb</text>
          </svg>
        </div>

        {/* Layer 5 — Floating animated icons */}
        <motion.div className="sh-float sh-f-rocket" animate={{y:[0,-22,0],rotate:[-5,5,-5]}} transition={{repeat:Infinity,duration:6,ease:'easeInOut'}}><Rocket size={50}/></motion.div>
        <motion.div className="sh-float sh-f-book" animate={{y:[0,16,0],rotate:[0,10,0]}} transition={{repeat:Infinity,duration:5.5,ease:'easeInOut'}}><BookOpen size={44}/></motion.div>
        <motion.div className="sh-float sh-f-atom" animate={{y:[0,-14,0],rotate:[0,-18,0]}} transition={{repeat:Infinity,duration:7,ease:'easeInOut'}}><Atom size={58}/></motion.div>
        <motion.div className="sh-float sh-f-trophy" animate={{y:[0,20,0],rotate:[5,-5,5]}} transition={{repeat:Infinity,duration:8,ease:'easeInOut'}}><Trophy size={44}/></motion.div>
        <motion.div className="sh-float sh-f-bulb" animate={{y:[0,-18,0],scale:[1,1.08,1]}} transition={{repeat:Infinity,duration:4.5,ease:'easeInOut'}}><Lightbulb size={42}/></motion.div>
        <motion.div className="sh-float sh-f-code" animate={{y:[0,12,0],rotate:[-4,4,-4]}} transition={{repeat:Infinity,duration:6.5,ease:'easeInOut'}}><Code size={40}/></motion.div>
        <motion.div className="sh-float sh-f-cpu" animate={{rotate:360}} transition={{repeat:Infinity,duration:22,ease:'linear'}}><Cpu size={36}/></motion.div>
        <motion.div className="sh-float sh-f-globe" animate={{y:[0,14,0]}} transition={{repeat:Infinity,duration:7.5,ease:'easeInOut'}}><Globe size={40}/></motion.div>
        <motion.div className="sh-float sh-f-pencil" animate={{y:[0,-10,0],rotate:[-12,0,-12]}} transition={{repeat:Infinity,duration:5,ease:'easeInOut'}}><PenTool size={38}/></motion.div>
        <motion.div className="sh-float sh-f-cloud1" animate={{x:[0,20,0]}} transition={{repeat:Infinity,duration:12,ease:'easeInOut'}}><Cloud size={72}/></motion.div>
        <motion.div className="sh-float sh-f-cloud2" animate={{x:[0,-18,0]}} transition={{repeat:Infinity,duration:10,ease:'easeInOut'}}><Cloud size={56}/></motion.div>
        <motion.div className="sh-float sh-f-puzzle" animate={{y:[0,-16,0],rotate:[0,15,0]}} transition={{repeat:Infinity,duration:6,ease:'easeInOut'}}><Puzzle size={36}/></motion.div>

        {/* Layer 6 — Kid silhouettes */}
        <div className="sh-kids-container" aria-hidden="true">
          <div className="sh-kid sh-kid-left">
            <div className="sh-kid-head" />
            <div className="sh-kid-body" />
            <div className="sh-kid-backpack" />
            <div className="sh-kid-arm" />
          </div>
          <div className="sh-kid sh-kid-right">
            <div className="sh-kid-head" />
            <div className="sh-kid-body" />
            <div className="sh-kid-backpack sh-kid-backpack-r" />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="sh-content-wrapper">
          <motion.div className="sh-content" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:'easeOut'}}>

            <motion.div className="sh-eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}}>
              <span className="sh-eyebrow-dot"/>
              SCHOOL SOLUTION
              <span className="sh-eyebrow-dot"/>
            </motion.div>

            <motion.h1 className="sh-headline" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.7}}>
              Revolutionizing Education<br/>
              <span className="sh-headline-accent">From Ordinary to Extraordinary</span>
            </motion.h1>

            <motion.p className="sh-subheadline" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.35,duration:0.6}}>
              Helping students discover talent, build confidence, and learn through robotics, AI, creativity, and real-world problem solving.
            </motion.p>

            <motion.div className="sh-cta-row" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.6}}>
              <a href="#transform" className="sh-cta sh-cta-primary">Explore Program <ArrowRight size={18}/></a>
              <a href="#contact" className="sh-cta sh-cta-secondary">Get In Touch</a>
            </motion.div>

            <motion.div className="sh-stats-row" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7,duration:0.6}}>
              {[
                {icon:<Building2 size={15}/>, label:'Robotics Labs'},
                {icon:<GraduationCap size={15}/>, label:'IIT Exposure'},
                {icon:<Code size={15}/>, label:'Real Projects'},
                {icon:<Rocket size={15}/>, label:'Future Skills'},
              ].map((s,i)=>(
                <div className="sh-stat-chip" key={i}>{s.icon}<span>{s.label}</span></div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="sh-wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80Z" fill="white"/>
          </svg>
        </div>

      </section>

      {/* 1. Intro Section: Student Transformation Journey */}
      <section className="stem-section intro-transformation">
        {/* Background Doodles & Blobs */}
        <div className="transformation-bg-elements">
          <div className="blob blob-left"></div>
          <div className="blob blob-right"></div>
          <div className="doodle-overlay"></div>
        </div>

        <div className="kid-container">
          <div className="section-header-centered">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="transformation-title"
            >
              From Routine Learning to Real-World Discovery
            </motion.h2>
            <motion.p 
              className="transformation-subtitle"
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              PHN helps students move beyond exam-focused learning into hands-on exploration, 
              creativity, and future-ready problem solving.
            </motion.p>
          </div>
          
          <div className="transformation-journey-wrapper">
            {/* Left Panel: Routine Learning */}
            <motion.div 
              className="transformation-panel routine-panel" 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="panel-badge routine">Traditional Model</div>
              <h3>ROUTINE LEARNING</h3>
              <div className="panel-content">
                <ul className="transformation-list">
                  <li><span className="bullet-cross">✕</span> Exams first</li>
                  <li><span className="bullet-cross">✕</span> Textbook only</li>
                  <li><span className="bullet-cross">✕</span> Limited exploration</li>
                  <li><span className="bullet-cross">✕</span> Passive learning</li>
                </ul>
              </div>
            </motion.div>

            {/* Center: Transformation Bridge */}
            <div className="transformation-center">
              <div className="bridge-portal">
                <motion.div 
                  className="portal-ring"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="bridge-arrow-large">
                  <motion.div 
                    className="path-dots"
                    animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <ArrowRight size={60} className="bridge-icon" />
                </div>
                <div className="bridge-label">PHN TRANSFORMATION</div>
              </div>
            </div>

            {/* Right Panel: Discovery */}
            <motion.div 
              className="transformation-panel discovery-panel" 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="panel-badge discovery">PHN School Solution</div>
              <h3>REAL-WORLD DISCOVERY</h3>
              <div className="panel-content">
                <ul className="transformation-list">
                  <li><CheckCircle2 className="bullet-check" size={20} /> Passion discovery</li>
                  <li><CheckCircle2 className="bullet-check" size={20} /> Robotics & AI exposure</li>
                  <li><CheckCircle2 className="bullet-check" size={20} /> Real-world challenges</li>
                  <li><CheckCircle2 className="bullet-check" size={20} /> Creative self-learning</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Transformation Chips */}
          <div className="transformation-chips-row">
            {[
              { text: 'Passion', color: '#0ea5e9', tooltip: 'Discovering inner potential' },
              { text: 'Creativity', color: '#f43f5e', tooltip: 'Unlocking original thinking' },
              { text: 'Innovation', color: '#facc15', tooltip: 'Building future solutions' },
              { text: 'Real-World Learning', color: '#10b981', tooltip: 'Industry-level exposure' }
            ].map((chip, i) => (
              <motion.div 
                key={i} 
                className="transformation-chip" 
                style={{ '--chip-color': chip.color }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="chip-text">{chip.text}</span>
                <div className="chip-tooltip">{chip.tooltip}</div>
              </motion.div>
            ))}
          </div>

          {/* Impact Strip */}
          <div className="impact-strip-container">
            <div className="impact-label">Students learn to:</div>
            <div className="impact-items">
              {[
                { icon: <Brain size={20} />, text: 'Think' },
                { icon: <Wrench size={20} />, text: 'Build' },
                { icon: <Zap size={20} />, text: 'Experiment' },
                { icon: <Presentation size={20} />, text: 'Present' }
              ].map((item, i) => (
                <div key={i} className="impact-item">
                  <span className="impact-icon">{item.icon}</span>
                  <span className="impact-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Transformative Approach: Adventure Map */}
      <section id="transform" className="stem-section adventure-map-bg">
        <div className="kid-container">
          <div className="section-header-centered">
            <h2 className="kid-section-title">Our Transformative Approach</h2>
            <p className="kid-subtitle">Step into a world where technology meets imagination.</p>
          </div>

          <div className="adventure-path-container">
            <svg className="adventure-line-svg" viewBox="0 0 1000 200" fill="none">
              <path d="M50 100 Q 250 20 450 100 T 850 100" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 12" />
            </svg>
            
            <div className="adventure-grid">
              {adventureStops.map((stop, idx) => (
                <motion.div 
                  key={idx} 
                  className="adventure-stop"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="stop-number" style={{ background: stop.color }}>0{idx + 1}</div>
                  <div className="adventure-card">
                    <div className="adv-icon-box" style={{ background: `${stop.color}15`, color: stop.color }}>
                      {stop.icon}
                    </div>
                    <h3>{stop.title}</h3>
                    <p>{stop.desc}</p>
                    <div className="outcome-tag" style={{ color: stop.color }}>
                      <strong>Outcome:</strong> {stop.outcome}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Students Get to Explore */}
      <section className="stem-section explore-tiles-section">
        <div className="kid-container">
          <div className="section-header-centered">
            <h2 className="kid-section-title">What Students Get to Explore</h2>
            <p className="kid-subtitle">Diving deep into the technologies shaping our future.</p>
          </div>

          <div className="explore-grid">
            {exploreTiles.map((tile, idx) => (
              <motion.div 
                key={idx} 
                className="explore-tile"
                style={{ backgroundColor: tile.color }}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="tile-icon" style={{ color: tile.iconColor }}>
                  {tile.icon}
                </div>
                <h4>{tile.title}</h4>
                <p>{tile.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us: Premium Benefit Cards */}
      <section className="stem-section benefits-premium">
        <div className="kid-container">
          <div className="section-header-centered">
            <h2 className="kid-section-title">Why Choose PHN School Solution?</h2>
            <p className="kid-subtitle">We empower schools to become hubs of innovation.</p>
          </div>

          <div className="benefits-premium-grid">
            {premiumBenefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="benefit-premium-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="benefit-icon-wrapper" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <div className="benefit-label" style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>
                  {benefit.label}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Learning Journey: Winding Path */}
      <section className="stem-section journey-premium-section">
        <div className="kid-container">
          <div className="section-header-centered">
            <h2 className="kid-section-title">Your Learning Journey</h2>
            <p className="kid-subtitle">A playful path from curiosity to confidence.</p>
          </div>

          <div className="journey-premium-wrapper">
            {journeySteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  className="journey-premium-step"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="step-num-circle" style={{ background: step.color }}>{idx + 1}</div>
                  <div className="step-icon-box" style={{ color: step.color }}>
                    {step.icon}
                  </div>
                  <div className="step-text-box">
                    <h4>{step.label}</h4>
                    <p>{step.sub}</p>
                  </div>
                </motion.div>
                {idx < journeySteps.length - 1 && (
                  <div className="journey-connector" style={{ background: `linear-gradient(90deg, ${step.color}, ${journeySteps[idx+1].color})` }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Get In Touch Section */}
      <section id="contact" className="stem-section contact-premium-section">
        <div className="kid-container">
          <div className="contact-grid">
            <motion.div className="contact-visual-side" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="contact-info-card">
                <h2>Bring PHN’s School Solution to Your Campus</h2>
                <p>Let’s design a future-ready learning experience for your students.</p>
                
                <div className="contact-chips">
                  <div className="contact-chip"><Sparkles size={16} /> Robotics labs</div>
                  <div className="contact-chip"><Zap size={16} /> Hands-on workshops</div>
                  <div className="contact-chip"><Globe size={16} /> Future-ready curriculum</div>
                </div>

                <div className="contact-illustration">
                  {/* Premium illustration placeholder using icons and shapes */}
                  <div className="ill-bg-blobs">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                  </div>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="ill-gear">
                    <Settings size={80} strokeWidth={1} opacity={0.2} />
                  </motion.div>
                  <div className="ill-icons">
                    <Rocket className="ill-rocket" size={40} />
                    <Brain className="ill-brain" size={40} />
                    <Lightbulb className="ill-bulb" size={40} />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-side" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="premium-form-card">
                {isSubmitted ? (
                  <div className="success-message">
                    <CheckCircle2 size={64} className="success-icon" />
                    <h3>Message Sent Successfully!</h3>
                    <p>Our team will reach out to your school shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="field-group">
                        <label>Name *</label>
                        <input type="text" name="name" placeholder="John Doe" required value={formState.name} onChange={handleInputChange} />
                      </div>
                      <div className="field-group">
                        <label>Phone *</label>
                        <input type="tel" name="phone" placeholder="+91 00000 00000" required value={formState.phone} onChange={handleInputChange} />
                      </div>
                      <div className="field-group">
                        <label>Email *</label>
                        <input type="email" name="email" placeholder="school@example.com" required value={formState.email} onChange={handleInputChange} />
                      </div>
                      <div className="field-group">
                        <label>Subject *</label>
                        <input type="text" name="subject" placeholder="Partnership Inquiry" required value={formState.subject} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="field-group">
                      <label>Message *</label>
                      <textarea name="message" placeholder="Tell us about your school..." required rows="4" value={formState.message} onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit" className="premium-submit-btn">
                      Submit Now <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolSolution;
