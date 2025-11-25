import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { CiShoppingBasket, CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import {
  PiDeviceMobileCamera,
  PiDesktopTower,
  PiDeviceTabletSpeaker,
  PiHeadphones,
  PiCamera,
  PiGameController,
  PiDeviceMobileSpeaker,
  PiNetwork,
  PiSun,
} from "react-icons/pi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-white fixed top-0 w-full z-50 border-b border-blue-500">
        <div className="max-w-[1280px] w-[90%] mx-auto flex items-center justify-between h-16">
          <button className="md:hidden text-3xl text-gray-700" onClick={() => setOpen(true)}>
            <RiMenuLine />
          </button>

          <NavLink to="/" className="hidden md:block">
            <img src={logo} alt="Logo" className="h-10" />
          </NavLink>

          <h1 className="md:hidden text-xl font-bold text-blue-600">Tech Heim</h1>

          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold border-b-2 border-black pb-1"
                      : "text-gray-700 hover:text-black"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            {[GoHeart, CiShoppingBasket, BiUser].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer transition"
              >
                <Icon className="text-gray-700 text-xl" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden max-w-[1200px] w-[90%] mx-auto mt-2 pb-3">
          <div className="flex items-center bg-gray-100 rounded-md p-3">
            <input
              type="text"
              placeholder="What can we help you find?"
              className="bg-transparent flex-1 outline-none text-gray-700"
            />
            <CiSearch className="text-2xl text-gray-600" />
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <img src={logo} alt="Logo" className="h-10" />
          <button className="text-3xl" onClick={() => setOpen(false)}>
            <RiCloseLine />
          </button>
        </div>

        <div className="px-5 mt-3">
          <h3 className="text-blue-600 font-semibold mb-4">Products</h3>
          <ul className="flex flex-col gap-4 text-gray-700">
            <li className="flex items-center gap-3">
              <PiDeviceMobileCamera className="text-xl" /> Mobile Phones
            </li>
            <li className="flex items-center gap-3">
              <PiDesktopTower className="text-xl" /> Laptops & Computers
            </li>
            <li className="flex items-center gap-3">
              <PiDeviceTabletSpeaker className="text-xl" /> Tablets & E-reader
            </li>
            <li className="flex items-center gap-3">
              <PiHeadphones className="text-xl" /> Wearables
            </li>
            <li className="flex items-center gap-3">
              <PiDeviceMobileSpeaker className="text-xl" /> Audio
            </li>
            <li className="flex items-center gap-3">
              <PiCamera className="text-xl" /> Cameras
            </li>
            <li className="flex items-center gap-3">
              <PiGameController className="text-xl" /> Gaming
            </li>
            <li className="flex items-center gap-3">
              <PiNetwork className="text-xl" /> Networking
            </li>
            <li className="flex items-center gap-3">
              <PiSun className="text-xl" /> Accessories
            </li>
          </ul>

          <div className="flex flex-col gap-5 mt-10 text-gray-800">
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
