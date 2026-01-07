
import React from 'react';
import { View } from '../App.tsx';
import Logo from './Logo.tsx';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 -z-20 bg-[#030712]"></div>
      
      {/* Central Glow Atmosphere */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-600/10 blur-[180px] rounded-full"></div>
      </div>

      {/* The Digital Waves from the brand image */}
      <div className="mountain-waves opacity-40"></div>

      <div className="container mx-auto px-6 text-center flex flex-col items-center relative z-10">
        {/* Main Brand Centered exactly as in the image */}
        <div className="mb-24 animate-in fade-in zoom-in duration-1000">
          <Logo size="xl" showText={true} />
        </div>

        {/* Action and Copy */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Operational Intelligence on Autopilot
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase font-heading text-white">
            Engineering the <span className="cyber-gradient-text italic">Autonomous Foundation</span> <br />
            of high-growth teams.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-medium opacity-80 pb-6">
            We bridge the gap between AI hype and operational reality by building 
            bespoke, autonomous workflows that scale without human friction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl mx-auto">
            <button 
              onClick={() => onNavigate('consultation')}
              className="group relative w-full sm:w-auto px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              Schedule ROI Audit
            </button>
            <button 
              onClick={() => onNavigate('results')}
              className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:border-indigo-500/50 backdrop-blur-md"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Social Proof / Stats Bar */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-white/5 pt-16 w-full opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white mb-2 leading-none">90%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 text-center">Admin Removal</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-indigo-400 mb-2 leading-none">10x</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 text-center">Output Capacity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-cyan-400 mb-2 leading-none">0.0%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 text-center">Logic Errors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white mb-2 leading-none">24/7</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 text-center">Systems Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
