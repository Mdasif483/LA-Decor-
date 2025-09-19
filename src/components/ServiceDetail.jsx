import React from "react";
import { useParams, Link } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();

  // ✅ Slugs ko lowercase-hyphen form me rakho
  const serviceData = {
    "pvc-mats": {
      title: "PVC Mats",
      desc: "Transform your space with our stylish PVC Mats! Lightweight, durable, and super easy to clean, these mats bring comfort and safety to every corner of your home. Perfect for bathrooms, kitchens, or any high-traffic area, they resist water, stains, and wear while adding a touch of elegance with vibrant designs and colors. Make every step a cozy one!",
      images: [
        "/images/e025f0ba-83a3-434c-a889-cb8cb0da35a7.jpeg",
        "/images/Cleaning and maintenance tips for pvc floor mats.jpeg",
        "/images/TSB Tubes & Tanks are renowned name for Cushion….jpeg",
        "/images/[product_description]PVC inflatable boat material….jpeg",
        "/images/swimming pool mats.jpeg",
        "/images/cef68226-0645-4f31-9963-2f9bb71e6170.jpeg",
      ],
    },
    "ptuffan-glass": {
      title: "Tuffan Glass",
      desc: "Bring elegance and strength to your interiors with Tuffan Glass! Known for its durability and crystal-clear finish, Tuffan Glass adds a modern touch to windows, partitions, and decorative installations. Scratch-resistant, easy to maintain, and stylishly versatile, it’s the perfect choice for homes, offices, and commercial spaces.",
      images: [
        "/images/3052e6c2-b33f-44cb-b0bb-2799b91bc6f9.jpeg",
        "/images/ALL  KIND OF GLASS WORK ,SHISHE KA KAAM, KAANCH KI….jpeg",
        "/images/c2d633f9-4231-4c2d-a1f4-2118b23509e3.jpeg",
        "/images/6f63d0eb-88e9-4abb-a959-42d9932a3f6d.jpeg",
        "/images/41521a0b-0487-47a0-972c-80c34101f176.jpeg",
        "/images/8b780ddb-46ac-4e31-a290-eb23cb5d8ad2.jpeg",
      ],
    },
    "grass-uv-sheet": {
      title: "Grass UV Sheet",
      desc: "Protect and beautify your space with Grass UV Sheets! Made from high-quality, durable material, these sheets block harmful UV rays while allowing natural light to filter through. Perfect for patios, greenhouses, and outdoor areas, they combine strength, weather-resistance, and style, giving your space a bright and safe environment all year round.",
      images: [
        "/images/Related Hot Sale 120 Pcs Copper Earring Hook….jpeg",
        "/images/Type_Artificial Plant Wall… (1).jpeg",
        "/images/8787d5f9-e772-43d3-a915-3d050f8ab7a4.jpeg",
        "/images/b45dcf05-cc21-47dd-8bf3-0a3f8c6766c0.jpeg",
        "/images/Type_Artificial Plant Wall….jpeg",
        "/images/Waterproof Low Price 15mm 700mm Plastic PVC Rigid….jpeg",
      ],
    },
    "front-elivation": {
      title: "Front Elivation",
      desc: "Give your building a striking first impression with our expertly designed Front Elevations! Combining aesthetics, functionality, and modern design principles, our front elevations enhance the curb appeal of homes, offices, and commercial spaces. Crafted with attention to detail, they reflect elegance, style, and architectural precision.",
      images: [
        "/images/8ed5d675-3bb4-439a-b6ce-6081025af679.jpeg",
        "/images/465c6078-425b-4502-bf50-e830598dd37f.jpeg",
        "/images/b0634cc1-ff65-4678-94a5-90cfd3ac40ee.jpeg",
        "/images/b5d59cd0-d7d8-43e4-a21e-40fa91239102.jpeg",
        "/images/Small Beautiful Amazing Home Architecture Latest….jpeg",
        "/images/𝗖𝗮𝗹𝗹_𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 - 𝟳𝟬𝟮𝟬𝟵𝟭𝟬𝟵𝟲𝟱….jpeg",
      ],
    },
    "modular-kitchen": {
      title: "Modular Kitchen",
      desc: "Upgrade your cooking space with our sleek Modular Kitchens! Designed for efficiency, style, and convenience, these kitchens offer smart storage solutions, modern fittings, and durable materials. Whether you love cooking or entertaining, our modular designs make your kitchen functional, elegant, and a joy to use every day.",
      images: [
        "/images/Modular Kitchen Design.jpeg",
        "/images/a6f9903f-8471-49c3-acb7-963e6d6ac314.jpeg",
        "/images/✨ Stunning Modular Kitchen Design for Small….jpeg",
        "/images/d4609961-91ac-486c-91da-4bad29e0676c.jpeg",
        "/images/Unleash your inner chef with these innovative….jpeg",
        "/images/PVC Kitchen vs_ Modular Kitchen – Which One is….jpeg",
      ],
    },
    "wallpaper-rolls": {
      title: "Wallpaper Rolls",
      desc: "Transform your walls instantly with our premium Wallpaper Rolls! Available in a wide range of designs, patterns, and textures, they bring life, color, and personality to any room. Easy to apply, durable, and stylish, our wallpapers are perfect for creating cozy, modern, or vibrant spaces that truly reflect your style.",
      images: [
        "/images/Paredes con texturas_ una tendencia para el hogar….jpeg",
        "/images/1pc Black Marble Contact Paper, Home Decoration….jpeg",
        "/images/1pc Dark Blue And Gold Marbling Waterproof And Oil….jpeg",
        "/images/9616306e-7eaa-4c24-a63f-972a4ee1b636.jpeg",
        "/images/Princess Wallpaper.jpeg",
        "/images/22a3b809-bb2c-40fa-9b9b-473b4eab2322.jpeg",
      ],
    },
    "customized-wallpaper": {
      title: "Customized Wallpaper",
      desc: "Bring your unique vision to life with our Customized Wallpapers! Choose your colors, patterns, and designs to create walls that truly reflect your personality and style. Perfect for homes, offices, and creative spaces, our high-quality, easy-to-apply wallpapers turn any wall into a stunning focal point.",
      images: [
        "/images/3D Wallpaper Designs l Wall Decoration Designs For….jpeg",
        "/images/Custom Large Size 3D Wallpaper Modern Mable Golden… (1).jpeg",
        "/images/f149cbaf-7aa1-4e5c-84dd-00882feb5e82.jpeg",
        "/images/21f0723f-d91b-4532-a0a7-257894792912.jpeg",
        "/images/a31fcc6f-41ce-406d-a6d4-500eb31f3631.jpeg",
        "/images/3D Stereo Hexagonal Geometric Mural Wallpaper….jpeg",
      ],
    },
    "molding-aluminium-fabricataion": {
      title: "Molding Aluminium Fabrication",
      desc: "Strength, precision, and style come together with our Molding Aluminium Fabrication services! Perfect for windows, doors, partitions, and decorative structures, our high-quality aluminium solutions are durable, lightweight, and corrosion-resistant. Expertly crafted to match modern design needs, they add elegance and functionality to any space.",
      images: [
        "/images/Paneles de aluminio en forma de panal, hoja SPC….jpeg",
        "/images/Altron Technology's metal forming solutions in….jpeg",
        "/images/Aluminum Composite Panel (ACP) is a flat panel….jpeg",
        "/images/65ab3e43-813e-448e-9d42-8ebd14ef8bb5.jpeg",
        "/images/Cheap Price Polystyrene EPS PS Decorative Foam….jpeg",
        "/images/38a65fea-0c00-4a5a-ba98-171eb0b2e239.jpeg",
      ],
    },
    "artificial-garden-glass-films-&-vinly-blind-(vertical,-rollar,-zebra-&-wooden)": {
      title: "Artificial Garden Glass Films & Vinly Blind (Vertical, Rollar, Zebra & wooden)",
      desc: "Enhance the beauty, privacy, and functionality of your spaces with our premium Artificial Garden Glass Films and Vinyl Blinds. Our glass films bring a touch of greenery and elegance indoors, creating a serene garden-like ambiance without the maintenance. Complementing this, our versatile Vinyl Blinds—including Vertical, Roller, Zebra, and Wooden styles—offer stylish light control, privacy, and durability for homes and offices alike. Easy to install, long-lasting, and designed to match modern interiors, these solutions combine aesthetics with practicality, transforming any room into a comfortable, elegant, and visually appealing environment.",
      images: [
        "/images/_Customized Size_We can make any size that you….jpeg",
        "/images/Floral Stained Glass Window Film - Self-adhesive….jpeg",
        "/images/baf1788e-3759-4524-a497-ddceb521a1de.jpeg",
        "/images/Gorgeuos Hummingbird by Louise Tiler_ Available in….jpeg",
        "/images/02f38738-0a81-4472-abdc-f38d9125ad71.jpeg",
        "/images/Effect Decorative Glass Rainbow Adhesive Green….jpeg",
      ],
    },
  };

  const service = serviceData[id];

  if (!service) {
    return <p className="text-center mt-20 text-gray-600">Service not found</p>;
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 mt-25">
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
