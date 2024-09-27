import React from "react";
import aboutData from "../Data/Aboutdata.json";


const About = () => {
  return (
    <div className="flex items-center flex-col mt-8 md:mt-14 px-2" id="home">
      <div>
        <div
          className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto text-center leading-tight text-gray-900"
          data-aos="fade-right"
        >
          <h1>{aboutData.header.title[0]}</h1>
          {aboutData.header.title.slice(1, -1).map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
          <h1>{aboutData.header.title[aboutData.header.title.length - 1]}</h1>
        </div>

        <p className="text-center mt-4 text-sm md:text-base">
          {aboutData.description}
        </p>
      </div>

      <div className="ml-2 flex items-center relative right-80">
        <img
          src={aboutData.curvedImage.src}
          alt={aboutData.curvedImage.alt}
          className="h-12 md:h-20"
        />
      </div>

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <div>
          <div
            className="max-w-md inline-flex flex-nowrap overflow-hidden rounded-xl"
            style={{
              maskImage: `linear-gradient(to right, 
                      transparent 0, 
                      hsla(133, 18%, 75%, 1) 50px, 
                      hsla(135, 19%, 75%, 1) calc(100% - 50px), 
                      transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to right, 
                      transparent 0, 
                      hsla(133, 18%, 75%, 1) 50px, 
                      hsla(135, 19%, 75%, 1) calc(100% - 50px), 
                      transparent 100%)`,
            }}
          >
            <ul
              className="flex items-center justify-center 
            md:justify-start [&_li]:mx-8 [&_img]:max-w-none 
            animate-infinite-scroll"
            >
              {aboutData.brandLogos.map((logo, index) => (
                <li key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-20 rounded-xl"
                  />
                </li>
              ))}
            </ul>

            <ul
              className="flex items-center justify-center md:justify-start 
            [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {aboutData.brandLogos.map((logo, index) => (
                <li key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-20 rounded-xl"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-14 px-8 bg-darkgray rounded-xl h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutData.bgimage.src})` }}
        data-aos="fade-right"
      >
        <img src={aboutData.bgimage.src} alt="Background"  />
      </div>
    </div>
  );
};

export default About;

{
  /* {aboutData.images.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 overflow-hidden group relative">
            <div className="relative rounded-lg overflow-hidden h-full group">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))} */
}
