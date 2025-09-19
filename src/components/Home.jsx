import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { name: "Years of Experience", value: 12 },
  { name: "Successful Projects", value: 300 },
  { name: "Premium Services Offered", value: 40 },
  { name: "Unlimited Design Possibilities", value: 999 },
];

// ✅ Counter hook (starts whenever isVisible is true)
function useCounter(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0); // reset counter when not visible
      return;
    }

    let start = 0;
    const increment = target / (duration / 16);

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
  }, [target, isVisible, duration]);

  return count;
}

function Home() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // IntersectionObserver triggers counter every time section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visible triggers
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-2">
        <img
          alt=""
          src="/images/WhatsApp Image 2025-09-15 at 13.46.06_67863f06.jpg"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30"
        />
        <div className="absolute inset-0 bg-black/30"></div>

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
              className="mt-8 text-lg font-medium text-white sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Your home and office deserve the best design solutions. We ensure
              quality, durability, and elegance in every detail.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <div ref={statsRef} className="mt-16 sm:mt-20">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const count = useCounter(stat.value, statsVisible, 2500);
                return (
                  <motion.div
                    key={stat.name}
                    className="flex flex-col-reverse gap-1"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    <dt className="text-base/7 text-white">{stat.name}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-white">
                      {stat.value === 999 ? "Unlimited" : count + (stat.value >= 300 ? "+" : "")}
                    </dd>
                  </motion.div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
