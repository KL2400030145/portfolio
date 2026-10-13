import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="project-card card glow-hover"
            >
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.keyPoints?.length > 0 && (
                <div className="project-points">
                  <h4>Highlights</h4>
                  <ul>
                    {project.keyPoints.map((point) => (
                      <li key={point}>
                        <span className="point-bullet" aria-hidden="true">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tech">
                <h4>Technologies</h4>
                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <Code size={14} />
                    GitHub
                  </a>
                ) : (
                  <span className="project-link-unavailable">Repository not linked</span>
                )}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-link-unavailable">
                    {project.demoStatus || 'Demo link unavailable'}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
