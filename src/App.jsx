import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import ScrollReveal from './components/ScrollReveal';
import SectionDivider from './components/SectionDivider';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalEasterEgg from './components/TerminalEasterEgg';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div>
          <CursorGlow />
          <Background />
          <Navbar />
          <main className="relative z-10 text-white font-mono">
            <Hero />

            <SectionDivider text="> cat /etc/about.conf" />
            <ScrollReveal direction="left">
              <About />
            </ScrollReveal>

            <SectionDivider text="> nmap --skill-scan" />
            <ScrollReveal direction="right" delay={100}>
              <Skills />
            </ScrollReveal>

            <SectionDivider text="> gpg --verify credentials" />
            <ScrollReveal direction="up" delay={50}>
              <Certifications />
            </ScrollReveal>

            <SectionDivider text="> ls /projects --all" />
            <ScrollReveal direction="left" delay={100}>
              <Projects />
            </ScrollReveal>

            <SectionDivider text="> less /home/faris/blog.md" />
            <ScrollReveal direction="up" delay={100}>
              <Blog />
            </ScrollReveal>

            <SectionDivider text="> ssh faris@contact" />
            <ScrollReveal direction="up" delay={50}>
              <Contact />
            </ScrollReveal>
          </main>

          <Footer />
          <TerminalEasterEgg />
        </div>
      )}
    </>
  );
}

export default App;