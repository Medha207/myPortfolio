import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Vision = () => {
  return (
    <section className="py-32 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.1)] relative overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative z-10">
            Vision & Future
          </h2>
          <p className="text-xl md:text-3xl leading-relaxed text-foreground/80 font-light relative z-10">
             "{portfolioData.vision.description}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
