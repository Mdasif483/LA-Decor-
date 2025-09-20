import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaHome,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function CallToAction() {
  return (
    <section
      className="relative bg-center bg-cover py-12 sm:py-16 md:py-24 lg:py-32 overflow-x-hidden" // ✅ fix horizontal scroll
      style={{
        backgroundImage: "url('/images/istockphoto-1148195855-612x612.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Get in Touch
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <button
                type="submit"
                className="bg-[#DA6918] hover:bg-[#b45212] text-white font-semibold py-3 rounded-lg shadow-lg transition mt-4"
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Right Side: Contact Details */}
          <div className="w-full lg:w-1/2 text-white flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
              Contact Details
            </h2>

            <div className="flex items-start gap-3 break-words">
              <FaEnvelope className="text-[#DA6918] mt-1 shrink-0" />
              <a
                href="mailto:ladecorinteriordesignstudio@gmail.com"
                className="hover:text-[#DA6918] transition break-all"
              >
                ladecorinteriordesignstudio@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-[#DA6918] shrink-0" />
              <a
                href="tel:+917906696289"
                className="hover:text-[#DA6918] transition"
              >
                +91 7906696289
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaHome className="text-[#DA6918] mt-1 shrink-0" />
              <span className="break-words">
                Add. Near K.R Garden Quarsi bye pass road Dhorrah, Aligarh, India
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#DA6918] shrink-0" />
              <span>Visit our showroom</span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6 text-xl">
              <a
                href="https://www.facebook.com/"
                className="hover:text-[#DA6918] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ladecor19/"
                className="hover:text-[#DA6918] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:text-[#DA6918] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                className="hover:text-[#DA6918] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="hover:text-[#DA6918] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/7906696289"
                className="hover:text-[#DA6918] transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
