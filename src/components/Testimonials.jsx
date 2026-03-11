import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
            Client Feedback
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 md:p-10 rounded-3xl max-w-2xl w-full relative group"
            >
              <Quote size={40} className="text-primary/20 absolute top-6 left-6" />
              <div className="relative z-10 pl-6 pt-2">
                <p className="text-lg md:text-xl text-foreground/80 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
