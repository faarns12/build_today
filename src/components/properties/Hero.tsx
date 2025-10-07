"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative rounded-none md:rounded-3xl md:w-11/12 md:mb-14 mb-6 mx-auto top-0 md:top-6 h-[371px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/img/properties.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 rounded-none md:rounded-3xl bg-black opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl px-4"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-neue sm:text-4xl md:text-5xl lg:text-[65px] font-medium text-white leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
        Shaping Australia’s Skylines and Homes
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-200 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          From boutique residences to large-scale commercial builds, explore the <br /> projects that showcase our craftsmanship and commitment.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
