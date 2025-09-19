import React from "react";
import { motion } from "framer-motion";
import AboutHero from "./SubComponent/AboutHero";

function About() {
  return (
    <div className="mt-1 ">
      <AboutHero />

      <div className="max-w-7xl mx-auto pt-28 px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center m-8" id="about">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/WhatsApp Image 2025-09-15 at 13.46.08_d31bff9a.jpg"
            alt="About LA Decor"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            About <span className="text-[#DA6918]">LA DECOR</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At <span className="font-semibold text-gray-900">LA Decor</span>, we
            believe that every home and office deserves a touch of elegance.
            With over <span className="font-semibold">12 years of experience</span> in
            interior design, we bring creativity, precision, and passion to every
            project. From premium furniture to unique décor solutions, our team
            ensures that each space we design reflects beauty, comfort, and
            functionality.
          </motion.p>

          {/* Highlights / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[
              { title: "Creative Designs", desc: "Tailored solutions for modern homes & offices." },
              { title: "Premium Quality", desc: "We use only the finest materials & finishes." },
              { title: "Client Satisfaction", desc: "Over 300+ successful projects delivered." },
              { title: "Endless Possibilities", desc: "Unlimited design ideas for your dream space." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl shadow-md bg-white hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
