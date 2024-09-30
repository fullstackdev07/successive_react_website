import React from "react";
import FooterData from "../Data/Footerdata.json";

const Footer = () => {
 
  const footer = FooterData?.footer || {};
  const container = footer?.container || {};
  const logoSection = container?.logoSection || {};
  const copyrightSection = container?.copyrightSection || {};


  return (
    <footer className={"w-full bg-ramagreen py-6 mt-24"}>
      <div className={container?.className || ""}>
        {/* Logo Section */}
        <div className={logoSection?.className || ""}>
          {logoSection?.logo?.src && (
            <img
              src={logoSection.logo.src}
              alt={logoSection.logo.alt}
              className={logoSection.logo.className || ""}
            />
          )}
          <div className={logoSection?.text?.className || ""}>
            <p className={logoSection?.text?.title?.className || ""}>
              {logoSection?.text?.title?.text || ""}
            </p>
            <p className={logoSection?.text?.subtitle?.className || ""}>
              {logoSection?.text?.subtitle?.text || ""}
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={copyrightSection?.className || ""}>
          <h1 className="text-lg">{copyrightSection?.text || ""}</h1>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
