import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allows clicking through the div
        zIndex: 9999, // Ensures it's on top of everything
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(0, 255, 0, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default CursorGlow;