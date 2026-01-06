
import React from 'react';
import { View } from '../App.tsx';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Operational Excellence
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
          Replace manual work <br />
          <span className="gradient-text">with intelligent systems</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          We combine advanced AI with hyper-automation to eliminate repetitive tasks, 
          cut human error, and unlock your team's creative bandwidth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('consultation')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1"
          >
            Scale My Bandwidth
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all"
          >
            Explore Solutions
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
          <div>
            <div className="text-3xl font-bold mb-1">90%</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Efficiency Gain</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">10k+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Manual Hours Cut</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Autonomous Scale</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">4.8x</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
