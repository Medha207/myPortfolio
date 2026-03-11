import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Terminal, Database, Cpu, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  'spark': <Sparkles size={24} className="text-neon-cyan" />,
  'terminal': <Terminal size={24} className="text-primary" />,
  'database': <Database size={24} className="text-accent" />,
  'cpu': <Cpu size={24} className="text-neon-cyan" />,
  'rocket': <Rocket size={24} className="text-primary" />
};

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale the timeline line dynamically based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            The Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Narrative Timeline */}
        <div className="relative">
          {/* Absolute Timeline Line Track */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2"></div>
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-accent to-neon-cyan md:-translate-x-1/2 origin-top"
          ></motion.div>

          <div className="space-y-24">
            {portfolioData.about.map((stage, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={stage.id} className="relative flex items-center md:justify-between w-full">
                  
                  {/* Left content (Empty on Mobile) */}
                  <div className={`hidden md:block w-5/12 ${!isEven ? 'text-right pr-12' : 'opacity-0'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                         <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                         <p className="text-foreground/60 text-lg leading-relaxed">{stage.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 rounded-full glass-panel flex items-center justify-center z-10 neon-border bg-[#0a0a0a]">
                     {iconMap[stage.icon]}
                  </div>

                  {/* Right content (Full width minus icon on mobile) */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:pl-12' : 'md:opacity-0'}`}>
                    {(isEven || typeof window !== 'undefined' && window.innerWidth < 768) && (
                      <motion.div
                        initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : (isEven ? 50 : -50) }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                         <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                         <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">{stage.description}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
