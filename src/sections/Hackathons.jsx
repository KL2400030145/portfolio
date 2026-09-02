import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hackathons.css';

export default function Hackathons() {
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
    <section id="hackathons" className="hackathons">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hackathons
        </motion.h2>

        <motion.div
          className="hackathons-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="hackathon-item card"
            >
              <div className="hackathon-number">{index + 1}</div>
              <div className="hackathon-content">
                <Code2 className="hackathon-icon" size={20} />
                <h3>{hackathon}</h3>
              </div>
              <span className="participation-badge">Participant</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
