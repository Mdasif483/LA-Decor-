import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Wallpaper Rolls", img: "/images/istockphoto-1140979597-612x612.jpg" },
  { title: "Customized Wallpaper", img: "/images/istockphoto-1779746294-612x612.jpg" },
  { title: "Grass UV Sheet", img: "/images/istockphoto-1010526444-612x612.jpg" },
  { title: "Molding Aluminium Fabrication", img: "/images/istockphoto-1594542494-612x612.jpg" },
  { title: "PVC Mats", img: "/images/istockphoto-966860366-612x612.jpg" },
  { title: "Front Elivation", img: "/images/pexels-souvenirpixels-19544859.jpg" },
  { title: "Tuffan Glass", img: "/images/istockphoto-524375308-612x612.jpg" },
  { title: "False Celling", img: "/images/istockphoto-140472560-612x612.jpg" },
];

function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const visibleCount = 4;

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 < 0 ? services.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1 > services.length - visibleCount ? 0 : prev + 1));
  };

  const visibleServices = services.slice(startIndex, startIndex + visibleCount);

  // Animation variants for sliding
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{ backgroundImage: "url('/images/pexels-royal-moving-storage-1098629817-20706509.jpg')" }}
      id="services"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          Our <span className="text-[#DA6918]">Services</span>
        </motion.h2>

        <div className="relative flex items-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white/80 hover:bg-white/100 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel */}
          <div className="flex w-full justify-center gap-8">
            <AnimatePresence custom={direction}>
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.title + startIndex} // unique key for animation
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm w-60 flex-shrink-0"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white/80 hover:bg-white/100 p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Explore Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#DA6918] hover:bg-[#b45212] transition px-8 py-3 rounded-full font-semibold text-white shadow-lg">
            <Link to="/services">Explore More</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
