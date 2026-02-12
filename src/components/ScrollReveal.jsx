import React from 'react';
import { motion } from 'framer-motion';

const directionOffsets = {
  up:    { y: 50, x: 0 },
  down:  { y: -50, x: 0 },
  left:  { y: 0, x: -60 },
  right: { y: 0, x: 60 },
  none:  { y: 0, x: 0 },
};

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
}) => {
  const offset = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: 'blur(6px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay: delay / 1000, // convert ms to seconds
        ease: [0.16, 1, 0.3, 1], // expo out
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
