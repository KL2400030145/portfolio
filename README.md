# Lithishma Begum's Portfolio Website

A modern, premium personal portfolio website built with React.js and Vite. Featuring a dark developer aesthetic with terminal-inspired design elements and smooth animations.

## 🌟 Features

- **Modern Developer Aesthetic**: Dark theme with terminal-inspired UI elements
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **Interactive Terminal**: Animated terminal window in the hero section
- **Comprehensive Sections**:
  - Home/Hero with terminal animation
  - About Me with interests
  - Education timeline
  - Technical Skills (categorized)
  - Featured Projects showcase
  - Certifications
  - Hackathons participation
  - Activities & Leadership
  - Coding Profiles
  - Languages
  - Contact section
  - Professional Footer

- **Professional Features**:
  - Sticky navigation with mobile hamburger menu
  - Smooth scrolling navigation
  - Email copy functionality
  - Social media links
  - SEO optimized
  - Accessible design

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (v18+)
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **JavaScript**: ES6+

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx              # Sticky navigation component
├── sections/
│   ├── Hero.jsx                # Hero section with terminal
│   ├── About.jsx               # About me section
│   ├── Education.jsx           # Education timeline
│   ├── Skills.jsx              # Skills grid
│   ├── Projects.jsx            # Projects showcase
│   ├── Certifications.jsx      # Certifications
│   ├── Hackathons.jsx          # Hackathons participated
│   ├── Activities.jsx          # Leadership & activities
│   ├── CodingProfiles.jsx      # Coding profiles
│   ├── Languages.jsx           # Languages spoken
│   ├── Contact.jsx             # Contact section
│   └── Footer.jsx              # Footer
├── data/
│   └── portfolioData.js        # All portfolio content
├── styles/
│   └── global.css              # Global styles
├── App.jsx                     # Main app component
└── main.jsx                    # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Updating Portfolio Content

All portfolio information is stored in `src/data/portfolioData.js`. Edit this file to update:

- Personal information (name, email, phone, location)
- Introduction and about text
- Education history
- Skills
- Projects
- Certifications
- Hackathons
- Activities
- Languages
- Social media links

### Styling

Global styles are in `src/styles/global.css` with CSS variables:

```css
:root {
  --primary-bg: #0a0e27;
  --secondary-bg: #1a1f3a;
  --tertiary-bg: #16213e;
  --accent-color: #00d4ff;
  --text-primary: #e0e0ff;
  --text-secondary: #a0a0c0;
  /* ... more variables */
}
```

Each section has its own CSS file for component-specific styling.

### Updating the Resume

`public/MOGHAL_LITHISHMA_BEGUM_RESUME.pdf` is the current resume PDF. The hero
section and navigation provide a view link and a download link using the same
uppercase filename. Replace this file with the latest PDF to update both links.

## 🎨 Color Scheme

- **Primary Background**: #0a0e27 (Very Dark Blue)
- **Secondary Background**: #1a1f3a (Dark Blue)
- **Accent Color**: #00d4ff (Cyan)
- **Text Primary**: #e0e0ff (Light Purple)
- **Text Secondary**: #a0a0c0 (Medium Purple)
- **Success Color**: #00ff88 (Neon Green)

## ♿ Accessibility

The portfolio follows accessibility best practices:

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast compliance
- Motion preference respect (`prefers-reduced-motion`)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter (if configured)
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

The website is optimized for performance:

- Code splitting via Vite
- CSS minification
- JavaScript minification
- Image optimization recommendations
- Lazy loading ready

## 🔐 Security

- No hardcoded sensitive information
- Safe external links with `target="_blank"` and `rel="noopener noreferrer"`
- Environment-based configuration ready

## 📄 License

This portfolio website is for personal use. All content and design are proprietary.

## 👤 Contact

For any questions about this portfolio:

- **Email**: moghallithishma@gmail.com
- **GitHub**: https://github.com/KL2400030145
- **LinkedIn**: https://www.linkedin.com/in/moghal-lithishma-begum-a63405366

## 🙏 Acknowledgments

- React.js community
- Vite team
- Framer Motion
- Lucide React icons
- All the technologies and tools used

---

**Built with ❤️ using React + Vite**

Last Updated: September 2026
