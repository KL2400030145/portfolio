import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const iconMap = {
    'Programming Languages': Code,
    'Web Technologies': Code,
    'Core CS': Zap,
    'Cloud & Infrastructure': Cloud,
    'Backend & APIs': Database,
    'Database': Database,
    'Soft Skills': Zap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(portfolioData.skills).map(([category, skills]) => {
            const Icon = iconMap[category] || Code;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="skill-category card glow-hover"
              >
                <div className="skill-header">
                  <Icon className="skill-icon" size={24} />
                  <h3>{category}</h3>
                </div>
                <div className="skill-items">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            I focus on continuous learning and practical application of technologies
            rather than claiming expertise levels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
