import React from 'react';
import profilePic from '../assets/profile.jpg';
import anonymousPic from '../assets/anonymous.jpg'; 
import { FaShieldAlt, FaCode, FaBug, FaProjectDiagram, FaFileDownload } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';


const coreAttributes = [
  {
    icon: <FaShieldAlt className="text-green-400 mr-3" size={20} />,
    text: 'Offensive Security & VAPT Analysis',
  },
  {
    icon: <FaBug className="text-red-400 mr-3" size={20} />,
    text: 'Exploit Development & Threat Mitigation',
  },
  {
    icon: <FaCode className="text-blue-400 mr-3" size={20} />,
    text: 'Python Scripting for Automation & Tooling',
  },
  {
    icon: <FaProjectDiagram className="text-yellow-400 mr-3" size={20} />,
    text: 'Threat Modeling & Risk Management',
  },
];

const About = () => {
  const anonymousImageUrl = `url(${anonymousPic})`;
  const profileImageUrl = `url(${profilePic})`;
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ Cybersecurity Engineer: Muhammed Faris ]
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Profile Picture & Status */}
        <div className="md:col-span-1 flex flex-col items-center">
           {/* --- THIS IS THE NEW REVEAL GLITCH FRAME --- */}
          <div className="relative w-56 h-64 flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                // Pass the image URLs as CSS variables to the animation
                '--bg-image-anon': anonymousImageUrl,
                '--bg-image-profile': profileImageUrl,
                animation: 'backgroundImageGlitch 8s infinite steps(1, end)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
            </div>
          </div>
          <div className="mt-4 text-center w-full p-2 bg-gray-900 border border-gray-700">
            <p className="text-lg text-green-400 font-bold tracking-widest">STATUS: ACTIVE</p>
            <p className="text-sm text-gray-400">// CLASS: ETHICAL HACKER</p>
          </div>
        </div>

        {/* Right Column: Analysis & Directives */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">&gt; PSYCHE & METHODOLOGY_</h2>
          <p className="text-gray-300 mb-6">
            Certified Ethical Hacker and Web Developer with expertise in offensive security, exploit development, and risk management. Skilled in Python automation to optimize security testing and experienced in building responsive web applications using React, Vite, and Bootstrap. Passionate about cyber threat analysis and strengthening security through both offensive and defensive strategies.
          </p>

          <h3 className="text-xl font-bold text-gray-200 mb-4">&gt; CORE DIRECTIVES_</h3>
          <ul className="space-y-3 mb-8">
            {coreAttributes.map((attr, index) => (
              <li key={index} className="flex items-center bg-gray-900 p-2 border-l-4 border-gray-700">
                {attr.icon}
                <span className="text-gray-300">{attr.text}</span>
              </li>
            ))}
          </ul>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/Faris_Resume.pdf"
              download="Faris_Resume.pdf"
              className="flex items-center bg-[#00ff00] text-black font-bold text-sm py-2 px-4 border-2 border-green-500 hover:bg-green-700 hover:text-white transition-colors duration-300"
            >
              <FaFileDownload className="mr-2" />
              Download Dossier
            </a>
            <a 
              href="#contact" 
              className="flex items-center bg-gray-700 text-[#00ff00] font-bold text-sm py-2 px-4 border-2 border-gray-600 hover:bg-gray-600 transition-colors duration-300"
            >
              <MdOutlineContactSupport className="mr-2" />
              Establish Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;