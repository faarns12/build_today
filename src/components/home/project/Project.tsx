"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type Card = {
  title: string;
  desc: string;
  img: string;
};

const cards: Card[] = [
  {
    title: "Contemporary Family Home",
    desc: "20 residential lots averaging 300 sq.m. each, planned for optimal space and investment potential.",
    img: "/img/house1.png",
  },
  {
    title: "Urban Duplex Project",
    desc: "Two 3-bedroom, 2-bath units, 1,500 sq.ft. each. Ideal for investors or dual-family living with functional urban style.",
    img: "/img/house2.png",
  },
  {
    title: "House & Land Package",
    desc: "12 apartments, 2–3 bedrooms, 800–1,200 sq.ft. each. Modern urban living with high-quality finishes and amenities.",
    img: "/img/house3.png",
  },
  {
    title: "Contemporary Family Home",
    desc: "20 residential lots averaging 300 sq.m. each, planned for optimal space and investment potential.",
    img: "/img/house1.png",
  },
  {
    title: "Urban Duplex Project",
    desc: "Two 3-bedroom, 2-bath units, 1,500 sq.ft. each. Ideal for investors or dual-family living with functional urban style.",
    img: "/img/house2.png",
  },
  {
    title: "House & Land Package",
    desc: "12 apartments, 2–3 bedrooms, 800–1,200 sq.ft. each. Modern urban living with high-quality finishes and amenities.",
    img: "/img/house3.png",
  },
];

export default function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(1);

  // Determine how many cards are visible based on screen width
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const updateVisible = () => setVisible(getVisibleCount());
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Scroll to specific card
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24; // card width + gap
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  // Scroll left/right arrow
  const scroll = (dir: "left" | "right") => {
    const next = dir === "left"
      ? Math.max(0, index - 1)
      : (index + 1) % cards.length;
    goTo(next);
    setIndex(next);
  };

  // Update index on manual scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const card = el.querySelector<HTMLElement>("[data-card]");
          if (card) {
            setIndex(Math.round(el.scrollLeft / (card.offsetWidth + 24)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll every 3.5s
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      const next = (index + 1) % cards.length;
      goTo(next);
      setIndex(next);
    }, 3500);

    return () => clearInterval(id);
  }, [index, paused]);

  return (
    <section className="mx-auto w-11/12 mt-10 rounded-[25px] py-10">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row px-2 justify-between items-start md:items-center gap-4 md:gap-6 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-gray-900">
            Crafted Spaces,
            <br className="hidden sm:block" /> Enduring Designs
          </h2>

          <p className="text-gray-700 max-w-full sm:max-w-[38ch] text-sm sm:text-base md:text-lg leading-relaxed">
            From bespoke family homes to multi-dwelling developments, each project showcases our dedication to quality, modern aesthetics, and lasting craftsmanship.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 mb-4">
          <Link href={"/properties"}>
            <button className="bg-[#0087DB] text-sm md:text-base flex justify-center items-center gap-2 py-3 px-4 md:px-6 w-full md:w-[180px] rounded-[12px] text-white hover:bg-[#0072c5] transition">
              View All Projects
            </button>
          </Link>

          <div className="flex items-center justify-end gap-2 md:gap-3">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-100 transition"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
  ref={trackRef}
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
  className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-none"
>
  <style>{`div::-webkit-scrollbar{display:none}`}</style>

  {cards.map((c, i) => (
    <article
      key={i}
      data-card
      className="group flex-shrink-0 bg-white snap-start overflow-hidden w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-[140px] sm:h-[180px] md:h-[220px] bg-[#3B9ECC] lg:h-[280px] w-full">
        <Image
          src={c.img}
          alt={c.title}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          priority={i < 3}
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-1 sm:gap-2">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
          {c.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm leading-relaxed">
          {c.desc}
        </p>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
