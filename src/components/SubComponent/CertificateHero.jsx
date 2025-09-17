import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CertificateHero() {
    const handleScroll = () => {
        const section = document.getElementById("certificate");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/pexels-thirdman-8470773.jpg"
                    alt="Services Background"
                    className="w-full h-140 object-cover opacity-75"
                />
                {/* Overlay for dark effect */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-100"></div> */}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-3xl px-6"
            >
                {/* Animated Heading (looping) */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Our  <span className="text-yellow-500">Certificates</span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl mb-8 text-black"
                >
                    At , we are proud of our journey
                    and achievements. These certificates reflect our commitment to quality,
                    creativity, and customer trust in delivering premium interior solutions.
                </motion.p>

                {/* Buttons with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={handleScroll}
                        className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                    >
                        Our Certificates
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition">
                        <Link to="/Contact">Contact Us</Link>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CertificateHero;
