import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          <span className="logo-bracket">&lt;</span>SP<span className="logo-bracket">/&gt;</span>
        </a>
        <p className="footer-copy">
          © {year} Sandeep Pullareddy. Built with React &amp; ❤️
        </p>
        <div className="footer-links">
          <a href="https://github.com/sandeep2811-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sandeep-pullareddy-a71922330/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:pullareddysandeep@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
