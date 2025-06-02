import React, { useState } from 'react';
import { Save, Upload, RefreshCw, HelpCircle } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const TrainingParameters: React.FC = () => {
  const [parameters, setParameters] = useState({
    epochs: 10,
    batchSize: 32,
    learningRate: 0.001,
    optimizer: 'adam',
    dataset: 'custom',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParameters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="h-full">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg">Training Parameters</h3>
        <div className="flex gap-2">
          <button className="p-1.5 bg-black/40 rounded-md hover:bg-black/60 transition">
            <Save className="w-4 h-4" />
          </button>
          <button className="p-1.5 bg-black/40 rounded-md hover:bg-black/60 transition">
            <Upload className="w-4 h-4" />
          </button>
          <button className="p-1.5 bg-black/40 rounded-md hover:bg-black/60 transition">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Epochs</label>
            <input
              type="number"
              name="epochs"
              value={parameters.epochs}
              onChange={handleChange}
              className="input-field"
              min="1"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Batch Size</label>
            <input
              type="number"
              name="batchSize"
              value={parameters.batchSize}
              onChange={handleChange}
              className="input-field"
              min="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Learning Rate</label>
          <input
            type="number"
            name="learningRate"
            value={parameters.learningRate}
            onChange={handleChange}
            className="input-field"
            step="0.0001"
            min="0.0001"
            max="1"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Optimizer</label>
          <select
            name="optimizer"
            value={parameters.optimizer}
            onChange={handleChange}
            className="input-field"
          >
            <option value="adam">Adam</option>
            <option value="sgd">SGD</option>
            <option value="rmsprop">RMSProp</option>
            <option value="adagrad">Adagrad</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Dataset</label>
          <select
            name="dataset"
            value={parameters.dataset}
            onChange={handleChange}
            className="input-field"
          >
            <option value="custom">Custom Upload</option>
            <option value="mnist">MNIST</option>
            <option value="cifar10">CIFAR-10</option>
            <option value="imagenet">ImageNet</option>
          </select>
        </div>

        <div className="mt-6">
          <Button className="w-full">
            Apply Parameters
          </Button>
        </div>
      </div>

      <div className="mt-4 bg-gray-900/40 p-3 rounded-lg flex items-start text-xs text-gray-400">
        <HelpCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
        <p>Adjust parameters to optimize your model training. For beginners, we recommend starting with the default values.</p>
      </div>
    </Card>
  );
};

export default TrainingParameters;