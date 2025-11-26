import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );
        const data = res.data;

        const categoryData = data.find(
          (c) => c.category.toLowerCase().replace(/\s/g, "") === "bestsellers"
        );

        if (categoryData?.products) {
          setProducts(categoryData.products.slice(0, 4));
        }
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    };

    fetchBestProducts();
  }, []);

  return (
    <section className="px-4 py-6 max-w-[1280px] mx-auto">
      <h2 className="text-3xl font-bold mb-6">Best Sellers</h2>
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
                <div className="p-2 font-light text-base leading-[150%] text-black">
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

export default BestSellers;
