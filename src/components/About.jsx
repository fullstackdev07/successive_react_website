import React from "react";
import rating from "../assets/rating.png";
import TrustPilot from "../assets/TrustPilot.png";
import Instagram from "../assets/Instagram.png";
import Nature from "../assets/Nature.png";
import shopping from "../assets/shopping.png";
const About = () => {
  return (
    <div className="flex items-center flex-col mt-8 md:mt-16 px-4">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold max-w-lg text-center">
          Grow Your Business{" "}
          <span className="text-lightpink underline">Instagram</span> & Tiktok
          With Real Engaged Followers
        </h1>
        <p className="text-center mt-4 text-sm md:text-base">
          Ultra Premium White Glove Service...
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-6 md:mt-10 gap-4">
        <div>
          <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
        <div className="mt-4 md:mt-0">
          <img src={rating} className="h-6 md:h-8" />
        </div>
        <div className="mt-4 md:mt-0">
          <img src={TrustPilot} className="h-6 md:h-8" />
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between p-10 gap-6 rounded-lg mt-20"
        style={{
          background:
            "linear-gradient(45deg, hsla(192, 19%, 89%, 1) 72%, hsla(173, 13%, 86%, 1) 100%)",
        }}
      >
        <div className="w-full md:w-2/4">
          <img
            src={Instagram}
            alt="Instagram"
            className="rounded-lg w-full h-96 "
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src={Nature}
            alt="Nature"
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>
        <div className="w-full md:w-1/4">
          <img
            src={shopping}
            alt="Shopping"
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
