import React, { useState } from "react";
import { FaCouch, FaPaintBrush, FaLightbulb, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SecondAboutPrev() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does La Décor offer?",
      answer:
        "We specialize in interior designing, custom furniture, and creative styling solutions tailored to your lifestyle.",
    },
    {
      question: "Do you provide end-to-end project management?",
      answer:
        "Yes, our team handles everything from concept to execution, ensuring quality and timely delivery.",
    },
    {
      question: "Can I customize furniture designs?",
      answer:
        "Absolutely! We design and build furniture to match your space and personal preferences.",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{
        backgroundImage:
          "url('/images/freepik__the-style-is-candid-image-photography-with-natural__24669.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/images/WhatsApp Image 2025-09-15 at 13.46.07_db2199ec.jpg"
            alt="About LA Decor"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-white flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6 text-gray-200 leading-relaxed">
              At{" "}
              <span className="text-[#DA6918] font-semibold">La Décor</span>, we
              create interiors that blend elegance, comfort, and functionality.
              Our mission is to transform your living spaces into timeless
              masterpieces filled with warmth and charm.
            </p>

            {/* Icon Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
              >
                <FaCouch className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Furniture Design</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
              >
                <FaPaintBrush className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Interior Styling</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
              >
                <FaLightbulb className="text-[#DA6918] text-3xl mb-2" />
                <p className="font-medium">Creative Solutions</p>
              </motion.div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-[#DA6918] hover:bg-[#b45212] transition px-8 py-3 rounded-full font-semibold text-white shadow-lg">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Extra Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-6 md:px-16 lg:px-24 mt-20 text-center text-white"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose La Décor?
        </h3>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          With years of expertise, our design team ensures every corner of your
          space tells a story. From premium materials to personalized solutions,
          we make sure your home reflects your personality and lifestyle.
        </p>
      </motion.div>

      {/* FAQ Section */}
      <div className="relative container mx-auto px-6 md:px-16 lg:px-24 mt-16 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-4 text-gray-200 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
