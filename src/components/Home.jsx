import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const links = [
  // { name: "HOME", href: "/" },
  // { name: "About", href: "/about" },
  // { name: "Services", href: "/Services" },
  // { name: "Certificate", href: "/Certificate" },
  // { name: "Gallery", href: "/Gallery" },
  // { name: "contact", href: "/contact" },
];

const stats = [
  { name: "Years of Experience", value: 12 },
  { name: "Successful Projects", value: 300 },
  { name: "Premium Services Offered", value: 40 },
  { name: "Unlimited Design Possibilities", value: 999 }, // Unlimited ko number se bhi handle kar sakte ho
];

// ✅ Custom hook for counter animation
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // approx 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

function Home() {
  return (
    <div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-2">
        <img
          alt=""
          src="/images/WhatsApp Image 2025-09-15 at 13.46.06_67863f06.jpg"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Transform Your Space With Us
            </motion.h2>
            <motion.p
              className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Your home and office deserve the best design solutions. We ensure
              quality, durability, and elegance in every detail.
            </motion.p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, color: "#ffe605" }}
                  transition={{ duration: 0.4 }}
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </motion.a>
              ))}
            </div>

            {/* Stats with Counter Animation */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const count = useCounter(stat.value, 2500); // 2.5 sec animation
                return (
                  <motion.div
                    key={stat.name}
                    className="flex flex-col-reverse gap-1"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-white">
                      {stat.value === 999 ? "Unlimited" : count + (stat.value >= 300 ? "+" : "")}
                    </dd>
                  </motion.div>
                );
              })}
            </dl>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default Home;
