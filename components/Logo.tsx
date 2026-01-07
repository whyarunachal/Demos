
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
    xl: 'h-32 w-32 md:h-48 md:w-48'
  };

  const textClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl md:text-6xl'
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Mascot Icon Container */}
      <div className={`${sizeClasses[size]} relative shrink-0 group`}>
        {/* Glow effect matching the image */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-700 rounded-full scale-110"></div>
        
        {/* Stylized Bull Head SVG */}
        <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full fill-none drop-shadow-2xl">
          {/* Horns */}
          <path d="M20 40 Q5 30 15 10 Q25 5 40 25" className="stroke-indigo-400" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 40 Q95 30 85 10 Q75 5 60 25" className="stroke-indigo-400" strokeWidth="3" strokeLinecap="round" />
          
          {/* Face Structure */}
          <path d="M50 85 C30 85 20 70 20 50 C20 35 35 30 50 45 C65 30 80 35 80 50 C80 70 70 85 50 85Z" 
                className="fill-gray-950 stroke-indigo-500" strokeWidth="2" />
          
          {/* Circuit Details */}
          <circle cx="50" cy="55" r="4" className="fill-cyan-400 animate-pulse" />
          <path d="M35 55 H45 M55 55 H65" className="stroke-indigo-300/50" strokeWidth="1" />
          <path d="M50 59 V75" className="stroke-cyan-400/60" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Eyes */}
          <circle cx="38" cy="55" r="2" className="fill-white" />
          <circle cx="62" cy="55" r="2" className="fill-white" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col items-start leading-none">
          <span className={`${textClasses[size]} font-black tracking-widest text-white uppercase font-heading`}>
            Ronohills
          </span>
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-gray-500 mt-1">
            AI Automation Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
