import React from "react";
import logo from "../assets/svg/logo.svg";

import { NavLink } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { CiShoppingBasket } from "react-icons/ci";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[90%] mx-auto flex items-center justify-between h-16">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        <nav className="flex-1">
          <ul className="flex justify-center items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "text-gray-700 hover:text-black transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "text-gray-700 hover:text-black transition-colors"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "text-gray-700 hover:text-black transition-colors"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "text-gray-700 hover:text-black transition-colors"
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-black pb-1"
                  : "text-gray-700 hover:text-black transition-colors"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-md 
                  hover:bg-gray-100 transition-all duration-200 cursor-pointer 
                  hover:scale-110 active:scale-95"
          >
            <GoHeart className="text-gray-700 text-xl" />
          </div>

          <div
            className="w-10 h-10 flex items-center justify-center rounded-md 
                  hover:bg-gray-100 transition-all duration-200 cursor-pointer 
                  hover:scale-110 active:scale-95"
          >
            <CiShoppingBasket className="text-gray-700 text-xl" />
          </div>

          <div
            className="w-10 h-10 flex items-center justify-center rounded-md 
                  hover:bg-gray-100 transition-all duration-200 cursor-pointer 
                  hover:scale-110 active:scale-95"
          >
            <BiUser className="text-gray-700 text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
