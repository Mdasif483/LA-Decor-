import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServicesHero() {
  const handleScroll = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center text-left text-white overflow-hidden mt-27">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/WhatsApp Image 2025-09-15 at 13.46.08_d31bff9a.jpg"
          alt="Services Background"
          className="w-full h-full object-cover opacity-75"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6 lg:px-16"
      >
        {/* Animated Heading (looping) */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Our <span className="text-yellow-500">Services</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
        >
          From interior designing to furniture customization, we provide a wide
          range of services to make your spaces elegant, functional, and stylish.
          Discover how we can transform your ideas into reality.
        </motion.p>

        {/* Buttons with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={handleScroll}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Explore Services
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition">
            <Link to="/gallery">Show Gallery</Link>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServicesHero;
