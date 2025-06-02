import React from 'react';
import AIChat from '../../components/Playground/AIChat';

const Image: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Image Playground</h1>
        <p className="text-gray-400">Generate and manipulate images using AI</p>
      </div>

      <AIChat 
        title="Image Generation" 
        defaultPrompt="Generate an image of..."
      />
    </div>
  );
};

export default Image;