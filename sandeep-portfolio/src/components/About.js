import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left reveal">
            <p className="section-label">About Me</p>
            <h2 className="about-heading">
              Turning ideas into<br />
              <span className="gradient-text">real products</span>
            </h2>
            <div className="about-card">
              <p>
                I'm a CS undergraduate at <strong>RGUKT IIIT Ongole</strong> (CGPA 9.0),
                graduating in April 2027. I build full-stack web applications end-to-end — 
                from designing scalable database schemas to crafting clean React frontends.
              </p>
              <p>
                During my internship at <strong>AICTE &amp; Edunet Foundation</strong>, I built backend modules 
                for real-time data processing pipelines, improved system responsiveness by ~35%, 
                and delivered production-ready services in Agile sprints.
              </p>
              <p>
                I believe in <em>writing code that lasts</em> — clean architecture, testable modules, 
                and documented APIs. Currently leveling up in React Native, FastAPI, Redis, 
                and cloud deployment.
              </p>
            </div>
            <div className="about-links">
              <a href="https://github.com/sandeep2811-dev" target="_blank" rel="noopener noreferrer" className="about-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/sandeep-pullareddy-a71922330/" target="_blank" rel="noopener noreferrer" className="about-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-right reveal">
            <div className="info-grid">
              {[
                { icon: '🎓', label: 'Degree', value: 'B.Tech Computer Science' },
                { icon: '🏫', label: 'University', value: 'RGUKT IIIT Ongole' },
                { icon: '📊', label: 'CGPA', value: '9.0 / 10.0' },
                { icon: '📍', label: 'Location', value: 'Ongole → Bengaluru / Hyd' },
                { icon: '🚀', label: 'Graduation', value: 'April 2027' },
                { icon: '💼', label: 'Looking For', value: 'Full Stack Roles' },
              ].map((item) => (
                <div className="info-card" key={item.label} data-hover>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
