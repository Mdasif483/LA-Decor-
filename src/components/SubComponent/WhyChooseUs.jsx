import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Truck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Quality Assurance",
    desc: "We ensure top-notch materials and flawless craftsmanship in every project.",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    img: "/images/istockphoto-1170250587-612x612.jpg", // Quality img
  },
  {
    title: "Affordable Pricing",
    desc: "Luxury designs at prices that won’t break your budget.",
    icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
    img: "/images/istockphoto-1393631482-1024x1024.jpg", // Affordable img
  },
  {
    title: "Fast Delivery",
    desc: "On-time delivery of projects without compromising on quality.",
    icon: <Truck className="w-10 h-10 text-yellow-500" />,
    img: "/images/istockphoto-547406694-1024x1024.jpg", // Delivery img
  },
  {
    title: "Modern Designs",
    desc: "Stylish, innovative and trend-setting interiors tailored for you.",
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    img: "/images/pexels-ron-lach-7774246.jpg", // Modern img
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-gray-800 mb-14"
        >
          Why <span className="text-yellow-500">Choose Us?</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="rounded-xl object-cover w-full h-40"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
