import React from "react";
import laptops from "../assets/img/laptops.png";

const Showcase = () => {
  return (
    <section className="bg-white py-12 px-4 mt-28">
      <div className="max-w-[1280px] w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight ">
            Tech Heim
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 font-semibold leading-relaxed">
            "Join the{" "}
            <span className="text-orange-500 font-semibold">
              digital revolution
            </span>
            "
          </p>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white 
            w-[288px] h-[56px] rounded-lg font-semibold
            text-lg
            transition-all duration-300 cursor-pointer shadow-md 
            hover:shadow-lg hover:scale-[1.03] active:scale-95
            mx-auto lg:mx-0"
          >
            Explore More
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={laptops}
            alt="Showcase"
            className="w-full max-w-[450px] sm:max-w-[540px] lg:max-w-[650px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
