import React from "react";
import FooterData from "../Data/Footerdata.json";

const Footer = () => {
 
  const footer = FooterData?.footer || {};
  const container = footer?.container || {};
  const logoSection = container?.logoSection || {};
  const copyrightSection = container?.copyrightSection || {};
  const socialMediaSection = container?.socialMediaSection || {};

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
          {/* <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm md:text-base">
            {copyrightSection?.links?.map((link, index) => (
              <li key={index} className={link?.className || ""}>
                {link?.text || ""}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Social Media Section */}
        {/* <div className={socialMediaSection?.className || ""}>
          {socialMediaSection?.socialLinks?.map((social, index) => (
            <a key={index} href={social?.href || "#"}>
              <i className={`bi ${social?.icon || ""} ${social?.className || ""}`}></i>
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
