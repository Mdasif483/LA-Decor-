import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="relative bg-yellow-400 py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* CTA Text + Button */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </motion.button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-2xl shadow-lg w-full md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get the latest designs in your inbox
          </h3>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg w-full sm:w-auto"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
