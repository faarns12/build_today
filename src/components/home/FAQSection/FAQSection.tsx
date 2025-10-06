"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve clients across various regions, focusing primarily on local and national projects with customized service options depending on your location.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project durations vary, but most take between 4–12 weeks depending on design complexity, materials, and client approval timelines.",
  },
  {
    question: "Can you handle custom designs?",
    answer:
      "Yes, we specialize in unique and tailor-made designs that perfectly reflect your ideas, requirements, and overall vision.",
  },
  {
    question: "Do you provide project management and approvals?",
    answer:
      "Absolutely. We oversee the entire process — from concept to final approval — ensuring every step is handled professionally.",
  },
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We focus on residential, commercial, and bespoke design projects that combine creativity with practical excellence.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="w-11/12 mx-auto py-4 sm:py-5 md:py-7 bg-white">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A244D] leading-tight">
            Your Questions, <br className="hidden sm:block" /> Answered With
            Clarity
          </h2>

           <div>
            <p className="text-[#191919] mb-6 lg:max-w-[350px] lg:text-justify  text-lg mx-auto">
              Here Are The Most Common Questions From Our Clients. Can`t Find
              Your Question?{" "}
              <a
                href="#contact"
                className="text-[#0087DB] hover:underline "
              >
                Get In Touch
              </a>{" "}
              With Us Directly.
            </p>
          </div>
        </div>

        {/* FAQ list */}
<motion.div
  initial={{ opacity: 0, y: -40 }}          // hidden state
  whileInView={{ opacity: 1, y: 0 }}        // animate when in view
  viewport={{ once: true, amount: 0.2 }}    // trigger only once, when 20% visible
  transition={{ duration: 0.8, ease: "easeInOut" }}
  className="space-y-4"
>
  {faqs.map((faq, i) => (
    <div
      key={i}
      className="box-border bg-white border-2 border-white rounded-[12px] shadow-[0px_2px_4px_rgba(41,121,158,0.35)] hover:shadow-md transition-all"
    >
      <button
        onClick={() => toggle(i)}
        className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left text-[#0A244D] font-medium text-base sm:text-[17px] focus:outline-none"
      >
        {faq.question}
        {activeIndex === i ? (
          <X className="w-5 h-5 flex-shrink-0 text-[#0A244D]" />
        ) : (
          <Plus className="w-5 h-5 flex-shrink-0 text-[#0A244D]" />
        )}
      </button>

      {/* Animated Answer */}
      <AnimatePresence initial={false}>
        {activeIndex === i && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</motion.div>



      </div>
    </section>
  );
}
