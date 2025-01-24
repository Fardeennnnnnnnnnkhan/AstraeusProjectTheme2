import './Vajra.css';
import { Network, Zap, Shield } from 'lucide-react';

const Vajra = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-6">
              VAJRA
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto mt-4" 
              id="vajra-text"
            >
              Advanced network management and traffic optimization solution for modern infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Network,
                title: 'IXP Optimization',
                description:
                  'Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points.',
              },
              {
                icon: Zap,
                title: 'Low Latency',
                description:
                  'Optimized signal processing and routing algorithms for minimal latency in satellite communications.',
              },
              {
                icon: Shield,
                title: 'Industry Applications',
                description:
                  'Suitable for military intelligence, defense, telecommunications, and various industrial applications.',
              },
            ].map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className={`bg-[#201C3A] p-8 rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-purple-700 hover:border-purple-500 border border-gray-700 shadow-lg hover:shadow-2xl text-center opacity-0 animate-fade-in delay-${idx * 200}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <Icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  {title}
                </h3>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#18152D] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold mb-6 text-white text-center">
              Technical Specifications
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              {[
                'Dynamic BGP route server configuration',
                'VLAN network isolation',
                'Automated peering session establishment',
                'Intelligent routing policy management',
                'Satellite signal processing and optimization',
                'Real-time traffic analysis and adjustment',
              ].map((spec, idx) => (
                <li
                  key={idx}
                  className="hover:bg-purple-700 p-2 rounded-md transition-all duration-300 ease-in-out"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vajra;
