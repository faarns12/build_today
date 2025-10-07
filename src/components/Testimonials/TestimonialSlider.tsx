"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { PiBuildingFill } from "react-icons/pi";

const slides = [
   {
    id: 1,
    name: "Sarah Thompson",
    role: "New House Construction",
    review:
      "Working with BuildToday was the best decision we made. They delivered our dream home on time and kept us informed every step of the way.",
    rating: 4.5,
    projectType: "Duplex Construction",
    location: "Sydney, Australia",
    details: "4-Bedroom Home, 2000 Sq Ft, 3 Stories",
    duration: "6 Months",
    img: "/img/review1.jpg",
  },
  {
    id: 2,
    name: "John Miller",
    role: "Modern Renovation",
    review:
      "Amazing work! BuildToday transformed our old house into a modern masterpiece. Highly professional and reliable.",
    rating: 5,
    projectType: "Renovation",
    location: "Melbourne, Australia",
    details: "2-Story Family Home, 2500 Sq Ft",
    duration: "8 Months",
    img: "/img/review1.jpg",
  },
  {
    id: 3,
    name: "Emily Clark",
    role: "Interior Design",
    review:
      "The team’s attention to detail is outstanding. They completely redesigned our living room and it looks stunning.",
    rating: 4,
    projectType: "Interior Design",
    location: "Brisbane, Australia",
    details: "Living Room & Kitchen Makeover, 1500 Sq Ft",
    duration: "3 Months",
    img: "/img/review3.jpg",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Commercial Project",
    review:
      "BuildToday managed our office renovation efficiently. The project was completed ahead of schedule, and the results are impressive.",
    rating: 4.8,
    projectType: "Office Renovation",
    location: "Sydney, Australia",
    details: "Corporate Office, 4000 Sq Ft",
    duration: "5 Months",
    img: "/img/review4.webp",
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Landscape Design",
    review:
      "Their landscape design team is amazing! Our backyard has been transformed into a beautiful, functional space for the whole family.",
    rating: 5,
    projectType: "Garden & Landscape",
    location: "Perth, Australia",
    details: "Backyard Garden, 1200 Sq Ft",
    duration: "2 Months",
    img: "/img/review5.jpeg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-5 rounded-3xl w-11/12 mx-auto overflow-hidden mt-10">
      {/* Left side - Text */}
      <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-between p-6 sm:p-8 md:p-12 space-y-6 bg-[#EFF7FD] rounded-3xl">
        {/* Slide count + line */}
        <div className="flex items-center gap-3 sm:gap-4">
          <p className="text-[#183654] text-[35px] sm:text-[40px] md:text-[45px] font-semibold flex-shrink-0">
            {String(slide.id).padStart(2, "0")}
            <span className="text-[#183654B3] text-[20px] sm:text-[23px] md:text-[25px]">
              /{slides.length}
            </span>
          </p>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Review + rating */}
        <div>
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#183654] font-semibold text-xl md:text-xl lg:text-[30px] leading-relaxed"
            >
              {slide.review}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center mt-3 sm:mt-4 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  i < Math.floor(slide.rating)
                    ? "text-[#0087DB]"
                    : "text-gray-300"
                } fill-current`}
              />
            ))}
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              {slide.rating}
            </span>
          </div>
        </div>

        {/* Name + navigation */}
        <div className="flex justify-between gap-4 sm:gap-0 items-start sm:items-center">
          <motion.div key={slide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}>
            <h3 className="font-bold text-[#183654] text-2xl md:text-[20px] lg:text-[30px]">
              {slide.name}
            </h3>
            <p className="text-gray-500 text-xs md:text-base lg:text-lg">{slide.role}</p>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A2540]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00AEEF] border border-black flex items-center justify-center text-white hover:bg-[#0090d9] transition"
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>

  {/* Right side - Image */}
<div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-full"
    >
      <Image
        src={slide.img}
        alt={slide.name}
        fill
        className="object-cover rounded-3xl"
      />

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-2"
      >
        <span className="flex items-center gap-2 text-[#183654] text-xs sm:text-sm px-[12px] sm:px-[15px] py-[8px] sm:py-[10px] rounded-full border border-white bg-white shadow">
          <PiBuildingFill className="w-4 h-4 sm:w-5 sm:h-5 text-[#0087DB]" />
          {slide.projectType}
        </span>

        <span className="flex items-center gap-2 text-[#183654] text-xs sm:text-sm min-w-[150px] sm:min-w-[170px] px-[12px] sm:px-[15px] py-[8px] sm:py-[10px] rounded-full border border-white bg-white shadow">
          <IoLocationSharp className="w-4 h-4 sm:w-5 sm:h-5 text-[#0087DB]" />
          {slide.location}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#183654] text-xs sm:text-sm font-medium px-[12px] sm:px-[15px] py-[8px] sm:py-[10px] rounded-full border border-white bg-white shadow"
      >
        {slide.duration}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white text-xs sm:text-sm font-medium px-[12px] sm:px-[15px] py-[8px] sm:py-[10px] rounded-full border border-white backdrop-blur-sm bg-[rgba(0,0,0,0.05)]"
      >
        {slide.details}
      </motion.div>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white shadow cursor-pointer hover:scale-105 transition-transform"
      >
        <ArrowUpRight className="text-[#0A2540] w-5 h-5 sm:w-6 sm:h-6" />
      </motion.span>
    </motion.div>
  </AnimatePresence>
</div>

    </section>
  );
}
