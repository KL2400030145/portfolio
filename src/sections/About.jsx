import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

export default function About() {
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

  const interests = [
    { icon: Zap, title: 'Software Development', text: 'Building scalable and efficient applications' },
    { icon: Target, title: 'Web Development', text: 'Creating modern, responsive web experiences' },
    { icon: Lightbulb, title: 'Cloud & AI', text: 'Exploring cloud computing and AI applications' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>{portfolioData.aboutText}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="interests-grid">
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="interest-card card glow-hover">
                  <Icon className="interest-icon" size={32} />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="interests-list">
            <h3>Key Interests</h3>
            <ul>
              {portfolioData.interests.map((interest, index) => (
                <li key={index}>
                  <span className="bullet">▸</span>
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
