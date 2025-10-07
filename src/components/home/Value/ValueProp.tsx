"use client";

import { motion, Variants } from "framer-motion";

export default function ValueProp() {
  const text =
    "From planning to completion, we provide the tools and expertise that make construction easier, faster, and more reliable.";

  // Split the text into words
  const words = text.split(" ");

  // Motion variants for parent container (stagger effect)
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // time between each word
      },
    },
  };

  // Motion variants for each word
  const child: Variants = {
    hidden: { color: "#b3b3b3" },
    visible: { color: "#183654", transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section className="bg-white mx-auto px-4 sm:px-6 md:px-8 lg:px-0 w-full md:w-10/12 lg:w-9/12">
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-snug sm:leading-snug md:leading-tight lg:leading-tight font-semibold flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span key={index} className="mr-1" variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
