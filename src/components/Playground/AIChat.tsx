import React, { useState, useRef, useEffect } from 'react';
import { Send, Settings, Cpu, Zap, X, ChevronDown } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  title: string;
  defaultPrompt?: string;
}

const AIChat: React.FC<AIChatProps> = ({ title, defaultPrompt = '' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [temperature, setTemperature] = useState(0.7);
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [maxTokens, setMaxTokens] = useState(2048);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

  const models = [
    // Large Language Models
    { id: 'gpt-4', name: 'GPT-4', category: 'Language' },
    { id: 'gpt-4-32k', name: 'GPT-4 (32k context)', category: 'Language' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', category: 'Language' },
    { id: 'claude-2', name: 'Claude 2', category: 'Language' },
    { id: 'claude-instant', name: 'Claude Instant', category: 'Language' },
    { id: 'palm-2', name: 'PaLM 2', category: 'Language' },
    { id: 'llama-2', name: 'LLaMA 2', category: 'Language' },
    { id: 'cohere-command', name: 'Cohere Command', category: 'Language' },
    
    // Image Models
    { id: 'dall-e-3', name: 'DALL·E 3', category: 'Image' },
    { id: 'stable-diffusion-xl', name: 'Stable Diffusion XL', category: 'Image' },
    { id: 'midjourney', name: 'Midjourney', category: 'Image' },
    { id: 'imagen-2', name: 'Imagen 2', category: 'Image' },
    
    // Code Models
    { id: 'codex', name: 'Codex', category: 'Code' },
    { id: 'code-llama', name: 'Code LLaMA', category: 'Code' },
    { id: 'starcoder', name: 'StarCoder', category: 'Code' },
    
    // Specialized Models
    { id: 'whisper', name: 'Whisper', category: 'Audio' },
    { id: 'bert', name: 'BERT', category: 'NLP' },
    { id: 'gpt-neo', name: 'GPT-Neo', category: 'Language' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSettingsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return;

    const newMessage: Message = {
      role: 'user',
      content: prompt,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setPrompt('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: 'This is a simulated AI response. The actual integration will use the selected model and parameters.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const groupedModels = models.reduce((acc, model) => {
    if (!acc[model.category]) {
      acc[model.category] = [];
    }
    acc[model.category].push(model);
    return acc;
  }, {} as Record<string, typeof models>);

  return (
    <div className="flex h-[calc(100vh-8rem)] relative">
      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col ${!isMobileView && isSettingsOpen ? 'pr-80' : ''}`}>
        <Card className="flex-1 overflow-hidden flex flex-col relative">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {title}
            </h2>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isSettingsOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Settings className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-400 text-center p-4">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <p className="mb-2">No messages yet</p>
                  <p className="text-sm">Start a conversation by sending a message below</p>
                </div>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[75%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-primary/20 ml-4'
                      : 'bg-gray-800/50 mr-4'
                  }`}
                >
                  <div className="text-sm mb-1 whitespace-pre-wrap break-words">{message.content}</div>
                  <div className="text-xs text-gray-400 text-right">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/50 rounded-lg p-4 mr-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-800">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Enter your prompt... (Press Enter to send)"
                className="w-full bg-black/40 border border-gray-800 rounded-lg p-4 pr-16 min-h-[80px] max-h-[200px] resize-y focus:border-primary/60 transition"
                disabled={isLoading}
              />
              <Button 
                className="absolute right-2 bottom-2 px-4"
                size="sm"
                onClick={handleSubmit}
                isLoading={isLoading}
                disabled={!prompt.trim() || isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Sidebar */}
      <div 
        className={`fixed lg:absolute right-0 top-0 h-full w-full lg:w-80 bg-[#180A26] lg:bg-transparent transition-transform duration-300 z-20 ${
          isSettingsOpen ? 'translate-x-0' : 'translate-x-full'
        } ${!isMobileView ? 'lg:translate-x-0' : ''}`}
      >
        <Card className="h-full">
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-bold">Model Settings</h3>
            {isMobileView && (
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-64px)] scrollbar-thin">
            <div>
              <label className="block text-sm text-gray-400 mb-2">AI Model</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="input-field"
              >
                {Object.entries(groupedModels).map(([category, categoryModels]) => (
                  <optgroup key={category} label={category}>
                    {categoryModels.map(model => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Temperature
                <span className="ml-2 text-primary">{temperature}</span>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Precise</span>
                <span>Creative</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Max Tokens
                <span className="ml-2 text-primary">{maxTokens}</span>
              </label>
              <input
                type="range"
                min="256"
                max="4096"
                step="256"
                value={maxTokens}
                onChange={(e) => setMaxTokens(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="bg-black/40 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Model Info</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Context: 8k tokens</p>
                <p>Training: Up to 2023</p>
                <p>Specialization: {title}</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">API Usage</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Requests: 0/1000</p>
                <p>Tokens: 0/100k</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Overlay for mobile */}
      {isSettingsOpen && isMobileView && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          onClick={() => setIsSettingsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AIChat;