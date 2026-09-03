import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Download, ChevronDown, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/Screenshot 2026-09-02 215754.png';
import './Hero.css';

export default function Hero() {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = portfolioData.terminalOutput;

  useEffect(() => {
    if (!isTyping || commandIndex >= terminalLines.length) return;

    const command = terminalLines[commandIndex].command;
    const response = terminalLines[commandIndex].response;
    let charIndex = 0;
    let isCommand = true;

    const typeInterval = setInterval(() => {
      if (isCommand && charIndex < command.length) {
        setDisplayedCommand(command.substring(0, charIndex + 1));
        charIndex++;
      } else if (isCommand) {
        isCommand = false;
        charIndex = 0;
      } else if (charIndex < response.length) {
        setDisplayedResponse(response.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCommandIndex(commandIndex + 1);
          setDisplayedCommand('');
          setDisplayedResponse('');
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [commandIndex, isTyping, terminalLines]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-greeting">
              <span className="accent-symbol">{'<'}</span>
              <span>Code. Learn. Build. </span>
              <span className="accent-symbol">{'/>'}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-name">
              {portfolioData.name}
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-title">
              {portfolioData.title}
            </motion.p>

            <motion.p variants={itemVariants} className="hero-subtitle">
              {portfolioData.subtitle}
            </motion.p>

            <motion.p variants={itemVariants} className="hero-intro">
              {portfolioData.intro}
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#projects" className="btn btn-filled">
                View Projects
              </a>
              <a href="/Resume.pdf" download="Moghal_Lithishma_Begum_Resume.pdf" className="btn">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-social">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="social-link"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-section">
              <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="Moghal Lithishma Begum"
                  className="profile-image"
                />
              </div>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>
                <div className="terminal-title">lithishma@portfolio</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-prompt">
                  <span className="prompt-symbol">$</span>
                  <span className="prompt-text">{displayedCommand}</span>
                  <span className="cursor"></span>
                </div>
                {displayedResponse && (
                  <div className="terminal-output">
                    {displayedResponse}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
