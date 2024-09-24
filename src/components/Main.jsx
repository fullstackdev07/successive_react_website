import React from "react";
import { FaAt } from "react-icons/fa";
import { SiGrammarly } from "react-icons/si";

const Main = () => {
  return (
    <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-6 rounded-2xl">
      <div className="font-bold text-3xl md:text-4xl text-center mb-4">
        <h1>Predict Growth Analytics for Your TikTok and Instagram</h1>
      </div>
      <div>
        <p className="text-center text-gray-700 mb-6 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          repudiandae saepe dolor quis accusantium reprehenderit, et dicta
          repellendus deserunt, illum aliquam rerum beatae facilis.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6 bg-white p-2 rounded-md">
        <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200">
          Get Started
        </button>
        <button className="px-6 py-2 text-green bg-white border border-green hover:bg-green-100 rounded-lg transition duration-200">
          Learn More
        </button>
      </div>

     
      <div className="flex items-center justify-between bg-white p-4 w-full rounded-lg shadow">
        <FaAt className="text-green text-2xl mr-2" />
        <input
          type="text"
          className="flex-1 outline-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="px-4 py-2 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 ml-2">
          Check Growth
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-14">
  {/* First Block */}
  <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-green text-center p-6">
    <h1 className="text-green text-4xl mt-3">80%+</h1>
    <p className="w-full md:w-64 mx-auto">Reduction in average time to first response</p>
    <div className="flex items-center justify-center text-green text-2xl mt-3">
      <SiGrammarly />
      <span className="ml-2">Grammarly</span>
    </div>
  </div>

  {/* Second Block */}
  <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-green text-center p-6 mt-6 md:mt-0">
    <h1 className="text-green text-4xl mt-3">1,002%+</h1>
    <p className="w-full md:w-64 mx-auto mt-3">
      Reduction in average time to first response
    </p>
    <div className="text-green font-bold text-2xl mt-3">Trek</div>
  </div>

  {/* Third Block */}
  <div className="w-full md:w-1/3 text-center p-6 mt-6 md:mt-0">
    <h1 className="text-green text-4xl mt-3">2x</h1>
    <p className="w-full md:w-64 mx-auto mt-3">
      Reduction in average time to first response
    </p>
    <div className="text-green font-bold text-2xl mt-3">Trek</div>
  </div>
</div>

    </article>
  );
};

export default Main;
