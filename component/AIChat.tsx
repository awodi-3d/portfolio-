import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Awodi's AI Assistant. How can I help you explore his 3D product visualization work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAIResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] flex flex-col items-end">
      {/* The Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[400px] h-[550px] glass dark:bg-black/80 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border-black/5 dark:border-white/10 border animate-in slide-in-from-bottom-5 backdrop-blur-2xl">
          {/* Header */}
          <div className="p-8 border-b border-black/5 dark:border-white/10 flex justify-between items-center bg-white/60 dark:bg-black/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">Awodi Concierge</h4>
                <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Ready to assist</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors group"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth bg-white/10 dark:bg-black/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-black dark:bg-white text-white dark:text-black font-medium' 
                    : 'bg-white/70 dark:bg-neutral-800/80 backdrop-blur-md border border-black/5 dark:border-white/10 text-gray-800 dark:text-gray-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/40 dark:bg-white/5 glass p-5 rounded-[1.5rem] italic text-gray-400 dark:text-gray-500 text-[10px] tracking-widest animate-pulse border border-black/5 dark:border-white/10">
                  Analyzing request...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-8 border-t border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/40">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about his workflow..."
                className="w-full bg-white/80 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 pr-14 text-sm outline-none focus:border-black dark:focus:border-white transition-all font-light shadow-inner text-black dark:text-white placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 glass dark:bg-white/10 rounded-full flex items-center justify-center text-black dark:text-white shadow-2xl border-black/10 dark:border-white/20 border hover:scale-110 active:scale-95 transition-all animate-float bg-white/30 backdrop-blur-xl"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <>
            <div className="absolute top-0 right-0 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black animate-ping"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default AIChat;