import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cert-card card glow-hover"
            >
              <Award className="cert-icon" size={28} />
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              {cert.details && (
                <div className="cert-details">
                  <div className="detail-row">
                    <span className="detail-label">Overall:</span>
                    <span className="detail-value">{cert.details.overall}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Score:</span>
                    <span className="detail-value">{cert.details.averageScore}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Speaking:</span>
                    <span className="detail-value">{cert.details.speaking}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Writing:</span>
                    <span className="detail-value">{cert.details.writing}</span>
                  </div>
                </div>
              )}

              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
