import React from 'react';
import { 
  FaShieldAlt, FaNetworkWired, FaBug, FaCode, FaServer, FaLock, FaUserSecret, 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaLinux 
} from 'react-icons/fa';
import { 
  SiMetasploit, SiBurpsuite, SiWireshark, SiPython, SiTailwindcss 
} from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc'; 
import { AiOutlineApi, AiFillAndroid } from 'react-icons/ai';
import { TbShieldCode, TbTargetArrow, TbUserSearch, TbVirusSearch } from 'react-icons/tb';
import { VscTerminalBash } from 'react-icons/vsc';
import { GrDocumentVerified } from 'react-icons/gr';
import { MdOutlineSecurity, MdOutlinePolicy, MdOutlineComputer } from 'react-icons/md';


const skillCategories = [
  {
    title: 'Ethical Hacking & Offensive Security',
    skills: [
      { name: 'Penetration Testing', icon: <TbShieldCode size={35} className="text-red-500" />, details: ['Web', 'Network', 'API'] },
      { name: 'Red Teaming', icon: <TbTargetArrow size={35} className="text-red-600" />, details: ['Adversary Emulation', 'C2 Frameworks'] },
      { name: 'Exploit Development', icon: <FaBug size={35} className="text-yellow-500" />, details: ['Buffer Overflows', 'ROP Chains', 'Custom Shellcode'] },
      { name: 'Blue Teaming', icon: <FaShieldAlt size={35} className="text-blue-500" />, details: ['Incident Response', 'SIEM Analysis', 'IDS/IPS'] },
    ],
  },
  {
    title: 'Application Security & Vulnerability Mgmt',
    skills: [
      { name: 'OWASP Top 10', icon: <MdOutlineSecurity size={35} className="text-orange-500" />, details: ['SQLi', 'XSS', 'SSRF', 'IDOR'] },
      { name: 'Android Pentesting', icon: <AiFillAndroid size={35} className="text-green-400" />, details: ['Reverse Engineering', 'Static & Dynamic Analysis'] },
      { name: 'Vulnerability Assessment', icon: <TbVirusSearch size={35} className="text-purple-500" />, details: ['Nmap', 'OpenVAS', 'Nessus', 'Nikto'] },
    ],
  },
  {
    title: 'Security Tools, Frameworks & Analysis',
    skills: [
      { name: 'Security Frameworks', icon: <SiMetasploit size={35} className="text-gray-400" />, details: ['Metasploit', 'Hashcat', 'John the Ripper'] },
      { name: 'Analysis Tools', icon: <SiWireshark size={35} className="text-blue-400" />, details: ['Wireshark', 'Burp Suite', 'OSINT Techniques'] },
      { name: 'Threat Intelligence', icon: <TbUserSearch size={35} className="text-teal-400" />, details: ['YARA Rules', 'MITRE ATT&CK', 'Threat Hunting'] },
    ],
  },
  {
    title: 'Programming, Automation & Data Security',
    skills: [
      { name: 'Python', icon: <SiPython size={35} className="text-yellow-400" />, details: ['Security Tooling', 'Automation', 'Scripting'] },
      { name: 'Shell Scripting', icon: <VscTerminalCmd size={35} className="text-gray-300" />, details: ['Bash', 'PowerShell', 'Automation'] },
      { name: 'Cryptography', icon: <FaLock size={35} className="text-indigo-400" />, details: ['AES', 'RSA', 'Hashing', 'Steganography'] },
    ],
  },
  {
    title: 'IT, GRC & AI-Driven Security',
    skills: [
      { name: 'IAM', icon: <FaUserSecret size={35} className="text-cyan-500" />, details: ['Active Directory', 'Access Control'] },
      { name: 'GRC', icon: <MdOutlinePolicy size={35} className="text-green-500" />, details: ['NIST', 'ISO/IEC 27001', 'Policy & Controls'] },
      { name: 'AI in Security', icon: <GrDocumentVerified size={35} className="text-white" />, details: ['AI-Enhanced Threat Detection', 'CEH v13-AI'] },
      { name: 'IT Support', icon: <MdOutlineComputer size={35} className="text-blue-300" />, details: ['Windows', 'Linux', 'Remote Support'] },
    ],
  },
  {
    title: 'Web Application Development',
    skills: [
      { name: 'HTML / CSS', icon: <FaHtml5 size={35} className="text-orange-600" />, details: ['Semantic HTML', 'Flexbox', 'Grid'] },
      { name: 'React.js', icon: <FaReact size={35} className="text-blue-400" />, details: ['Hooks', 'State Mgmt', 'Vite'] },
      { name: 'Node.js', icon: <FaNodeJs size={35} className="text-green-600" />, details: ['Express.js', 'REST APIs', 'JWT'] },
      { name: 'Styling Frameworks', icon: <SiTailwindcss size={35} className="text-cyan-400" />, details: ['TailwindCSS', 'Bootstrap'] },
    ],
  }
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-12">
        [ COMPREHENSIVE SKILL MATRIX ]
      </h1>
      <div className="flex flex-col gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-bold text-gray-300 mb-6 border-b-2 border-gray-700 pb-2">
              &gt; {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative p-4 bg-gray-900 border-2 border-gray-700 rounded-lg flex flex-col items-center justify-center transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 group overflow-hidden h-32 glitch-hover"
                >
                
                  <div className="flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                    {skill.icon}
                    <p className="mt-3 font-semibold text-gray-300 text-sm md:text-base">
                      {skill.name}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ul className="text-center text-xs sm:text-sm text-gray-300 leading-tight">
                      {skill.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;