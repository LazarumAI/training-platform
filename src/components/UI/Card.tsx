import React from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  className?: string;
  glowing?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  className, 
  glowing = false, 
  children 
}) => {
  return (
    <div 
      className={cn(
        'glassmorphism p-6',
        glowing && 'glow',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;