
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const textClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl md:text-6xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
        <span className="text-white font-black text-lg leading-none">R</span>
      </div>
      {showText && (
        <span className={`${textClasses[size]} font-bold tracking-tight text-white`}>
          Ronohills<span className="text-indigo-500">.</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
