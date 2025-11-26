import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaArrowRight,
  FaArrowUp,
  FaQuestionCircle,
} from "react-icons/fa";
import paypal from "../assets/svg/paypal.svg";
import american_express from "../assets/svg/american_express.svg";
import visa from "../assets/svg/visa.svg";
import master_card from "../assets/svg/master_card.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#001f3f] text-white relative">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Order status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  How it works?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Our promises
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5" />
                123 Main Street, Anytown, USA
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                TechHeimSupport@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Sign up for News and updates
            </h3>
            <div className="flex mb-6 border border-gray-500 rounded-lg overflow-hidden">
              <div className="pl-3 flex items-center">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="E-mail Address"
                className="flex-1 px-3 py-2.5 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
              />
              <button className="px-4 py-2.5 hover:bg-gray-700 transition cursor-pointer">
                <FaArrowRight />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700 transition cursor-pointer"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700 transition cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700 transition cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700 transition cursor-pointer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <img
            src={paypal}
            alt="PayPal"
            className="h-8 rounded px-2 cursor-pointer"
          />
          <img
            src={american_express}
            alt="AMEX"
            className="h-8 rounded px-2 cursor-pointer"
          />
          <img
            src={visa}
            alt="Visa"
            className="h-8 rounded px-2 cursor-pointer"
          />
          <img
            src={master_card}
            alt="Mastercard"
            className="h-8 rounded px-2 cursor-pointer"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center text-xs">
              ©
            </span>
            <span>2023 Tech Heim.</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition cursor-pointer">
              Cookie Settings
            </a>
            <a href="#" className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition cursor-pointer">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-white transition cursor-pointer">
              Imprint
            </a>
          </div>
        </div>
      </div>

      <div className="fixed right-6 bottom-6 flex flex-col gap-3">
        <button className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-200 transition cursor-pointer">
          <FaQuestionCircle className="text-blue-600 w-6 h-6" />
        </button>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-200 transition cursor-pointer"
        >
          <FaArrowUp className="text-blue-600 w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
