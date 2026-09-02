import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Hackathons from './sections/Hackathons';
import Activities from './sections/Activities';
import CodingProfiles from './sections/CodingProfiles';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Activities />
        <CodingProfiles />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
