import React, { useState } from "react";
import insightsData from "../Data/Insights.json";

const Insights = () => {
  const [category, setCategory] = useState("Healthcare");

  const filteredCategory = insightsData.buttons.find(
    (ele) => ele.category === category
  );

  return (
    <article className="mx-4" id="Projects">
      <div
        className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-4 bg-green rounded-2xl"
        data-aos="fade-right"
      >
        <div
          className="flex flex-wrap items-center justify-center 
      gap-4 px-6 py-2 mt-6 backdrop-blur-sm bg-white/30 rounded-2xl"
        >
          {insightsData.buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center justify-center gap-2 py-2 px-4 text-white hover:text-black hover:bg-white rounded-full transition-all duration-300"
              onClick={() => setCategory(button.category)}
            >
              <i className={button.icon}></i>
              {button.label}
            </button>
          ))}
        </div>

        {filteredCategory && (
          <div className="flex flex-col lg:flex-row items-center lg:items-start mt-2 p-6 px-4 md:px-16 lg:px-28 rounded-lg">
            <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 h-56 md:h-[23rem] lg:h-96 overflow-hidden rounded-3xl" data-aos="fade-right">
              <img
                src={filteredCategory.imgSrc}
                alt={filteredCategory.label}
                className="w-full h-full object-fill"
              />
            </div>

            <div className="w-full lg:w-1/2 text-white px-4 md:px-8 lg:px-12" data-aos="fade-left">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" >
                {insightsData.header}
              </h1>
              <p className="text-lightgreen leading-relaxed mb-6 line-clamp-3">
                {filteredCategory.description}
              </p>

              <ul className="space-y-2 text-lightgreen">
                {filteredCategory.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <i className="bi bi-check-circle text-white"></i>{" "}
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
              <a
                href={insightsData.weblink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 px-6 py-2 text-green bg-white rounded-2xl hover:bg-green-700 transition duration-200 ease-in-out">
                  {insightsData.buttonText}
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Insights;
