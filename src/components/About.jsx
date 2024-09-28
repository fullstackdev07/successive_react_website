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

      <div className="flex flex-col items-start justify-center max-w-7xl mx-auto mt-14 px-8 md:px-48 bg-darkgray rounded-xl md:h-[48rem] bg-cover bg-center bg-about-image overflow-hidden">
        <div className="w-full md:w-[90%] lg:w-96 text-white my-8 md:my-0">
          <div className="relative border-dashed border-l-2 border-white pl-8 pb-4">
            <button className="px-3 py-1 rounded-full border-2 border-white absolute left-[-1.1rem] bg-gray-800">
              1
            </button>
            <div>
              <h1 className="text-[1.25rem] font-bold">
                No two clients are the same
              </h1>
              <p className="text-[1rem] md:text-[1.25rem]  mt-2">
                Your business is unique. We invest time to understand each
                client’s needs and provide tailored solutions.
              </p>
            </div>
          </div>
          <div className="relative border-dashed border-l-2 border-white pl-8 pb-4">
            <button className="px-3 py-1 rounded-full border-2 border-white absolute left-[-1.1rem] bg-gray-800">
              2
            </button>
            <h1 className="text-[1.25rem] font-bold">
              Data-driven digital strategy
            </h1>
            <p className="text-[1rem] md:text-[1.25rem]  mt-2">
              Whether developing an MVP or launching a multi-faceted campaign,
              we work nimbly and efficiently.
            </p>
          </div>
          <div className="relative border-dashed border-l-2 border-white pl-8 pb-4">
            <button className="px-3 py-1 rounded-full border-2 border-white absolute left-[-1.1rem] bg-gray-800">
              3
            </button>
            <h1 className="text-[1.25rem] font-bold">
              Agile approach to everything
            </h1>
            <p className="text-[1rem] md:text-[1.25rem]  mt-2">
              Whether developing an MVP or launching a multi-faceted campaign,
              we work nimbly and efficiently.
            </p>
          </div>
          <div className="relative border-dashed pl-8 pb-4">
            <button className="px-3 py-1 rounded-full border-2 border-white absolute left-[-1.1rem] bg-gray-800">
              4
            </button>
            <h1 className="text-[1.25rem] font-bold">
              Analyze. Improve. Repeat.
            </h1>
            <p className="text-[1rem] md:text-[1.25rem] mt-2">
              Good performance can always be better. We analyze our results and
              use the data to continuously raise the bar.
            </p>
          </div>
        </div>
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
