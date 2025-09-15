import React from "react";
import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-100">
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-600">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-400/30 pb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo + Description */}
          <div className="md:max-w-md">
            <div className="flex items-center">
              <img
                src="/images/WhatsApp Image 2025-09-15 at 13.46.04_1287a868.jpg"
                alt="LA Decor Logo"
                className="h-14 w-14 rounded-full"
              />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                LA DECOR
              </h1>
            </div>
            <p className="mt-6 text-sm leading-relaxed">
              LA Decor Interior Design Studio brings elegance and innovation to
              every space. From wallpapers to modular kitchens and false
              ceilings, our expert craftsmanship and creative designs transform
              spaces into stylish, comfortable, and functional environments that
              inspire.
            </p>
          </div>

          {/* Links + Contact */}
          <div className="flex-1 flex flex-wrap md:justify-end gap-16">
            {/* Company Links */}
            <div>
              <h2 className="font-semibold mb-5 text-gray-900">Company</h2>
              <ul className="text-sm space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/Services" },
                  { name: "Certificate", href: "/certificate" },
                  { name: "Gallery", href: "/Gallery" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Privacy Policy", href: "#" },
                ].map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5, color: "#facc15" }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-semibold mb-5 text-gray-900">Get in Touch</h2>
              <div className="text-sm space-y-2">
                <p>+1-212-456-7890</p>
                <p>ladecor@gmail.com</p>
                {/* Social Icons */}
                {/* <div className="flex gap-4 mt-4">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                    (Icon, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon size={16} />
                      </motion.a>
                    )
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.p
          className="pt-6 text-center text-xs md:text-sm pb-6 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} LA Decor. All Rights Reserved. Designed
          with ❤️ by .
        </motion.p>
      </footer>
    </div>
  );
}

export default Footer;
