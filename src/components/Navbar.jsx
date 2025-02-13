import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-80 backdrop-blur-lg bg-[#0a0f1c]"
          : "bg-transparent"
      }`}
      style={{ height: "72px", padding: "0 1rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://astraeus.sentritalabs.com/wp-content/uploads/2024/08/Astraeus-Logo.png"
              alt="Astraeus Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Hamburger Icon for Small Screens */}
          <button className="text-white text-3xl md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <TfiMenu />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Vajra", "Minerva", "Bug Bounty", "Contact us", "About us" , "privacy-policy"].map(
              (item, index) => (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 relative group hover:text-gray-100 transition-all"
                >
                  <span className="relative z-10">{item}</span>
                  {/* Line slide animation */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-400 group-hover:w-full transition-all duration-500"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <img
              src="https://astraeus.sentritalabs.com/wp-content/uploads/2024/08/Astraeus-Logo.png"
              alt="Astraeus Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button className="text-white text-3xl" onClick={toggleMenu}>
            <FiX />
          </button>
        </div>

        <div className="flex flex-col items-start px-8 space-y-6 mt-10">
          {["Home", "Vajra", "Minerva", "Bug Bounty", "Contact us", "About us" , "privacy-policy"].map(
            (item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 text-xl relative group hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item}</span>
                {/* Line slide animation */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-500 group-hover:w-full transition-all duration-500"></span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

