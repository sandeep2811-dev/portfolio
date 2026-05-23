import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#38BDF8',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#6EE7B7',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Python', 'FastAPI'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#818CF8',
    skills: ['PostgreSQL', 'Query Optimization', 'Indexing', 'Data Modeling', 'Redis'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🔧',
    color: '#F59E0B',
    skills: ['Git & GitHub', 'Docker', 'Linux', 'Postman', 'Agile / Scrum'],
  },
  {
    category: 'Core CS',
    icon: '🧠',
    color: '#F472B6',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Clean Code'],
  },
  {
    category: 'Learning Now',
    icon: '🚀',
    color: '#34D399',
    skills: ['React Native', 'Cloud Deployment', 'Microservices', 'System Design Advanced'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-sub">
            A curated stack built through real projects, internships, and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              className="skill-card reveal"
              key={group.category}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill} data-hover>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
