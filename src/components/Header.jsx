import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full bg-[#0F0F0F] text-white text-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 gap-4">
        {/* Left side text */}
        {/* <p className="hidden sm:block">
          Welcome to <span className="font-semibold">La Décor</span> – Crafting Elegance for Your Home
        </p> */}

        {/* Marquee */}
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="font-medium"
        >
          ✨  Registration Number : 09CBPPD8563B1ZH , UDYAM REGISTRATION NUMBER :  UDYAM-UP-02-0063416, Phone:+91 7906696289 , 9084549327 ✨
        </marquee>
        <a href="#" className="hover:text-[#DA6918] transition"><FaFacebookF /></a>
                      <a href="https://www.instagram.com/ladecor19/." className="hover:text-[#DA6918] transition"><FaInstagram /></a>
                      <a href="#" className="hover:text-[#DA6918] transition"><FaTwitter /></a>
                      <a href="#" className="hover:text-[#DA6918] transition"><FaYoutube /></a>
                      <a href="7906696289" className="hover:text-[#DA6918] transition"><FaWhatsapp /></a>
      </div>
    </div>
  );
}

export default Header;
