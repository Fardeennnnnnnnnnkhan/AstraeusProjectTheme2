import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe2, X } from "lucide-react";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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
            <Link
              to="/about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gradient-to-r from-[#0A0D17] to-[#1B1339] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-white p-2 bg-gray-800 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Globe2 className="h-12 w-12 text-purple-400" />
          </Link>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center space-y-8 mt-10">
          <Link
            to="/"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/vajra"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            VAJRA
          </Link>
          <Link
            to="/minerva"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            MINERVA
          </Link>
          <Link
            to="/bug-bounty"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Bug Bounty
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white text-xl hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
