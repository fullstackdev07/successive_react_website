import React from "react";
import insightsData from "../Data/Insights.json";

const Insights = () => {
  return (
    <article className="mx-4">
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
              className="flex items-center gap-2 py-2 px-4 text-white hover:text-black hover:bg-white rounded-full transition-all duration-300"
            >
              <i className={button.icon}></i>{" "}
             
              {button.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-2 p-6 px-4 md:px-16 lg:px-28 rounded-lg">
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 h-56 md:h-80 lg:h-96 rounded-xl bg-ramagreen">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
              Placeholder
            </h1>
          </div>

          <div className="w-full lg:w-1/2 text-white px-4 md:px-8 lg:px-12">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              {insightsData.header}
            </h1>
            <p className="text-lightgreen leading-relaxed mb-6">
              {insightsData.description}
            </p>

            <ul className="space-y-4 text-lightgreen">
              {insightsData.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <i className="bi bi-check-circle text-white mt-1"></i>{" "}
                 
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
            <a href={insightsData.weblink} target="_blank" rel="noopener noreferrer">
              <button className="mt-6 px-6 py-2 text-green bg-white rounded-2xl hover:bg-green-700 transition duration-200 ease-in-out">
                {insightsData.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Insights;
