import React from 'react';
import { Network, Zap, Shield } from 'lucide-react';

const Vajra = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">VAJRA</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced network management and traffic optimization solution for modern infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <Network className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">IXP Optimization</h3>
              <p className="text-gray-400">
                Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Zap className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Low Latency</h3>
              <p className="text-gray-400">
                Optimized signal processing and routing algorithms for minimal latency in satellite communications.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Industry Applications</h3>
              <p className="text-gray-400">
                Suitable for military intelligence, defense, telecommunications, and various industrial applications.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Dynamic BGP route server configuration</li>
              <li>VLAN network isolation</li>
              <li>Automated peering session establishment</li>
              <li>Intelligent routing policy management</li>
              <li>Satellite signal processing and optimization</li>
              <li>Real-time traffic analysis and adjustment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vajra;