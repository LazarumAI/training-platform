import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/lz.png" alt="Lazarum AI Logo" className="w-8 h-8" />
      <div className="font-bold text-xl tracking-tight">
        <span className="text-white">Lazarum</span>
        <span className="text-primary"> AI</span>
      </div>
    </div>
  );
};

export default Logo;