import React from 'react';
import Card from './Card';
import { cn } from '../../utils/helpers';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className 
}) => {
  return (
    <Card className={cn('flex flex-col', className)}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-gray-400 text-sm">{title}</p>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        {trend && (
          <div className={cn(
            'flex items-center text-xs',
            trend.isPositive ? 'text-green-500' : 'text-red-500'
          )}>
            <span className="mr-1">
              {trend.isPositive ? '↑' : '↓'}
            </span>
            {trend.value}%
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;