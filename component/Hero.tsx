import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black pt-32 md:pt-40">
      {/* Background Video with absolute positioning and z-index fix */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale-[40%]"
        >
          <source src="https://res.cloudinary.com/dozameesu/video/upload/v1768566735/back_video0001-0192_jyxzjg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Soft glass overlay for legibility */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <div className="inline-block mb-8 px-6 py-2 glass-dark dark:bg-white/10 dark:text-white rounded-full text-[10px] tracking-[0.4em] uppercase font-bold text-black animate-fade-in shadow-sm">
          Awodi Abdulsamad • 3D Product Artist
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 leading-tight animate-fade-in tracking-tighter text-black dark:text-white">
          Mastering <br />
          <span className="italic">Visual Motion</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-800 dark:text-gray-300 text-lg md:text-xl font-light mb-12 leading-relaxed animate-fade-in [animation-delay:200ms]">
          Transforming static concepts into high-fidelity visual experiences through expert 3D craftsmanship and technical precision.
        </p>

        <div className="flex items-center justify-center gap-8 animate-fade-in [animation-delay:400ms]">
          <a 
            href="#portfolio" 
            className="px-12 py-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 rounded-full shadow-xl shadow-black/20"
          >
            Explore Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400">Scroll</span>
        <ArrowDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;