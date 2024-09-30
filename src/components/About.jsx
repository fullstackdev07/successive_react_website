import React from "react";
import aboutData from "../Data/Aboutdata.json";

const About = () => {
  return (
    <div className="flex items-center flex-col mt-28 md:mt-28 px-2" id="home">
      <div>
        <div
          className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto text-center text-gray-900"
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
                <li key={index} className="text-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-20 rounded-xl"
                  />
                  <p className="text-gray-400 text-[1rem]">{logo.label}</p>
                </li>
              ))}
            </ul>

            <ul
              className="flex items-center justify-center md:justify-start 
            [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {aboutData.brandLogos.map((logo, index) => (
                <li key={index} className="text-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-20 rounded-xl"
                  />
                  <p className="text-gray-400 line-clamp-1">{logo.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center max-w-7xl mx-auto mt-14 px-8 md:px-48 bg-darkgray rounded-xl md:h-[48rem] bg-cover bg-center bg-about-image overflow-hidden">
        <div className="w-full md:w-[90%] lg:w-96 text-white my-8 md:my-0">
          {aboutData.sections.map((ele, index) => (
            <div
              className={`relative pl-8 pb-12" key={index} ${index === 3 ? "" : "border-dashed border-l-2 border-white"
                }`}
              key={Math.random()}
            >
              <button className="px-3 py-1 rounded-full border-2 border-white absolute left-[-1.1rem] bg-gray-800">
                {ele.step}
              </button>
              <div>
                <h1 className="text-[1.50rem] font-bold mt-1">{ele.title}</h1>
                <p className="text-[1rem] md:text-[1.25rem] pb-2">
                  {ele.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

// {
//   "step": 1,
//   "title": "No two clients are the same",
//   "description": "Your business is unique. We invest time to understand each client’s needs and provide tailored solutions."
// },
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
