
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-32 w-32',
    xl: 'h-64 w-64 md:h-80 md:w-80'
  };

  const mainTextClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-4xl',
    xl: 'text-6xl md:text-7xl'
  };

  const subTextClasses = {
    sm: 'text-[6px]',
    md: 'text-[8px]',
    lg: 'text-[12px]',
    xl: 'text-[16px] md:text-[20px]'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Mascot Icon Container */}
      <div className={`${sizeClasses[size]} relative shrink-0 mb-4`}>
        {/* Glow Effects matching the image atmosphere */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full scale-150 opacity-60"></div>
        <div className="absolute inset-0 bg-cyan-400/10 blur-[30px] rounded-full scale-110"></div>
        
        {/* Accurate Re-creation of the Cyber Bull Mascot */}
        <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full fill-none drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          <defs>
            <filter id="eyeGlow">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="hornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>

          {/* Detailed Horns with Brain/Circuit Nodes as seen in image */}
          <g className="horns">
            <path d="M25 45 C15 35 10 15 20 8 C30 2 45 10 45 30" className="stroke-indigo-400" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M75 45 C85 35 90 15 80 8 C70 2 55 10 55 30" className="stroke-indigo-400" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* The "Brain/Network" nodes on the horns */}
            <g className="horn-nodes opacity-70">
              <circle cx="28" cy="18" r="4" className="stroke-cyan-400" strokeWidth="0.5" />
              <path d="M28 18 L32 12 L38 16 L28 18" className="stroke-cyan-400/50" strokeWidth="0.5" />
              <circle cx="32" cy="12" r="1" className="fill-cyan-400" />
              <circle cx="38" cy="16" r="1" className="fill-cyan-400" />
              
              <circle cx="72" cy="18" r="4" className="stroke-cyan-400" strokeWidth="0.5" />
              <path d="M72 18 L68 12 L62 16 L72 18" className="stroke-cyan-400/50" strokeWidth="0.5" />
              <circle cx="68" cy="12" r="1" className="fill-cyan-400" />
              <circle cx="62" cy="16" r="1" className="fill-cyan-400" />
            </g>
          </g>

          {/* Main Bull Face with Circuit Pattern */}
          <path d="M50 95 C35 95 22 80 22 55 C22 40 35 35 50 48 C65 35 78 40 78 55 C78 80 65 95 50 95Z" 
                className="fill-gray-950/90 stroke-indigo-500" strokeWidth="2" />
          
          {/* Internal Circuit Lines */}
          <path d="M35 55 L45 65 L45 80" className="stroke-cyan-400/30" strokeWidth="1" />
          <path d="M65 55 L55 65 L55 80" className="stroke-cyan-400/30" strokeWidth="1" />
          <path d="M30 65 H40 M60 65 H70" className="stroke-indigo-400/20" strokeWidth="1" />
          
          {/* Glowing Eyes */}
          <ellipse cx="40" cy="58" rx="4" ry="2.5" className="fill-white" filter="url(#eyeGlow)" />
          <ellipse cx="60" cy="58" rx="4" ry="2.5" className="fill-white" filter="url(#eyeGlow)" />
          
          {/* Muzzle */}
          <path d="M42 85 Q50 88 58 85" className="stroke-indigo-400/50" strokeWidth="1.5" />
          
          {/* Center Processing Node */}
          <circle cx="50" cy="62" r="3" className="fill-cyan-400 animate-pulse" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col items-center">
          <span className={`${mainTextClasses[size]} font-black tracking-[0.2em] text-white uppercase font-heading leading-none`}>
            Ronohills
          </span>
          <span className={`${subTextClasses[size]} uppercase tracking-[0.6em] font-bold text-gray-500 mt-3 whitespace-nowrap`}>
            AI Automation Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
