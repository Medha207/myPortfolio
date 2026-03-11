import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);

  return (
    <section id="skills" className="py-40 relative overflow-hidden bg-transparent perspective-[1000px]" ref={containerRef}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
            SKILLS<span className="text-primary tracking-tight">.GALAXY</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto font-light">
            Grab, drag, and throw the planets in my digital universe.
          </p>
        </motion.div>

        {/* The Drag constraints box */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <motion.div 
             className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 md:gap-14"
          >
            {portfolioData.skills.map((skill, index) => {
              const floatDelay = index * 0.2;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="relative cursor-grab active:cursor-grabbing"
                  // Physical Drag Properties
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.6}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
                  whileDrag={{ scale: 1.3, zIndex: 100, rotate: 10 }}
                >
                  {/* Floating Animation Wrapper */}
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                    transition={{ duration: 5 + Math.random() * 2, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
                    className="group w-28 h-28 md:w-36 md:h-36 rounded-full glass-panel flex flex-col items-center justify-center relative transition-colors duration-500 z-10 border border-white/20 backdrop-blur-2xl"
                    style={{
                      boxShadow: `0 10px 30px -10px ${skill.color}50, inset 0 0 20px ${skill.color}20`,
                    }}
                  >
                    <div className="font-bold text-white text-lg md:text-xl mb-1 z-20 group-hover:scale-110 transition-transform tracking-wider">{skill.name}</div>
                    <div className="text-xs text-foreground/60 z-20 font-medium uppercase tracking-widest">{skill.category}</div>
                    
                    {/* Outer Drag/Hover Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none mix-blend-screen"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 transition-opacity duration-150 blur-3xl pointer-events-none mix-blend-screen"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
