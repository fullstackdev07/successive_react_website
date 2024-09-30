import React from "react";
import Articledata from "../Data/Articledata.json";

const Article = () => {
  const { title, description, cards } = Articledata;

  return (
    <article className="mx-4 mt-6" id="Service">
      <div
        className="flex items-center justify-center flex-col max-w-7xl 
        mx-auto mt-14 px-8 bg-darkgray rounded-xl p-8"
        data-aos="fade-left"
      >
        <div className="text-center p-4 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mx-auto">
            {title.main}
            <span className="text-lightpink underline">
              {title.highlighted}
            </span>{" "}
            {title.another}
          </h1>
        </div>
        <p className="mb-6 max-w-2xl text-center">{description}</p>
        <div className="mt-6" data-aos="fade-right">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-6 bg-opacity-25 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 w-full"
              >
                <button
                  className="p-2 mb-2 text-4xl rounded-full bg-lightgray text-green 
                transition-colors hover:bg-gray-300"
                >
                  
                  <img src={card.icon} alt="" className="h-8 w-8" />
                </button>
                <h1 className="text-lg font-bold mb-2 mt-2">{card.title}</h1>
                <p className="text-sm text-start line-clamp-4">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
