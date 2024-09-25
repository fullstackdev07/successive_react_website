import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="engajify logo" className="h-16 w-16" />
          <div className="">
            <p className="font-bold text-darkgreen text-2xl leading-6">Successive</p>
            <p className="text-green text-lg">Technologies.</p>
          </div>
        </div>

        <div>
          <ul className="hidden md:flex items-center gap-6 text-gray-700 cursor-pointer font-bold">
            <li className="hover:text-green-600 transition duration-200 js-underline">
              Home
            </li>
            <li className="hover:text-green-600 transition duration-200 ">
              AI Social Assistant
            </li>
            <li className="hover:text-green-600 transition duration-200 ">
              Platform
            </li>
            <li className="hover:text-green-600 transition duration-200 ">
              Resources
            </li>
            <li className="hover:text-green-600 transition duration-200">
              Pricing
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg hover:bg-green-700 transition duration-200">
            Get Started
          </button>
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <IoMdMenu />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-green-600 transition-all duration-300 ease-in-out absolute bg-green  ${
          toggle ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center p-4 text-white bg-green">
          <li className="py-2 border-b w-full text-center hover:bg-green-700 transition duration-200">
            Home
          </li>
          <li className="py-2 border-b w-full text-center hover:bg-green-700 transition duration-200">
            AI Social Assistant
          </li>
          <li className="py-2 border-b w-full text-center hover:bg-green-700 transition duration-200">
            Platform
          </li>
          <li className="py-2 border-b w-full text-center hover:bg-green-700 transition duration-200">
            Resources
          </li>
          <li className="py-2 w-full text-center hover:bg-green-700 transition duration-200">
            Pricing
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
