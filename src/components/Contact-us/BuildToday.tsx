"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function BuildTodaySection() {
  return (
    <section className="w-11/12 mx-auto mt-7 bg-white overflow-hidden">
      <Marquee
        gradient={false} // disables fade gradient on edges
        speed={90}        // adjust speed
        pauseOnHover={true}
      >
        {/* Repeat this block multiple times for continuous effect */}
        <div className="flex items-center whitespace-nowrap space-x-4 mr-8">
          <h3 className="font-bold text-[14vw] sm:text-[14vw] md:text-[14vw] lg:text-[14vw] xl:text-[14vw] leading-none">
            BUILD TODAY
          </h3>
          <Image
            src="/logo.png" // replace with your logo path
            alt="Logo"
            width={300}      // adjust size
            height={300}
            className="object-contain"
          />
        </div>

        <div className="flex items-center whitespace-nowrap space-x-4 mr-8">
          <h3 className="font-bold text-[14vw] sm:text-[14vw] md:text-[14vw] lg:text-[14vw] xl:text-[14vw] leading-none">
            BUILD TODAY
          </h3>
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Add more repeats if needed */}
      </Marquee>
    </section>
  );
}
