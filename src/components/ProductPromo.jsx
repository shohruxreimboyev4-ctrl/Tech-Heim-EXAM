import React from "react";
import bg_image from "../assets/img/bg_image.png";
import phones from "../assets/img/phones.png";
import bg_image2 from "../assets/img/bg_image2.png";
import PlayStation from "../assets/img/PlayStation.png";

const ProductPromo = () => {
  return (
    <section className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-[1280px] w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">

          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img
              src={bg_image}
              alt="iPhone 15 Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-black">
                  Iphone 15 Series
                </h2>

                <div className="flex gap-2 mt-3 md:mt-0">
                  {[8, 8, 8, 8].map((num, idx) => (
                    <div
                      key={idx}
                      className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/30"
                    >
                      <div className="text-lg font-bold text-gray-900">{num}</div>
                      <div className="text-xs text-gray-800">Days</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10">
                <img
                  src={phones}
                  alt="iPhone 15 Series"
                  className="w-72 sm:w-96 lg:w-[430px] object-contain translate-y-6"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    It feels good to be the first
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Get ready for the future of smartphones. Experience
                    innovation like never before. Stay tuned for the big iPhone
                    15 pre-sale.
                  </p>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md cursor-pointer">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img
              src={bg_image2}
              alt="PlayStation 5 Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 items-center">
                Play Station 5
              </h2>

              <div className="flex flex-col items-start justify-center flex-1">
                <img
                  src={PlayStation}
                  className="w-64 sm:w-72 object-contain self-end translate-x-6"
                />

                <div className="mt-5 mb-6">
                  <p className="text-blue-900 text-xl font-semibold">
                    Digital Edition + 2TB
                  </p>

                  <div className="flex gap-1 mt-2">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductPromo;
