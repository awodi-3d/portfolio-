
import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-4 glass dark:bg-black/40 border-b border-black/5 dark:border-white/10 shadow-lg' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group relative z-[70]">
            <img 
              src="https://i.ibb.co/8gGSQy6M/20260111-141936.png" 
              alt="Awodi Abdulsamad Logo" 
              className={`h-16 md:h-28 w-auto transition-transform group-hover:scale-110 drop-shadow-xl object-contain ${theme === 'light' ? 'invert' : 'brightness-200'}`} 
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 text-[14px] font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-black dark:text-white/80 hover:text-gray-500 dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black dark:after:bg-white after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6 relative z-[70]">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <a 
              href="#contact" 
              className="hidden sm:inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-black/10"
            >
              Let's Work
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-black dark:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-3xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center space-y-10 p-6 text-center">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl font-serif font-bold text-black dark:text-white hover:italic transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-10 px-12 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full shadow-2xl transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
