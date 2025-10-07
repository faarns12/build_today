/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CloudUpload } from "lucide-react";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  };

  const onSubmit = (data: any) => {
    console.log({ ...data, file });
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-9/12 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl 
        p-6 sm:p-8 md:p-10 space-y-6 
        bg-[radial-gradient(circle_at_center,_rgba(228,235,255,0.9),_rgba(255,255,255,0.9)_60%)]"
      >
        {/* --- Full name & Email --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Full name
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Tahmeed Siraz"
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{`${errors.fullName.message}`}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="tahm33dabc@gmail.com"
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{`${errors.email.message}`}</p>
            )}
          </div>
        </div>

        {/* --- Phone & Service Type --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Phone no.
            </label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              placeholder="01715******"
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{`${errors.phone.message}`}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Service Type
            </label>
            <select
              {...register("serviceType", {
                required: "Service type is required",
              })}
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            >
              <option value="">Select service</option>
              <option value="Renovation">Renovation</option>
              <option value="Construction">Construction</option>
              <option value="Consulting">Consulting</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{`${errors.serviceType.message}`}</p>
            )}
          </div>
        </div>

        {/* --- Budget & Timeline --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Budget (Optional)
            </label>
            <select
              {...register("budget")}
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            >
              <option value="">Select budget</option>
              <option>$50K — $100K</option>
              <option>$100K — $250K</option>
              <option>$250K — $500K</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Project Timeline
            </label>
            <select
              {...register("timeline", { required: "Timeline is required" })}
              className="w-full bg-[#FFFFFF99] px-3 py-3 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none"
            >
              <option value="">Select timeline</option>
              <option value="1—5 weeks">1—5 weeks</option>
              <option value="6—10 weeks">6—10 weeks</option>
              <option value="10—25 weeks">10—25 weeks</option>
            </select>
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">{`${errors.timeline.message}`}</p>
            )}
          </div>
        </div>

        {/* --- Project Details & Attachment --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Project Details / Description
            </label>
            <textarea
              {...register("details")}
              placeholder="Describe your project here..."
              className="w-full bg-[#FFFFFF99] px-3 py-2 text-[#573E69] text-sm sm:text-base font-semibold 
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
              border-white border-2 focus:outline-none h-[80px] sm:h-[80px]"
            />

            {/* --- Checkbox --- */}
            <div className="flex items-start mt-4 flex-wrap">
              <input
                type="checkbox"
                {...register("agree", { required: true })}
                className="mt-1 mr-2 border-gray-300 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700 leading-tight">
                I Agree To The Processing Of Personal Data{" "}
                <span className="text-red-500">*</span>
              </label>
              {errors.agree && (
                <p className="text-red-500 text-sm ml-2">Required</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-1 text-[18px] sm:text-[20px] md:text-[22px] text-[#573E69]">
              Attachments (Optional)
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex flex-col items-center justify-center w-full border-white border-2 bg-[#FFFFFF99]
              shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[12px] font-medium py-3 sm:py-2 px-2 h-[120px] 
              text-[#00C2FF] focus:border-sky-400 focus:outline-none"
            >
              <input
                type="file"
                accept="image/png, image/jpeg, image/svg+xml"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col border-2 border-dashed border-[#00C2FF] rounded-[10px] 
                items-center w-full h-full justify-center cursor-pointer"
              >
                <CloudUpload className="w-7 h-7 text-[#71717A]" />
                <p className="mt-2 text-gray-600 text-[12px] sm:text-[14px] font-semibold text-center">
                  Drag and drop or{" "}
                  <span className="text-[#00C2FF] font-bold">
                    Click to upload
                  </span>
                </p>
                {file && (
                  <p className="mt-3 text-sm text-gray-700 truncate max-w-[180px] sm:max-w-[240px]">
                    Selected: <span className="font-medium">{file.name}</span>
                  </p>
                )}
                <p className="text-[10px] sm:text-[12px] font-medium text-[#71717A] mt-1 text-center">
                  Supported: PNG, JPG, SVG — Max 25MB
                </p>
              </label>
            </div>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="flex justify-center mt-10 sm:mt-16 md:mt-20">
          <button
            type="submit"
            className="bg-[#00C2FF] text-white px-5 sm:px-6 py-2 sm:py-3 font-semibold flex items-center gap-2 
            max-w-[180px] shadow-[0px_2.11px_2.82px_1.41px_rgba(86,79,92,0.2)] rounded-[8px] 
            focus:border-sky-400 border-white border-2 focus:outline-none text-sm sm:text-base"
          >
            Get My Quote
          </button>
        </div>
      </form>
    </div>
  );
}
