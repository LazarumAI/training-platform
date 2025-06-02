import React, { useState } from 'react';
import { Brain, Cpu, Database, Layers, Plus } from 'lucide-react';
import MetricCard from '../components/UI/MetricCard';
import TrainingCard from '../components/Dashboard/TrainingCard';
import TrainingParameters from '../components/Dashboard/TrainingParameters';
import ModelsList from '../components/Dashboard/ModelsList';
import Chart from '../components/Dashboard/Chart';
import Modal from '../components/UI/Modal';
import CreateModelForm from '../components/Models/CreateModelForm';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { generateRandomData } from '../utils/helpers';

const Dashboard: React.FC = () => {
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);
  
  // Sample data for charts with zero values
  const accuracyData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    values: [0, 0, 0, 0, 0, 0, 0]
  };
  
  const lossData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    values: [0, 0, 0, 0, 0, 0, 0]
  };

  const models = [
    {
      id: '1',
      name: 'Transformer NLP',
      type: 'Language Model',
      status: 'idle' as const,
      progress: 0,
      eta: '0 min',
      accuracy: 0,
      loss: 0
    },
    {
      id: '2',
      name: 'Image Classifier',
      type: 'CNN',
      status: 'idle' as const,
      progress: 0,
      accuracy: 0,
      loss: 0
    }
  ];

  return (
    <div className="pb-10">
      {/* Hero section with gradient background */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"></div>
        
        <div className="container mx-auto px-4 py-16 pt-32 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Train Your <span className="text-primary">AI Model</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mb-8">
            Lazarum AI provides cutting-edge tools for training and deploying machine learning models with unprecedented ease and performance.
          </p>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="container mx-auto px-4">
        {/* Metrics overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <MetricCard 
            title="Total Models" 
            value="0" 
            icon={<Brain className="w-5 h-5" />}
            trend={{ value: 0, isPositive: true }}
          />
          <MetricCard 
            title="Active Training" 
            value="0" 
            icon={<Cpu className="w-5 h-5" />}
            trend={{ value: 0, isPositive: true }}
          />
          <MetricCard 
            title="Data Processed" 
            value="0 GB" 
            icon={<Database className="w-5 h-5" />}
            trend={{ value: 0, isPositive: true }}
          />
        </div>

        {/* Active training section */}
        <h2 className="text-xl font-bold mb-4">Active Training</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {models.map(model => (
              <TrainingCard key={model.id} model={model} />
            ))}
          </div>
          <TrainingParameters />
        </div>

        {/* Charts and analytics */}
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Chart title="Accuracy Trends" data={accuracyData} />
          <Chart title="Loss Trends" data={lossData} />
        </div>

        {/* Recent models and activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ModelsList />
          </div>
          <div>
            <Card glowing className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
              <p className="text-gray-400 mb-6">
                Upload your dataset and configure parameters to begin training your custom AI model.
              </p>
              <Button size="lg" onClick={() => setIsCreateModelOpen(true)}>
                Create New Model
              </Button>
            </Card>
          </div>
        </div>
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

export default Dashboard;