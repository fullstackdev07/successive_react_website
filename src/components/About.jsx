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
      {
        text: "design, build & ",
        className: "text-lightpink font-extrabold underline",
      },
      " &amp; ",
      { text: "grow", className: "text-lightpink font-extrabold underline" },
      " exceptional digital solutions",
    ],
  },
  description: "Ultra Premium White Glove Service...",
  button: {
    text: "Get Started",
    className:
      "px-6 py-3 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 shadow-md",
  },
  ratings: [
    { src: rating, alt: "Rating", className: "h-6 md:h-8" },
    { src: TrustPilot, alt: "TrustPilot", className: "h-6 md:h-8" },
  ],
  images: [
    { src: Instagram, alt: "Instagram", overlayText: "Hello World" },
    { src: Nature, alt: "Nature", overlayText: "Hello World" },
    { src: shopping, alt: "Shopping" },
  ],
  curvedImage: {
    src: Curved,
    alt: "Curved",
    className: "h-12 md:h-20",
  },
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
          <h1>
            {aboutContent.header.title[aboutContent.header.title.length - 1]}
          </h1>
        </div>
        <p className="text-center mt-4 text-sm md:text-base">
          {aboutContent.description}
        </p>
      </div>
      <div className="ml-2 flex items-center relative right-80">
        <img
          src={aboutContent.curvedImage.src}
          alt={aboutContent.curvedImage.alt}
          className={aboutContent.curvedImage.className}
        />
      </div>
      <div className="flex items-center gap-4 justify-center md:justify-start">
        <div>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
            className="max-w-md inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <img src="./facebook.svg" alt="Facebook" />
              </li>
              <li>
                <img src="./disney.svg" alt="Disney" />
              </li>
              <li>
                <img src="./airbnb.svg" alt="Airbnb" />
              </li>
              <li>
                <img src="./apple.svg" alt="Apple" />
              </li>
              <li>
                <img src="./spark.svg" alt="Spark" />
              </li>
              <li>
                <img src="./samsung.svg" alt="Samsung" />
              </li>
              <li>
                <img src="./quora.svg" alt="Quora" />
              </li>
              <li>
                <img src="./sass.svg" alt="Sass" />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <li>
                <img src="./facebook.svg" alt="Facebook" />
              </li>
              <li>
                <img src="./disney.svg" alt="Disney" />
              </li>
              <li>
                <img src="./airbnb.svg" alt="Airbnb" />
              </li>
              <li>
                <img src="./apple.svg" alt="Apple" />
              </li>
              <li>
                <img src="./spark.svg" alt="Spark" />
              </li>
              <li>
                <img src="./samsung.svg" alt="Samsung" />
              </li>
              <li>
                <img src="./quora.svg" alt="Quora" />
              </li>
              <li>
                <img src="./sass.svg" alt="Sass" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between p-4 py-8 gap-6 rounded-2xl mt-8 bg-lightBackground"
        data-aos="fade-right"
      >
        {aboutContent.images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 overflow-hidden group relative"
          >
            <div className="relative rounded-lg overflow-hidden h-full group">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* {image.overlayText && (
                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full overflow-hidden bg-green transition-all duration-300 ease-in-out">
                  <div className="text-white text-[20px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    {image.overlayText}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
