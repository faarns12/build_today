"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact-us" }, // added Contact Us
    { name: "Get a quote", href: "/Quotation" }, // added Contact Us
  ];

  return (
    <div className="w-full flex justify-center">
      <nav className="w-11/12 sm:w-10/12 lg:w-9/12 h-14 z-40 md:bg-white md:backdrop-blur-md md:border top-10 fixed md:border-white/30 rounded-[17px] px-3 sm:px-2 flex items-center justify-between">
        
        {/* Desktop Menu */}
      <ul className="hidden md:flex pl-4 space-x-6 text-sm font-medium text-black">
  {menuItems.map((item) => {
    // Skip rendering "Contact Us" here if you want it as a button separately
    if (item.name === "Contact Us" || item.name ==="Get a quote") return null;


    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={`py-1 ${
            pathname.toLowerCase() === item.href.toLowerCase()
              ? "text-[#183654] font-bold"
              : "text-black"
          }`}
        >
          {item.name}
        </Link>
      </li>
    );
  })}
</ul>

        {/* Logo */}
        <Link href={"/"}>
          <div className="flex-shrink-0">
            <Image src="/download.png" alt="Logo" width={100} height={50} />
          </div>
        </Link>

        {/* Desktop Buttons */}
        <div className="flex gap-4">
          <Link
            href="/contact-us"
            className={`hidden md:flex items-center px-3 py-2 rounded-md font-medium text-sm ${
              pathname === "/contact-us"  ? "text-[#183654] font-bold"
              : "text-black"
            }`}
          >
            Contact Us
          </Link>

          <Link href="/Quotation">
            <button className="bg-[#0087DB] hidden md:flex flex-row justify-start items-center gap-[10px] px-[29px] py-[15px] w-[156px] h-[44px] rounded-[12px] text-white font-medium hover:bg-[#0072c5] transition">
              Get a quote
            </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0087DB]"
          >
            {isOpen ? <HiX className="text-white w-6 h-6" /> : <HiMenu className="text-white w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-11/12 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center py-4 md:hidden z-50">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 w-full text-center ${
                  pathname === item.href ? "text-[#183654] font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
