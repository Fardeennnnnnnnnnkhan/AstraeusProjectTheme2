import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Bot, Bug } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
   <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      src="https://cdn.pixabay.com/video/2016/09/13/5194-183786499_tiny.mp4"
      loop
      autoPlay
      muted
      alt="Space"
      className="w-full h-full object-cover opacity-70"
    />
  </div>

  {/* Text Content */}
  <div className="relative text-center px-4">
   
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 drop-shadow-2xl">
  Astraeus Next Gen
</h1>
    
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg font-light">
      Pioneering the future of network infrastructure and intelligent systems
    </p>

  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/vajra" className="group">
            <div className="bg-slate-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <Network className="h-12 w-12 text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">VAJRA</h2>
              <p className="text-gray-400">
                Advanced network management and traffic optimization solution for IXPs and satellite communications.
              </p>
            </div>
          </Link>

          <Link to="/minerva" className="group">
            <div className="bg-slate-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <Bot className="h-12 w-12 text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">MINERVA</h2>
              <p className="text-gray-400">
                Intelligent chatbot system with advanced data extraction and cybersecurity capabilities.
              </p>
            </div>
          </Link>

          <Link to="/bug-bounty" className="group">
            <div className="bg-slate-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <Bug className="h-12 w-12 text-green-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Bug Bounty</h2>
              <p className="text-gray-400">
                Contribute to our security by finding and reporting vulnerabilities.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;