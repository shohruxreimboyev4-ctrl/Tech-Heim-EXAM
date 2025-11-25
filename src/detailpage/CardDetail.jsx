import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { cardId } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(`https://69075108b1879c890ed966ea.mockapi.io/api/card/${cardId}`)
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((err) => console.error(err));
  }, [cardId]);

  if (!card) return <div>Loading...</div>;

  return (
    <section className="w-[90%] max-w-[800px] mx-auto my-10 pt-30">
      <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
      <img
        src={card.url}
        alt={card.title}
        className="rounded-md w-full h-80 object-cover mb-4"
      />
      <p className="text-lg">{card.description || "No description available."}</p>
      <p className="mt-2 font-semibold">Price: ${card.price || "N/A"}</p>
      <p className="mt-1 text-gray-500">Product ID: {card.id}</p>
    </section>
  );
};

export default CardDetail;
