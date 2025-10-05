"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Globe, Hammer, Ruler, ArrowLeft, ArrowRight } from "lucide-react";

type Card = {
  city: string;
  number: string;
  img: string;
  icons: ("globe" | "hammer" | "ruler")[];
};

const cards: Card[] = [
  { city: "Sydney", number: "01", img: "/img/location1.png", icons: ["globe", "hammer"] },
  { city: "Melbourne", number: "02", img: "/img/location2.png", icons: ["globe", "ruler"] },
  { city: "Brisbane", number: "03", img: "/img/location3.png", icons: ["globe", "ruler"] },
  { city: "Perth", number: "04", img: "/img/location1.png", icons: ["globe", "hammer"] },
  { city: "Adelaide", number: "05", img: "/img/location2.png", icons: ["globe", "ruler"] },
  { city: "Gold Coast", number: "06", img: "/img/location3.png", icons: ["globe", "ruler"] },
];

function IconPill({ type }: { type: Card["icons"][number] }) {
  const map = {
    globe: <Globe className="h-4 w-4" />,
    hammer: <Hammer className="h-4 w-4" />,
    ruler: <Ruler className="h-4 w-4" />,
  } as const;
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur">
      {map[type]}
    </span>
  );
}

export default function LocationsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(1);

  // Dynamically detect visible count
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 1; // desktop
    if (window.innerWidth >= 768) return 1;  // tablet
    return 1;                               // mobile
  };

  useEffect(() => {
    const updateVisible = () => setVisible(getVisibleCount());
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Smooth scroll to card index
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24; // gap-6
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const scroll = (dir: "left" | "right") => {
    const next =
      dir === "left"
        ? Math.max(0, index - visible)
        : (index + visible) % cards.length;
    goTo(next);
  };

  // Sync index with scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const card = el.querySelector<HTMLElement>("[data-card]");
          if (card) setIndex(Math.round(el.scrollLeft / (card.offsetWidth + 24)));
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const next = (index + visible) % cards.length;
      goTo(next);
    }, 3500);
    return () => clearInterval(id);
  }, [index, paused, visible]);

  return (
    <section className="mx-auto w-11/12 mt-10 rounded-[25px] bg-[#F0F7FA] py-6">
      <div className="px-6 sm:px-10 md:px-16 lg:px-44 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-[25px] font-neue  sm:text-[35px] md:text-[45px]  leading-tight text-balance">
            Bringing Your Dream Home
            <br className="hidden sm:block" /> to Life, Everywhere
          </h2>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-slate-700 max-w-[38ch] text-sm sm:text-base text-left">
              Wherever you are, we’re committed to creating spaces filled with comfort, joy, and lasting memories.
            </p>

            
          </div>
        </div>
{/* Arrows */}
            <div className="flex items-center justify-end ">
              <button
                aria-label="Previous"
                onClick={() => scroll("left")}
                className="rounded-full  backdrop-blur p-2 hover:bg-white/80"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              --
              <button
                aria-label="Next"
                onClick={() => scroll("right")}
                className="rounded-full  backdrop-blur p-2 hover:bg-white/80"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
        {/* Slider */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-5 flex gap-3 overflow-x-auto pb-2 pt-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          <style>{`div::-webkit-scrollbar{display:none}`}</style>

          {cards.map((c, i) => (
            <article
              key={`${c.city}-${i}`}
              data-card
              className="
                group relative flex-shrink-0 overflow-hidden rounded-[22px]
                ring-1 ring-white/30 snap-start
                lg:w-[455px] md:w-[302px] w-[290px]
                h-[200px] sm:h-[260px] md:h-[260px] lg:h-[260px]
              "
            >
              <Image
                src={c.img}
                alt={c.city}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority={i < 3}
              />

              {/* Icons */}
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                {c.icons.map((ic, idx) => (
                  <IconPill key={`${c.city}-${ic}-${idx}`} type={ic} />
                ))}
              </div>

              {/* Border + Gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/20" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

              {/* Bottom Text */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 pb-5 text-white">
                <h3 className="text-xl sm:text-2xl font-medium tracking-wide">{c.city}</h3>
                <span className="text-xl sm:text-2xl font-medium opacity-95">{c.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
