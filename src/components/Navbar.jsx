import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  // Add scroll listener
  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-opacity-70 backdrop-blur-lg bg-gradient-to-r from-[#0A0D17]/40 to-[#1B1339]/80"
      : "bg-gradient-to-r from-[#0A0D17] to-[#1B1339]"
  }`}
  style={{ height: "72px", padding: "0 1rem" }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="flex items-center justify-between h-full">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <Globe2 className="h-8 w-8 text-purple-400" />
        <span className="text-xl font-bold text-white">Astraeus Next Gen</span>
      </Link>

          {/* Hamburger Icon for Small Screens */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <TfiMenu />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/vajra"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Vajra
            </Link>
            <Link
              to="/minerva"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Minerva
            </Link>
            <Link
              to="/bug-bounty"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Bug Bounty
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            {/* Added About link */}
            <Link
              to="/about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-[#0A0D17] to-[#1B1339] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "50vw", paddingTop: "1rem" }}
      >
        <div className="flex justify-between items-center px-4">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Globe2 className="h-10  w-10 text-purple-400" />
          </Link>
        </div>

    <div className="flex flex-col items-start px-6 space-y-6 mt-6">
      <Link
        to="/"
        className="text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/vajra"
        className="text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        VAJRA
      </Link>
      <Link
        to="/minerva"
        className="text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        MINERVA
      </Link>
      <Link
        to="/bug-bounty"
        className="text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Bug Bounty
      </Link>
      <Link
        to="/contact"
        className="text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
    </div>
  </div>
</nav>

  
  
  );
};

export default Navbar;
