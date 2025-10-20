"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BuildTodaySection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Text scrolls down (never fades)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // stays visible

  // Image animation (fade + slight upward motion)
  const imageVariants = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  });

  const images = [
    "/img/sample-01.png",
    "/img/sample-02.png",
    "/img/sample-03.png",
    "/img/sample-04.png",
    "/img/sample-05.png",
    "/img/sample-06.png",
  ];

  return (
    <section
      ref={ref}
      className="relative w-full h-[175vh] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Sticky Image Section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Scrolling Text */}
        <motion.h3
          style={{ y, opacity }}
          className="absolute top-1/3 font-extrabold text-black text-[14vw] leading-none text-center z-10"
        >
          BUILD TODAY
        </motion.h3>

        {/* Images */}
        <div className="relative w-[90vw] h-[80vh]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={imageVariants(index * 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`absolute rounded-xl overflow-hidden shadow-lg z-${
                [0, 2, 4].includes(index) ? "30" : "20"
              }`}
              style={getImagePosition(index)}
            >
              <Image
                src={src}
                alt={`Architecture ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Image layout + z-index layering
function getImagePosition(index: number) {
  const positions: Record<number, React.CSSProperties> = {
    0: { top: "0%", left: "20%", width: "180px", height: "180px", zIndex: 30 },
    1: { top: "20%", right: "20%", width: "220px", height: "160px", zIndex: -20 },
    2: { top: "40%", left: "10%", width: "220px", height: "160px", zIndex: 30 },
    3: { top: "60%", right: "10%", width: "220px", height: "160px", zIndex: -20 },
    4: { top: "80%", left: "18%", width: "230px", height: "170px", zIndex: 30 },
    5: { top: "100%", right: "20%", width: "180px", height: "160px", zIndex: -20 },
  };
  return positions[index] || {};
}
