import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, ExternalLink, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="contact-info">
            <div className="info-item card glow-hover">
              <Mail className="info-icon" size={28} />
              <h3>Email</h3>
              <p>{portfolioData.email}</p>
              <button onClick={copyEmail} className="copy-btn" title="Copy email">
                {copiedEmail ? (
                  <Check size={16} className="copy-icon" />
                ) : (
                  <Copy size={16} className="copy-icon" />
                )}
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="info-item card glow-hover">
              <Phone className="info-icon" size={28} />
              <h3>Phone</h3>
              <p>{portfolioData.phone}</p>
              <a href={`tel:${portfolioData.phone}`} className="btn btn-small">
                Call Me
              </a>
            </div>

            <div className="info-item card glow-hover">
              <MapPin className="info-icon" size={28} />
              <h3>Location</h3>
              <p>{portfolioData.location}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="contact-actions">
            <h3>Connect With Me</h3>
            <div className="action-buttons">
              <a
                href={`mailto:${portfolioData.email}`}
                className="btn btn-filled"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-filled"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-filled"
              >
                <Code size={18} />
                GitHub
              </a>
            </div>

            <div className="contact-note">
              <p>Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
