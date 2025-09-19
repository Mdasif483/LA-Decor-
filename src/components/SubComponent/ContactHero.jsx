import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactHero() {
    const handleScroll = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden mt-27">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/pexels-jeshoots-4831.jpg"
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
                    Reach Out to <span className="text-[#DA6918]"> LA Decor</span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl mb-8 text-black"
                >
                    Your dream space is just a message away. Contact us today and discover how we can make your interiors stunning and functional We’d love to hear from you! Whether it’s a design inquiry or a quick question, contact us and let’s bring your vision to life.
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
                        className="px-6 py-3 bg-[#DA6918] text-black font-semibold rounded-lg hover:bg-[#DA6918] transition"
                    >
                        Contact us
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-[#DA6918] text-[#DA6918] font-semibold rounded-lg hover:bg-[#DA6918] hover:text-black transition">
                        <Link to="/">Home</Link>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ContactHero;
