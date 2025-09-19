import React from "react";
import { useParams, Link } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();

  // ✅ Slugs ko lowercase-hyphen form me rakho
  const serviceData = {
    "pvc-mats": {
      title: "PVC Mats",
      desc: "PVC Mats are durable, lightweight, and easy-to-clean flooring solutions that add comfort and safety to any space.",
      images: [
        "/images/pvc1.jpeg",
        "/images/pvc2.jpeg",
        "/images/pvc3.jpeg",
        "/images/pvc4.jpeg",
        "/images/pvc5.jpeg",
        "/images/pvc6.jpeg",
      ],
    },
    "ptuffan-glass": {
      title: "Tuffan Glass",
      desc: "Tuffan Glass is a high-strength, durable, and heat-resistant glass designed for safety and style.",
      images: [
        "/images/glass1.jpeg",
        "/images/glass2.jpeg",
        "/images/glass3.jpeg",
        "/images/glass4.jpeg",
        "/images/glass5.jpeg",
        "/images/glass6.jpeg",
      ],
    },
    "grass-uv-sheet": {
      title: "Grass UV Sheet",
      desc: "Grass UV Sheets provide a natural green look with long-lasting UV protection.",
      images: [
        "/images/grass1.jpeg",
        "/images/grass2.jpeg",
        "/images/grass3.jpeg",
        "/images/grass1.jpeg",
        "/images/grass2.jpeg",
        "/images/grass3.jpeg",
      ],
    },
    "front-elivation": {
      title: "Front Elivation",
      desc: "Front Elevation designs create a striking first impression with modern style and architectural detail.",
      images: [
        "/images/front1.jpeg",
        "/images/front2.jpeg",
        "/images/front3.jpeg",
        "/images/front1.jpeg",
        "/images/front2.jpeg",
        "/images/front3.jpeg",
      ],
    },
    "modular-kitchen": {
      title: "Modular Kitchen",
      desc: "Modular Kitchens combine smart design with modern functionality to make cooking spaces stylish and efficient.",
      images: [
        "/images/kitchen1.jpeg",
        "/images/kitchen2.jpeg",
        "/images/kitchen3.jpeg",
        "/images/kitchen1.jpeg",
        "/images/kitchen2.jpeg",
        "/images/kitchen3.jpeg",
      ],
    },
    "wallpaper-rolls": {
      title: "Wallpaper Rolls",
      desc: "Wallpaper Rolls offer a wide range of patterns, textures, and colors to transform your walls effortlessly.",
      images: [
        "/images/wall1.jpeg",
        "/images/wall2.jpeg",
        "/images/wall3.jpeg",
        "/images/wall1.jpeg",
        "/images/wall2.jpeg",
        "/images/wall3.jpeg",
      ],
    },
    "customized-wallpaper": {
      title: "Customized Wallpaper",
      desc: "Customized Wallpapers bring your walls to life with unique designs tailored to your taste.",
      images: [
        "/images/custom1.jpeg",
        "/images/custom2.jpeg",
        "/images/custom3.jpeg",
        "/images/custom1.jpeg",
        "/images/custom2.jpeg",
        "/images/custom3.jpeg",
      ],
    },
    "molding-aluminium-fabricataion": {
      title: "Molding Aluminium Fabrication",
      desc: "Durable, lightweight, and stylish aluminium fabrication solutions for interiors and exteriors.",
      images: [
        "/images/aluminium1.jpeg",
        "/images/aluminium2.jpeg",
        "/images/aluminium1.jpeg",
        "/images/aluminium2.jpeg",
        "/images/aluminium1.jpeg",
        "/images/aluminium2.jpeg",
      ],
    },
    "artificial-garden-glass-films-&-vinly-blind-(vertical,-rollar,-zebra-&-wooden)": {
      title: "Artificial Garden Glass Films & Vinly Blind (Vertical, Rollar, Zebra & wooden)",
      desc: "Create a natural green vibe indoors without the hassle of maintenance.",
      images: [
        "/images/blind1.jpeg",
        "/images/blind2.jpeg",
        "/images/blind1.jpeg",
        "/images/blind2.jpeg",
        "/images/blind1.jpeg",
        "/images/blind2.jpeg",
      ],
    },
  };

  const service = serviceData[id];

  if (!service) {
    return <p className="text-center mt-20 text-gray-600">Service not found</p>;
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {service.title}
      </h1>
      <p className="text-gray-700 text-lg text-center mb-10 max-w-3xl mx-auto">
        {service.desc}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {service.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${service.title} ${idx + 1}`}
            className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/services"
          className="bg-black text-white px-6 py-2 rounded-lg font-normal text-sm
                     shadow-md transition-all duration-300 
                     hover:bg-[#DA6918] hover:scale-105 hover:shadow-lg"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetail;
