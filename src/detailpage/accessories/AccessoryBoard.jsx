import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AccessoryBoard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );
        const data = res.data;
        const accessories = data.find(c => c.category.toLowerCase() === "accessories");
        setProducts(accessories?.products || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div className="p-6 max-w-[1224px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/category/accessories/${product.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover"/>
            <div className="p-4 text-center font-semibold">{product.name}</div>
            <div className="text-center text-gray-600">${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccessoryBoard;
