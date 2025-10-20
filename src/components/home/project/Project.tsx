"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

type Card = {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  cars: number;
  type: string;
  client: string;
  completion: string;
  img: string;
  floorImages: { src: string; label: string }[];
  desc: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "A 2-STOREY SINGLE DWELLING",
    price: "$2,050,000",
    location: "27 BUTCHERBIRD LANE, AUSTRAL NSW 2179 LOT 59 DP 1295837",
    beds: 3,
    baths: 2,
    cars: 2,
    type: "Residential",
    client: "XYZ Developers",
    completion: "2024",
    img: "/img/project1.png",

   floorImages: [
      { src: "/img/plan/plan1.jpg", label: "Site Plan" },
      { src: "/img/plan/plan11.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan111.jpg", label: "First Floor" },
      { src: "/img/plan/plan1111.jpg", label: "First Floor" },
      { src: "/img/plan/plan11111.jpg", label: "First Floor" },
    ],
    desc: "A premium residential tower overlooking the harbour, designed with a balance of luxury and sustainability. Its units are spacious, modern, and built for comfort.",
  },
  {
    id: 2,
    title: "DUAL OCCUPANCY",
    price: "$4,080,000",
    location: "17 MARLBOROUGH STREET, CAMPBELLTOWN NSW 2560",
    beds: 6,
    baths: 4,
    cars: 3,
    type: "Residential",
    client: "ABC Holdings",
    completion: "2025",
    img: "/img/project23.png",
  
    floorImages: [
      { src: "/img/plan/plan2.jpg", label: "Site Plan" },
      { src: "/img/plan/plan22.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan222.jpg", label: "First Floor" },
      { src: "/img/plan/plan2222.jpg", label: "First Floor" },
      { src: "/img/plan/plan22222.jpg", label: "First Floor" },
    ],
    desc: "Spacious family-friendly duplex with sustainable features and outdoor living spaces. The duplex offers smart home integration, private gardens, and high-quality finishes.",
  },
  {
    id: 4,
    title: "SINGLE DWELLING",
    price: "$3,200,000",
    location: "COMMELINA AVENUE, DENHAM COURT, NSW",
    beds: 0,
    baths: 0,
    cars: 50,
    type: "Commercial",
    client: "LMN Enterprises",
    completion: "2023",
    img: "/img/house3.png",
  
    floorImages: [
      { src: "/img/plan/plan3.jpg", label: "Site Plan" },
      { src: "/img/plan/plan33.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan333.jpg", label: "First Floor" },
      { src: "/img/plan/plan3333.jpg", label: "First Floor" },
      { src: "/img/plan/plan33333.jpg", label: "First Floor" },
    ],
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces, designed for shopping, entertainment, and community engagement.",
  },
  {
    id: 3,
    title: "2-STOREY ATTACHED DUAL OCCUPANCY DWELLING",
    price: "$5,400,000",
    location: "2 Quandong Street Leppington NSW 2179 Lot128 DP1280468",
    beds: 0,
    baths: 0,
    cars: 200,
    type: "Mixed-use",
    client: "Tech Ventures",
    completion: "2024",
    img: "/img/project4.png",
   
     floorImages: [
      { src: "/img/plan/plan4.jpg", label: "Site Plan" },
      { src: "/img/plan/plan44.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan444.jpg", label: "First Floor" },
      { src: "/img/plan/plan4444.jpg", label: "First Floor" },
      { src: "/img/plan/plan44444.jpg", label: "First Floor" },
    ],
    desc: "A state-of-the-art complex blending office, retail, and co-working spaces for tech startups and creative professionals, with modern design and sustainable features.",
  },
 {
    id: 5,
    title: "SINGLE DWELLING",
    price: "$3,200,000",
    location: "COMMELINA AVENUE, DENHAM COURT, NSW",
    beds: 0,
    baths: 0,
    cars: 50,
    type: "Commercial",
    client: "LMN Enterprises",
    completion: "2023",
    img: "/img/house3.png",
  
    floorImages: [
      { src: "/img/plan/plan3.jpg", label: "Site Plan" },
      { src: "/img/plan/plan33.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan333.jpg", label: "First Floor" },
      { src: "/img/plan/plan3333.jpg", label: "First Floor" },
      { src: "/img/plan/plan33333.jpg", label: "First Floor" },
    ],
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces, designed for shopping, entertainment, and community engagement.",
  },
  {
    id: 6,
    title: "2-STOREY ATTACHED DUAL OCCUPANCY DWELLING",
    price: "$5,400,000",
    location: "2 Quandong Street Leppington NSW 2179 Lot128 DP1280468",
    beds: 0,
    baths: 0,
    cars: 200,
    type: "Mixed-use",
    client: "Tech Ventures",
    completion: "2024",
    img: "/img/project4.png",
  
     floorImages: [
      { src: "/img/plan/plan4.jpg", label: "Site Plan" },
      { src: "/img/plan/plan44.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan444.jpg", label: "First Floor" },
      { src: "/img/plan/plan4444.jpg", label: "First Floor" },
      { src: "/img/plan/plan44444.jpg", label: "First Floor" },
    ],
    desc: "A state-of-the-art complex blending office, retail, and co-working spaces for tech startups and creative professionals, with modern design and sustainable features.",
  },
];

export default function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(1);

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

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  const scroll = (dir: "left" | "right") => {
    const next = dir === "left"
      ? Math.max(0, index - 1)
      : (index + 1) % cards.length;
    goTo(next);
    setIndex(next);
  };

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
            <Link key={c.id} href={`/properties/${c.id}`}>
              <article
                data-card
                className="group flex-shrink-0 bg-white snap-start overflow-hidden w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[140px] sm:h-[180px] md:h-[220px] lg:h-[280px] bg-[#3B9ECC] w-full">
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
                   <p className="flex items-center font-medium text-[#183654] text-sm mb-2">
            <FaLocationDot className="h-4 w-4 mr-1 text-[#0087DB]" />
            {c.location}
          </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
