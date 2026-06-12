import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoLink = `mailto:pullareddysandeep@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => setStatus(''), 4000);
  };

  const contactDetails = [
    {
      icon: '📧',
      label: 'Email Address',
      value: 'pullareddysandeep@gmail.com',
      href: 'mailto:pullareddysandeep@gmail.com',
      actionLabel: 'Send email'
    },
    {
      icon: '💼',
      label: 'LinkedIn Profile',
      value: 'sandeep-pullareddy-a71922330/',
      href: 'https://linkedin.com/in/sandeep-pullareddy-a71922330/',
      actionLabel: 'Connect'
    },
    {
      icon: '💻',
      label: 'GitHub Repositories',
      value: 'sandeep2811-dev',
      href: 'https://github.com/sandeep2811-dev',
      actionLabel: 'Follow'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left Details Column */}
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Get In Touch</p>
            <h2 className="contact-heading">
              Let's Build Something<br />
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="contact-text">
              I am actively seeking Full Stack Developer roles, Machine Learning Engineer roles, and internships.
              Feel free to reach out via the form, email, or LinkedIn. I am open to remote roles or relocating.
            </p>

            <div className="contact-details-grid">
              {contactDetails.map((c, i) => (
                <div className="contact-detail-card glass-panel" key={i} data-hover>
                  <span className="cdc-icon">{c.icon}</span>
                  <div className="cdc-info">
                    <span className="cdc-label">{c.label}</span>
                    <span className="cdc-value">{c.value}</span>
                  </div>
                  <a 
                    href={c.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cdc-action-btn"
                    download={c.isDownload}
                    data-hover
                  >
                    {c.actionLabel}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Message Form Column */}
          <motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className="contact-form glass-panel" onSubmit={handleSubmit}>
              <h3 className="form-title">Send Message</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="rahul@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hi Sandeep, I'd love to discuss a developer / ML role..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit-btn" data-hover>
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>

              {status && (
                <div className="form-status-msg">
                  <span className="status-dot" />
                  {status}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
