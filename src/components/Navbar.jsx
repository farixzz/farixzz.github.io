import React, { useState, useEffect, useCallback } from 'react';
import { FaTerminal, FaTimes, FaBars } from 'react-icons/fa';

const navLinks = [
  { id: 'main', label: 'main' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certs' },
  { id: 'projects', label: 'projects' },
  { id: 'blog', label: 'blog' },
  { id: 'contact', label: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for background blur + progress bar
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);

    // Scroll progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers = [];
    const sectionIds = navLinks.map((l) => l.id);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            // Silently update URL hash without triggering scroll
            window.history.replaceState(null, '', `#${id}`);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // On mount, scroll to hash if present in URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-mono ${
          scrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-green-500/20 shadow-[0_2px_20px_rgba(0,255,0,0.08)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('main')}
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-none"
          >
            <FaTerminal className="text-green-500 text-lg group-hover:animate-pulse" />
            <span className="text-green-500 font-bold text-lg tracking-wider">
              farixzz<span className="text-gray-500">@</span>
              <span className="text-green-400">root</span>
              <span className="text-gray-500 animate-pulse">_</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-2 text-sm tracking-wide cursor-pointer bg-transparent border-none transition-all duration-300 group ${
                    activeSection === link.id
                      ? 'text-green-400'
                      : 'text-gray-500 hover:text-green-400'
                  }`}
                >
                  <span className={`mr-1 transition-opacity duration-300 ${
                    activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    &gt;
                  </span>
                  {link.label}

                  {/* Active indicator line */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-green-500 transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-green-500 text-2xl cursor-pointer bg-transparent border-none p-2 hover:text-green-300 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full font-mono">
          {/* Terminal-style header */}
          <p className="text-green-500/50 text-xs mb-8 tracking-[0.3em] uppercase">
            — navigation module —
          </p>

          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className={`transition-all duration-500 ${
                  mobileOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
              >
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-2xl tracking-wider px-6 py-3 cursor-pointer bg-transparent border-none transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-green-400'
                      : 'text-gray-500 hover:text-green-400'
                  }`}
                >
                  <span className="text-green-600 mr-2">&gt;</span>
                  {link.label}
                  {activeSection === link.id && (
                    <span className="text-green-500 ml-2 animate-pulse">●</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Terminal-style footer */}
          <p className="text-gray-700 text-xs mt-10 font-mono">
            <span className="text-green-500/30">$</span> select destination_
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
