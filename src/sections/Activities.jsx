import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Activities.css';

export default function Activities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="activities" className="activities">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Leadership & Activities
        </motion.h2>

        <motion.div
          className="activities-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="activity-card card glow-hover"
            >
              <div className="activity-header">
                <Users className="activity-icon" size={24} />
                <div>
                  <h3>{activity.title}</h3>
                  <p className="organization">{activity.organization}</p>
                </div>
              </div>

              <div className="activity-description">
                <ul>
                  {activity.description.map((point, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
