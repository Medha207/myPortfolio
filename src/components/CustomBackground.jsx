import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomBackground = () => {
  const canvasRef = useRef(null);
  
  // Use MotionValues to animate the spotlight div directly without triggering React re-renders
  const spotlightX = useMotionValue(-1000);
  const spotlightY = useMotionValue(-1000);
  
  // Create smooth springs for the spotlight movement for a premium fluid animation
  const smoothSpotlightX = useSpring(spotlightX, { stiffness: 80, damping: 25 });
  const smoothSpotlightY = useSpring(spotlightY, { stiffness: 80, damping: 25 });

  // Use a Ref to store the latest mouse coordinates for the canvas animation loop
  const mousePositionRef = useRef({ x: -1000, y: -1000 });

  // Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      spotlightX.set(e.clientX);
      spotlightY.set(e.clientY);
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [spotlightX, spotlightY]);

  // Complex Canvas Starfield and Constellation simulation (Runs once on mount)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let particles = [];
    
    const settings = {
      count: window.innerWidth < 768 ? 50 : 150,
      maxDistance: 120,
      colors: ['#0ea5e9', '#a855f7', '#06b6d4', '#ffffff'] // Primary, Accent, Neon, White
    };

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.5;
        this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)];
        // Opacity pulsing
        this.opacity = Math.random();
        this.pulseSpeed = (Math.random() * 0.02) + 0.005;
        this.pulseDir = Math.random() > 0.5 ? 1 : -1;
      }

      update(mouseX, mouseY) {
        // Core movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Pulse opacity
        this.opacity += this.pulseSpeed * this.pulseDir;
        if (this.opacity >= 1) {
          this.opacity = 1;
          this.pulseDir = -1;
        } else if (this.opacity <= 0.1) {
          this.opacity = 0.1;
          this.pulseDir = 1;
        }

        // Mouse interaction (repel subtly, draw connecting lines if close)
        if (mouseX && mouseY && mouseX !== -1000) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Subtle repel
            const force = (150 - distance) / 150;
            this.x -= (dx / distance) * force * 1.5;
            this.y -= (dy / distance) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Apply opacity via globalAlpha
        const originalAlpha = ctx.globalAlpha;
        ctx.globalAlpha = this.opacity;
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        
        // Reset ctx properties
        ctx.shadowBlur = 0;
        ctx.globalAlpha = originalAlpha;
      }
    }

    // Initialize particles
    for (let i = 0; i < settings.count; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      const mX = mousePositionRef.current.x;
      const mY = mousePositionRef.current.y;

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mX, mY);
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.maxDistance) {
            ctx.beginPath();
            const opacity = 1 - (distance / settings.maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. Underlying Slow-Floating Aurora Mesh Gradients */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
           animate={{
             scale: [1, 1.3, 1],
             x: [0, 100, 0],
             y: [0, -50, 0],
             rotate: [0, 90, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
           animate={{
             scale: [1, 1.5, 1],
             x: [0, -100, 0],
             y: [0, 100, 0],
             rotate: [0, -90, 0]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-[150px]"
        />
        <motion.div
           animate={{
             scale: [1, 1.2, 1],
             x: [0, 50, 0],
             y: [0, 50, 0],
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-neon-cyan/20 blur-[130px]"
        />
      </div>

      {/* 2. Interactive Neon Cursor Spotlight */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"
        style={{
          x: smoothSpotlightX,
          y: smoothSpotlightY,
        }}
      />

      {/* 3. Mathematical Canvas Constellation Generator */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* 4. Film Grain / Noise Overlay for cinematic texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
    </div>
  );
};

export default CustomBackground;
