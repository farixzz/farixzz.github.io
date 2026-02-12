import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaReact, FaTerminal, FaChevronUp } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const quickLinks = [
  { label: 'about', id: 'about' },
  { label: 'skills', id: 'skills' },
  { label: 'projects', id: 'projects' },
  { label: 'blog', id: 'blog' },
  { label: 'contact', id: 'contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub size={18} />, url: 'https://github.com/farixzz' },
  { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/muhammed-faris-p/' },
  { name: 'Medium', icon: <FaMedium size={18} />, url: 'https://medium.com/@muhammedfaris654' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 font-mono border-t border-green-500/20 bg-black/60 backdrop-blur-md">
      {/* Back to Top Button */}
      <div className="flex justify-center -mt-5">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 bg-gray-900 border border-green-500/40 px-5 py-2.5 cursor-pointer hover:bg-green-500/10 hover:border-green-500 transition-all duration-300"
          aria-label="Back to top"
        >
          <FaChevronUp className="text-green-500 text-sm group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-green-500 text-sm tracking-wider">
            &gt; cd /root
          </span>
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Column 1: Branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaTerminal className="text-green-500" />
                <span className="text-green-500 font-bold text-lg tracking-wider">
                  faris<span className="text-gray-600">@</span>
                  <span className="text-green-400">portfolio</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Cybersecurity Engineer & Ethical Hacker.
                <br />
                Securing systems, one vulnerability at a time.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-600 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4">
                // Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-gray-500 text-sm cursor-pointer bg-transparent border-none hover:text-green-400 transition-colors duration-300 group"
                    >
                      <span className="text-green-600/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        &gt;
                      </span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Status */}
            <div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4">
                // System Status
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-gray-400">All systems operational</span>
                </div>
                <div className="text-gray-600">
                  <p>Location: <span className="text-gray-400">India</span></p>
                  <p>Available for: <span className="text-green-500/80">Freelance & Full-time</span></p>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 text-xs mt-3">
                  <span>Built with</span>
                  <FaReact className="text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>React + Vite</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            <span className="text-green-500/40">©</span> {currentYear} Muhammed Faris. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            <span className="text-green-500/30">$</span> echo "Thanks for visiting"_
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
