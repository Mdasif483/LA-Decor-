import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24666.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24668.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24670.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24673.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24667.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24671.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24672.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24673.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24665.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24667.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24664.png",
  "/images/freepik__the-style-is-candid-image-photography-with-natural__24669.png",
];

function Gallery() {
  return (
    <div className="bg-gray-50 py-20 mt-27">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-yellow-500">Gallery</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our collection of interior design projects – a blend of
          creativity, luxury, and functionality.
        </motion.p>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-lg font-medium">
                  Project {idx + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
