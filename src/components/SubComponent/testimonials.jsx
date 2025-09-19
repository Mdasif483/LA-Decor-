import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Arrow icons

const testimonials = [
  {
    name: "Sarah Williams",
    designation: "Interior Designer",
    feedback:
      "LA Decor transformed my living room beyond imagination! Highly professional and creative team.",
    photo: "/images/istockphoto-1313502972-612x612.jpg",
    rating: 5,
  },
  {
    name: "John Smith",
    designation: "Architect",
    feedback:
      "Excellent attention to detail. They delivered our office space perfectly on time.",
    photo: "/images/istockphoto-1309328823-612x612.jpg",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    designation: "Homeowner",
    feedback:
      "A fantastic experience from start to finish. Our home now feels luxurious and cozy!",
    photo: "/images/istockphoto-1483473258-612x612.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    designation: "Business Owner",
    feedback:
      "Professional and reliable. The team brought our vision to life beautifully.",
    photo: "/images/istockphoto-1325164545-612x612.jpg",
    rating: 4,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Optional: Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{
        backgroundImage:
          "url('/images/pexels-pavel-danilyuk-8112160.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          What Our <span className="text-[#DA6918]">Clients Say</span>
        </motion.h2>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto relative"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={testimonials[currentIndex].photo}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[currentIndex].designation}
            </p>
            <p className="text-gray-700 mt-4">{testimonials[currentIndex].feedback}</p>

            {/* Star Rating */}
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={`text-yellow-400 text-lg ${
                    i < testimonials[currentIndex].rating ? "opacity-100" : "opacity-30"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
