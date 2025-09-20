import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function VideoHero() {
     const handleScroll = () => {
        const section = document.getElementById("video");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <section className="relative w-full h-[80vh] overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/12628004_1920_1080_25fps.mp4" // yahan apna video link
        type="video/mp4"
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Welcome to LADECOR
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Transforming spaces with elegance and style. Explore our latest
            interior designs and ideas that bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              href="#learn-more"
              className="bg-[#DA6918] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#b45212] transition"
            >
              Learn More
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              <Link to="/Contact">Contact Us</Link>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoHero;
