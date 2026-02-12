import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectItem from './ProjectItem';

import encryptionImg from '../assets/projects/encryption.jpg';
import doctoraiImg from '../assets/projects/doctorai.jpg';
import scannerImg from '../assets/projects/scanner.jpeg';
import plantImg from '../assets/projects/plant.png';
import maglevImg from '../assets/projects/maglev.jpeg';
import ayurvedaImg from '../assets/projects/ayurveda.png';
import travelImg from '../assets/projects/travel.png';
import phishingImg from '../assets/projects/phishing.png';

const projects = [
  {
    title: 'Phishing Detector ML',
    img: phishingImg,
    tech: 'ML / Python / Flask / Threat Intel',
    category: 'security',
    description: 'Production-grade ML-based phishing URL detection with real-time threat intelligence, web GUI for interactive analysis, and a CLI for automation & batch processing.',
    sourceUrl: 'https://github.com/farixzz/phishing-detector-ml',
  },
  {
    title: 'AI Recon Scanner',
    img: scannerImg,
    tech: 'AI / Python / Security',
    category: 'security',
    description: 'Python-based tool automating the reconnaissance phase for ethical hackers and penetration testers with AI-driven analysis.',
    sourceUrl: 'https://github.com/farixzz/CyberReconScanner',
  },
  {
    title: 'Image Encryption Tool',
    img: encryptionImg,
    tech: 'Python / Tkinter / Crypto',
    category: 'security',
    description: 'Desktop app for encrypting and decrypting images using cryptographic algorithms with a user-friendly GUI.',
    sourceUrl: 'https://github.com/farixzz/image-encryption-decryption',
  },
  {
    title: 'DoctorAi Disease Predictor',
    img: doctoraiImg,
    tech: 'AI / Machine Learning',
    category: 'ai',
    description: 'AI-driven disease prediction using symptom input, built with Logistic Regression on a Kaggle dataset.',
  },
  {
    title: 'IoT Plant Monitoring System',
    img: plantImg,
    tech: 'IoT / ESP8266 / Blynk',
    category: 'iot',
    description: 'Uses NodeMCU & a soil moisture sensor to automatically water plants, with remote mobile control.',
  },
  {
    title: 'Maglev Train Simulation',
    img: maglevImg,
    tech: 'OpenGL / C++ / GLUT',
    category: 'other',
    description: '3D visualization of a magnetic levitation train system using OpenGL and GLUT framework.',
    sourceUrl: 'https://github.com/farixzz/Maglev-Train-simulation-using-openGL',
  },
  {
    title: 'Ayurvedic Clinic Web App',
    img: ayurvedaImg,
    tech: 'Full Stack Web Dev',
    category: 'web',
    description: 'Full-stack web application for an Ayurvedic clinic with appointment booking and patient management.',
    liveUrl: 'https://swastham.vercel.app/',
    sourceUrl: 'https://github.com/motionvixfariz/ayurclinic',
  },
  {
    title: 'Travel Agency Website',
    img: travelImg,
    tech: 'Bootstrap / HTML / CSS',
    category: 'web',
    description: 'Responsive travel agency website with destination showcases and booking interface.',
    liveUrl: 'https://travelswebapp.vercel.app/',
    sourceUrl: 'https://github.com/motionvixfariz/travelwebapp',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Security', value: 'security' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Web', value: 'web' },
  { label: 'IoT', value: 'iot' },
  { label: 'Other', value: 'other' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-8">
        [ PROJECT CASE FILES ]
      </h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => {
          const count = f.value === 'all'
            ? projects.length
            : projects.filter((p) => p.category === f.value).length;

          return (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs font-mono tracking-wider border cursor-pointer transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_10px_rgba(0,255,0,0.15)]'
                  : 'bg-gray-900/50 border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300'
              }`}
            >
              {f.label}
              <span className="ml-1.5 text-gray-600">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid sm:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectItem
                img={project.img}
                title={project.title}
                tech={project.tech}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
                description={project.description}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-600 font-mono text-sm mt-8">
          // No projects found in this category
        </p>
      )}
    </div>
  );
};

export default Projects;