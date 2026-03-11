import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab" }, // connecting line grab
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              grab: { distance: 200, links: { opacity: 0.8, color: "#0ea5e9" } },
            },
          },
          particles: {
            color: { value: ["#0ea5e9", "#a855f7", "#06b6d4", "#ffffff"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: { density: { enable: true, area: 1000 }, value: 120 },
            opacity: { 
              value: { min: 0.1, max: 0.5 },
              animation: { enable: true, speed: 1, sync: false }
            },
            shape: { type: "circle" },
            size: { 
              value: { min: 1, max: 4 },
              animation: { enable: true, speed: 2, sync: false }
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
