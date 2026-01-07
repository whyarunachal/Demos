
import React from 'react';
import { View } from '../App.tsx';
import Logo from './Logo.tsx';

interface HeaderProps {
  scrolled: boolean;
  onNavigate: (view: View) => void;
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onNavigate, currentView }) => {
  const navItems: { label: string; view: View }[] = [
    { label: 'Philosophy', view: 'philosophy' },
    { label: 'Process', view: 'process' },
    { label: 'Services', view: 'services' },
    { label: 'Results', view: 'results' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || currentView !== 'home' 
          ? 'bg-cyber-navy/80 backdrop-blur-2xl border-b border-indigo-500/10 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-80 transition-all hover:scale-[1.02]"
        >
          <Logo size="sm" />
        </button>
        
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:tracking-[0.25em] ${
                currentView === item.view ? 'text-cyan-400' : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate('consultation')}
          className="bg-indigo-600 text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
        >
          Deploy Audit
        </button>
      </div>
    </header>
  );
};

export default Header;
