import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Astraeus Next Gen</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/vajra" className="hover:text-blue-400 transition-colors">VAJRA</Link>
            <Link to="/minerva" className="hover:text-blue-400 transition-colors">MINERVA</Link>
            <Link to="/bug-bounty" className="hover:text-blue-400 transition-colors">Bug Bounty</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;