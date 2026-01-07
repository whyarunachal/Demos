
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentView !== 'home' ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-80 transition-opacity"
        >
          <Logo size="sm" />
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`text-sm font-medium transition-colors ${
                currentView === item.view ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate('consultation')}
          className="bg-white text-gray-950 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-lg"
        >
          Free Audit
        </button>
      </div>
    </header>
  );
};

export default Header;
