import React from 'react';
import mouse from "../assets/img/mouse.png";
import keyboard from "../assets/img/keyboard.png";
import watch from "../assets/img/watch.png";
import MacBook from "../assets/img/MacBook.png";
import watch2 from "../assets/img/watch2.png";

const Featured = () => {
  const products = [
    {
      id: 1,
      image: mouse,
      name: "Logitech G502 Gaming Mouse",
      originalPrice: "$38.00",
      discountedPrice: "$19.00",
      discount: "-50%",
    },
    {
      id: 2,
      image: keyboard,
      name: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-...",
      originalPrice: "$49.00",
      discountedPrice: "$34.30",
      discount: "-30%",
    },
    {
      id: 3,
      image: watch,
      name: "Apple Watch Series 7 (GPS, 41MM)",
      originalPrice: "$289.00",
      discountedPrice: "$231.20",
      discount: "-20%",
    },
    {
      id: 4,
      image: MacBook,
      name: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
      originalPrice: "$950.22",
      discountedPrice: "$712.66",
      discount: "-25%",
    },
    {
      id: 5,
      image: watch2,
      name: "Samsung Titan Smart Watch",
      originalPrice: "$120.00",
      discountedPrice: "$99.60",
      discount: "-17%",
    },
  ];

  return (
    <section className="bg-blue-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full sm:w-[90%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="absolute top-2 left-2 bg-orange-200 text-orange-400 text-xs font-semibold px-2 py-1 rounded-full z-10">
                {product.discount}
              </div>

              <div className="relative h-40 sm:h-48 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-4 pt-2">
                <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 line-through text-sm mr-2">
                    {product.originalPrice}
                  </span>
                  <span className=" font-normal text-lg">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
