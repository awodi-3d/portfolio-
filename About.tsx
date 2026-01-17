import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className={`py-32 bg-white dark:bg-[#0a0a0a] transition-all duration-500 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] glass dark:bg-white/5 rounded-3xl overflow-hidden relative z-10 border-black/5 dark:border-white/10 border shadow-2xl">
              <img 
                src="https://i.ibb.co/DDJk6Mb1/Gemini-Generated-Image-c1fshcc1fshcc1fs.png?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="Awodi Abdulsamad" 
                className="w-full h-full object-cover grayscale brightness-110 dark:brightness-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-black/5 dark:border-white/10 -z-0 rounded-3xl"></div>
          </div>

          <div className="space-y-8">
            <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] block">Professional Profile</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-black dark:text-white">Bringing Static Products into Motion.</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed">
              <p>
                I am <span className="text-black dark:text-white font-semibold">Awodi Abdulsamad</span>, a 3D Product Artist dedicated to transforming concepts into high-fidelity visual experiences. With over 4 years of experience, I specialize in the art of modeling, lighting, and texturing, primarily within Blender.
              </p>
              <p>
                My workflow is focused on the intersection of technical precision and cinematic storytelling. Whether it’s a complex product reveal or a sleek promotional loop, I leverage <span className="italic">DaVinci Resolve</span> to ensure every frame resonates with quality and movement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-black/5 dark:border-white/10">
              <div>
                <h4 className="text-black dark:text-white text-3xl font-serif font-bold mb-1">04+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-black dark:text-white text-3xl font-serif font-bold mb-1">Expert</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500">Blender/DaVinci</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;