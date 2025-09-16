import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function HeroSection() {
  const fullText = "Welcome to LA Decor";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          return prev;
        }
      });
      setIndex((prev) => prev + 1);
    }, 150);

    if (index > fullText.length) {
      // reset after full text
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000); // 2s pause before restarting
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-screen">
      {/* Background Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        <div>
          <img
            src="/images/pexels-heyho-7535027.jpg"
            alt="Interior 1"
            className="h-screen w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/images/pexels-heyho-7546219.jpg"
            alt="Interior 2"
            className="h-screen w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/images/pexels-heyho-7746094.jpg"
            alt="Interior 3"
            className="h-screen w-full object-cover"
          />
        </div>
      </Carousel>

      {/* Overlay + Animated Text */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-4"
        >
          {/* Typing Effect Heading */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-yellow-400">{displayText}</span>
            <span className="animate-pulse">|</span> {/* blinking cursor */}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl"
          >
            Redefining Spaces, Redefining Elegance
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg"
          >
            <Link to="/gallery">Explore Our Collection</Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
