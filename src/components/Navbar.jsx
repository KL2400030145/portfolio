import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Portfolio', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Hackathons', id: 'hackathons' },
  { label: 'Profiles', id: 'profiles' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      setActiveSection(id.toLowerCase());
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="terminal-bracket">&lt;</span>
          <span className="logo-text">LB</span>
          <span className="terminal-bracket">/&gt;</span>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="portfolio-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul id="portfolio-navigation" className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map(({ label, id }) => (
            <li key={id} className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="nav-item">
            <a
              href="/MOGHAL_LITHISHMA_BEGUM_RESUME.pdf"
              download="MOGHAL_LITHISHMA_BEGUM_RESUME.pdf"
              className="btn btn-small navbar-resume"
            >
              <Download size={15} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
