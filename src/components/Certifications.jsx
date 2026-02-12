import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Certified Ethical Hacker v13-AI',
    issuer: 'EC-Council',
    description: 'Industry-recognized certification demonstrating advanced expertise in offensive security, ethical hacking, AI-driven threat detection, and penetration testing of networks, applications, and systems.',
  },
  {
    title: 'Certified Penetration Tester v3',
    issuer: 'RedTeam Hacker Academy',
    description: 'Practical training in exploit development, red teaming operations, and full-scope penetration testing methodologies aligned with real-world attack scenarios.',
  },
  {
    title: 'Cisco Certified Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    description: 'Credential validating foundational knowledge in cybersecurity principles, ethical hacking practices, and threat mitigation techniques.',
  },
  {
    title: 'Python for Cybersecurity',
    issuer: 'Professional Training Program',
    description: 'Specialized training in leveraging Python for automating security tasks, script development for pentesting, and data analysis in a security context.',
  },
  {
    title: 'Introduction to Linux (LFS101)',
    issuer: 'The Linux Foundation',
    description: 'Comprehensive foundation in Linux system administration, command-line operations, and Red Hat Linux environments. Credential ID: LF-sfnhhe41f8.',
  },
  {
    title: 'Introduction to AWS WAF',
    issuer: 'AWS Training Online',
    description: 'Training in web application security using AWS Web Application Firewall, covering threat mitigation, rule configuration, and cloud-based security best practices.',
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ AUTHORIZED CREDENTIALS ]
      </h1>

      {/* Grid Container for Certifications */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-gray-900 border-2 border-gray-700 p-6 rounded-lg flex flex-col hover:border-green-500 transition-colors duration-300 glitch-hover">
            <div className="flex items-center mb-4">
              <FaCertificate className="text-green-500 mr-4" size={30} />
              <div>
                <h3 className="text-xl font-bold text-gray-200">{cert.title}</h3>
                <p className="text-sm text-gray-500">// ISSUER: {cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-400">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;