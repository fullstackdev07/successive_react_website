import React, { useState } from "react";
import navbarContent from "../Data/Navbardata.json"; 

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
  
        <div className="flex items-center">
        
          <img
            src={navbarContent.brand.logo.src}
            alt={navbarContent.brand.logo.alt}
            className={navbarContent.brand.logo.className}
          />
          <div>
            <p className={navbarContent.brand.titleClassName}>
              {navbarContent.brand.title}
            </p>
            <p className={navbarContent.brand.subtitleClassName}>
              {navbarContent.brand.subtitle}
            </p>
          </div>
        </div>

      
        <div>
          <ul className="hidden md:flex items-center gap-6 text-gray-700 cursor-pointer font-bold">
            {navbarContent.navItems.map((item, index) => (
              <li key={index} className={item.className}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

       
        <div className="flex items-center gap-6">
          <a href={navbarContent.button.href}>
            <button className={navbarContent.button.className}>
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
        className={`${navbarContent.mobileMenu.wrapperClassName} ${
          toggle ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className={navbarContent.mobileMenu.menuClassName}>
          {navbarContent.navItems.map((item, index) => (
            <li key={index} className={navbarContent.mobileMenu.itemClassName}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
