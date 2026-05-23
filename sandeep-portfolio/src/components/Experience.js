import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Engineering Intern — AI/ML Data Pipeline',
    company: 'AICTE & Edunet Foundation',
    period: 'May 2025 – July 2025',
    type: 'Internship',
    color: '#6EE7B7',
    points: [
      'Built backend modules for real-time data processing pipelines; optimized stream handling and buffering, improving system responsiveness by ~35%.',
      'Designed fault-tolerant asynchronous workflows for high-velocity data; delivered production-ready services following Agile sprints.',
      'Collaborated on architecture decisions; documented pipeline design, API contracts, and deployment procedures for team knowledge sharing.',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'RGUKT IIIT Ongole',
    period: '2023 – 2027',
    grade: 'CGPA: 9.0',
    color: '#818CF8',
  },
  {
    degree: 'Pre-University Course (Class 12)',
    school: 'RGUKT IIIT Ongole',
    period: '2021 – 2023',
    grade: 'CGPA: 9.29',
    color: '#38BDF8',
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Journey</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="exp-layout">
          {/* Work */}
          <div className="exp-col reveal">
            <h3 className="exp-col-title">
              <span className="col-icon">💼</span> Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" style={{ background: exp.color }} />
                  <div className="timeline-card" data-hover>
                    <div className="tc-top">
                      <span className="tc-type" style={{ color: exp.color }}>{exp.type}</span>
                      <span className="tc-period">{exp.period}</span>
                    </div>
                    <h4 className="tc-role">{exp.role}</h4>
                    <p className="tc-company">{exp.company}</p>
                    <ul className="tc-points">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="exp-col reveal" style={{ transitionDelay: '0.15s' }}>
            <h3 className="exp-col-title">
              <span className="col-icon">🎓</span> Education
            </h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" style={{ background: edu.color }} />
                  <div className="timeline-card" data-hover>
                    <div className="tc-top">
                      <span className="tc-type" style={{ color: edu.color }}>{edu.grade}</span>
                      <span className="tc-period">{edu.period}</span>
                    </div>
                    <h4 className="tc-role">{edu.degree}</h4>
                    <p className="tc-company">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights box */}
            <div className="highlights-box">
              <h4 className="hb-title">Key Highlights</h4>
              <ul className="hb-list">
                {[
                  'Shipped 3 full-stack projects with end-to-end ownership',
                  'Proficient in translating requirements into scalable architecture',
                  'Experienced in code reviews, technical docs & cross-functional collab',
                  'Actively learning React Native, FastAPI & cloud deployment',
                ].map((h, i) => (
                  <li key={i}>
                    <span className="hb-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
