import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'InsureClaim Vision',
    subtitle: 'AI Vehicle Damage Assessment',
    description: 'An AI-powered computer vision platform designed to automate vehicle insurance claim assessments by segmenting auto damage, estimating cost impacts, and generating claim reports.',
    category: 'ml',
    stack: ['FastAPI', 'React', 'OpenCV', 'Gemini 2.5 Flash'],
    github: 'https://github.com/Bobby-111/Insure_Claim_Vision',
    live: 'https://insureclaimvision.netlify.app/',
    features: [
      'Segment vehicle panels and detect cracks/dents',
      'Estimate repair costs based on damage severity',
      'Generate downloadable PDF claim reports automatically'
    ],
    metrics: ['96% Accuracy', 'Sub-3s Inference', '100% Auto Parse'],
    icon: '🚗'
  },
  {
    title: 'SignCrypt',
    subtitle: 'Gesture Cryptography Suite',
    description: 'An interactive sign language translation and secure messaging application. Translates gestured inputs on the client side and encrypts text communications using symmetric key cryptography.',
    category: 'ml',
    stack: ['TensorFlow', 'MediaPipe', 'OpenCV', 'TFLite', 'Scikit-Learn'],
    github: 'https://github.com/slanguage619-stack/SignCrypt.git',
    live: 'https://signcrypt.netlify.app/',
    features: [
      'Real-time gesture keyframe extraction with MediaPipe',
      'Client-side low latency neural network inference',
      'End-to-end message encryption with AES-256 algorithms'
    ],
    metrics: ['95% Gesture Recog.', '30fps Inference', 'AES-256 Encryption'],
    icon: '🤟'
  },
  {
    title: 'Water Quality Prediction',
    subtitle: 'Environmental Analytics App',
    description: 'A machine learning analytics platform providing classification models to assess drinking water safety based on key chemical metrics and organic compound elements.',
    category: 'ml',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/sandeep2811-dev/aictewaterpredictionintern',
    live: '', // GitHub only
    features: [
      'Evaluate 6+ critical chemical properties for potability',
      'Interact with live parameter sliders and predictive models',
      'Display detailed classification boundary reports'
    ],
    metrics: ['92% Accuracy Score', 'Real-time Preds', '6 Parameters'],
    icon: '💧'
  },
  {
    title: 'InfoSnity',
    subtitle: 'College Management Portal',
    description: 'A comprehensive educational resources, student prepare-and-track dashboard, and campus-wide notifications system built to streamline student-administrator communication.',
    category: 'fullstack',
    stack: ['Node.js', 'React.js', 'PostgreSQL', 'REST APIs', 'Microservices'],
    github: 'https://github.com/sandeep2811-dev/INFOSNITY_Backend',
    live: 'https://infty-frontend.vercel.app',
    features: [
      'Placement readiness tracker and mock interview schedule manager',
      'Secure portal separating administrator, student, and recruiter routes',
      'Real-time notices and resources distribution channels'
    ],
    metrics: ['500+ Active Users', '30% Less Overhead', 'Microservices Arch'],
    icon: '🏫'
  },
  {
    title: 'JobSpark',
    subtitle: 'Recruiter & Applicant Platform',
    description: 'A job posting, searching, and applicant status tracking software application equipped with candidate matching algorithms, email alerts, and portfolio profiles.',
    category: 'fullstack',
    stack: ['Node.js', 'PostgreSQL', 'JWT Auth', 'REST APIs', 'Express'],
    github: 'https://github.com/sandeep2811-dev/JOBSPARK',
    live: 'https://jobspark-1.onrender.com',
    features: [
      'Recruiters manage listings and track candidate pipelines',
      'Applicants apply, search by skills, and view interview status',
      'Optimized data retrieval times using advanced PostgreSQL indexing'
    ],
    metrics: ['~40% Query Speedup', 'JWT Secure Auth', 'ATS Pipeline'],
    icon: '⚡'
  },
  {
    title: 'CodeFunda',
    subtitle: 'Coding Practice Platform',
    description: 'A coding platform and programming sandboxed playground backend built to support concurrent users submitting, executing, and compiling challenges.',
    category: 'fullstack',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/sandeep2811-dev/CodeFunda_Backend',
    live: '', // GitHub only
    features: [
      'Sandboxed submission and test-cases evaluation runtime',
      'Optimized database queries decreasing API request latency',
      'Scalable backend system handling traffic spikes smoothly'
    ],
    metrics: ['200+ Concurrents', 'Sub-200ms Latency', '~35% Query Gain'],
    icon: '💻'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <p className="section-label">My Works</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            A selection of software development and artificial intelligence projects.
          </p>
        </div>

        {/* Filter Tab buttons */}
        <div className="projects-filter-tabs reveal">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ml', label: 'Machine Learning' },
            { id: 'fullstack', label: 'Full Stack Development' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`filter-tab-btn ${filter === tab.id ? 'active' : ''}`}
              data-hover
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                className="project-card glass-panel"
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 45px rgba(220, 38, 38, 0.1), 0 4px 12px rgba(0, 0, 0, 0.02)',
                  borderColor: 'rgba(220, 38, 38, 0.22)' 
                }}
              >
                {/* Header info */}
                <div className="project-top-row">
                  <div className="project-icon-box">
                    <span className="p-icon">{project.icon}</span>
                  </div>
                  <span className="project-cat-badge">
                    {project.category === 'ml' ? 'AI / ML' : 'Full Stack'}
                  </span>
                </div>

                <div className="project-headings">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack badges */}
                <div className="project-tech-badges">
                  {project.stack.map(tech => (
                    <span className="p-tech-tag" key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Key Features Bullet points */}
                <div className="project-features-list">
                  <h4 className="features-section-title">Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-dot">✦</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="project-metrics-row">
                  {project.metrics.map((metric, i) => (
                    <div className="metric-badge" key={i}>
                      <span className="metric-val">{metric.split(' ')[0]}</span>
                      <span className="metric-lbl">{metric.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="project-action-buttons">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-btn p-btn-github"
                    data-hover
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub Code</span>
                  </a>
                  
                  {project.live ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-btn p-btn-live"
                      data-hover
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button 
                      className="p-btn p-btn-disabled" 
                      disabled
                      title="No live deployment available for this backend-only or CLI repository"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span>Repo Only</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
