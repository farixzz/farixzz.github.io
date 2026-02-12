import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Matrix rain canvas
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]();:=%$#@!';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter green at the head, fading behind
        ctx.fillStyle = `rgba(0, ${150 + Math.random() * 105}, 0, ${0.6 + Math.random() * 0.4})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
    />
  );
};

const Hero = () => {
  const githubLink = "https://github.com/farixzz";
  const linkedinLink = "https://www.linkedin.com/in/muhammed-faris-p/";

  return (
    <div id="main" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] w-full mx-auto px-4">
        {/* Glitch name */}
        <motion.h1
          className="text-4xl md:text-6xl font-mono text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          &gt; Muhammed_Faris
          <span className="animate-ping">_</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.h2
          className="text-2xl md:text-3xl text-[#00ff00] font-mono"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TypeAnimation
            sequence={[
              '// Initializing...',
              1500,
              '// Establishing Secure Connection...',
              2000,
              '// Access Granted.',
              1000,
              'Certified Ethical Hacker (CEH v13-AI)',
              2500,
              'Penetration Tester',
              2000,
              'VAPT Analyst',
              2000,
              'Python Security Tooling',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        {/* Social icons */}
        <motion.div
          className="flex justify-center pt-6 max-w-[200px] mx-auto gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-green-500/50 text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-green-500/40 rounded-full flex justify-center pt-1.5"
          initial={{}}
          animate={{}}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;