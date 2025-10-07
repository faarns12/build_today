"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { MapPin } from "lucide-react";

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
    img: "/img/slider2.jpg",
  },
  {
    title: "Adelaide Suburban Duplex",
    price: "$4,080,000",
    location: "Adelaide, SA | 6 bedrooms | Residential",
    details: "Residential",
    desc: "Spacious family-friendly duplex with sustainable features and outdoor living spaces.",
    category: "Residential",
    img: "/img/slider3.jpg",
  },
  {
    title: "Perth Lifestyle Centre",
    price: "$3,200,000",
    location: "Perth, WA | 25,000 sq m | Commercial",
    details: "Commercial",
    desc: "A contemporary retail and lifestyle hub with green rooftops and flexible spaces.",
    category: "Commercial",
    img: "/img/slider4.jpg",
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
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
    >
      <motion.div
        className="relative w-full h-64 bg-blue-100 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ x, y }}
          className="absolute inset-0"
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <Image src={project.img} alt={project.title} fill className="object-cover" />
        </motion.div>
      </motion.div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="text-blue-700 font-semibold mb-2">{project.price}</p>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
          {project.location}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
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
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-[#f7f9fc] min-h-screen">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              active === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-blue-50"
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
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
