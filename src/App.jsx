import React from 'react';
import Navbar from './components/Navbar';
import CustomBackground from './components/CustomBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About'; // Story timeline
import Skills from './components/Skills';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar darkMode={true} toggleTheme={() => {}} /> {/* Force dark mode structure */}
      <CustomBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Innovation />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
