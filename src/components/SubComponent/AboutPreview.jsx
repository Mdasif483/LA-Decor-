import React from "react";
import { FaCouch, FaPaintBrush, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: "url('/images/freepik__the-style-is-candid-image-photography-with-natural__24669.png')" }} // apna bg image lagao
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/WhatsApp Image 2025-09-15 at 13.46.07_db2199ec.jpg" // left side wali image
            alt="About LA Decor"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6 text-gray-200">
              At{" "}
              <span className="text-[#DA6918] font-semibold">La Décor</span>,
              we create interiors that blend elegance, comfort, and
              functionality. Our mission is to turn houses into homes filled
              with warmth, beauty, and timeless charm.
            </p>

            {/* Icon Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
                <FaCouch className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Furniture Design</p>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
                <FaPaintBrush className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Interior Styling</p>
              </div>
              <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
                <FaLightbulb className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Creative Solutions</p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-[#DA6918] hover:bg-[#b45212] transition px-8 py-3 rounded-full font-semibold text-white shadow-lg">
              <Link to="/about">learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
