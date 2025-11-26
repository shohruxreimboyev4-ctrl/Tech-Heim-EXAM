import React from "react";
import watches from "../assets/img/watches.png";

const SmartWatch = () => {
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-red-400"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">

            {/* LEFT — Texts (left-aligned & vertically centered) */}
            <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
                SMART WATCH
              </h1>

              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Various designs and brands
              </p>

              <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 shadow-lg text-sm cursor-pointer">
                View
              </button>
            </div>

            {/* RIGHT — Image */}
            <div className="relative flex items-center justify-center p-8 lg:p-0">
              <img
                src={watches}
                alt="Smart Watches"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartWatch;
