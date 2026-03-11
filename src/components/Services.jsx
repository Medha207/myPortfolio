import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  'laptop': <Laptop size={32} />,
  'server': <Server size={32} />,
  'palette': <Palette size={32} />
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
            My Services
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            What I can do for you and your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white dark:hover:bg-zinc-800 transition-colors border hover:border-primary/50 shadow-sm hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
