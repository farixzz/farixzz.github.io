import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

const options = {
    background: {
      color: {
        value: '#000000', 
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // Particles move away from the cursor
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#00ff00', // Hacker green
      },
      links: {
        color: '#00ff00', // Hacker green links
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Background;