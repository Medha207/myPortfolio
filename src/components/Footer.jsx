import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gradient mb-6">
          {portfolioData.hero.name.split(' ')[0]}.
        </h2>
        
        <div className="flex gap-6 mb-8">
          <a
            href={portfolioData.contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={portfolioData.contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-sm text-foreground/50 text-center">
          &copy; {currentYear} {portfolioData.hero.name}. All rights reserved. <br />
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
