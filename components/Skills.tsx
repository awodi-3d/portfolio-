import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
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
      id="skills" 
      ref={sectionRef}
      className={`py-32 bg-[#f1f3f5] dark:bg-[#0f0f0f] transition-all duration-500 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black dark:text-white">Core Expertise</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="glass dark:bg-white/5 p-8 md:p-12 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 rounded-[2rem] group border border-black/5 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 uppercase tracking-tight text-black dark:text-white">{skill.name}</h3>
              <p className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest font-bold">{skill.level}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-8">Primary Tools</p>
          <div className="flex justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all dark:text-white/70 dark:hover:text-white">
             <span className="text-2xl font-bold">Blender</span>
             <span className="text-2xl font-bold">DaVinci Resolve</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;