import React from "react";
import footer from "../assets/footer.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-ramagreen py-6 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">

        <div className="flex items-center mb-4 md:mb-0">
          <img src={footer} alt="Engajify logo" className="h-12 w-12 md:h-14 md:w-14" />
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-xl md:text-2xl leading-6">
              Successive
            </p>
            <p className="text-white text-lg md:text-xl">Technologies</p>
          </div>
        </div>


        <div className="text-center md:text-left text-white mb-4 md:mb-0">
          <h1 className="text-lg">
            ©2024 Successive Technologies Ltd
          </h1>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm md:text-base">
            <li className="hover:underline cursor-pointer">Privacy Notice</li>
            <li className="hover:underline cursor-pointer">Cookie Policy</li>
            <li className="hover:underline cursor-pointer">Disclaimer</li>
            <li className="hover:underline cursor-pointer">Security Policy</li>
            <li className="hover:underline cursor-pointer">Customize Cookies</li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end gap-4 text-xl md:text-2xl text-white">
          <a href="https://www.facebook.com/">
          <FaFacebook className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.instagram.com/">
          <FaInstagramSquare className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.instagram.com/">
          <FaPinterestSquare className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.facebook.com/">
          <FaSquareThreads className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.facebook.com/">
          <FaYoutube className="hover:text-gray-300 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
