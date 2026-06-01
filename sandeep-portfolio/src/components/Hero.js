import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImg from '../assets/sandeep.jpeg';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Typed text animation
    const words = ['Full Stack Developer', 'React + Node.js Expert', 'Product-Focused Builder', 'CS @ RGUKT IIIT'];
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

      setTimeout(type, isDeleting ? 50 : 85);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Premium gradient background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="mesh-background" />
      </div>

      <div className="container hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="badge-dot" />
            <span className="badge-text">Available for opportunities — Bengaluru / Hyderabad</span>
          </div>

          {/* Main Heading - Bold & Large */}
          <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="name-first">Sandeep</span>
            <span className="name-last">
              Pullareddy
            </span>
          </h1>

          {/* Dynamic Role with Typing Effect */}
          <div className="hero-role animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="role-label">Building</span>
            <span className="role-separator">→</span>
            <span ref={titleRef} className="typed-text" />
          </div>

          {/* Description */}
          <p className="hero-description animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Full-stack web developer crafting end-to-end applications with React, Node.js &amp; PostgreSQL. 
            3 shipped projects. <span className="highlight-text">CGPA 9.0</span> • Graduating 2027.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 14c1.49-1.46 3-3.46 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.04 1.51 4.04 3 5.5m15 0a43.05 43.05 0 0 1-5 5l-5-5" />
              </svg>
            </a>
          </div>

          {/* Stats Section */}
          <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { num: '3+', label: 'Projects Shipped', icon: '🚀' },
              { num: '9.0', label: 'CGPA', icon: '⭐' },
              { num: '2027', label: 'Graduation', icon: '🎓' },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section - Enhanced */}
        <div className="hero-image-section animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {/* Animated gradient rings */}
          <div className="ring-container">
            <div className="ring ring-outer" />
            <div className="ring ring-middle" />
            <div className="ring ring-inner" />
          </div>

          {/* Profile Image with enhanced styling */}
          <div className="image-wrapper">
            <div className="image-glow" />
            <img 
              src={profileImg} 
              alt="Sandeep Pullareddy - Full Stack Developer" 
              className="profile-image"
            />
            <div className="image-shine" />
          </div>

          {/* Floating Badge */}
          <div className="floating-badge">
            <div className="badge-icon">💻</div>
            <div className="badge-content">
              <div className="badge-label">Full Stack</div>
              <div className="badge-subtitle">Developer</div>
            </div>
          </div>

          {/* Tech Stack indicator */}
          <div className="tech-stack-indicator">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">PostgreSQL</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </a>
    </section>
  );
}