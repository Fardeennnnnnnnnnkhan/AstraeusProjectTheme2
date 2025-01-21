import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Astraeus Next Gen</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <p>SNO 7/1 (P) 7/2 NR, KOKAN EXPRESS, KOTHRUD, PUNE- 41103</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:shreejitsen@astraeusnextgen.com" className="hover:text-blue-400">
                shreejitsen@astraeusnextgen.com
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Astraeus Next Gen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;