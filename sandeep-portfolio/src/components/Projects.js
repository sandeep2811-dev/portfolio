import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'CodeFunda',
    subtitle: 'Coding Practice Platform',
    description:
      'Full-stack coding platform with React frontend for problem browsing and submission. Node.js backend with REST APIs supports 200+ concurrent users with sub-200ms response times. Optimized PostgreSQL queries reduced API latency by ~35%.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/sandeep2811-dev/CodeFunda_Backend',
    highlights: ['200+ concurrent users', 'Sub-200ms responses', '~35% latency reduction'],
    color: '#6EE7B7',
    icon: '💻',
  },
  {
    title: 'JobSpark',
    subtitle: 'Job Portal Platform',
    description:
      'Full-stack job portal enabling recruiters to post and manage jobs while candidates search, apply, and track opportunities. Features secure JWT authentication and scalable data handling. Optimized data retrieval by ~40% through strategic indexing.',
    stack: ['Node.js', 'PostgreSQL', 'JWT Auth', 'REST APIs'],
    github: 'https://github.com/sandeep2811-dev/JOBSPARK',
    highlights: ['JWT Auth system', '~40% faster queries', 'Clean architecture'],
    color: '#38BDF8',
    icon: '🚀',
  },
  {
    title: 'Infosnity',
    subtitle: 'College Management Platform',
    description:
      'Centralized college management and placement preparation platform enabling student–administration communication, placement tracking, mock interview management, internship requests, alumni insights, club activities, and campus-wide updates.',
    stack: ['Node.js', 'React.js', 'PostgreSQL', 'REST APIs', 'Microservices'],
    github: 'https://github.com/sandeep2811-dev/INFOSNITY_Backend',
    highlights: ['Microservices arch', 'Multi-feature platform', 'Scalable backend'],
    color: '#818CF8',
    icon: '🏫',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            Real-world applications shipped end-to-end with focus on performance and clean code.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <div
              className="project-card reveal"
              key={project.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-hover
            >
              <div className="project-glow" style={{ background: project.color }} />

              <div className="project-top">
                <div className="project-icon-wrap" style={{ borderColor: `${project.color}30` }}>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-number">0{i + 1}</div>
              </div>

              <div className="project-body">
                <p className="project-subtitle" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((h) => (
                    <span className="highlight-chip" key={h} style={{ borderColor: `${project.color}40`, color: project.color }}>
                      ✦ {h}
                    </span>
                  ))}
                </div>

                <div className="project-stack">
                  {project.stack.map((s) => (
                    <span className="stack-badge" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ '--link-color': project.color }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <span className="project-arrow">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer reveal">
          <a
            href="https://github.com/sandeep2811-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
