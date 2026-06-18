import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, Lightbulb, Briefcase, Mail, Cpu } from 'lucide-react';
import Magnetic from './Magnetic';

// Changed nav links to precisely match section IDs
const navLinks = [
  { name: 'Home', to: 'home', icon: Home },
  { name: 'About', to: 'about', icon: User },
  { name: 'Experience', to: 'experience', icon: Cpu },
  { name: 'Skills', to: 'skills', icon: Lightbulb },
  { name: 'Projects', to: 'projects', icon: Briefcase },
  { name: 'Contact', to: 'contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Left Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-6 md:left-10 z-50 cursor-none"
      >
        <Magnetic>
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="text-2xl font-black tracking-tighter text-white flex items-center gap-2"
          >
            {/* <span className="text-primary">&lt;</span> */}
            <span className="neon-glow">Medha</span>
            {/* <span className="text-primary">/&gt;</span> */}
          </Link>
        </Magnetic>
      </motion.div>

      {/* Desktop Floating Pill Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 p-2 rounded-full transition-all duration-700 ${scrolled ? 'glass-panel shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-white/10 backdrop-blur-2xl bg-[#0a0a0a]/80' : 'bg-transparent'}`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.to;
          return (
            <Magnetic key={link.name}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                onSetActive={() => setActiveSection(link.to)}
                onClick={() => setActiveSection(link.to)}
                className={`relative cursor-none px-6 py-3 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300 z-10 flex items-center justify-center min-w-[100px] ${isActive ? 'text-white' : 'text-foreground/50 hover:text-white'}`}
              >
                {/* Framer Motion Sliding Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 block">{link.name}</span>
              </Link>
            </Magnetic>
          );
        })}
      </motion.nav>

      {/* Mobile Navbar Container */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 p-4">
        <div className={`flex justify-end items-center transition-all duration-500 ${scrolled ? 'glass-panel rounded-full px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-lg' : ''}`}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors focus:outline-none p-2 relative z-[60]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-4 right-4 mt-4 glass-panel bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-50"
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.to;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={800}
                      offset={-100}
                      onClick={() => {
                        setActiveSection(link.to);
                        setIsMobileMenuOpen(false); // Close on click
                      }}
                      onSetActive={() => setActiveSection(link.to)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-bold tracking-widest uppercase transition-all duration-300 ${isActive ? 'bg-white/10 text-white shadow-inner border border-white/5' : 'text-foreground/50 hover:text-white hover:bg-white/5'}`}
                    >
                      <Icon size={20} className={isActive ? 'text-primary' : 'opacity-50'} />
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
