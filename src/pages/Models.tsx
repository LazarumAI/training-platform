import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import CreateModelForm from '../components/Models/CreateModelForm';

const Models: React.FC = () => {
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);
  
  const models = [
    {
      id: '1',
      name: 'Text Classification v1',
      type: 'NLP',
      status: 'Active',
      accuracy: 92.4,
      lastUpdated: '2 hours ago',
      description: 'Sentiment analysis model trained on customer feedback data'
    },
    {
      id: '2',
      name: 'Image Recognition v2',
      type: 'CNN',
      status: 'Training',
      accuracy: 89.1,
      lastUpdated: '5 hours ago',
      description: 'Object detection model for autonomous systems'
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">AI Models</h1>
          <p className="text-gray-400">Manage and monitor your AI models</p>
        </div>
        <Button className="mt-4 md:mt-0" onClick={() => setIsCreateModelOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> Create New Model
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search models..."
            className="w-full pl-10 pr-4 py-2 bg-black/40 border border-gray-800 rounded-lg focus:border-primary/60 transition"
          />
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map(model => (
          <Card key={model.id} className="hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{model.name}</h3>
                <p className="text-sm text-gray-400">{model.type}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                model.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {model.status}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">{model.description}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Accuracy</span>
                <span className="text-primary font-medium">{model.accuracy}%</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary"
                  style={{ width: `${model.accuracy}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-400">
              Last updated {model.lastUpdated}
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isCreateModelOpen}
        onClose={() => setIsCreateModelOpen(false)}
        title="Create New Model"
      >
        <CreateModelForm onClose={() => setIsCreateModelOpen(false)} />
      </Modal>
    </div>
  );
};

export default Models;