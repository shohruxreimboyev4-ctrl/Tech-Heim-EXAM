import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CategoryHub = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );
        const data = res.data;
        const categoryData = data.find(
          (c) => c.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(categoryData?.products || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="p-6 max-w-[1224px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category.toUpperCase()}</h1>
      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/category/${category}/${product.id}`}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center font-semibold">{product.name}</div>
              <div className="text-center text-gray-600">${product.price}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryHub;
