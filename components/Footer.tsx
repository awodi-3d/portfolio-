import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  theme?: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center gap-2 mb-12">
            <img 
              src="https://i.ibb.co/8gGSQy6M/20260111-141936.png" 
              alt="Awodi Abdulsamad Logo" 
              className={`h-20 md:h-28 w-auto transition-transform hover:scale-110 drop-shadow-xl object-contain ${theme === 'light' ? 'invert' : 'brightness-200'}`} 
            />
          </a>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-16">
            {SOCIAL_LINKS.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all hover:-translate-y-1"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="w-full pt-12 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold text-center">
              © {currentYear} Awodi Abdulsamad • All Rights Reserved
            </p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 tracking-widest uppercase font-bold text-center">
              3D Artist & Motion Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;