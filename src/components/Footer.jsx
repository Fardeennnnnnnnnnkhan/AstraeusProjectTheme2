import React from "react";
import { MapPin, Mail } from "lucide-react";
import { Globe2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0D17] to-[#1B1339] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Globe2 className="mb-4 " size={40}/>
            
            <h3 className="text-2xl font-bold">Astraeus Next Gen</h3>
            <p className="text-gray-400 mt-4">
              Next-generation innovation and technology solutions.
            </p>
          </div>

          {/* Middle Section - Contact Information */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <p className="text-gray-400">
                SNO 7/1 (P) 7/2 NR, KOKAN EXPRESS, KOTHRUD, PUNE- 41103
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <a
                href="mailto:shreejitsen@astraeusnextgen.com"
                className="hover:text-purple-500 transition"
              >
                shreejitsen@astraeusnextgen.com
              </a>
            </div>
          </div>

          {/* Right Section - Copyright */}
          <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Astraeus Next Gen.
            </p>
            <p className="text-gray-400">All rights reserved.</p>
            <a
              href="#"
              className="mt-4 text-purple-400 hover:text-purple-500 transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Built By Astraeus Next Gen Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
