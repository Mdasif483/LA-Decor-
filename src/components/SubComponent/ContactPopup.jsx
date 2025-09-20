import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // close icon

function ContactPopup() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 right-1 -translate-y-1/2 z-40 mt-3"
        >
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-l-lg shadow-xl relative w-64 border-l-4 border-[#DA6918]">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <X size={18} />
            </button>

            {/* Contact Form */}
            <h2 className="text-lg font-semibold mb-3 text-center text-gray-800">
              Contact Us
            </h2>
            <form className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA6918]"
              />
              <button
                type="submit"
                className="w-full bg-[#DA6918] text-black font-medium py-1.5 rounded-md hover:bg-[#b45212] transition"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactPopup;
