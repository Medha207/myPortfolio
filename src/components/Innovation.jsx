import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Innovation = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="py-40 relative flex items-center justify-center overflow-hidden bg-transparent border-y border-white/5">
      {/* Background large floating neo-orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {portfolioData.innovation.statement.map((text, index) => (
           <motion.h2 
             key={index}
             initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, delay: index * 0.4, ease: "easeOut" }}
             className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight ${
               index === 2 ? 'text-gradient py-2' : 'text-white'
             }`}
           >
             {text}
           </motion.h2>
        ))}
      </div>
    </section>
  );
};

export default Innovation;
