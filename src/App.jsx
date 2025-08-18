import React from 'react';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import News from './components/News';
import Blog from './components/Blog';
import Contact from './components/Contact'; 


function App() {
  return (
    <div>
      <CursorGlow />
      <Background />
      <main className="relative z-10 text-white font-mono">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <News />
        {/* <Blog /> */}
        <Contact /> 
      </main>
    </div>
  );
}

export default App;