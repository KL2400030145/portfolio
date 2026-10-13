import React from 'react';
import { motion } from 'framer-motion';
import { Code, Code2 } from 'lucide-react';
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
            <motion.article
              key={hackathon.name}
              variants={itemVariants}
              className={`hackathon-item card${hackathon.featured ? ' hackathon-featured' : ''}`}
            >
              <div className="hackathon-number" aria-hidden="true">{index + 1}</div>
              {hackathon.featured && <span className="hackathon-featured-label">Featured</span>}
              <div className="hackathon-content">
                <div className="hackathon-title-row">
                  <Code2 className="hackathon-icon" size={20} aria-hidden="true" />
                  <div>
                    <h3>
                      {hackathon.name}
                      {hackathon.team && ` — ${hackathon.team}`}
                    </h3>
                    {hackathon.participation && (
                      <span className="hackathon-team-type">{hackathon.participation}</span>
                    )}
                  </div>
                </div>
                {hackathon.description && (
                  <p className="hackathon-description">{hackathon.description}</p>
                )}
                {hackathon.github && (
                  <a
                    href={hackathon.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small"
                  >
                    <Code size={14} />
                    GitHub
                  </a>
                )}
              </div>
              {!hackathon.featured && (
                <span className="participation-badge">Participant</span>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
