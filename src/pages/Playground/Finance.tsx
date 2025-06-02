import React from 'react';
import AIChat from '../../components/Playground/AIChat';

const Finance: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Finance Playground</h1>
        <p className="text-gray-400">Analyze financial data and market trends with AI</p>
      </div>

      <AIChat 
        title="Financial Analysis" 
        defaultPrompt="Analyze the current market trends for..."
      />
    </div>
  );
};

export default Finance;