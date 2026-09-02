import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-branding">
              <h3>Moghal Lithishma Begum</h3>
              <p>Computer Science Engineering Student</p>
            </div>

            <p className="footer-description">
              Building modern software solutions and exploring emerging technologies.
              Always learning, always growing.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Moghal Lithishma Begum. All rights reserved.</p>
          <p className="footer-note">
            Designed & Built with <span className="heart">❤</span> | Using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
