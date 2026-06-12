import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/sandeep.jpeg';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const words = [
      'Full Stack Developer',
      'Machine Learning Engineer',
      'Software Developer'
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const el = titleRef.current;
    if (!el) return;

    const type = () => {
      const current = words[wordIdx];
      if (isDeleting) {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
      }

      if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 40 : 80);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Red/Rose glowing gradient background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-red-1" />
        <div className="gradient-orb orb-red-2" />
        <div className="gradient-orb orb-red-3" />
        <div className="mesh-grid" />
      </div>

      <div className="container hero-inner">
        {/* Left Content Column */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Opportunities Badge */}
          <div className="hero-badge" data-hover>
            <span className="pulsing-dot" />
            <span className="badge-text">
              Open to Full Stack, ML, and Software Engineering Opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            <span className="sub-greeting">Hi, I'm Sandeep</span>
            <span className="main-title gradient-text">
              Full Stack Developer &amp;<br />
              Machine Learning Enthusiast
            </span>
          </h1>

          {/* Dynamic typing animation */}
          <div className="hero-typing-wrap">
            <span className="typing-label">Seeking roles in</span>
            <span className="typing-arrow">→</span>
            <span ref={titleRef} className="typed-role" />
          </div>

          <p className="hero-description">
            I build high-performance web applications and design intelligent machine learning solutions. 
            Currently a CSE undergraduate with a <span className="strong-text">9.0 CGPA</span>, having completed internships at Brainstorm EdTech and AICTE &amp; Edunet Foundation.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" data-hover>
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" data-hover>
              <span>Contact Me</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>

          {/* Key Metrics */}
          <div className="hero-stats-row">
            {[
              { num: '6', label: 'Projects Shipped', icon: '🚀' },
              { num: '9.0', label: 'B.Tech CGPA', icon: '🎓' },
              { num: '2', label: 'Industry Internships', icon: '💼' }
            ].map((stat, i) => (
              <div className="hero-stat-box" key={i}>
                <span className="stat-icon">{stat.icon}</span>
                <div>
                  <div className="stat-number">{stat.num}</div>
                  <div className="stat-desc">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Graphic Section */}
        <motion.div 
          className="hero-media-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated concentric rings */}
          <div className="media-concentric-rings">
            <div className="concentric-ring outer-ring" />
            <div className="concentric-ring middle-ring" />
            <div className="concentric-ring inner-ring" />
          </div>

          {/* Profile Card */}
          <div className="media-photo-frame glass-panel">
            <div className="photo-shine" />
            <img 
              src={profileImg} 
              alt="Sandeep Pullareddy - Developer & ML Engineer" 
              className="photo-img"
            />
            {/* Tech badges floating */}
            <div className="floating-tech-card ftc-1">
              <span className="tech-dot" />
              <span>Full Stack/Software Engineer</span>
            </div>
            <div className="floating-tech-card ftc-2">
              <span className="tech-dot ml-dot" />
              <span>Machine Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}