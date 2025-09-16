// src/components/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const serviceDetails = {
  "premium-wallpapers": {
    title: "Premium Wallpapers",
    desc: "Our premium wallpaper collection is designed to add elegance, creativity, and personality to your interiors. With a wide range of textures, patterns, and colors, these wallpapers suit every style, from modern and minimalistic to bold and artistic themes. They are durable, easy to install, and customizable, making them a perfect choice for transforming your living room, bedroom, or workspace into a sophisticated environment that truly reflects your taste and lifestyle.",
    img: [
      "/images/image.png",
      "/images/istockphoto-140472560-1024x1024.jpg",
      "/images/istockphoto-452713019-1024x1024.jpg",
      "/images/istockphoto-511859482-612x612.jpg",
    ],
  },
  "pvc-wall-paneling": {
    title: "PVC Wall Paneling",
    desc: "PVC wall paneling is a modern and versatile solution that enhances the beauty and durability of your interiors. These panels are lightweight, water-resistant, termite-proof, and very easy to maintain, making them a smart alternative to traditional wall finishes. Available in a wide range of textures, colors, and patterns, PVC panels give your walls a stylish makeover while offering long-lasting protection. Perfect for homes, offices, and commercial spaces, they combine elegance with practicality and ensure a clean, sophisticated finish that lasts for years.",
    img: [
      "/images/istockphoto-1456385297-612x612.jpg",
      "/images/istockphoto-1441823017-1024x1024.jpg",
      "/images/istockphoto-1339036060-1024x1024.webp",
      "/images/pexels-froet-3256016-5869279.jpg",
    ],
  },
  "false-ceilings": {
    title: "False Ceilings",
    desc: "False ceilings are a stylish and functional way to enhance the interiors of any room. They not only add an elegant, modern touch but also help in improving acoustics, reducing heat, and concealing wiring or structural elements. Available in a variety of designs, textures, and finishes, false ceilings create a luxurious and spacious look while offering practical benefits. Ideal for living rooms, bedrooms, offices, and commercial spaces, they provide endless opportunities for creative lighting arrangements that completely transform the atmosphere of your space.",
    img: [
      "/images/pexels-froet-3256016-5869279.jpg",
      "/images/pexels-heyho-7045352.jpg",
      "/images/pexels-heyho-6636244.jpg",
      "/images/pexels-heyho-6587830.jpg",
    ],
  },
  "modular-kitchens": {
    title: "Modular Kitchens",
    desc: "Modular kitchens are the perfect blend of functionality, aesthetics, and smart space management. Designed with modern lifestyles in mind, they offer customized layouts, stylish cabinets, and efficient storage solutions that make cooking both enjoyable and hassle-free. With a wide variety of finishes, materials, and designs, modular kitchens can be tailored to match your home’s décor while ensuring durability and convenience. Whether small or spacious, they maximize every inch of available space, providing a clean and organized environment that enhances the overall charm of your interiors.",
    img: [
      "/images/istockphoto-174754765-612x612.jpg",
      "/images/istockphoto-174763916-612x612.jpg",
      "/images/istockphoto-174767708-612x612.jpg",
      "/images/istockphoto-174774433-612x612.jpg",
    ],
  },
  "decorative-blinds": {
    title: "Decorative Blinds",
    desc: "Decorative blinds are an elegant and practical solution for controlling light, enhancing privacy, and adding a stylish touch to any space. Available in a wide range of designs including roller, zebra, vertical, and wooden blinds, they complement both modern and traditional interiors. Crafted with high-quality materials, these blinds are durable, easy to maintain, and customizable to suit your home or office décor. By offering versatile light control and aesthetic appeal, decorative blinds not only elevate the beauty of your windows but also create a warm and inviting atmosphere.",
    img: [
      "/images/pexels-curtis-adams-1694007-3773571.jpg",
      "/images/pexels-curtis-adams-1694007-3773576.jpg",
      "/images/pexels-curtis-adams-1694007-18038081.jpg",
      "/images/pexels-heyho-7614606.jpg",
    ],
  },
  "artificial-garden-&-uv-sheets": {
    title: "Artificial Garden & UV Sheets",
    desc: "Artificial garden and UV sheets are a modern solution to bring greenery and freshness indoors or outdoors without the need for constant maintenance. Made with premium-quality materials, artificial grass and UV sheets replicate the natural look of real plants, adding charm to walls, balconies, rooftops, and interiors. They are weather-resistant, durable, and easy to clean, making them a perfect choice for both residential and commercial spaces. By combining aesthetics with practicality, these decorative elements create a vibrant, eco-friendly atmosphere while ensuring long-lasting beauty and convenience.",
    img: [
      "/images/istockphoto-154022404-612x612.jpg",
      "/images/istockphoto-1386880205-1024x1024.jpg",
      "/images/istockphoto-1265473004-612x612.jpg",
      "/images/istockphoto-653921682-1024x1024.jpg",
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <h2 className="text-center p-10 text-red-500">Service not found</h2>;
  }

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto mt-10">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
          {service.desc}
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {service.img.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image}
              alt={service.title}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
