
import React from 'react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Ronohills AI</span>
              </button>
            </div>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              We act as your Fractional Chief AI and Automation Officer, 
              engineering the systems that allow your business to scale 
              to 10x without 10xing your team.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-[10px] font-bold">IN</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-[10px] font-bold">X</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Sales Automation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Data Recognition</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Conversational AI</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Custom Python Dev</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => onNavigate('process')} className="hover:text-white transition-colors">Our Process</button></li>
              <li><button onClick={() => onNavigate('results')} className="hover:text-white transition-colors">Workflow Library</button></li>
              <li><button onClick={() => onNavigate('results')} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => onNavigate('consultation')} className="hover:text-white transition-colors">Book Consultation</button></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          <div>© 2024 Ronohills AI Automation Agency. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
