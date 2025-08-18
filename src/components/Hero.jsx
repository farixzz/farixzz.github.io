import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Hero = () => {
  const githubLink = "https://github.com/farixzz";
  const linkedinLink = "https://www.linkedin.com/in/muhammed-faris-p/";

  return (
    <div id="main" className="h-screen flex items-center justify-center text-center">
      <div className="max-w-[800px] w-full mx-auto">
        {/* Blinking cursor effect for the name */}
        <h1 className="text-4xl md:text-6xl font-mono text-white mb-4">
          &gt; Muhammed_Faris
          <span className="animate-ping">_</span>
        </h1>

        {/* The typing animation */}
        <h2 className="text-2xl md:text-3xl text-[#00ff00] font-mono">
          <TypeAnimation
            sequence={[
              '// Initializing...',
              1500,
              '// Establishing Secure Connection...',
              2000,
              '// Access Granted.',
              1000,
              'Certified Ethical Hacker',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Social media icons */}
        <div className="flex justify-center pt-6 max-w-[200px] mx-auto">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="pl-4">
            <FaLinkedin size={30} className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;