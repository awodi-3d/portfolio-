import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const formspreeId = "mbdddrez"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("There was an issue sending your message. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Something went wrong. Please reach out to awodi.3d@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-32 bg-white dark:bg-black transition-all duration-500 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass dark:bg-white/5 rounded-[3rem] overflow-hidden border-black/5 dark:border-white/10 border shadow-2xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 p-12 md:p-16 bg-black dark:bg-[#111] text-white">
              <span className="text-gray-400 dark:text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Communication</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">Start a <br />Collaboration</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                    <Mail className="w-5 h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-light hover:text-gray-300 transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                    <Phone className="w-5 h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">WhatsApp</p>
                    <a href={`https://wa.me/2347069377546`} target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-gray-300 transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                    <MapPin className="w-5 h-5 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-light">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-12 md:p-20 bg-white/30 dark:bg-black/40 backdrop-blur-md">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-black dark:text-white" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-black dark:text-white">Transmission Received</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light text-lg">I'll review your project details and get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-[10px] uppercase font-bold tracking-widest text-black dark:text-white border-b border-black dark:border-white pb-1 hover:opacity-70 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  action={`https://formspree.io/f/${formspreeId}`} 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-10"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold">Your Name</label>
                      <input 
                        required 
                        name="name"
                        type="text" 
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-all font-light text-black dark:text-white" 
                        placeholder="Full name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold">Email Address</label>
                      <input 
                        required 
                        name="email"
                        type="email" 
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-all font-light text-black dark:text-white" 
                        placeholder="Email@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold">Project Vision</label>
                    <textarea 
                      required 
                      name="message"
                      rows={4} 
                      className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-black dark:focus:border-white transition-all font-light resize-none text-black dark:text-white" 
                      placeholder="Tell me about your product reveal or loop vision..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 rounded-full disabled:opacity-50 shadow-xl shadow-black/10"
                  >
                    {isSubmitting ? "Syncing..." : "Send Request"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;