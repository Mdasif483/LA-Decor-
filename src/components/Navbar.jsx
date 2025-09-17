import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import logo from "/images/WhatsApp Image 2025-09-15 at 13.46.04_1287a868.jpg"; // Apni image yahan

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F9FAFB] shadow-md fixed top-0 z-50 mt-9">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative group">
            <img
              src={logo}
              alt="LA Decor"
              className="h-15 w-15 rounded-full object-cover relative z-10"
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

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-70 flex flex-col ${isOpen ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        {/* Header with title and close button */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-[#0F0F0F]">
          <h2 className="text-xl font-bold text-white">LADECOR</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl hover:text-yellow-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu links */}
        <ul className="flex flex-col items-start px-6 py-6 space-y-6 text-gray-700 font-medium flex-grow overflow-y-auto">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/certificate" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Footer with social media icons - always sticky at bottom */}
        <div className="flex justify-around px-6 py-4 border-t text-white text-xl bg-[#0F0F0F]">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
          <a href="mailto:example@email.com">
            <FaEnvelope className="hover:text-yellow-500 transition" />
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
