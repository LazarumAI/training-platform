import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Navigation/Header';
import Dashboard from './pages/Dashboard';
import Models from './pages/Models';
import Datasets from './pages/Datasets';
import Train from './pages/Train';
import Playground from './pages/Playground';
import Finance from './pages/Playground/Finance';
import Image from './pages/Playground/Image';
import Crypto from './pages/Playground/Crypto';
import TermsOfService from './pages/TermsOfService';
import Privacy from './pages/Privacy';

function App() {
  useEffect(() => {
    document.title = "Lazarum AI";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#180A26] text-white">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[120px] opacity-50"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] opacity-50"></div>
        </div>
        
        <Header />
        <main>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Navigate to="/dashboard\" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/models" element={<Models />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/train" element={<Train />} />
            
            {/* Playground routes */}
            <Route path="/playground" element={<Playground />} />
            <Route path="/playground/finance" element={<Finance />} />
            <Route path="/playground/image" element={<Image />} />
            <Route path="/playground/crypto" element={<Crypto />} />
            
            {/* Legal routes */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Legacy route redirects */}
            <Route path="/staking" element={<Navigate to="/train\" replace />} />
            <Route path="/docs" element={<Navigate to="/playground\" replace />} />
            <Route path="/documentation" element={<Navigate to="/playground\" replace />} />
            
            {/* Nested route redirects */}
            <Route path="/playground/trading" element={<Navigate to="/playground/finance\" replace />} />
            <Route path="/playground/images" element={<Navigate to="/playground/image\" replace />} />
            <Route path="/playground/cryptocurrency" element={<Navigate to="/playground/crypto\" replace />} />
            
            {/* Catch all route - redirect to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard\" replace />} />
          </Routes>
        </main>
        
        <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2025 Lazarum AI. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="mailto:support@lazarum.ai" className="text-sm text-gray-400 hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;