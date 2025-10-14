"use client";

import Image from "next/image";
import { ArrowRight, Hammer, Ruler, Building2 } from "lucide-react";
import { useState } from "react";

type Badge = { icon: React.ReactNode; text: string };
type Service = {
  title: string;
  desc?: string;
  badges?: Badge[];
  img?: string; // public/ path
};

const services: Service[] = [
  {
    title: "New House Construction",
    img: "/img/location1.png",
    badges: [
      { icon: <Hammer className="w-4 h-4" />, text: "200+ units" },
      { icon: <Ruler className="w-4 h-4" />, text: "Modern layouts" },
      { icon: <Building2 className="w-4 h-4" />, text: "Investor-friendly" },
    ],
    desc:
      "Smartly designed homes that maximize space, comfort, and investment value.",
  },
  {
    title: "House & Land Packages",
    img: "/img/location2.png",
    badges: [
      { icon: <Ruler className="w-4 h-4" />, text: "Turn-key" },
      { icon: <Building2 className="w-4 h-4" />, text: "Curated blocks" },
    ],
    desc: "Fixed-price builds bundled with great locations and inclusions.",
  },
  {
    title: "Multi-Dwelling Construction",
    img: "/img/location3.png",
    badges: [
      { icon: <Hammer className="w-4 h-4" />, text: "Complex builds" },
      { icon: <Ruler className="w-4 h-4" />, text: "Efficient footprints" },
    ],
    desc: "Townhouses and apartments optimized for yield and livability.",
  },
  {
    title: "Subdivision Services",
    img: "/img/location2.png",
    badges: [{ icon: <Building2 className="w-4 h-4" />, text: "End-to-end" }],
    desc: "Planning, services, approvals, and civil works handled in one team.",
  },
  {
    title: "Knockdown & Rebuild",
    img: "/img/location1.png",
    badges: [{ icon: <Hammer className="w-4 h-4" />, text: "Hassle-free" }],
    desc: "Keep the address you love with a brand-new, efficient home.",
  },
];

export default function ServicesHoverSection() {
  const [active, setActive] = useState<number | null>(1); // default highlight on 2nd row (like your mock)

  return (
    <section className="mx-auto my-6  w-11/12 rounded-[26px] bg-[#0E2A44] text-white p-5 sm:p-8 md:p-12 relative">
      <div className="lg:px-32">
        {/* Top-left tiny pill */}
        <div className="flex gap-6 justify-between items-start">
          <span
            className="text-black  px-3.5 py-3 text-[12px] border border-white rounded-[10px] bg-white shadow-[0_10px_15px_rgba(0,0,0,0.1),_0_4px_6px_rgba(0,0,0,0.1)]"
          >
            Our Services
          </span>
          <h1 className="text-[20px] sm:text-[45px] leading-tight  max-w-xl ">
            To build your dream home with expert craftsmanship and trusted quality
          </h1>
        </div>

        {services.map((s, i) => (
          <div
            key={s.title}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={[
              "relative group cursor-pointer transition-all duration-500 ease-in-out ",
              active === i ? "h-[203px]" : "h-[88px]",
            ].join(" ")}
          >
            {/* Teal ribbon on hover/active */}
            <div
              className={[
                "absolute inset-x-0 -z-10 h-full rounded-[18px] bg-[#2B8BA6]",
                "opacity-0 translate-y-2 transition-all duration-300",
                active === i ? "opacity-100 translate-y-0 " : "",
              ].join(" ")}
            />

            {/* Row content */}
            <div className="flex items-center justify-between hover:bg-[#29799E] px-4  rounded-[25px] w-full h-full ">
              {/* Left side */}
              <div className="flex flex-col justify-center min-w-0 h-full">
                <h3 className="py-3 text-xl font-medium text-white md:text-2xl">
                  {s.title}
                </h3>

                <div
                  className={[
                    "mt-1 text-sm text-white/85 relative transition-opacity duration-300",
                    active === i ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {s.desc && (
                    <p className="hidden mb-3 transition-all duration-500 md:block">
                      {s.desc}
                    </p>
                  )}

                  {s.badges && (
                    <div className="flex flex-wrap gap-3 transition-all duration-500 md:flex">
                      {s.badges.map((b, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5"
                        >
                          <span className="[&>*]:h-4 [&>*]:w-4">{b.icon}</span>
                          <span>{b.text}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right side */}
              <div className="flex justify-center items-center h-full">
                <button
                  aria-label={`Open ${s.title}`}
                  className={[
                    "relative grid h-10 w-10 place-items-center rounded-full transition-all",
                    active === i
                      ? "bg-white text-[#0E2A44] -rotate-[45deg]"
                      : "border border-white/30 text-white/90 rotate-45",
                  ].join(" ")}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Animated underline (Hide for last row) */}
            {i !== services.length - 1 && (
              <div className="absolute right-0 bottom-0 left-0 h-px bg-white/10">
                <div
                  className={[
                    "h-px origin-left bg-white/60 transition-transform duration-300",
                    active === i
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </div>
            )}

            {/* Hover image */}
            {s.img && (
              <div
                className={[
                  "pointer-events-none hidden xl:block absolute right-24 top-1/2 -translate-y-1/2 transition duration-300",
                  active === i ? "opacity-100 scale-100 -rotate-[6deg]" : "opacity-0 scale-95",
                ].join(" ")}
              >
                <div className="relative w-60 h-72 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-white">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="160px"
                    priority={i === active}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
