import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import logo from "/images/IMG-20250915-WA0003[1].jpg"; // Apni image yahan
import { FaLinkedin, FaYoutube } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F9FAFB] shadow-md fixed top-0 z-50 mt-15">
      <div className="w-full px-6 md:px-12 flex justify-between items-center h-[70px]">
        {/* Logo + Text (always left aligned) */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="relative group">
            <img
              src={logo}
              alt="LA Decor"
              className="h-18 w-18 p-1 rounded-full object-cover relative z-10"
            />
            {/* Hover background */}
            <span className="absolute inset-0 rounded-full bg-[#DA6918] opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0"></span>
          </div>

          {/* Brand Name + Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-xl font-bold text-gray-800 tracking-wide">
              LA DECOR
            </span>
            <span className="text-sm text-gray-600">
              Interior Design Studio
            </span>
          </div>
        </div>

        {/* Desktop Menu (always on right side) */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#DA6918] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#DA6918] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#DA6918] transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="hover:text-[#DA6918] transition">
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#DA6918] transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/video" className="hover:text-[#DA6918] transition">
              Video
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#DA6918] transition">
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-70 flex flex-col ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* Header with title and close button */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-[#0F0F0F]">
          <h2 className="text-xl font-bold text-white">LA DECOR</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl hover:text-[#DA6918]"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu links */}
        <ul className="flex flex-col items-start px-6 py-6 space-y-6 text-gray-700 font-medium flex-grow overflow-y-auto">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/certificate" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/video" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
              Video
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#DA6918]">
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
            <FaEnvelope className="hover:text-[#DA6918] transition" />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="hover:text-[#DA6918] transition" />
          </a>
          <a href="https://youtube.com">
            <FaYoutube className="hover:text-[#DA6918] transition" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
