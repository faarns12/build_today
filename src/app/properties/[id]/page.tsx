"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Building2,
  DoorClosed,
  ParkingSquare,
  Key,
  ShowerHead,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { IoCameraOutline } from "react-icons/io5";
import { PiScroll } from "react-icons/pi";
import {
  MdLocationOn,
  MdOutlineBalcony,

} from "react-icons/md";

import { useState } from "react";

// ✅ Mock property data
const properties = [
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
    features: [
      { name: "Balconies in Every Unit", icon: MdOutlineBalcony },
      { name: "Built-in wardrobes", icon: DoorClosed },
      { name: "Basement Parking", icon: ParkingSquare },
      { name: "Smart Key Access", icon: Key },
      { name: "Modern Sanitary Design", icon: ShowerHead },
      { name: "Reinforced Structure", icon: Building2 },
    ],
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
    features: [
      { src: "/img/plan/plan1.jpg", label: "Site Plan" },
      { src: "/img/plan/plan11.jpg", label: "Ground Floor" },
      { src: "/img/plan/plan111.jpg", label: "First Floor" },
      { src: "/img/plan/plan1111.jpg", label: "First Floor" },
      { src: "/img/plan/plan11111.jpg", label: "First Floor" },
    ],
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
    features: [
      { name: "Rooftop Green Spaces", icon: MdOutlineBalcony },
      { name: "Flexible Office Layouts", icon: DoorClosed },
      { name: "Basement Parking", icon: ParkingSquare },
      { name: "Smart Security System", icon: Key },
      { name: "Energy Efficient Design", icon: ShowerHead },
      { name: "Modern Construction", icon: Building2 },
    ],
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
    features: [
      { name: "Co-working Spaces", icon: MdOutlineBalcony },
      { name: "Rooftop Amenities", icon: DoorClosed },
      { name: "Basement Parking", icon: ParkingSquare },
      { name: "Smart Access Control", icon: Key },
      { name: "Energy Efficient HVAC", icon: ShowerHead },
      { name: "Durable Structure", icon: Building2 },
    ],
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
    features: [
      { name: "Rooftop Green Spaces", icon: MdOutlineBalcony },
      { name: "Flexible Office Layouts", icon: DoorClosed },
      { name: "Basement Parking", icon: ParkingSquare },
      { name: "Smart Security System", icon: Key },
      { name: "Energy Efficient Design", icon: ShowerHead },
      { name: "Modern Construction", icon: Building2 },
    ],
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
    features: [
      { name: "Co-working Spaces", icon: MdOutlineBalcony },
      { name: "Rooftop Amenities", icon: DoorClosed },
      { name: "Basement Parking", icon: ParkingSquare },
      { name: "Smart Access Control", icon: Key },
      { name: "Energy Efficient HVAC", icon: ShowerHead },
      { name: "Durable Structure", icon: Building2 },
    ],
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

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  // ✅ Always call hooks before conditionals
  const [current, setCurrent] = useState<number>(0);

  // ✅ Handle floor map navigation
  const nextSlide = (): void => {
    if (!property) return;
    setCurrent((prev) =>
      prev === property.floorImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    if (!property) return;
    setCurrent((prev) =>
      prev === 0 ? property.floorImages.length - 1 : prev - 1
    );
  };

  // ✅ Conditional return comes AFTER all hooks
  if (!property) {
    return (
      <div className="text-center text-gray-500 py-20">
        Property not found.
      </div>
    );
  }

  return (
    <div className="lg:max-w-9/12 mx-auto px-4 py-10 mt-20">
      {/* ✅ Breadcrumb */}
      <div className="flex items-center justify-center text-sm mb-8 bg-[#f2f2f2] rounded-[18px] max-w-[232px] mx-auto py-2 px-4">
        <Link
          href="/properties"
          className="text-gray-500 hover:text-[#000000] transition-colors"
        >
          Properties
        </Link>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-[#000000] font-medium">Property details</span>
      </div>

      {/* ✅ Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-gray-300 pb-8">
        {/* Left: Image */}
        <div className="relative w-full overflow-hidden rounded-[25px] h-[459px]">
          <Image
            src={property.img}
            alt={property.title}
            fill
            className="object-cover"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FFFFFF] backdrop-blur-md shadow-md border rounded-full flex items-center px-6 py-2 text-[#183654] text-sm">
            <div className="flex items-center gap-2">
              <IoCameraOutline className="w-6 h-6" />
              <span>1 Image</span>
            </div>
            <div className="w-px h-6 bg-gray-400 mx-5"></div>
            <div className="flex items-center gap-2">
              <PiScroll className="w-6 h-6" />
              <span>{property.floorImages.length} Floorplans</span>
            </div>
          </div>
        </div>

        {/* ✅ Right: Info */}
        <div className="flex items-center h-full">
          <div>
             <h1 className="text-[45px] font-medium text-[#000000] mt-1">
              {property.title}
            </h1>
            <p className="flex items-center gap-2 mb-2 text-[#183654] text-lg font-medium">
              <MdLocationOn className="h-6 w-6 text-[#0087DB]" />{" "}
              {property.location}
            </p>

           

          
          </div>
        </div>
      </div>

    

      {/* ✅ Floor Map Slider */}
      <h2 className="text-xl font-semibold text-[#223A57] my-4">Floormap</h2>
      <div className="mx-auto bg-[#E9F3FB] p-4 rounded-lg">
        <div className="relative w-full max-w-[800px] mx-auto">
          <Image
            src={property.floorImages[current].src}
            alt={property.floorImages[current].label}
            width={800}
            height={443}
            className="rounded-md object-contain border bg-white"
          />

          {/* Counter */}
          <div className="absolute top-3 right-3 bg-[#0094FF] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
            {String(current + 1).padStart(2, "0")}/
            {String(property.floorImages.length).padStart(2, "0")}
          </div>

          {/* Arrows */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-white border border-black rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border border-black rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
