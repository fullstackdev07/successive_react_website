import React from "react";
import rating from "../assets/rating.png";
import TrustPilot from "../assets/TrustPilot.png";
import Instagram from "../assets/Instagram.png";
import Nature from "../assets/Nature.png";
import Curved from "../assets/curved.png";
import shopping from "../assets/shopping.png";

const aboutContent = {
  header: {
    title: [
      "We help our clients ",
      { text: "design , build", className: "text-lightpink font-extrabold underline" },
      " &amp; ",
      { text: "grow", className: "text-lightpink font-extrabold underline" },
      " exceptional digital solutions"
    ]
  },
  description: "Ultra Premium White Glove Service...",
  button: {
    text: "Get Started",
    className: "px-6 py-3 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 shadow-md"
  },
  ratings: [
    { src: rating, alt: "Rating", className: "h-6 md:h-8" },
    { src: TrustPilot, alt: "TrustPilot", className: "h-6 md:h-8" }
  ],
  images: [
    { src: Instagram, alt: "Instagram", overlayText: "Hello World" },
    { src: Nature, alt: "Nature", overlayText: "Hello World" },
    { src: shopping, alt: "Shopping" }
  ],
  curvedImage: {
    src: Curved,
    alt: "Curved",
    className: "h-12 md:h-20"
  }
};

const About = () => {
  return (
    <div className="flex items-center flex-col mt-8 md:mt-14 px-2">
      <div>
        <div
          className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto text-center leading-tight text-gray-900"
          data-aos="fade-right"
        >
          <h1>{aboutContent.header.title[0]}</h1>
          {aboutContent.header.title.slice(1, -1).map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
          <h1>{aboutContent.header.title[aboutContent.header.title.length - 1]}</h1>
        </div>
        <p className="text-center mt-4 text-sm md:text-base">
          {aboutContent.description}
        </p>
      </div>
      <div className="ml-2 flex items-center relative right-80">
        <img src={aboutContent.curvedImage.src} alt={aboutContent.curvedImage.alt} className={aboutContent.curvedImage.className} />
      </div>
      <div className="flex items-center gap-4 justify-center md:justify-start">
        <div>
          <button className={aboutContent.button.className}>
            {aboutContent.button.text}
          </button>
        </div>

        {aboutContent.ratings.map((rating, index) => (
          <div key={index} className="mt-2 md:mt-0 flex items-center">
            <img src={rating.src} alt={rating.alt} className={rating.className} />
          </div>
        ))}
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between p-4 py-8 gap-6 rounded-2xl mt-8 bg-lightBackground"
        data-aos="fade-right"
      >
        {aboutContent.images.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 overflow-hidden group relative">
            <div className="relative rounded-lg overflow-hidden h-full group">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {image.overlayText && (
                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full overflow-hidden bg-green transition-all duration-300 ease-in-out">
                  <div className="text-white text-[20px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    {image.overlayText}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
