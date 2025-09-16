import React from "react";

function Header() {
  return (
    <div className="w-full bg-[#0F0F0F] text-white text-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
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
          ✨  Registration Number : 09CBPPD8563B1ZH , UDYAM REGISTRATION NUMBER :  UDYAM-UP-02-0063416, Contact Number : +917906696289✨
        </marquee>
      </div>
    </div>
  );
}

export default Header;
