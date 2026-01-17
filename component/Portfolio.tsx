import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Play, X, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Use a smaller threshold to ensure it triggers on scroll
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Immediate check to handle cases where the section is already in viewport
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className={`py-32 bg-white dark:bg-black transition-all duration-1000 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Visual Archive</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-black dark:text-white">Featured Works</h2>
          </div>
          <div className="text-gray-400 dark:text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            Click to view case study
          </div>
        </div>

        {/* Unified Projects Grid for all 4 items */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveVideo(project.videoUrl)}
            >
              <div className="aspect-video relative overflow-hidden rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/10 mb-10 bg-gray-100 dark:bg-neutral-900">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 glass dark:bg-white/20 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                    <Play className="text-black dark:text-white w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
              <div className="px-4 flex-1">
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] font-bold">{project.category}</span>
                   <div className="h-[1px] w-12 bg-black/10 dark:bg-white/10"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white mb-2 group-hover:italic transition-all duration-300">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/30 mb-6 italic">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed max-w-lg mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black dark:text-white opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  View Full Project <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button 
            className="absolute top-10 right-10 text-black dark:text-white hover:scale-110 transition-transform"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="w-full max-w-6xl aspect-video glass dark:bg-white/5 rounded-[3rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
            <iframe 
              src={activeVideo} 
              className="w-full h-full" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;