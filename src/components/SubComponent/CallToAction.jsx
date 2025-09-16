import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="relative bg-yellow-400 py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* CTA Text + Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with us today and let’s design something amazing for your home.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
