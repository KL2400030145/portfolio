import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featuredProject = portfolioData.projects.find(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            className="featured-project-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="featured-badge">
              <Sparkles size={16} />
              Featured Project
            </div>
            <div className="featured-project card glow">
              <div className="featured-header">
                <div>
                  <h3>{featuredProject.title}</h3>
                  <p className="project-description">{featuredProject.description}</p>
                </div>
                {featuredProject.note && (
                  <div className="project-note">
                    <span>Status:</span> {featuredProject.note}
                  </div>
                )}
              </div>

              <div className="project-details">
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {featuredProject.keyPoints.map((point, idx) => (
                      <li key={idx}>
                        <span className="feature-bullet">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4>Technologies</h4>
                  <div className="tech-stack">
                    {featuredProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag featured-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-links">
                {featuredProject.github && (
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <Code size={16} />
                    GitHub
                  </a>
                )}
                {featuredProject.demo && (
                  <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="other-projects-title">Other Projects</h3>
            <motion.div
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card card glow-hover"
                >
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-points">
                    <h4>Highlights</h4>
                    <ul>
                      {project.keyPoints.map((point, idx) => (
                        <li key={idx}>
                          <span className="point-bullet">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                        <Code size={14} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
