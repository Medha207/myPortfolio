import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Extracted inner card for local state 3D tracking
const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Increased rotation intensity for dramatic 'world-class' 3D feel
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Calculate dynamic glare gradient
  const backgroundTransform = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]) => {
      // Base dark card color
      const color1 = "rgba(255, 255, 255, 0.03)";
      const color2 = "rgba(14, 165, 233, 0.15)";
      // Move glare relative to mouse pos (-0.5 to 0.5)
      const xPos = (latestX + 0.5) * 100;
      const yPos = (latestY + 0.5) * 100;
      return `radial-gradient(1000px circle at ${xPos}% ${yPos}%, ${color2}, ${color1} 40%)`;
    }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-[2rem] overflow-hidden glass-panel border border-white/10 cursor-none hover:border-primary/50 transition-colors duration-500 h-[500px]"
    >
      {/* 3D Dynamic Glare overlay following the mouse */}
      <motion.div 
         className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
         style={{ background: backgroundTransform }}
      />

      {/* Dynamic Project Hex/Gradient Background */}
      <div 
        className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
        style={{ 
          background: project.image,
          transform: "translateZ(-50px)" // Push base background back
        }}
      ></div>

      {/* Internal Content layout wrapped in preserve-3d to lift off the background */}
      <div 
        className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end"
        style={{ transform: "translateZ(60px)" }} // Lift text 60px off the card base
      >
        <div className="mb-4 translate-y-12 group-hover:translate-y-0 shadow-2xl transition-transform duration-500 ease-[0.16,1,0.3,1]">
          <h4 className="text-neon-cyan font-bold tracking-[0.3em] text-sm uppercase mb-3 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
            {project.subtitle}
          </h4>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm font-bold text-white shadow-inner border border-white/20">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-foreground/90 font-medium leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>

          <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.liveDemo && (
               <a 
                 href={project.liveDemo}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white font-bold hover:text-neon-cyan transition-colors group/link cursor-none text-lg tracking-wide"
               >
                 Live Demo 
                 <ExternalLink size={20} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
               </a>
            )}
            {project.github && (
               <a 
                 href={project.github}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group/link cursor-none text-lg tracking-wide"
               >
                 Source Code
                 <Github size={20} className="group-hover/link:scale-110 transition-transform" />
               </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Heavy bottom-to-top shadow gradient so text remains infinitely readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" style={{ transform: "translateZ(20px)" }}></div>

      {/* Floating View Project Indicator */}
      <div 
        className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-[-45deg] group-hover:rotate-0 transition-all duration-700 ease-[0.16,1,0.3,1] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        style={{ transform: "translateZ(80px)" }}
      >
        <ArrowRight size={28} className="text-white" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-40 relative bg-transparent perspective-[1500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-6 text-white text-gradient inline-block tracking-tighter">
            PRO<br/>JECTS.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {portfolioData.projects.map((project, index) => (
             <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
