import React from "react";
import Articledata from "../Data/Articledata.json"; 


const Article = () => {
  const { title, description, cards } = Articledata;

  return (
    <article className="mx-4">
      <div
        className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-14 px-8 bg-darkgray rounded-xl p-8"
        data-aos="fade-left"
      >
        <div className="text-center p-4 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mx-auto">
            {title.main}
            <span className="text-lightpink underline">{title.highlighted}</span>{" "}
            {title.another}
          </h1>
        </div>
        <p className="mb-6 max-w-2xl text-center">{description}</p>
        <div className="mt-6" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-center p-6 bg-white shadow-lg rounded-xl w-full md:w-1/3 min-h-[350px]"
              >
                <button className="p-5 mb-4 text-4xl rounded-full bg-lightgray text-green">
                  {/* Using Bootstrap icon with the class name from the JSON */}
                  <i className={card.icon}></i>
                </button>
                <h1 className="text-lg font-bold mb-2 mt-5">{card.title}</h1>
                <p className="text-sm text-start">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
