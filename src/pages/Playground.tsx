import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, ImageIcon, Bitcoin } from 'lucide-react';
import Card from '../components/UI/Card';

const Playground: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    {
      name: 'Finance',
      icon: BarChart,
      description: 'Explore financial models, market analysis, and trading strategies',
      path: '/playground/finance',
    },
    {
      name: 'Image',
      icon: ImageIcon,
      description: 'Generate and manipulate images using advanced AI models',
      path: '/playground/image',
    },
    {
      name: 'Crypto',
      icon: Bitcoin,
      description: 'Analyze cryptocurrency trends and blockchain data',
      path: '/playground/crypto',
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">AI Playground</h1>
        <p className="text-gray-400">Experiment with different AI models and capabilities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <Card
              key={option.name}
              className="hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                <p className="text-gray-400 mb-6">{option.description}</p>
                <button 
                  className="mt-auto px-6 py-2 bg-black/40 hover:bg-primary/20 border border-primary/30 rounded-lg transition-colors duration-300"
                  onClick={() => navigate(option.path)}
                >
                  Try {option.name}
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Playground;