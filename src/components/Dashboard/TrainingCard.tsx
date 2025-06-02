import React from 'react';
import { PlayCircle, PauseCircle, RotateCcw, Settings } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ProgressBar from './ProgressBar';

interface TrainingCardProps {
  model: {
    id: string;
    name: string;
    type: string;
    status: 'idle' | 'training' | 'paused' | 'completed';
    progress: number;
    eta?: string;
    accuracy?: number;
    loss?: number;
  };
}

const TrainingCard: React.FC<TrainingCardProps> = ({ model }) => {
  const getStatusBadge = () => {
    switch (model.status) {
      case 'training':
        return <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Training</span>;
      case 'paused':
        return <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Paused</span>;
      case 'completed':
        return <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Completed</span>;
      default:
        return <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">Idle</span>;
    }
  };

  return (
    <Card className="h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{model.name}</h3>
          <p className="text-sm text-gray-400">{model.type}</p>
        </div>
        {getStatusBadge()}
      </div>
      
      <div className="mb-4">
        <ProgressBar progress={model.progress} />
        <div className="flex justify-between text-xs mt-1 text-gray-400">
          <span>{model.progress}% Complete</span>
          {model.eta && <span>ETA: {model.eta}</span>}
        </div>
      </div>
      
      {(model.accuracy !== undefined || model.loss !== undefined) && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {model.accuracy !== undefined && (
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">Accuracy</p>
              <p className="font-semibold">{model.accuracy}%</p>
            </div>
          )}
          {model.loss !== undefined && (
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">Loss</p>
              <p className="font-semibold">{model.loss.toFixed(4)}</p>
            </div>
          )}
        </div>
      )}
      
      <div className="flex justify-between gap-2 mt-auto">
        {model.status === 'training' ? (
          <Button variant="secondary" className="flex-1">
            <PauseCircle className="w-4 h-4 mr-1" /> Pause
          </Button>
        ) : (
          <Button className="flex-1">
            <PlayCircle className="w-4 h-4 mr-1" /> {model.status === 'paused' ? 'Resume' : 'Start'}
          </Button>
        )}
        <Button variant="secondary" className="p-2">
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button variant="secondary" className="p-2">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default TrainingCard;