"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Heros() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);


    
    // Optional: Clear form after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="relative w-full md:w-11/12 flex justify-center items-center py-20 mx-auto md:rounded-3xl md:mt-5 h-full lg:h-[700px]"
      style={{
        backgroundImage: "url('/img/prop-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 z-0 md:rounded-3xl bg-black/80 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row w-11/12 px-5 md:px-25 items-center justify-between gap-4">
        {/* Left text content */}
        <motion.div
          className="text-white  max-w-[600px] text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-[100px] lg:text-[130px] font-bold leading-[1.1] mb-4">
            LET’S <br /> TALK.
          </h1>

          <p className="text-base sm:text-lg md:text-[22px] mb-6">
            Have a project in mind? Let’s discuss{" "}
            <br className="hidden sm:block" /> your vision and bring it to life.
          </p>

          <div className="space-y-2 text-sm sm:text-base">
            <p className="font-medium underline">info@buildtoday.com.au</p>
            <p className="font-medium underline">+61 123 456 789</p>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm  rounded-[22px] border-4 border-[#0087db33] p-5 sm:p-6 md:p-8 w-full sm:w-[400px] shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form className="space-y-4 " onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#0087DB] mb-1">
                NAME
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-[15px] px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#007BFF] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#0087DB] mb-1">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-[15px] px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#007BFF] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#0087DB] mb-1">
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
               className="w-full border border-gray-300 rounded-[15px] px-4 py-3 text-gray-800 focus:ring-2 focus:ring-[#007BFF] outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0087DB] hover:bg-[#0065d1] text-white font-semibold py-2.5 rounded-[15px] transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
