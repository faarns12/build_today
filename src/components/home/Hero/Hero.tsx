"use client";


import React from "react";
import { motion } from "framer-motion";
import { Building2,  Shield } from "lucide-react";
import ProjectsSlider from "./ProjectsSlider";
import { IoConstruct } from "react-icons/io5";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative py-10 md:mt-5 md:px-10 md:py-16 lg:py-20 md:rounded-3xl w-full md:w-11/12 mb-6 mx-auto bg-contain object-fill lg:h-[855px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 md:rounded-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.39) 100%)",
        }}
      ></div>

      <div className="flex flex-col lg:flex-row w-11/12 lg:px-14 justify-between items-center md:items-start">
        {/* Left Column */}
        <div className="relative z-10 flex-1 text-white px-4 sm:px-6 md:px-8 lg:px-0 mt-16 md:mt-16 lg:mt-20 text-left max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 h-[30px] rounded-[16px] border bg-white/15"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow:
                "inset 3px 3px 15px 5px rgba(255, 255, 255, 0.15), inset -3px -3px 15px 5px rgba(217, 217, 217, 0.15)",
              backdropFilter: "blur(4px)",
            }}
            aria-label="Trusted across Australia since 2012"
          >
            <span className="text-[10px] sm:text-[11px] font-satoshi font-medium tracking-[0.1em] uppercase">
              Trusted across Australia since 2012
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-neue font-normal leading-[1.1] text-3xl sm:text-4xl md:text-[45px] lg:text-[64px] mb-4"
          >
            Building Today For A <br className="hidden md:block" /> Better Tomorrow
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="font-satoshi text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 mb-6 md:mb-8"
          >
            At Build Today, we bring together craftsmanship, reliability, and a
            commitment to excellence to deliver homes and projects Australians are
            proud to own.
          </motion.p>

          {/* Icon Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6"
            aria-label="Key highlights"
          >
            {[{ Icon: IoConstruct, label: "Craftsmanship" },
              { Icon: Building2, label: "Quality Builds" },
              { Icon: Shield, label: "Reliable" },
            ].map(({ Icon, label }, i) => (
              <span
                key={i}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
                title={label}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto"
>
 <Link href={"/Quotation"}>
  <button className="w-full sm:w-auto h-[42px] sm:h-[48px] md:h-[50px] font-satoshi font-medium text-[12px] sm:text-sm md:text-base px-3 sm:px-4 md:px-4 rounded-[10px] bg-white text-[#183654] shadow-[0_1px_4px_0_rgba(24,45,92,0.4)] hover:shadow-md transition">
    Get a Free Quote
  </button></Link>



  <Link href={"/properties"}>
  
  <button className="w-full sm:w-auto h-[42px] sm:h-[48px] md:h-[50px] font-satoshi font-medium text-[12px] sm:text-sm md:text-base px-3 sm:px-4 md:px-4 rounded-[10px] bg-[#0087DB] text-white shadow-[0_1px_4px_0_rgba(24,45,92,0.4)] hover:shadow-md transition">
    Explore our properties
  </button>
  
  </Link>
</motion.div>



        </div>

        {/* Right Column */}
        <div className="relative z-10 w-full lg:w-auto mt-6 lg:mt-[210px] flex justify-center lg:justify-end">
          <ProjectsSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
