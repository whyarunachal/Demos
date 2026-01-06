
import React from 'react';

const testimonials = [
  {
    quote: "Ronohills didn't just give us a chatbot; they rebuilt our entire fulfillment logic. Our bandwidth increased by 300% without a single new hire.",
    author: "Elena Rodriguez",
    role: "VP of Operations",
    company: "Loom Dynamics"
  },
  {
    quote: "As a CEO, I was drowning in admin. Now, my 'AI Assistant' handles everything from scheduling to preliminary data analysis. I'm back to strategy.",
    author: "Mark Sinclair",
    role: "CEO",
    company: "Visionary Group"
  },
  {
    quote: "The ROI Audit was eye-opening. We were burning $15k/month on manual data entry that now costs us $40/month in API credits.",
    author: "Sarah Chen",
    role: "Finance Director",
    company: "E-Com Elite"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="glass-card p-10 rounded-3xl relative transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.06] hover:border-indigo-500/30 group cursor-default"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="absolute -top-4 left-10 text-6xl text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors duration-500 font-serif leading-none">“</div>
              
              <p className="text-lg text-gray-300 mb-8 italic relative z-10 leading-relaxed group-hover:text-white transition-colors duration-500">
                {t.quote}
              </p>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full group-hover:scale-y-110 transition-transform duration-500"></div>
                <div>
                  <div className="font-bold text-white group-hover:text-indigo-300 transition-colors duration-500">{t.author}</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">{t.role} @ {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
