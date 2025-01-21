import React from 'react';
import { Bot, Search, Shield, Database } from 'lucide-react';

const Minerva = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">MINERVA</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI-powered chatbot system with comprehensive data analysis and cybersecurity capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <Bot className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">ODIN Chatbot</h3>
              <p className="text-gray-400">
                Intelligent conversational AI system capable of:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Text extraction and analysis</li>
                <li>Image processing and recognition</li>
                <li>Audio data processing</li>
                <li>Natural language understanding</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Security Features</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Vulnerability scanning</li>
                <li>Zero-click exploit detection</li>
                <li>Cybersecurity threat analysis</li>
                <li>Real-time security monitoring</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg">
              <Search className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Web Intelligence</h3>
              <p className="text-gray-400">
                Advanced web search capabilities and dark web data extraction for comprehensive threat intelligence.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Database className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Data Processing</h3>
              <p className="text-gray-400">
                Multi-modal data processing capabilities with advanced analytics and reporting features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minerva;