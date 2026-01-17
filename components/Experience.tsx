import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-32 bg-[#f8f9fa] dark:bg-[#0a0a0a] transition-all duration-500 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">The Evolution</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-black dark:text-white">Career Progression</h2>
          </div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-10 group">
                <div className="md:w-1/4">
                  <span className="text-2xl font-serif italic font-bold text-gray-300 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors">{exp.year}</span>
                </div>
                <div className="md:w-3/4 pb-12 border-b border-black/5 dark:border-white/10">
                  <div className="max-w-2xl">
                    <h4 className="text-2xl font-bold mb-2 uppercase tracking-tight text-black dark:text-white">{exp.title}</h4>
                    <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 italic">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-lg leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;