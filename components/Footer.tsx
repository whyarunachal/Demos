
import React from 'react';
import { View } from '../App.tsx';
import Logo from './Logo.tsx';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 border-t border-white/5 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="mb-8">
              <button onClick={() => onNavigate('home')}>
                <Logo size="md" />
              </button>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Engineering the "tracks" for your business to scale with AI. 
              Acting as your fractional CTO for automation.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-indigo-500/20 transition-all cursor-pointer flex items-center justify-center border border-white/5">
                <span className="text-xs font-bold text-gray-400">LN</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-indigo-500/20 transition-all cursor-pointer flex items-center justify-center border border-white/5">
                <span className="text-xs font-bold text-gray-400">TW</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8">Solutions</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Sales Engine</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Data Synthesis</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Support Autopilot</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Custom Core Dev</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => onNavigate('process')} className="hover:text-white transition-colors">Our Process</button></li>
              <li><button onClick={() => onNavigate('results')} className="hover:text-white transition-colors">Results</button></li>
              <li><button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors">Philosophy</button></li>
              <li><button onClick={() => onNavigate('consultation')} className="hover:text-white transition-colors">Book Audit</button></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-gray-600 text-sm">
          <div>© 2025 Ronohills AI Automation Agency. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
