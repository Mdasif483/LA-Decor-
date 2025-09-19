import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section
      className="relative bg-center bg-cover py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('/images/istockphoto-1148195855-612x612.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Side: Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
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
        </motion.div>

        {/* Right Side: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-white flex flex-col gap-5"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
            Contact Details
          </h2>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#DA6918] mt-1" />
            <span className="break-words">ladecorinteriordesignstudio@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#DA6918]" />
            <span>+91 7906696289</span>
          </div>

          <div className="flex items-start gap-3">
            <FaHome className="text-[#DA6918] mt-1" />
            <span className="break-words">
              Add. Near K.R Garden Quarsi bye pass road Dhorrah, Aligarh, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#DA6918]" />
            <span>Visit our showroom</span>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6 text-lg">
            <a href="#" className="hover:text-[#DA6918] transition">
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ladecor19/"
              className="hover:text-[#DA6918] transition"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#DA6918] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#DA6918] transition">
              <FaYoutube />
            </a>
            <a href="tel:7906696289" className="hover:text-[#DA6918] transition">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Learn More Button */}
      {/* <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#DA6918] hover:bg-[#b45212] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
        >
          <Link to="/contact">Learn More</Link>
        </motion.button>
      </div> */}
    </section>
  );
}

export default CallToAction;
