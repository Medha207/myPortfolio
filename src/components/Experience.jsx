import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, Target, Lightbulb, ShieldAlert } from 'lucide-react';

const Experience = () => {
  const experienceData = {
    role: "Business & Technology Consultant",
    company: "BRAVE Entrepreneurship Program",
    period: "2026 – Present",
    bullets: [
      {
        text: "Collaborated in a 6-member team to generate ₹2,00,000 in revenue within 3 months through client-facing technology solutions.",
        icon: <Users size={20} className="text-primary" />
      },
      {
        text: "Conducted requirement-gathering sessions with cafes, restaurants, clinics, and local retailers to identify operational pain points.",
        icon: <Target size={20} className="text-accent" />
      },
      {
        text: "Proposed and designed websites, AI-driven solutions, and digital systems to improve customer engagement and business efficiency.",
        icon: <Lightbulb size={20} className="text-neon-cyan" />
      },
      {
        text: "Led client communication, solution design, project planning, and end-to-end delivery of technology products.",
        icon: <Briefcase size={20} className="text-primary" />
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="py-32 relative bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            EXPERIENCE<span className="text-primary">.</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Details Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.05)] relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
            <div>
              <motion.h3 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-black text-white tracking-tight"
              >
                {experienceData.role}
              </motion.h3>
              <motion.h4 
                variants={itemVariants} 
                className="text-lg md:text-xl font-bold text-gradient inline-block mt-1"
              >
                {experienceData.company}
              </motion.h4>
            </div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-white/70 self-start md:self-center"
            >
              <Calendar size={16} className="text-neon-cyan" />
              <span>{experienceData.period}</span>
            </motion.div>
          </div>

          {/* Experience Bullets List */}
          <div className="space-y-6">
            {experienceData.bullets.map((bullet, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
                  {bullet.icon}
                </div>
                <p className="text-foreground/85 text-base md:text-lg leading-relaxed pt-1 group-hover:text-white transition-colors">
                  {bullet.text}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
