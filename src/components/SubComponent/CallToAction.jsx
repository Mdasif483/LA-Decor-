import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaHome, FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section
      className="relative bg-center bg-cover py-24 sm:py-32"
      style={{ backgroundImage: "url('/images/istockphoto-1148195855-612x612.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 items-start lg:items-stretch">
        {/* Left Side: Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 bg-white/90 rounded-2xl p-8 shadow-xl mx-auto lg:mx-0"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <form className="flex flex-col gap-4 ">
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
          className="w-full lg:w-1/2 text-white flex flex-col gap-6 mx-auto lg:mx-0"
        >
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
            Contact Details
          </h2>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#DA6918]" />
            <span>ladecorinteriordesignstudio@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-[#DA6918]" />
            <span>+91 7906696289</span>
          </div>

          <div className="flex items-center gap-3">
            <FaHome className="text-[#DA6918]" />
            <span>Add. Near K.R Garden Quarsi bye pass road Dhorrah
              , Aligarh, India</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#DA6918]" />
            <span>Visit our showroom</span>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-[#DA6918] transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ladecor19/." className="hover:text-[#DA6918] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#DA6918] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#DA6918] transition"><FaYoutube /></a>
            <a href="7906696289" className="hover:text-[#DA6918] transition"><FaWhatsapp /></a>
          </div>
        </motion.div>
      </div>

      {/* Learn More Button at the bottom center */}
      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#DA6918] hover:bg-[#b45212] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
        >
          <Link to="/contact">Learn More</Link>
        </motion.button>
      </div>
    </section>
  );
}

export default CallToAction;
