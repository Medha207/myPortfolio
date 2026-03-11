import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Collaboration Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white text-gradient">
              Let's Build <br/> The Future.
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-lg">
              Open to ambitious opportunities, innovative collaborations, and bringing groundbreaking ideas to life.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 glass-panel rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 w-full max-w-sm">
                 <div className="flex items-center gap-4 text-white">
                   <div className="p-3 bg-white/10 rounded-full group-hover:bg-primary/20 transition-colors"><Github size={24} /></div>
                   <span className="font-bold text-lg">GitHub</span>
                 </div>
                 <ChevronRight className="text-white/30 group-hover:text-primary transition-colors group-hover:translate-x-1" />
              </a>
              <a href={portfolioData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 glass-panel rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 w-full max-w-sm">
                 <div className="flex items-center gap-4 text-white">
                   <div className="p-3 bg-white/10 rounded-full group-hover:bg-accent/20 transition-colors"><Linkedin size={24} /></div>
                   <span className="font-bold text-lg">LinkedIn</span>
                 </div>
                 <ChevronRight className="text-white/30 group-hover:text-accent transition-colors group-hover:translate-x-1" />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="group flex items-center justify-between p-6 glass-panel rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 w-full max-w-sm">
                 <div className="flex items-center gap-4 text-white">
                   <div className="p-3 bg-white/10 rounded-full group-hover:bg-neon-cyan/20 transition-colors"><Mail size={24} /></div>
                   <span className="font-bold text-lg">Email Me</span>
                 </div>
                 <ChevronRight className="text-white/30 group-hover:text-neon-cyan transition-colors group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Futuristic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="relative p-8 md:p-10 glass-panel rounded-3xl border border-white/5 shadow-2xl">
              {/* Glowing decorative dot */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className={`transition-all duration-300 rounded-xl overflow-hidden border ${focusedInput === 'name' ? 'border-primary shadow-[0_0_15px_rgba(14,165,233,0.3)]' : 'border-white/10'}`}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    placeholder="ENTER DESIGNATION (NAME)"
                    className="w-full bg-[#0a0a0a]/50 px-6 py-5 text-white placeholder-white/30 focus:outline-none uppercase tracking-widest text-sm font-medium"
                  />
                </div>
                
                <div className={`transition-all duration-300 rounded-xl overflow-hidden border ${focusedInput === 'email' ? 'border-accent shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'border-white/10'}`}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    placeholder="TRANSMISSION NODE (EMAIL)"
                    className="w-full bg-[#0a0a0a]/50 px-6 py-5 text-white placeholder-white/30 focus:outline-none uppercase tracking-widest text-sm font-medium"
                  />
                </div>
                
                <div className={`transition-all duration-300 rounded-xl overflow-hidden border ${focusedInput === 'message' ? 'border-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10'}`}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    required
                    rows="4"
                    placeholder="INITIATE PROTOCOL (MESSAGE)"
                    className="w-full bg-[#0a0a0a]/50 px-6 py-5 text-white placeholder-white/30 focus:outline-none uppercase tracking-widest text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full relative group overflow-hidden rounded-xl border border-primary/50 bg-primary/10 py-5 flex items-center justify-center gap-3 transition-all hover:bg-primary/20 disabled:opacity-50"
                  style={{ textShadow: "0 0 10px rgba(14,165,233,0.8)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-cyan opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="font-bold text-white uppercase tracking-[0.2em] relative z-10">
                    {status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'PROTOCOL RECEIVED' : 'INITIATE CONNECTION'}
                  </span>
                  {status === '' && <Send size={18} className="text-white relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
