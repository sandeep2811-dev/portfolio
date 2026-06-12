import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: 'Cloud Computing',
    score: '91%',
    badge: 'Elite + Gold (Topper 1%)',
    period: 'Jul-Oct 2025',
    duration: '12 Week Course',
    rollNo: 'NPTEL25CS107S3365700680',
    institution: 'IIT Kharagpur',
    color: '#dc2626',
    features: ['Elite Certification', 'Topper 1% Rank', 'Funded by MoE, Govt. of India']
  },
  {
    title: 'Statistical Foundation for Big Data Analysis',
    score: '81%',
    badge: 'Elite',
    period: 'Jan-Apr 2026',
    duration: '12 Week Course',
    rollNo: 'NPTEL26CS09S551601633',
    institution: 'IIT Kharagpur',
    color: '#ef4444',
    features: ['Elite Certification', 'Data Science & Stats Core', 'Funded by MoE, Govt. of India']
  },
  {
    title: 'Object Oriented System Development Using UML, Java and Patterns',
    score: '77%',
    badge: 'Elite',
    period: 'Jan-Apr 2026',
    duration: '12 Week Course',
    rollNo: 'NPTEL26CS46S3285903109',
    institution: 'IIT Kharagpur',
    color: '#f43f5e',
    features: ['Elite Certification', 'Software Architecture', 'UML Design Patterns']
  },
  {
    title: 'Artificial Intelligence: Search Methods for Problem Solving',
    score: '75%',
    badge: 'Elite',
    period: 'Jul-Oct 2025',
    duration: '12 Week Course',
    rollNo: 'NPTEL25CS88S3465700717',
    institution: 'IIT Madras',
    color: '#fda4af',
    features: ['Elite Certification', 'Heuristic Search & AI', 'Graph Search Optimization']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            NPTEL <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-sub">
            Elite academic achievements in Cloud Computing, AI, Software Design, and Big Data.
          </p>
        </div>

        <motion.div 
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              className="cert-card glass-panel"
              key={cert.rollNo}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.12), 0 4px 12px rgba(0, 0, 0, 0.02)',
                borderColor: 'rgba(220, 38, 38, 0.25)'
              }}
            >
              <div className="cert-top">
                <div className="cert-badge-wrap">
                  <span className="cert-badge" style={{ backgroundColor: `${cert.color}15`, color: '#dc2626' }}>
                    🏆 {cert.badge}
                  </span>
                  <span className="cert-institution">@{cert.institution}</span>
                </div>
                <div className="cert-score-ring" style={{ borderColor: cert.color }}>
                  <span className="cert-score">{cert.score}</span>
                  <span className="cert-score-label">Score</span>
                </div>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-meta">
                  <span>📅 {cert.period}</span>
                  <span className="meta-dot">•</span>
                  <span>⏱️ {cert.duration}</span>
                </p>

                <ul className="cert-features">
                  {cert.features.map((f, i) => (
                    <li key={i}>
                      <span className="bullet">✦</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cert-footer">
                <span className="cert-roll">Roll No: {cert.rollNo}</span>
                <span className="cert-verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
