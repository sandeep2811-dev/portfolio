import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'AI/ML Research Intern',
    company: 'AICTE & Edunet Foundation',
    period: 'May 2025 – July 2026',
    type: 'Remote Internship',
    color: '#dc2626',
    points: [
      'Built and deployed end-to-end AI/ML research pipelines and models, analyzing multi-source computer vision video streams and text inputs.',
      'Designed fault-tolerant asynchronous workflows for data processing, reducing system processing delays by ~35%.',
      'Collaborated on architectural design, documenting research findings, model parameters, API schemas, and deployment checklists.'
    ]
  },
  {
    role: 'Backend Development Intern',
    company: 'Brainstorm Edtech Pvt Ltd',
    period: 'May 2026 – July 2026',
    type: 'Pune (Hybrid)',
    color: '#ef4444',
    points: [
      'Designed and optimized database schemas, indices, and REST APIs, boosting database retrieval query speeds by ~40%.',
      'Developed secure credentials handling, password hashing pipelines, and JWT authorization mechanisms.',
      'Participated in sprint planning, code reviews, and API contract specifications to ensure system reliability.'
    ]
  }
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'RGUKT IIIT Ongole',
    period: '2023 – 2027',
    grade: 'CGPA: 9.0',
    color: '#f43f5e'
  },
  {
    degree: 'Pre-University Course (Class 12)',
    school: 'RGUKT IIIT Ongole',
    period: '2021 – 2023',
    grade: 'CGPA: 9.29',
    color: '#fda4af'
  }
];

const achievements = [
  '9.0 CGPA academic track record at RGUKT IIIT Ongole',
  'Built and deployed multiple AI/ML and Full Stack applications',
  '4x NPTEL Certifications (Cloud Computing, AI Search, Big Data, OOP Java)',
  'Hands-on Machine Learning research and pipeline optimization experience'
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Timeline</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-sub">
            My professional internships, academic roadmap, and notable achievements.
          </p>
        </div>

        <div className="exp-layout">
          {/* Work Experience Column */}
          <motion.div 
            className="exp-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="exp-col-title">
              <span className="col-icon">💼</span> Professional Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" style={{ backgroundColor: exp.color }} />
                  <div className="timeline-card glass-panel" data-hover>
                    <div className="tc-top">
                      <span className="tc-type" style={{ color: exp.color, backgroundColor: `${exp.color}10` }}>
                        {exp.type}
                      </span>
                      <span className="tc-period">{exp.period}</span>
                    </div>
                    <h4 className="tc-role">{exp.role}</h4>
                    <p className="tc-company">{exp.company}</p>
                    <ul className="tc-points">
                      {exp.points.map((p, j) => (
                        <li key={j}>
                          <span className="bullet">✦</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements Column */}
          <motion.div 
            className="exp-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="exp-col-title">
              <span className="col-icon">🎓</span> Academic Profile
            </h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" style={{ backgroundColor: edu.color }} />
                  <div className="timeline-card glass-panel" data-hover>
                    <div className="tc-top">
                      <span className="tc-type edu-grade" style={{ color: '#dc2626', backgroundColor: 'rgba(220, 38, 38, 0.05)' }}>
                        {edu.grade}
                      </span>
                      <span className="tc-period">{edu.period}</span>
                    </div>
                    <h4 className="tc-role">{edu.degree}</h4>
                    <p className="tc-company">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Box */}
            <div className="achievements-box glass-panel" data-hover>
              <h4 className="ab-title">
                <span className="ab-icon">🏆</span> Core Achievements
              </h4>
              <ul className="ab-list">
                {achievements.map((ach, i) => (
                  <li key={i}>
                    <span className="ab-dot" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
