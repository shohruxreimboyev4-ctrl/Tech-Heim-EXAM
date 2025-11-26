import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WatchGallery = () => {
  const [products, setProducts] = useState([]);

  const clean = (str) => str.toLowerCase().replace(/\s+/g, "");

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );

        const data = res.data;

        const watches = data.find(
          (c) => clean(c.category) === "smartwatch"
        );

        setProducts(watches?.products || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div className="p-6 max-w-[1224px] mx-auto pt-24">
      <h1 className="text-3xl font-bold mb-6">Smart Watches</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/category/smartwatch/${product.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center font-semibold">{product.name}</div>
            <div className="text-center text-gray-600">${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchGallery;
