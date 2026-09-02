import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Languages.css';

export default function Languages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="languages" className="languages">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Languages
        </motion.h2>

        <motion.div
          className="languages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.languages.map((language, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="language-card card glow-hover"
            >
              <Globe className="language-icon" size={24} />
              <span className="language-name">{language}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
