import React from 'react';
import { Upload, Search, Filter, Database, FileText, Image as ImageIcon } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Datasets: React.FC = () => {
  const datasets = [
    {
      id: '1',
      name: 'Customer Feedback Data',
      type: 'Text',
      size: '2.4 GB',
      records: '150,000',
      lastUpdated: '1 hour ago',
      icon: FileText,
    },
    {
      id: '2',
      name: 'Product Images',
      type: 'Image',
      size: '5.1 GB',
      records: '25,000',
      lastUpdated: '3 hours ago',
      icon: ImageIcon,
    },
    // Add more datasets as needed
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Datasets</h1>
          <p className="text-gray-400">Manage your training and validation datasets</p>
        </div>
        <Button className="mt-4 md:mt-0">
          <Upload className="w-4 h-4 mr-2" /> Upload Dataset
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search datasets..."
            className="w-full pl-10 pr-4 py-2 bg-black/40 border border-gray-800 rounded-lg focus:border-primary/60 transition"
          />
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datasets.map(dataset => {
          const Icon = dataset.icon;
          
          return (
            <Card key={dataset.id} className="hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{dataset.name}</h3>
                  <p className="text-sm text-gray-400">{dataset.type} Dataset</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Size</p>
                  <p className="font-medium">{dataset.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Records</p>
                  <p className="font-medium">{dataset.records}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Updated {dataset.lastUpdated}
                </span>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Datasets;