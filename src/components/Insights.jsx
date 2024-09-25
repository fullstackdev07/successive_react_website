import React from "react";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { BsSoundwave } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiUserListDuotone } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";

const Insights = () => {
  const buttons = [
    { icon: <FaEnvelope />, label: "Engagement" },
    { icon: <FaTelegramPlane />, label: "Publishing" },
    { icon: <SiGoogleanalytics />, label: "Analytics" },
    { icon: <BsSoundwave />, label: "Listening" },
    { icon: <HiOutlineSpeakerphone />, label: "Advocacy" },
    { icon: <PiUserListDuotone />, label: "Influencer Marketing" },
  ];

  return (
    <div className="mx-4">

    <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-4 bg-green rounded-2xl" data-aos="fade-right">
      <div className="flex flex-wrap items-center justify-center 
      gap-4 px-6 py-2 mt-6 backdrop-blur-sm bg-white/30 rounded-2xl">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center gap-2 py-2 px-4 text-white hover:text-black hover:bg-white rounded-full transition-all duration-300"
            >
            {button.icon}
            {button.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row mt-2 p-6 px-8 md:px-28 rounded-lg">
        <div className ="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0 h-56 md:h-96 bg-darkgreen rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Placeholder
          </h1>
        </div>

        <div className="md:w-1/2 w-full text-white px-6 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Discover Essential Insights
          </h1>
          <p className="text-lightgreen leading-relaxed">
            Uncover key learnings from millions of unfiltered thoughts,
            feelings, and opinions to enhance your current strategy and guide
            future action.
          </p>

          <ul className="mt-3 space-y-4 text-lightgreen">
            <li className="flex items-start gap-2">
              <AiOutlineCheck className="text-white mt-1" />
              <span>
                Automatically sift through billions of data points to zero in on
                trends, insights, and key learnings.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AiOutlineCheck className="text-white mt-1" />
              <span>
                Generate AI summaries of long-form messages to quickly and
                easily understand insights.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AiOutlineCheck className="text-white mt-1" />
              <span>
                Surface notable conversation trends in your key topics with
                AI-powered sentence insights.
              </span>
            </li>
          </ul>
          <button className="px-6 py-2 mt-4 text-green bg-white hover:bg-green-700 rounded-2xl hover:bg-green-700 transition duration-200">
            Explore Our Listening Features
          </button>

        </div>
      </div>
    </article>
        </div>
  );
};

export default Insights;

