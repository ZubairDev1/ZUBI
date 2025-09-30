import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SoftSkills from './components/SoftSkills';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Element name="home" className="element">
        <Hero />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="softskills" className="element">
        <SoftSkills />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;