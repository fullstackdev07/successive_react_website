import React from "react";
import footer from "../assets/footer.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-ramagreen py-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center mx-0">
            <img src={footer} alt="engajify logo" className="h-20 w-20" />
            <div className="">
              <p className="font-bold text-white text-3xl leading-6">
                Successive
              </p>
              <p className="text-white text-2xl">Technologies</p>
            </div>
          </div>

          <p className="text-white text-lg font-semibold">1.866.78.5654</p>
          <p className="text-white underline">Contact Us</p>

          <div className="flex space-x-4 text-3xl text-white">
            <FaFacebook />
            <FaInstagramSquare />
            <FaSquareThreads />
            <FaYoutube />
            <AiOutlineTikTok />
            <FaPinterestSquare />
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Product</h3>
            <ul className="space-y-2 text-gray text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Checkout</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-8 text-sm border-t-2 border-white p-6">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>

          <div>
            <ul className="flex flex-col md:flex-row gap-4 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
