import React from 'react';
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";
import icon4 from "../assets/svg/icon4.svg";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Latest and Greatest Tech",
    },
    {
      id: 2,
      icon: icon2,
      title: "Guarantee",
    },
    {
      id: 3,
      icon: icon3,
      title: "Free Shipping over 1000$",
    },
    {
      id: 4,
      icon: icon4,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-medium text-gray-900 leading-tight">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
