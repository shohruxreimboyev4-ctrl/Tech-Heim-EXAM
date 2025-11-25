import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://69075108b1879c890ed966ea.mockapi.io/api/pages")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(categoryName.toLowerCase())
        );
        setProducts(filtered.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto my-10 pt-20">
      <h2 className="text-2xl font-bold mb-6 capitalize">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <NavLink
            key={product.id}
            to={`/category/${categoryName}/${product.id}`}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-36 h-36 object-cover mb-4"
            />
            <h3 className="text-center text-md font-semibold mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-green-600 font-bold mb-1">${product.price}</p>
            <p className="text-yellow-500 font-semibold">{product.star} ★</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default CategoryDetail;
