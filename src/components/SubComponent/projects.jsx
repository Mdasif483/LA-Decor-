import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential",
    img: "/images/istockphoto-487313304-612x612.jpg",
    description: "Elegant interior design for a modern living room.",
  },
  {
    title: "Office Workspace",
    category: "Commercial",
    img: "/images/istockphoto-1299763425-612x612.jpg",
    description: "Professional office interior with modern aesthetics.",
  },
  {
    title: "Custom Sofa Set",
    category: "Custom Furniture",
    img: "/images/istockphoto-950830418-612x612.jpg",
    description: "Tailor-made furniture to fit your space perfectly.",
  },
  {
    title: "Residential Bedroom",
    category: "Residential",
    img: "/images/istockphoto-2188360288-612x612.jpg",
    description: "Cozy and stylish bedroom design for home comfort.",
  },
  {
    title: "Restaurant Interior",
    category: "Commercial",
    img: "/images/istockphoto-92222813-612x612.jpg",
    description: "Modern restaurant design with ambient lighting.",
  },
  {
    title: "Custom Dining Table",
    category: "Custom Furniture",
    img: "/images/istockphoto-923273810-612x612.jpg",
    description: "Handcrafted dining table with premium wood finish.",
  },
];

const categories = ["All", "Residential", "Commercial", "Custom Furniture"];

function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{ backgroundImage: "url('/images/istockphoto-2229742497-612x612.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Our <span className="text-[#DA6918]">Project</span>
        </motion.h2>
        <p className="text-gray-300 mb-12">
          Explore our recent projects and custom designs.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#DA6918] text-white"
                  : "bg-white/20 text-white hover:bg-[#DA6918]/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-xl font-bold text-[#DA6918] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
