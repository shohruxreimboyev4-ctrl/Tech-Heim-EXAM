import React from "react";
import apple from "../assets/img/apple.png";
import sony from "../assets/img/sony.png";
import samsung from "../assets/img/samsung.png";
import canon from "../assets/img/canon.png";
import huawei from "../assets/img/huawei.png";
import lenovo from "../assets/img/lenovo.png";

const TopBrands = () => {
  const brands = [
    { id: 1, name: "Apple", src: apple, alt: "Apple" },
    { id: 2, name: "Sony", src: sony, alt: "Sony" },
    { id: 3, name: "Samsung", src: samsung, alt: "Samsung" },
    { id: 4, name: "Canon", src: canon, alt: "Canon" },
    { id: 5, name: "Huawei", src: huawei, alt: "Huawei" },
    { id: 6, name: "Lenovo", src: lenovo, alt: "Lenovo" },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] w-[90%] mx-auto">
        <div className="mb-6 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-semibold text-gray-800">Top Brands</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-14 md:gap-16 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group cursor-pointer transition-transform duration-200 hover:scale-110"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
