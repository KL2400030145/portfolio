import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './CodingProfiles.css';

export default function CodingProfiles() {
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
    <section id="profiles" className="coding-profiles">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Coding Profiles
        </motion.h2>

        <motion.div
          className="profiles-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.codingProfiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="profile-card card glow-hover"
            >
              <Code className="profile-icon" size={28} />
              <h3>{profile.platform}</h3>
              <p className="username">
                {profile.displayUrl ? '@' : ''}{profile.username}
              </p>

              {profile.displayUrl && profile.url ? (
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                  <ExternalLink size={14} />
                  Visit Profile
                </a>
              ) : (
                <p className="username-note">Username: {profile.username}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
