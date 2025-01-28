import React from "react";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#071630] to-[#071630] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="text-xl font-semibold text-cyan-400">Contact Information</h4>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <p>SNO 7/1 (P) 7/2 NR, KOKAN EXPRESS, KOTHRUD, PUNE- 41103</p>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="h-5 w-5 text-cyan-400" />
              <a
                href="mailto:shreejitsen@astraeusnextgen.com"
                className="hover:text-cyan-500 transition"
              >
                shreejitsen@astraeusnextgen.com
              </a>
            </div>
          </div>

          {/* Middle Section - Empty for spacing */}
          <div className="flex flex-col justify-center items-center md:items-center text-center">
            {/* Placeholder for spacing */}
          </div>

          {/* Right Section - Copyright */}
          <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-2">
            <p className="text-gray-400">
              {/* Placeholder for any additional text */}
            </p>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Astraeus Next Gen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
