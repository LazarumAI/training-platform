import React from 'react';
import Card from '../UI/Card';

interface ChartProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
  };
  height?: number;
}

const Chart: React.FC<ChartProps> = ({ 
  title, 
  data, 
  height = 200 
}) => {
  const maxValue = Math.max(...data.values) * 1.1;
  
  return (
    <Card className="h-full">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      
      <div className="relative" style={{ height }}>
        {/* Y-axis */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-400">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div key={i} className="text-right pr-2">
              {Math.round((maxValue / 4) * (4 - i))}
            </div>
          ))}
        </div>
        
        {/* Chart grid */}
        <div className="absolute left-8 right-0 top-0 bottom-14 bg-black/20">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div 
              key={i} 
              className="absolute left-0 right-0 border-t border-gray-800"
              style={{ bottom: `${(i * 100) / 4}%` }}
            ></div>
          ))}
          
          {/* Chart bars */}
          <div className="absolute left-0 right-0 bottom-0 top-0 flex items-end">
            {data.values.map((value, i) => {
              const height = (value / maxValue) * 100;
              
              return (
                <div 
                  key={i} 
                  className="flex-1 mx-1 flex items-end justify-center"
                >
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-primary-light relative group"
                    style={{ height: `${height}%`, minHeight: '4px' }}
                  >
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 bg-black px-2 py-1 text-xs rounded-md mb-1">
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* X-axis */}
        <div className="absolute left-8 right-0 bottom-0 h-14 flex items-start">
          {data.labels.map((label, i) => (
            <div 
              key={i} 
              className="flex-1 text-center text-xs text-gray-400 mt-2 truncate px-1"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Chart;