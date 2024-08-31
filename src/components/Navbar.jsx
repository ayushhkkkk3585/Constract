import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-sm py-4 px-6 md:px-10  lg:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          KisaanSamarth
        </Link>

        <div className="hidden sm:flex space-x-4 md:space-x-6 text-lg gap-2">
          <Link to="/" className="text-white font-semibold">
            Home
          </Link>
          <Link to="/" className="text-white font-semibold">
            About US
          </Link>
          <Link to="/" className="text-white font-semibold">
            Marketplace
          </Link>
          <Link to="/" className="text-white font-semibold">
            Statistics
          </Link>
        </div>
        <button
          className="text-white font-bold hover:text-white sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col text-base gap-2">
          <Link to="/" className="text-white font-semibold text-base">
            Home
          </Link>
          <Link to="/" className="text-white font-semibold text-base">
            About US
          </Link>
          <Link to="/" className="text-white font-semibold text-base">
            Marketplace
          </Link>
          <Link to="/" className="text-white font-semibold text-base">
            Statistics
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
