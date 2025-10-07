"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

type Project = {
  title: string;
  price: string;
  location: string;
  details: string;
  desc: string;
  category: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "Harbourfront Apartments",
    price: "$2,050,000",
    location: "Sydney, NSW | 12,000 sq m | Completed 2024",
    details: "Residential",
    desc: "A premium residential tower overlooking the harbour, designed with a balance of luxury and sustainability.",
    category: "Residential",
    img: "/img/house1.png",
  },
  {
    title: "Adelaide Suburban Duplex",
    price: "$4,080,000",
    location: "Adelaide, SA | 6 bedrooms | Residential",
    details: "Residential",
    desc: "Spacious family-friendly duplex with sustainable features and outdoor living spaces.",
    category: "Commercial",
    img: "/img/house2.png",
  },
  {
    title: "Perth Lifestyle Centre",
    price: "$3,200,000",
    location: "Perth, WA | 25,000 sq m | Commercial",
    details: "Commercial",
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces.",
    category: "Interiors",
    img: "/img/house3.png",
  },
  {
    title: "Melbourne Innovation Hub",
    price: "$5,400,000",
    location: "Melbourne, VIC | 18,500 sq m | Mixed-use",
    details: "Commercial",
    desc: "A state-of-the-art complex blending office, retail, and co-working spaces for tech startups and creative professionals.",
    category: "Mixed-use",
    img: "/img/house1.png",
  },
  {
    title: "Brisbane Riverfront Villas",
    price: "$2,880,000",
    location: "Brisbane, QLD | 8 villas | Waterfront Residential",
    details: "Residential",
    desc: "Exclusive riverside villas featuring smart home integration, private docks, and panoramic views.",
    category: "Residential",
    img: "/img/house2.png",
  },
  {
    title: "Canberra Civic Towers",
    price: "$6,750,000",
    location: "Canberra, ACT | 30,000 sq m | Commercial",
    details: "Renovations",
    desc: "A pair of high-rise towers offering premium office and retail spaces with sustainable energy systems and open plazas.",
    category: "Renovations",
    img: "/img/house3.png",
  },
];


const categories = ["All", "Residential", "Commercial", "Interiors", "Renovations"];

// ----- Project Card Component -----
function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    x.set((offsetX - rect.width / 2) / 10); // subtle movement
    y.set((offsetY - rect.height / 2) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
   <motion.div
  layout
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 40 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="bg-white overflow-hidden border border-gray-100"
>
  <motion.div
    className="relative bg-[#3690BA] mx-auto h-48 md:h-56 lg:h-64 overflow-hidden"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    <motion.div
      style={{ x, y }}
      className="absolute inset-0"
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-contain w-[300px]"
      />
    </motion.div>
  </motion.div>

  <div className="p-6">
    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-bold text-[#183654]">
      {project.title}
    </h3>

    <p className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] text-[#183654] font-semibold mb-2">
      {project.price}
    </p>

    <div className="flex items-center font-medium text-[#183654] text-xs sm:text-sm md:text-base mb-2">
      <FaLocationDot className="h-4 w-4 mr-1 text-[#0087DB]" />
      {project.location}
    </div>

    <p className="text-[#183654] text-sm sm:text-base md:text-[17px] leading-relaxed">
      {project.desc}
    </p>
  </div>
</motion.div>

  );
}

// ----- Main Component -----
export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="  min-h-[600px] lg:w-9/12 md:w-11/12 px-3 mx-auto">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-3 rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]  text-sm font-medium transition-all ${
              active === cat
                ? "bg-[#0087DB] text-white border-blue-600"
                : "border-gray-300 text-[#573E69] text-sm hover:bg-blue-50"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Grid */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 "
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.title + p.category} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-gray-500 text-lg mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          No projects found in this category.
        </motion.p>
      )}
    </section>
  );
}
