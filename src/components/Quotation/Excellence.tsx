"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardData = [
  {
    title: "What We Stand for",
    description:
      "We act with integrity, fairness, and purpose in everything we do, making sure our actions reflect the principles we believe in.",
    image: "/img/Group-4.png",
  },
  {
    title: "Our Foundation",
    description:
      "Built on trust, respect, and shared commitment, this foundation supports everything we do and keeps us moving together.",
    image: "/img/Group-8.png",
  },
  {
    title: "At the Core",
    description:
      "We design and construct with the bigger picture in mind, creating spaces that last for generations.",
    image: "/img/Group-9.png",
  },
  {
    title: "What Drives Us",
    description:
      "Every project begins with honesty, transparency, and a promise to deliver what we commit.",
    image: "/img/Group-7.png",
  },
];

// Variants for staggered animation
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Excellence: React.FC = () => {
  return (
    <section className="relative mx-auto my-6 bg-white">
      {/* Top section */}
 <motion.div
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-9/12 mx-auto px-4 md:px-8 text-center md:text-left gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-[#183654] text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold leading-tight"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Excellence in Every <br className="hidden sm:block" /> Detail
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-[#191919] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        From concept to completion, we deliver <br className="hidden sm:block" /> homes that inspire confidence.
      </motion.p>
    </motion.div>

      {/* Cards */}
      <motion.div
        className="md:max-w-9/12 mx-auto px-6 md:px-0 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardData.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="flex flex-col justify-between p-3 rounded-2xl border-2 border-gray-200 shadow-[0_1px_0_#e5e7eb,0_6px_24px_-12px_rgba(16,24,40,.16)] bg-white h-full">
              <div className="flex  mb-4 sm:mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  height={36}
                  width={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-[#183654] text-center sm:text-left">
                  {card.title}
                </h3>
                <div className="mt-4 rounded-xl min-h-[150px] sm:min-h-[160px] md:min-h-[180px] border border-gray-300 bg-[#F8F8F8] px-3 pt-4 flex items-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#183654] font-medium leading-6 text-center sm:text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Excellence;
