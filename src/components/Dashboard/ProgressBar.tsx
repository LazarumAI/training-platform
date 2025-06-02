import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary-dark to-primary-light"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/20 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default ProgressBar;