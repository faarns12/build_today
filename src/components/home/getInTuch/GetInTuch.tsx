"use client";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GetInTuch() {
  return (
    <motion.section
      style={{
        backgroundImage: "url('/img/getintuch.png')",
        borderRadius: "25px",
      }}
      className="bg-cover bg-center bg-no-repeat my-7 flex justify-center text-center items-center px-4 mx-auto w-11/12 h-[350px] sm:h-[500px] md:h-[550px] lg:h-[581px]"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="rounded-[inherit] w-full h-full flex flex-col justify-center items-center space-y-[50px]">
        
        {/* Logo */}
        <div className="relative w-[140px] sm:w-[160px] md:w-[183px] h-[64px] sm:h-[74px] md:h-[84px] flex justify-center mx-auto">
          <Image
            src="/img/whitelogo.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] text-white font-neue font-semibold leading-tight md:leading-tight"
        >
          Ready To Bring Your <br /> Vision To Life?
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
          className="flex justify-center"
        >
          <Link href={"/get-involved"}>
            <button className="cursor-pointer text-white bg-[#0087DB] w-[170px] sm:w-[200px] h-[48px] sm:h-[54px] backdrop-blur-md hover:bg-[#0061A8] rounded-full flex items-center justify-between px-2">
              <span className="flex-1 text-lg sm:text-xl pl-2 text-left">
                Get in Touch
              </span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white">
                <FiArrowUpRight size={20} className="sm:size-7 text-black font-bold" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
