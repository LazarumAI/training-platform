import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import Card from '../UI/Card';

interface Model {
  id: string;
  name: string;
  type: string;
  accuracy: number;
  timestamp: string;
}

const ModelsList: React.FC = () => {
  const models: Model[] = [
    { id: '1', name: 'Text Classification v1', type: 'NLP', accuracy: 0, timestamp: '0 hours ago' },
    { id: '2', name: 'Image Recognition', type: 'CNN', accuracy: 0, timestamp: '0 hours ago' },
    { id: '3', name: 'Sentiment Analysis', type: 'BERT', accuracy: 0, timestamp: '0 days ago' },
    { id: '4', name: 'Object Detection v2', type: 'YOLO', accuracy: 0, timestamp: '0 days ago' },
  ];

  return (
    <Card className="h-full overflow-hidden">
      <h3 className="font-bold text-lg mb-4">Recent Models</h3>
      
      <div className="overflow-y-auto max-h-[400px] pr-2 -mr-2">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="mb-3 p-3 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer border border-transparent hover:border-primary/30"
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{model.name}</h4>
                <p className="text-xs text-gray-400">{model.type}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-primary">
                  {model.accuracy}%
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {model.timestamp}
                </div>
              </div>
            </div>
            
            {/* Performance bar */}
            <div className="mt-2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary"
                style={{ width: `${model.accuracy}%` }}
              ></div>
            </div>
          </div>
        ))}
        
        <button className="w-full mt-2 py-2 text-sm text-primary hover:text-primary-light transition-colors">
          View All Models →
        </button>
      </div>
    </Card>
  );
};

export default ModelsList;