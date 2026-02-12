import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes } from 'react-icons/fa';

const COMMANDS = {
  help: () =>
    `Available commands:
  whoami        → Who is Faris?
  ls projects   → List all projects
  cat about.txt → Read the bio
  skills        → Show skill tree
  certs         → Show certifications
  contact       → Get contact info
  socials       → Social media links
  clear         → Clear terminal
  exit          → Close terminal
  neofetch      → System info`,

  whoami: () =>
    `╔══════════════════════════════════════╗
║  Muhammed Faris                      ║
║  Certified Ethical Hacker (CEH v13)  ║
║  Penetration Tester | VAPT Analyst   ║
║  Python Security Tooling             ║
║  Full Stack Developer                ║
╚══════════════════════════════════════╝`,

  'ls projects': () =>
    `drwxr-xr-x  phishing-detector-ml/    [ML / Python / Flask]
drwxr-xr-x  ai-recon-scanner/        [AI / Python / Security]
drwxr-xr-x  image-encryption-tool/   [Python / Tkinter / Crypto]
drwxr-xr-x  doctorai-predictor/      [AI / Machine Learning]
drwxr-xr-x  iot-plant-monitor/       [IoT / ESP8266 / Blynk]
drwxr-xr-x  maglev-train-sim/        [OpenGL / C++ / GLUT]
drwxr-xr-x  ayurvedic-clinic/        [Full Stack Web Dev]
drwxr-xr-x  travel-agency-web/       [Bootstrap / HTML / CSS]`,

  'cat about.txt': () =>
    `> Loading about.txt...

Cybersecurity Engineer and Full Stack Developer 
specializing in penetration testing, VAPT analysis, 
and Python security tooling.

Experienced in offensive security, exploit development,
and risk management. Passionate about cyber threat 
analysis and strengthening security through both 
offensive and defensive strategies.

Location: India
Status: Available for hire`,

  skills: () =>
    `[████████████████████] Python
[██████████████████░░] JavaScript
[████████████████░░░░] React / Vite
[████████████████████] Penetration Testing
[██████████████████░░] VAPT
[████████████████████] Ethical Hacking
[██████████████░░░░░░] Cloud Security (AWS)
[████████████████░░░░] Linux Administration
[██████████████████░░] Metasploit / Burp Suite
[████████████████░░░░] Network Security`,

  certs: () =>
    `✓ Certified Ethical Hacker v13-AI     [EC-Council]
✓ Certified Penetration Tester v3     [RedTeam Academy]
✓ Cisco Certified Ethical Hacker       [Cisco]
✓ Python for Cybersecurity             [Professional Training]
✓ Introduction to Linux (LFS101)       [Linux Foundation]
✓ Introduction to AWS WAF              [AWS Training]`,

  contact: () =>
    `┌─────────────────────────────────────┐
│  Email: muhammedfaris654@gmail.com  │
│  Response: < 24 hours               │
│  Status: ● Available for hire       │
└─────────────────────────────────────┘`,

  socials: () =>
    `→ GitHub:   github.com/farixzz
→ LinkedIn: linkedin.com/in/muhammed-faris-p
→ Medium:   medium.com/@muhammedfaris654`,

  neofetch: () =>
    `        .--.          faris@portfolio
       |o_o |         ─────────────────
       |:_/ |         OS: HackerOS v2.0
      //   \\ \\        Kernel: React 19
     (|     | )       Shell: zsh 5.9
    /'\\_   _/\`\\       Terminal: portfolio-cli
    \\___)=(___/       Theme: Matrix Green
                      Uptime: ∞`,

  sudo: () => '☠️  Nice try. You are not in the sudoers file. This incident will be reported.',
  'rm -rf /': () => '🛑 Permission denied. Self-destruct sequence aborted.',
  hack: () => '⚠️  Unauthorized access detected. Tracing IP... just kidding 😄',
  matrix: () => '🟢 The Matrix has you... Follow the white rabbit. 🐇',
};

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', text: '╔═══════════════════════════════════════╗' },
    { type: 'output', text: '║  Welcome to faris@portfolio terminal  ║' },
    { type: 'output', text: '║  Type "help" for available commands    ║' },
    { type: 'output', text: '╚═══════════════════════════════════════╝' },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Konami code detection
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let position = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
          setIsOpen(true);
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `faris@portfolio:~$ ${input}` }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'exit') {
      setIsOpen(false);
      setInput('');
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      newHistory.push({ type: 'output', text: handler() });
    } else if (cmd !== '') {
      newHistory.push({ type: 'output', text: `bash: ${cmd}: command not found. Type "help" for commands.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <>
      {/* Floating terminal button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gray-900 border border-green-500/40 text-green-500 p-3 hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 cursor-pointer group"
        aria-label="Open interactive terminal"
        title="Open terminal (or try the Konami code ↑↑↓↓←→←→BA)"
      >
        <FaTerminal size={18} className="group-hover:animate-pulse" />
      </button>

      {/* Terminal modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Terminal window */}
            <motion.div
              className="relative z-10 w-full max-w-[700px] bg-gray-950 border border-green-500/30 shadow-[0_0_40px_rgba(0,255,0,0.1)] font-mono"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800 bg-gray-900/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70 cursor-pointer hover:bg-red-500" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-gray-500 text-xs ml-3">faris@portfolio: ~/terminal</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-green-400 transition-colors cursor-pointer bg-transparent border-none"
                  aria-label="Close terminal"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* Scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.02] z-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
                }}
              />

              {/* Terminal body */}
              <div
                ref={terminalRef}
                className="p-4 h-[400px] overflow-y-auto text-sm scrollbar-thin"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap mb-0.5">
                    {line.type === 'input' ? (
                      <span className="text-green-400">{line.text}</span>
                    ) : (
                      <span className="text-gray-400">{line.text}</span>
                    )}
                  </div>
                ))}

                {/* Input line */}
                <form onSubmit={handleSubmit} className="flex items-center mt-1">
                  <span className="text-green-400 mr-2">faris@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent text-green-300 outline-none border-none caret-green-500 text-sm font-mono"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalEasterEgg;
