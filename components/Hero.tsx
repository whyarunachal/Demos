
import React from 'react';
import { View } from '../App.tsx';
import Logo from './Logo.tsx';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 -z-20 bg-[#030712]"></div>
      
      {/* Dynamic Faded Glows */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-indigo-600/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[140px] rounded-full"></div>
      </div>

      {/* Waves from the image footer with a heavier fade */}
      <div className="mountain-waves opacity-20"></div>

      <div className="container mx-auto px-6 text-center flex flex-col items-center relative z-10">
        {/* Massive Mascot Background Layer (Deeply Faded) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] scale-[2] pointer-events-none -z-10 blur-sm">
          <Logo size="xl" showText={false} />
        </div>

        <div className="mb-14 relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full scale-150 animate-pulse"></div>
          <Logo size="xl" showText={false} className="animate-in zoom-in duration-1000 relative" />
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-2xl backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Autonomous Operational Intelligence
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase font-heading">
          Scale Beyond <br />
          <span className="cyber-gradient-text italic opacity-90">The Human Cap.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 mb-16 leading-relaxed font-medium opacity-80">
          Manual logic is a bottleneck. We build the autonomous nervous system 
          that drives your business 24/7 without intervention.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl">
          <button 
            onClick={() => onNavigate('consultation')}
            className="group relative w-full sm:w-auto px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Deploy Autopilot
          </button>
          <button 
            onClick={() => onNavigate('results')}
            className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:border-indigo-500/50 backdrop-blur-md"
          >
            See Live Tracks
          </button>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-white/5 pt-16 w-full opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">90%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500">Tasks Automatable</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-indigo-400 mb-2 leading-none">0.0%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500">Logic Variance</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-cyan-400 mb-2 leading-none">10x</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500">Output Velocity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">24/7</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500">System Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
