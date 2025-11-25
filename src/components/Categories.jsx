import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [cards, setCards] = useState([]);

  // title -> slug
  const categorySlug = {
    "smart phone": "phone",
    "smart watch": "watch",
  };

  useEffect(() => {
    fetch("https://69075108b1879c890ed966ea.mockapi.io/api/card")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-[90%] max-w-[1280px] mx-auto my-10">
      <div className="flex flex-wrap gap-4 justify-around">
        {cards.map((card) => {
          const slug = categorySlug[card.title.toLowerCase()] || card.title.toLowerCase();

          return (
            <NavLink
              key={card.id}
              to={`/category/${slug}`}
              className="flex flex-col items-center bg-white rounded-md p-4 shadow-md hover:shadow-lg transition cursor-pointer"
              style={{ width: "184px", height: "196px" }}
            >
              <img
                src={card.url}
                alt={card.title}
                className="rounded-md mb-2 w-36 h-36 object-cover hover:scale-105 transition-transform"
              />
              <h3 className="text-center text-lg">{card.title}</h3>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
