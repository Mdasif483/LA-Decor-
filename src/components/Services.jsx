import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicesHero from "./SubComponent/ServicesHero";
import { div } from "framer-motion/client";

function Services() {
  const services = [
    {
      title: "PVC Mats",
      desc: "PVC Mats are durable, lightweight, and easy-to-clean flooring solutions that add comfort and safety to any space.",
      img: "/images/PVC bath mats-anti slip.jpeg",
    },
    {
      title: "Tuffan Glass",
      desc: "Tuffan Glass is a high-strength, durable, and heat-resistant glass designed for safety and style..",
      img: "/images/cc1fc5b6-2442-4ca8-8a62-c9f191f52b34.jpeg",
    },
    {
      title: "Grass UV Sheet",
      desc: "Grass UV Sheets provide a natural green look with long-lasting UV protection, keeping colors fresh and vibrant.",
      img: "/images/1x5 Square Meter Artificial Grass Turf With 40mm….jpeg",
    },
    {
      title: "front Elivation",
      desc: "Front Elevation designs create a striking first impression with modern style and architectural detail.",
      img: "/images/مؤسسة ناطحات السحاب للمقاولات العامه نجران.jpeg",
    },
    {
      title: "Modular Kitchen",
      desc: "Modular Kitchens combine smart design with modern functionality to make cooking spaces stylish, organized, and efficient.",
      img: "/images/Latest & Iconic Modular Kitchen Designs In 2024….jpeg",
    },
    {
      title: "Wallpaper Rolls",
      desc: "Wallpaper Rolls offer a wide range of patterns, textures, and colors to transform your walls effortlessly. ",
      img: "/images/8b780ddb-46ac-4e31-a290-eb23cb5d8ad2.jpeg",
    },
    {
      title: "Customized Wallpaper",
      desc: "Customized Wallpapers bring your walls to life with unique designs tailored to your taste. ",
      img: "/images/Custom Large Size 3D Wallpaper Modern Mable Golden….jpeg",
    },
    {
      title: "Molding Aluminium Fabricataion",
      desc: "Molding Aluminium Fabrication offers durable, lightweight, and stylish solutions for interiors and exteriors. ",
      img: "/images/c8bfb5e04b16863e8d7d09614884fe93.jpg",
    },
    {
      title: "Artificial Garden Glass Films & Vinly Blind (Vertical, Rollar, Zebra & wooden)",
      desc: "Create a natural green vibe indoors without the hassle of maintenance. ",
      img: "public/images/✍📩 _Customized Size_ 1_ Please choose the closest….jpeg",
    },
  ];

  return (
    <div>
      <ServicesHero />
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white mt-2 py-34 px-6 md:px-12 lg:px-20" id="services">
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
            <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
                  <div className="flex justify-center">
                    <Link
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-block bg-black text-white mt-1 px-3 py-1.5 rounded-md font-normal text-sm
               shadow-md transition-all duration-300 hover:bg-[#DA6918] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
                    >
                      Learn More
                    </Link>
                  </div>


                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
