import React from 'react';
import { motion } from 'framer-motion';
import { Code, Code2, ExternalLink } from 'lucide-react';
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
              className="hackathon-item card"
            >
              <div className="hackathon-number" aria-hidden="true">{index + 1}</div>
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
                  {hackathon.demo && (
                    <a
                      href={hackathon.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hackathon-demo-link"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
                {typeof hackathon.description === 'string' && (
                  <p className="hackathon-description">{hackathon.description}</p>
                )}
                {Array.isArray(hackathon.description) && (
                  <ul className="hackathon-description-list">
                    {hackathon.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {hackathon.github && (
                    <div className="hackathon-links">
                      <a
                        href={hackathon.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-small"
                      >
                        <Code size={14} />
                        GitHub
                      </a>
                    </div>
                  )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
