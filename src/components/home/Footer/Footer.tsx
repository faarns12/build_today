"use client";

import { ArrowUp, } from "lucide-react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2B7C99] mt-4  text-white pt-10 pb-4">
      <div className="w-11/12 mx-auto">
        <div className=" mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h4 className=" text-lg mb-3 text-white">Adress</h4>
            <p className="font-bold text-lg text-white ">
              Head Office: 123 <br />
              Main St, Sydney, <br />
              Australia
            </p>
            <button
              className="cursor-pointer text-white flex items-center my-6 justify-between px-1"
              style={{
                width: "140.31px",
                height: "41.42px",

                border: "1px solid rgba(255,255,255,1)",
                borderRadius: "99px",
              }}
            >
              <span className="flex-1 pl-2 text-left text-sm  text-white">
                See on map
              </span>
              <span className="w-8 h-8  flex items-center justify-center rounded-full bg-white">
                <FiArrowUpRight
                  size={20}
                  className="sm:size-7 text-[#0087DB] font-bold"
                />
              </span>
            </button>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-3 text-white">Contact</h4>
            <p className="mb-1 font-bold text-lg text-white ">
              info@buildtoday.com.au
            </p>
            <p className="mb-1 font-bold text-lg text-white ">
              helpdesk@buildtoday.com.au
            </p>
            <p className="font-bold text-lg text-white ">+61 123 456 789</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-3 text-white">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline font-bold text-lg text-white "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline font-bold text-lg text-white "
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline font-bold text-lg text-white "
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline font-bold text-lg text-white "
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline font-bold text-lg text-white "
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold text-[25px] w-[248px] text-white leading-snug text-justify">
                Have a project in mind? Let’s make it a reality.
              </p>

              <button
                className="cursor-pointer text-white flex items-center my-6 justify-between px-1"
                style={{
                  width: "248.31px",
                  height: "41.42px",
                  background: "rgba(0,135,219,1)",
                  border: "1px solid rgba(255,255,255,1)",
                  borderRadius: "99px",
                }}
              >
                <span className="flex-1 pl-2 text-left text-base font-bold text-white">
                  Request a quote
                </span>
                <span className="w-8 h-8  flex items-center justify-center rounded-full bg-white">
                  <FiArrowUpRight
                    size={20}
                    className="sm:size-7 text-black font-bold"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFFFFF] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p className="text-base ">
            <a href="https://www.faarns.com/" className="font-bold">
              @2025 FAARNS
            </a>
            , All Rights Reserved
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full border px-4 py-2 flex items-center gap-2 text-white border-white"
          >
            Back To Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
