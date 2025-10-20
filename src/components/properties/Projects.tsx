"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

// ✅ Project type & data
type Project = {
  id: number;
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
    id: 1,
    title: "A 2-STOREY SINGLE DWELLING",
    price: "$2,050,000",
    location: "27 BUTCHERBIRD LANE, AUSTRAL NSW 2179 LOT 59 DP 1295837",
    details: "Residential",
    desc: "A premium residential tower overlooking the harbour, designed with a balance of luxury and sustainability.",
    category: "Residential",
    img: "/img/project1.png",
  },
  {
    id: 2,
    title: "DUAL OCCUPANCY",
    price: "$4,080,000",
    location: "17 MARLBOROUGH STREET, CAMPBELLTOWN NSW 2560",
    details: "Residential",
    desc: "Spacious family-friendly duplex with sustainable features and outdoor living spaces.",
    category: "Commercial",
    img: "/img/project23.png",
  },
  {
    id: 4,
    title: "SINGLE DWELLING",
    price: "$3,200,000",
    location: "COMMELINA AVENUE, DENHAM COURT, NSW",
    details: "Commercial",
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces.",
    category: "Interiors",
    img: "/img/house3.png",
  },
  {
    id: 3,
    title: "2-STOREY ATTACHED DUAL OCCUPANCY DWELLING",
    price: "$5,400,000",
    location: "2 Quandong Street Leppington NSW 2179 Lot128 DP1280468",
    details: "Commercial",
    desc: "A state-of-the-art complex blending office, retail, and co-working spaces for tech startups and creative professionals.",
    category: "Mixed-use",
    img: "/img/project4.png",
  },
    {
    id: 5,
    title: "SINGLE DWELLING",
    price: "$3,200,000",
    location: "COMMELINA AVENUE, DENHAM COURT, NSW",
    details: "Commercial",
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces.",
    category: "Interiors",
    img: "/img/house3.png",
  },
  {
    id: 6,
    title: "2-STOREY ATTACHED DUAL OCCUPANCY DWELLING",
    price: "$5,400,000",
    location: "2 Quandong Street Leppington NSW 2179 Lot128 DP1280468",
    details: "Commercial",
    desc: "A state-of-the-art complex blending office, retail, and co-working spaces for tech startups and creative professionals.",
    category: "Mixed-use",
    img: "/img/project4.png",
  },
  
 
];

const categories = ["All", "Residential", "Commercial", "Interiors", "Renovations"];

// ✅ Project Card Component
function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    x.set((offsetX - rect.width / 2) / 10);
    y.set((offsetY - rect.height / 2) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/properties/${project.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white overflow-hidden border border-gray-100 cursor-pointer"
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
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <div className="p-6">
          <h3 className="text-[22px] font-bold text-[#183654]">{project.title}</h3>
         
          <div className="flex items-center font-medium text-[#183654] text-sm mb-2">
            <FaLocationDot className="h-4 w-4 mr-1 text-[#0087DB]" />
            {project.location}
          </div>
        
        </div>
      </motion.div>
    </Link>
  );
}

// ✅ Main Projects Component
export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="min-h-[600px] lg:w-9/12 md:w-11/12 px-3 mx-auto py-10">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-3 rounded-[10px] shadow text-sm font-medium transition-all ${
              active === cat
                ? "bg-[#0087DB] text-white border-blue-600"
                : "border border-gray-300 text-[#573E69] hover:bg-blue-50"
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
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
