import React from "react";
import AboutData from "../Data/AboutData.json"; 

const About = () => {
  return (
    <div className="flex items-center flex-col mt-8 md:mt-14 px-2">
      
      <div>
        <div
          className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto text-center leading-tight text-gray-900"
          data-aos="fade-right"
        >
          
          <h1>{AboutData.header.title[0]}</h1>
          {AboutData.header.title.slice(1, -1).map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
          <h1>{AboutData.header.title[AboutData.header.title.length - 1]}</h1>
        </div>
      
        <p className="text-center mt-4 text-sm md:text-base">
          {AboutData.description}
        </p>
      </div>

    
      <div className="ml-2 flex items-center relative right-80">
        <img
          src={AboutData.curvedImage.src}
          alt={AboutData.curvedImage.alt}
          className={AboutData.curvedImage.className}
        />
      </div>

      
      <div className="flex items-center gap-4 justify-center md:justify-start">
        <div>
          <div className="max-w-md inline-flex flex-nowrap overflow-hidden 
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),
          transparent_100%)]">
            <ul className="flex items-center justify-center 
            md:justify-start [&_li]:mx-8 [&_img]:max-w-none 
            animate-infinite-scroll">
              {AboutData.brandLogos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {AboutData.brandLogos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-between p-4 py-8 gap-6 rounded-2xl mt-8 bg-lightBackground" data-aos="fade-right">
        {AboutData.images.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 overflow-hidden group relative">
            <div className="relative rounded-lg overflow-hidden h-full group">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
