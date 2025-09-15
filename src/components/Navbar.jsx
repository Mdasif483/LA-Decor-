import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/WhatsApp Image 2025-09-15 at 13.46.04_1287a868.jpg"; // Apni image yahan

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
  <div className="relative group">
    <img
      src={logo}
      alt="LA Decor"
      className="h-12 w-12 rounded-full object-cover relative z-10"
    />
    {/* Hover background */}
    <span className="absolute inset-0 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0"></span>
  </div>
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="hover:text-yellow-500 transition">
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-500 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/certificate" onClick={() => setIsOpen(false)}>
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
