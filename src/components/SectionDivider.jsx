import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ text = '> Loading next module... [OK]' }) => {
  return (
    <div className="relative z-10 max-w-[1100px] mx-auto px-4 py-6 font-mono overflow-hidden">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Scanline background effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: [0, 0.15, 0],
              transition: { duration: 1.2, delay: 0.1 },
            },
          }}
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.08) 2px, rgba(0,255,0,0.08) 4px)',
          }}
        />

        {/* Top glitch line */}
        <motion.div
          className="h-px mb-3"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(0,255,0,0.05) 10%, rgba(0,255,0,0.3) 30%, rgba(0,255,0,0.5) 50%, rgba(0,255,0,0.3) 70%, rgba(0,255,0,0.05) 90%, transparent)',
          }}
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />

        {/* Terminal prompt line */}
        <div className="flex items-center gap-3 py-2">
          {/* Left dashed line */}
          <motion.div
            className="flex-1 border-t border-dashed border-green-500/15"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
              },
            }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Terminal text */}
          <motion.div
            className="flex items-center gap-2 shrink-0"
            variants={{
              hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
              },
            }}
          >
            {/* Blinking dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500/50 text-xs tracking-wider">
              {text}
            </span>
          </motion.div>

          {/* Right dashed line */}
          <motion.div
            className="flex-1 border-t border-dashed border-green-500/15"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
              },
            }}
            style={{ transformOrigin: 'right' }}
          />
        </div>

        {/* Bottom glitch line */}
        <motion.div
          className="h-px mt-3"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(0,255,0,0.05) 10%, rgba(0,255,0,0.3) 30%, rgba(0,255,0,0.5) 50%, rgba(0,255,0,0.3) 70%, rgba(0,255,0,0.05) 90%, transparent)',
          }}
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />

        {/* Glitch flash overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,255,0,0.03)' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: [0, 1, 0, 0.5, 0],
              transition: { duration: 0.4, delay: 0.05, times: [0, 0.1, 0.3, 0.5, 1] },
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
