import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: '#dc2626',
    skills: ['Python', 'C++', 'JavaScript', 'SQL', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Machine Learning & AI',
    icon: '🧠',
    color: '#ef4444',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision']
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    color: '#f43f5e',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'React.js', 'Node.js', 'Express.js', 'NestJS', 'FastAPI']
  },
  {
    category: 'Core Computer Science',
    icon: '📔',
    color: '#fda4af',
    skills: ['Data Structures & Algorithms', 'DBMS', 'OOP','Operating Systems', 'Computer Networks', 'Algorithm Optimization', 'Clean Code']
  },
  {
    category: 'Tools, DevOps & Mobile',
    icon: '🔧',
    color: '#dc2626',
    skills: ['Git & GitHub', 'Linux', 'Docker', 'Postman', 'MacOS']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-sub">
            A diverse, modern skill set spanning web application engineering, machine learning workflows, and core computer science fundamentals.
          </p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              className="skill-card glass-panel"
              key={group.category}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 15px 35px rgba(220, 38, 38, 0.08), 0 4px 12px rgba(0, 0, 0, 0.02)',
                borderColor: 'rgba(220, 38, 38, 0.2)' 
              }}
            >
              <div className="skill-card-header">
                <span className="skill-icon" style={{ backgroundColor: `${group.color}15` }}>
                  {group.icon}
                </span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <motion.span 
                    className="skill-tag" 
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 38, 38, 0.08)', color: '#dc2626' }}
                    data-hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
