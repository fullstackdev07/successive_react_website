import React, { useState } from "react";
import navbarContent from "../Data/Navbardata.json";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbarColour , setNavbarColour] = useState(false);

  window.addEventListener( "scroll",() => {
      setNavbarColour(true);
      if(window.scrollY == 0){
        setNavbarColour(false);
      }
  })

  return (
    <nav className={`fixed top-0 w-full z-40 ${navbarColour ? "backdrop-blur-md transition duration-700": "bg-transparent"}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto m-0 p-2 md:p-0 ">
        <div className="flex items-center">
          <img
            src={navbarContent.brand.logo.src}
            alt={navbarContent.brand.logo.alt}
            className={"h-12 w-12 md:h-16 md:w-16"}
          />
          <div>
            <p className={"font-bold text-darkgreen md:text-2xl"}>
              {navbarContent.brand.title}
            </p>
            <p className={"text-green mt-[-0.5rem] md:mt-[-0.5rem] md:text-xl"}>
              {navbarContent.brand.subtitle}
            </p>
          </div>
        </div>

        <div>
          <ul className="hidden md:flex items-center gap-6 text-gray-700 cursor-pointer font-bold">
            {navbarContent.navItems.map((item, index) => (
              <li key={index} className={item.className}>
                <a href={item.href}>
                {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <a href={navbarContent.button.href}>
            <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200">
              {navbarContent.button.text}
            </button>
          </a>

          <div
            className="text-3xl md:hidden cursor-pointer"
            aria-label={navbarContent.menuIcon.ariaLabel}
            onClick={() => setToggle(!toggle)}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-green z-10 transition-all duration-300 ease-in-out absolute ${
          toggle ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center p-4 text-white">
          {navbarContent.navItems.map((item, index) => (
            <li key={index} className={navbarContent.mobileMenu.itemClassName}>
              <a href={item.href}>
              {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
