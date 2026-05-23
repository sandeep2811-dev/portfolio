import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImg from '../assets/sandeep.jpeg';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Typed text animation
    const words = ['Full Stack Developer', 'React + Node.js', 'Product-Focused Builder', 'CS @ RGUKT IIIT'];
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
        setTimeout(type, 1800);
        return;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 55 : 90);
    };

    const timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Geometric background shapes */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-lines" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="badge-dot" />
            Available for opportunities — Bengaluru / Hyderabad
          </div>

          <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Sandeep<br />
            <span className="gradient-text">Pullareddy</span>
          </h1>

          <div className="hero-role animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="role-cursor">_</span>
            <span ref={titleRef} className="typed-text" />
          </div>

          <p className="hero-description animate-fade-up" style={{ animationDelay: '0.4s' }}>
            CS undergraduate building full-stack web applications end-to-end.
            Shipped 3 projects with React, Node.js &amp; PostgreSQL. CGPA 9.0 at RGUKT IIIT Ongole.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>

          <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { num: '3+', label: 'Projects Shipped' },
              { num: '9.0', label: 'CGPA' },
              { num: '2027', label: 'Graduation' },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-wrap animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <div className="image-ring ring-1" />
          <div className="image-ring ring-2" />
          <div className="image-container">
            <img src={profileImg} alt="Sandeep Pullareddy" />
          </div>
          <div className="image-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
            Full Stack Dev
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </a>
    </section>
  );
}
