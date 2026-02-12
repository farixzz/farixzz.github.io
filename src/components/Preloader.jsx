import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: '[BIOS] Initializing system...', delay: 0 },
  { text: '[BIOS] Memory check: 16384 MB OK', delay: 200 },
  { text: '[KERNEL] Loading kernel modules...', delay: 400 },
  { text: '[NET] Establishing encrypted tunnel... ', delay: 700 },
  { text: '[NET] TLS 1.3 handshake complete ✓', delay: 1000 },
  { text: '[AUTH] Verifying identity...', delay: 1300 },
  { text: '[AUTH] Biometric scan: PASSED ✓', delay: 1600 },
  { text: '[SYS] Loading user profile: faris@portfolio', delay: 1900 },
  { text: '[SYS] Mounting /dev/projects...', delay: 2100 },
  { text: '[SYS] Mounting /dev/skills...', delay: 2300 },
  { text: '[OK] All systems nominal.', delay: 2500 },
  { text: '', delay: 2700 },
  { text: '> ACCESS GRANTED', delay: 2800, highlight: true },
];

const Preloader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay)
    );

    // Trigger exit after all lines
    const exitTimer = setTimeout(() => {
      setDone(true);
    }, 3400);

    // Call onComplete after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
            }}
          />

          <div className="w-full max-w-[700px] px-6 font-mono">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 pb-3 border-b border-green-500/30"
            >
              <span className="text-green-500/60 text-xs tracking-[0.4em] uppercase">
                faris@portfolio — system boot v2.0
              </span>
            </motion.div>

            {/* Boot lines */}
            <div className="space-y-1 min-h-[320px]">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`text-sm ${
                    line.highlight
                      ? 'text-green-400 font-bold text-lg mt-4'
                      : 'text-green-500/80'
                  }`}
                >
                  {line.text}
                  {i === visibleLines.length - 1 && !line.highlight && (
                    <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-1 bg-gray-800 rounded overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-300"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
