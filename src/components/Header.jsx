import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Header() {
  return (
    <div className="w-full h-25 bg-[#0F0F0F] text-white text-sm fixed top-0 z-50 ">
      <div className="max-w-7xl mx-auto relative flex flex-col sm:flex-row items-center justify-center px-4 py-5 gap-2 sm:gap-4">
        
        {/* Center text */}
        <p className="font-medium text-center">
          ✨ GST NO : 09CBPPD8563B1ZH , UDYAM NO : UDYAM-UP-02-0063416 ✨
        </p>

        {/* Social Icons (right side in desktop, center in mobile) */}
        <div className="flex items-center gap-4 sm:absolute sm:right-4  sm:top-1/2 sm:-translate-y-1/2">
          <a href="https://www.facebook.com/" className="hover:text-[#DA6918] transition">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ladecor19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DA6918] transition"
          >
            <FaInstagram />
          </a>
          <a href="https://x.com/" className="hover:text-[#DA6918] transition">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/" className="hover:text-[#DA6918] transition">
            <FaYoutube />
          </a>
          <a
            href="https://in.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DA6918] transition"
          >
            <FaPinterest />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DA6918] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/7906696289"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DA6918] transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
