import React from 'react';
import AIChat from '../../components/Playground/AIChat';

const Crypto: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Crypto Playground</h1>
        <p className="text-gray-400">Analyze cryptocurrency trends and blockchain data</p>
      </div>

      <AIChat 
        title="Crypto Analysis" 
        defaultPrompt="Analyze the trends for..."
      />
    </div>
  );
};

export default Crypto;