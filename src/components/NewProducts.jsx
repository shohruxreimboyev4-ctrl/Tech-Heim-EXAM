import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );
        const data = res.data;

        const newCategory = data.find(
          (c) => c.category.toLowerCase().replace(/\s/g, "") === "newproducts"
        );

        if (newCategory?.products?.length > 0) {
          setProducts(newCategory.products.slice(0, 4));
        }
      } catch (err) {
        console.error("AxiosError:", err);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <section className="p-6 max-w-[1224px] mx-auto">
      <div className="flex items-center justify-between gap-5">
        <h2 className="font-medium text-[32px] text-black mb-6">New Products</h2>
        <Link
          to="/products"
          className="font-normal flex text-base text-black hover:text-blue-600"
        >
          View all
          <svg
            className="ml-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7397 16.28C10.5497 16.28 10.3597 16.21 10.2097 16.06C9.91969 15.77 9.91969 15.29 10.2097 15L13.2097 12L10.2097 9C9.91969 8.71 9.91969 8.23 10.2097 7.94C10.4997 7.65 10.9797 7.65 11.2697 7.94L14.7997 11.47C15.0897 11.76 15.0897 12.24 14.7997 12.53L11.2697 16.06C11.1197 16.21 10.9297 16.28 10.7397 16.28Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="border-t-2 border-gray-300 mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white shadow-md p-4 rounded-lg overflow-hidden hover:scale-105 transition-transform block h-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[160px] w-full object-contain mb-2"
                />
                <div className="p-2 font-light text-base text-black">
                  {product.title}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="font-light text-lg text-black">${product.price}</div>
                <div className="flex items-center gap-1 font-medium text-base text-blue-700">
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.78061 0.829113C8.13983 -0.27646 9.70392 -0.276462 10.0631 0.829111L11.3466 4.77927C11.5073 5.27369 11.968 5.60845 12.4879 5.60845H16.6413C17.8038 5.60845 18.2871 7.09598 17.3467 7.77927L13.9865 10.2206C13.5659 10.5262 13.3899 11.0678 13.5505 11.5622L14.834 15.5124C15.1933 16.618 13.9279 17.5373 12.9874 16.854L9.62722 14.4127C9.20663 14.1071 8.63712 14.1071 8.21653 14.4127L4.85633 16.854C3.91588 17.5373 2.6505 16.618 3.00972 15.5124L4.2932 11.5622C4.45385 11.0678 4.27786 10.5262 3.85728 10.2206L0.497076 7.77927C-0.443381 7.09599 0.0399497 5.60845 1.20242 5.60845H5.35586C5.87573 5.60845 6.33647 5.27369 6.49712 4.77927L7.78061 0.829113Z"
                        fill="#063A88"
                      />
                    </svg>
                  </span>
                  <span>{product.star?.toFixed(1) || "0.0"}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
