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
  FaLinkedin,
} from "react-icons/fa";

function CallToAction() {
  // Animation variants
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const iconHover = {
    scale: 1.2,
    color: "#DA6918",
    transition: { duration: 0.3 },
  };

  return (
    <section
      className="relative bg-center bg-cover py-12 sm:py-16 md:py-24 lg:py-32 overflow-x-hidden"
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
          <motion.div
            className="w-full lg:w-1/2 bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Right Side: Contact Details */}
          <motion.div
            className="w-full lg:w-1/2 text-white flex flex-col gap-5"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaYoutube />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://wa.me/917906696289"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="transition"
              >
                <FaWhatsapp />
              </motion.a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
