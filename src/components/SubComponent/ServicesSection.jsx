import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Designing",
    img: "/images/pexels-thirdman-8470773.jpg",
  },
  {
    title: "Furniture Customization",
    img: "/images/pexels-pixabay-279645.jpg",
  },
  {
    title: "Lighting & Decor",
    img: "/images/pexels-raj-730396-33852468.jpg",
  },
  {
    title: "Wall Art & Paintings",
    img: "/images/pexels-ivan-samkov-5799043.jpg",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Our <span className="text-yellow-500">Services</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
