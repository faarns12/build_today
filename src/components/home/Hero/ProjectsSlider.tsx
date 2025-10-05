"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectsSlider() {
  // ✅ List of images — just add more objects here if needed
  const slides = [
    { src: "/img/slider2.jpg", alt: "Modern tower angle" },
    { src: "/img/slider3.jpg", alt: "Courtyard facade" },
    { src: "/img/slider3.jpg", alt: "Glass atrium" },
  
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full  sm:max-w-[330px] "
      aria-roledescription="carousel"
    >
      {/* Top overlay bar */}
      <div className=" z-20 mb-6 flex items-center justify-between ">
        <p className="text-white text-sm sm:text-base">
          Over 200 Projects Completed <br className="sm:hidden" />
          Nationwide Successfully
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="h-10 w-10 rounded-full border border-white/70 text-white/95
                       hover:bg-white/10 transition grid place-items-center"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="h-10 w-10 rounded-full border border-white/70 text-white/95
                       hover:bg-white/10 transition grid place-items-center"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-xl">
        <div className="relative aspect-[16/12] sm:aspect-[16/10]">
          <AnimatePresence mode="wait" initial={false}>
            {/* Map over slides */}
            {slides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={i === index}
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
