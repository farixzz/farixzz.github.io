import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={40} />,
    url: 'https://github.com/farixzz',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={40} />,
    url: 'https://www.linkedin.com/in/muhammed-faris-p/',
  },
  {
    name: 'Medium',
    icon: <FaMedium size={40} />,
    url: 'https://medium.com/@muhammedfaris654', // Your Medium profile URL
  },
  {
    name: 'Email',
    icon: <MdEmail size={40} />,
    url: 'mailto:muhammedfaris654@gmail.com', // TODO: Add your email address here
  },
];

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-8">
        [ SECURE CONTACT CHANNEL ]
      </h1>

      <div className="text-center">
        <p className="text-gray-300 text-lg mb-12">
          System standing by for contact. Connect via the following secure networks.
        </p>

        {/* Icons Container */}
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-4 bg-gray-900 border-2 border-gray-700 rounded-full text-gray-400 transform hover:scale-125 hover:text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;