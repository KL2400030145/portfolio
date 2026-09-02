import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="timeline-item">
              <div className="timeline-marker">
                {index === 0 ? (
                  <GraduationCap className="timeline-icon" size={24} />
                ) : (
                  <Award className="timeline-icon" size={20} />
                )}
              </div>
              <div className="timeline-content card glow-hover">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                {edu.period && <p className="period">{edu.period}</p>}
                <div className="score-badge">
                  <span className="score-label">{edu.scoreType}</span>
                  <span className="score-value">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
