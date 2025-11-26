import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// react-icons
import { AiOutlineHeart, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { MdStore, MdOutlineLocalShipping } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const ItemPreview = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("technical");
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          "https://69075108b1879c890ed966ea.mockapi.io/api/pages"
        );

        const all = res.data;

        const categoryData = all.find(
          (c) => c.category.toLowerCase() === category.toLowerCase()
        );

        if (!categoryData) return;

        const selected = categoryData.products.find((p) => p.id === id);

        setProduct(selected);
      } catch (err) {
        console.error("DETAIL PAGE ERROR:", err);
      }
    };

    fetchProduct();
  }, [category, id]);

  if (!product) return <div className="p-6 text-center">Loading...</div>;

  // Fallback images
  const images =
    product.images?.length > 0
      ? product.images
      : [
          product.image,
          product.image,
          product.image,
        ];

  return (
    <div className="w-full py-8 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT IMAGES */}
          <div className="space-y-4 relative">

            {/* Icons */}
            <div className="absolute left-4 top-4 flex flex-col gap-3 z-10">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border">
                <AiOutlineHeart size={20} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border">
                <AiOutlineBell size={20} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border">
                <AiOutlineUser size={20} className="text-gray-600" />
              </button>
            </div>

            {/* MAIN IMAGE */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>

                {product.discount && (
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-semibold">
                    🔥 -{product.discount}%
                  </span>
                )}
              </div>

              {product.oldPrice && (
                <p className="text-sm text-gray-500">
                  last price: ${product.oldPrice}
                </p>
              )}
            </div>

            {/* Rating, stock */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded">
                ⭐{product.rating || 4.8}
              </div>
              <span className="text-gray-600">sold {product.sold || 120}</span>
              <div className="flex items-center gap-1 text-blue-600">
                <MdStore size={18} /> In stock
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <BsShieldCheck size={18} /> Guaranteed
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MdOutlineLocalShipping size={18} /> Free delivery
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {product.description || "No description provided."}
            </p>

            {/* Add to cart */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Add to cart
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-12">
          <div className="border-b flex gap-8">
            <button
              onClick={() => setActiveTab("technical")}
              className={`pb-3 font-medium ${
                activeTab === "technical"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Technical Details
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={`pb-3 font-medium ${
                activeTab === "comments"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Comments
            </button>
          </div>

          {/* TECH TAB */}
          {activeTab === "technical" && (
            <div className="mt-8 space-y-4">
              {product.specs?.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b"
                >
                  <div className="text-sm font-medium text-gray-600">{s.label}</div>
                  <div className="sm:col-span-3 text-sm text-gray-900">
                    {s.value}
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowLess(!showLess)}
                className="mt-4 text-blue-600 flex items-center gap-1 text-sm"
              >
                {showLess ? "Show More" : "Show Less"}
                <FiChevronDown
                  className={`transition ${showLess ? "" : "rotate-180"}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
