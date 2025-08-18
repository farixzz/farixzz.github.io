import React from 'react';
import ProjectItem from './ProjectItem';


import encryptionImg from '../assets/projects/encryption.jpg';
import doctoraiImg from '../assets/projects/doctorai.jpg';
import scannerImg from '../assets/projects/scanner.jpeg';
import plantImg from '../assets/projects/plant.png';
import maglevImg from '../assets/projects/maglev.jpeg';
import ayurvedaImg from '../assets/projects/ayurveda.png';
import travelImg from '../assets/projects/travel.png';

const projects = [
  {
    title: 'AI Recon Scanner',
    img: scannerImg,
    tech: 'AI / Python / Security',
    sourceUrl: 'https://github.com/farixzz/CyberReconScanner', 
  },
  {
    title: 'Image Encryption Tool',
    img: encryptionImg,
    tech: 'Python / Tkinter / Crypto',
    sourceUrl: 'https://github.com/farixzz/image-encryption-decryption', 
  },
  {
    
    title: 'DoctorAi Disease Predictor',
    img: doctoraiImg,
    tech: 'AI / Machine Learning',
    description: 'AI-driven disease prediction using symptom input, built with Logistic Regression on a Kaggle dataset.',
  },
  {
    
    title: 'IoT Plant Monitoring System',
    img: plantImg,
    tech: 'IoT / ESP8266 / Blynk',
    description: 'Uses NodeMCU & a soil moisture sensor to automatically water plants, with remote mobile control.',
  },
  {
    title: 'Maglev Train Simulation',
    img: maglevImg,
    tech: 'OpenGL / C++ / GLUT',
    sourceUrl: 'https://github.com/farixzz/Maglev-Train-simulation-using-openGL', // TODO: Add your GitHub link
  },
  {
    title: 'Ayurvedic Clinic Web App',
    img: ayurvedaImg,
    tech: 'Full Stack Web Dev',
    liveUrl: 'https://swastham.vercel.app/',
    sourceUrl: 'https://github.com/motionvixfariz/ayurclinic', // TODO: Add your GitHub link
  },
  {
    title: 'Travel Agency Website',
    img: travelImg,
    tech: 'Bootstrap / HTML / CSS',
    liveUrl: 'https://travelswebapp.vercel.app/',
    sourceUrl: 'https://github.com/motionvixfariz/travelwebapp',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ PROJECT CASE FILES ]
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 ">
        {projects.map((project, idx) => (
          <ProjectItem
            key={idx}
            img={project.img}
            title={project.title}
            tech={project.tech}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
            description={project.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;