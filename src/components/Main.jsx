import React from "react";
import { FaAt } from "react-icons/fa";
import { SiGrammarly } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Main = () => {
  return (
    <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-14 px-6 rounded-2xl">
      <div className="font-bold text-center mb-4">
        <h1 className="text-3xl md:text-5xl max-w-full mx-auto px-4" data-aos="fade-left">
          Predict Growth Analytics for Your
        </h1>
        <h1 className="text-3xl md:text-5xl max-w-2xl mx-auto leading-tight px-4" data-aos="fade-left">
          TikTok and Instagram
        </h1>
      </div>
      <div data-aos="fade-left">
        <p className="text-center text-gray-700 mb-4 px-4 max-w-3xl">
          Sprout builds and maintains strong network partnerships and
          integrations to help you unify your customer touch points and keep
          pace with changes in the social landscape.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6 bg-transparent p-2 rounded-md border border-green" data-aos="fade-right">
        <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 flex items-center gap-2">
          <FaInstagram />
          Instagram
        </button>
        <button className="px-6 py-2 text-green bg-white hover:bg-green-100 rounded-lg transition duration-200 flex items-center">
          <FaTiktok />
          TikTok
        </button>
      </div>

      <div className="flex items-center justify-between bg-white p-2 sm:p-2 w-full rounded-lg shadow" data-aos="fade-right">
        <FaAt className="text-green text-2xl mr-2" />
        <input
          type="text"
          placeholder="Username"
          className="flex-1 outline-none rounded-lg p-2 "
        />
        <button className="px-2 md:px-4 py-3 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 ml-2 text-[12px] md:text-[16px]">
          Check Growth
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-8" data-aos="fade-left">
      
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-green text-center p-6">
          <h1 className="text-green text-5xl mt-3 font-bold">80%+</h1>
          <p className="w-full md:w-64 mx-auto">
            reduction in average time to first response
          </p>
          <div className="flex items-center justify-center text-green text-3xl mt-3">
            <SiGrammarly />
            <span className="ml-2">Grammarly</span>
          </div>
        </div>

       
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-green text-center p-6 mt-6 md:mt-0">
          <h1 className="text-green text-5xl mt-3 font-bold">1,002%+</h1>
          <p className="w-full md:w-64 mx-auto mt-3">
            reduction in average time to first response
          </p>
          <div className="text-green font-bold text-3xl mt-3 italic">Trek</div>
        </div>

       
        <div className="w-full md:w-1/3 text-center p-6 mt-6 md:mt-0">
          <h1 className="text-green text-5xl mt-3 font-bold">2x</h1>
          <p className="w-full md:w-64 mx-auto mt-3">
            reduction in average time to first response
          </p>
          <div className="text-green font-bold text-3xl mt-3 italic">Trek</div>
        </div>
      </div>
    </article>
  );
};

export default Main;
