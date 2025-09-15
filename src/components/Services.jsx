import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Premium Wallpapers",
      desc: "Stylish wallpaper rolls & customized designs to redefine your interiors with elegance and modern touch.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.06_67863f06.jpg",
    },
    {
      title: "PVC Wall Paneling",
      desc: "Durable, elegant, and easy-to-maintain PVC wall paneling that enhances both beauty and utility.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.06_dd0edc13.jpg",
    },
    {
      title: "False Ceilings",
      desc: "Transform spaces with stylish false ceilings designed for a premium and spacious look.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.07_db2199ec.jpg",
    },
    {
      title: "Modular Kitchens",
      desc: "Smart modular kitchens blending creativity and functionality to make cooking a delightful experience.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.08_d2fc1c71.jpg",
    },
    {
      title: "Decorative Blinds",
      desc: "Wide range of blinds – roller, zebra, wooden, vertical – crafted for elegance and privacy.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.08_d31bff9a.jpg",
    },
    {
      title: "Artificial Garden & UV Sheets",
      desc: "Beautiful artificial garden grass and UV sheets to add freshness and creativity to your interiors.",
      img: "/images/WhatsApp Image 2025-09-15 at 13.46.07_db2199ec.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white mt-5 py-14 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Our Services
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          At LA Decor, we bring creativity, quality, and expert craftsmanship
          together to transform every space into something extraordinary.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6">
              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="text-sm text-gray-200 mt-2">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
