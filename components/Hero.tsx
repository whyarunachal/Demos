
import React from 'react';
import { View } from '../App.tsx';
import Logo from './Logo.tsx';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Now accepting new enterprise partners for Q1 2025
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          AI for Teams that <br />
          <span className="gradient-text italic">Refuse to Wait.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          Ronohills integrates bespoke AI automation into your existing workflow, 
          replacing manual bottlenecks with autonomous logic that works while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('consultation')}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/20"
          >
            Start Your Free Audit
          </button>
          <button 
            onClick={() => onNavigate('results')}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all"
          >
            View Workflows
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Trust badges / Stats placeholder */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">90%</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Efficiency Gain</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">2.5k</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Hours Saved/mo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">0.0%</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Human Error</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">24/7</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Uptime Logic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
