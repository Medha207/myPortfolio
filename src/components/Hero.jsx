import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Magnetic from './Magnetic';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax the hero text down as we scroll
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineWords = portfolioData.hero.headline.split(" ");
  const subHeadlineWords = portfolioData.hero.subHeadline.split(" ");

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { y: "150%", rotate: 10, opacity: 0 },
    visible: { 
      y: "0%", 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-transparent perspective-[1000px]">
      {/* Cinematic Content */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full pt-20 md:pt-32"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-5xl text-white font-bold tracking-wider mb-4 uppercase drop-shadow-lg flex justify-center gap-[0.25em]"
        >
          {portfolioData.hero.greeting.split(" ").map((word, idx) => (
            <span key={idx}>{word}</span>
          ))}
        </motion.h2>
        
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-8 tracking-tighter leading-[1.1] flex flex-col items-center justify-center"
        >
          {/* Headline Loop */}
          <div className="flex flex-wrap justify-center overflow-hidden pb-4">
            {headlineWords.map((word, idx) => (
              <span key={idx} className="overflow-hidden inline-block">
                <motion.span variants={wordVariants} className="inline-block text-gradient drop-shadow-2xl">
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </div>
          
          {/* SubHeadline Loop */}
          <div className="flex flex-wrap justify-center overflow-hidden">
             {subHeadlineWords.map((word, idx) => (
              <span key={idx} className="overflow-hidden inline-block pb-2">
                <motion.span variants={wordVariants} className="inline-block text-white drop-shadow-xl">
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed mb-16"
        >
          {portfolioData.hero.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Magnetic>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="group cursor-none relative overflow-hidden rounded-full px-10 py-5 bg-primary text-white font-bold tracking-widest flex items-center gap-4 transition-transform shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_rgba(14,165,233,0.8)] text-lg"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Magnetic>

          <Magnetic>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="cursor-none px-10 py-5 rounded-full border border-white/20 text-white font-bold tracking-widest flex items-center gap-4 transition-all duration-500 hover:bg-white/10 hover:border-white/50 glass-hover text-lg"
            >
              <Mail size={24} />
              Contact Me
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 cursor-none z-20 pointer-events-none"
      >
        <span className="text-sm uppercase tracking-[0.5em] text-white/50">Scroll to explore</span>
        <motion.div
           animate={{ y: [0, 15, 0] }}
           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/80" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
