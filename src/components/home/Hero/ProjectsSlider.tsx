"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectsSlider() {
  const slides = [
    { src: "/img/slider11.png", alt: "Modern tower angle" },
    { src: "/img/prop-1.jpg", alt: "Courtyard facade" },
    { src: "/img/prop-2.jpg", alt: "Courtyard facade" },
    { src: "/img/prop-3.jpg", alt: "Courtyard facade" },
    { src: "/img/prop-4.jpg", alt: "Courtyard facade" },
    
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  // For fade-up trigger
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Move to next slide
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  // Move to previous slide
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  // Auto slide only after first in-view
  useEffect(() => {
    if (!inView) return; // wait until visible

    const interval = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length, inView]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 1.05,
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full sm:max-w-[330px]"
      aria-roledescription="carousel"
    >
      {/* Top overlay bar */}
      <div className="z-20 mb-6 flex items-center justify-between">
        <p className="text-white text-sm sm:text-base">
          Over 200 Projects Completed <br className="sm:hidden" />
          Nationwide Successfully
        </p>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous"
            className="h-10 w-10 rounded-full border border-white/70 text-white/95
                       grid place-items-center hover:bg-white/10 transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next"
            className="h-10 w-10 rounded-full border border-white/70 text-white/95
                       grid place-items-center hover:bg-white/10 transition"
          >
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-xl">
        <div className="relative aspect-[16/12] sm:aspect-[16/10]">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            {slides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={i}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
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
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </motion.section>
  );
}
