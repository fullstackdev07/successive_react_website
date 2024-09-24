import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { Ri24HoursLine, RiUserSettingsFill } from "react-icons/ri";

const cards = [
  {
    icon: <FaUserCheck />,
    title: "Real Engaged Followers",
    description:
      "Get the insights your team has been waiting for - now. You won't spend months onboarding, wondering how much of your budget went to learning how to use our platform.",
  },
  {
    icon: <Ri24HoursLine />,
    title: "Your 24/7 Social Media Assistant",
    description:
      "Accelerate business processes with AI-powered workflows designed to save marketers valuable time, provide better access to actionable data, and allow your team to focus on growth.",
  },
  {
    icon: <RiUserSettingsFill />,
    title: "1 On 1 Account Management",
    description:
      "Elevate your business without rebuilding your tech stack. Our global Salesforce partnership and social network integrations make it easy to work within your current processes.",
  },
];

const Article = () => {
  return (
    <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-4 bg-darkgray rounded-xl p-10">
      <div className="text-center p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mx-auto">
          Driving <span className="text-lightpink underline">Business</span>{" "}
          Impact
        </h1>
      </div>
      <p className="mb-6 max-w-2xl text-center">
        Sprout's Unified Social Media Management Platform Enables Your Team To
        Extract Real Business Value, Strengthen Your Market Position And Drive
        Revenue-Quickly.
      </p>
      <div className="mt-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center p-6 bg-white shadow-lg rounded-xl w-full md:w-1/3 min-h-[350px]"
            >
              <button className="p-5 mb-4 text-4xl rounded-full bg-lightgray text-green">
                {card.icon}
              </button>
              <h1 className="text-lg font-bold mb-2 mt-5">{card.title}</h1>
              <p className="text-sm text-start">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Article;
