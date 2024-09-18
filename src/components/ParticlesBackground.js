import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => (
  <Particles
    options={{
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
        },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
  />
);

export default ParticlesBackground;
