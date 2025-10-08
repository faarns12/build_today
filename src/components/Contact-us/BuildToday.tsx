"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function BuildTodaySection() {
  return (
    <section className="mx-auto mt-10 bg-white overflow-hidden">
      <Marquee gradient={false} speed={90} pauseOnHover={true}>
        {/* Repeat blocks for smooth scroll */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center whitespace-nowrap space-x-4 mr-8"
          >
            <h3 className="font-bold text-[14vw] leading-none">BUILD TODAY</h3>
            <div className="relative w-[15vw] h-[15vw] min-w-[60px] min-h-[60px] max-w-[200px] max-h-[200px]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 15vw, (max-width: 1200px) 10vw, 8vw"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
