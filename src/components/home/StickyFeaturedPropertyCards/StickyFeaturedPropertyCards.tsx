"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useMemo } from "react";

export type PropertyCard = {
  tag: string;
  title: string;
  subtitle?: string;
  location?: string;
  img: string;
};

const items: PropertyCard[] = [
  {
    tag: "FEATURED PROPERTY 01",
    title: "OCEAN WAVE",
    img: "/img/prop-1.jpg",
    subtitle: "A flowing, organic design inspired by the movement and rhythm of the sea.",
    location: "NEW YORK",
  },
  {
    tag: "FEATURED PROPERTY 02",
    title: "PUZZLE TOWER",
    img: "/img/prop-2.jpg",
    subtitle: "A flowing, organic design inspired by the movement and rhythm of the sea.",
    location: "NEW YORK",
  },
  {
    tag: "FEATURED PROPERTY 03",
    title: "HONEY COMB",
    img: "/img/prop-3.jpg",
    subtitle: "A flowing, organic design inspired by the movement and rhythm of the sea.",
    location: "NEW YORK",
  },
  {
    tag: "FEATURED PROPERTY 04",
    title: "WAVE HOUSE",
    img: "/img/prop-4.jpg",
    subtitle: "A flowing, organic design inspired by the movement and rhythm of the sea.",
    location: "NEW YORK",
  },
];

export default function StickyFeaturedPropertyCards() {
  const withZ = useMemo(() => items.map((c, i) => ({ ...c, z: 50 - i })), []);

  return (
    <div className="mx-auto w-11/12">
   

      <div className="relative">
        {withZ.map((card, i) => (
          <section
            key={card.title}
            className="sticky top-6 md:top-10 z-[var(--z)] mb-6 md:mb-8"
          
          >
            <div className="relative h-[220px] sm:h-[280px] md:h-[510px] rounded-[30px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.25)] ring-1 ring-white/20">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />

              <div className="relative h-full p-4 sm:p-6 md:p-9 flex flex-col justify-center text-white">
                {/* Tag pill */}
                <span className="flex items-center justify-center text-[8px] sm:text-[10px] md:text-sm tracking-[0.15em] font-semibold rounded-full bg-white/15 ring-1 ring-white px-2 sm:px-3 py-1 w-[150px] sm:w-[232px] h-[28px] sm:h-[34px] mb-2 sm:mb-4 text-center">
                  {card.tag}
                </span>

                {/* Title */}
                <h3 className="font-neue text-xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-[64px] drop-shadow leading-tight">
                  {card.title}
                </h3>

                {/* Subtitle */}
                {card.subtitle && (
                  <p className="mt-2 sm:mt-3 md:mt-4 text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] max-w-full sm:max-w-[425px]">
                    {card.subtitle}
                  </p>
                )}

                {/* Location */}
                {card.location && (
                  <span className="mt-2 sm:mt-3 md:mt-4 inline-flex items-center justify-center gap-1 sm:gap-2 text-[8px] sm:text-xs md:text-sm font-medium rounded-full ring-1 ring-white/30 px-2 sm:px-3 py-1 sm:py-2 border border-white w-fit">
                    <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {card.location}
                  </span>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
