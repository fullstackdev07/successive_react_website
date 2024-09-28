import React from "react";
import serviceSectionContent from "../Data/Servicesectiondata.json";

const ServiceSection = () => {
  const { sectionTitle, intro, firstpara, secondpara, callToAction, images } = serviceSectionContent;

 

  return (
    <div className="mt-2 mx-4" id="About">
      
      <article
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-10 bg-mediumgreen rounded-xl shadow-lg space-y-8 md:space-y-0 md:gap-12 lg:gap-16"
        data-aos="fade-left"
      >
       
        <div className="flex justify-center md:w-1/2">
          <img
            src={images[0].src}
            alt="Family"
            className="rounded-3xl object-cover h-full md:h-[26rem] shadow-md"
            data-aos="fade-up"
          />
        </div>

       
        <div className="md:w-1/2 text-left space-y-4 lg:space-y-6 ">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 
            leading-tight md:mt-3 lg:mt-[-2rem]"
            data-aos="fade-left"
          >
            {sectionTitle.main}
          </h1>

          <div className="mt-4 text-black leading-relaxed space-y-4">
            <p>{intro}</p>
            <p>{firstpara}</p>
            <p>{secondpara}</p>
          </div>
        </div>
      </article>

   
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-8 space-y-6 text-center mt-[-1rem]">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight max-w-3xl  mt-2"
          data-aos="fade-left"
        >
          {callToAction.title}
        </h1>

        <button
          className={`${callToAction.buttonClass} transition duration-300 hover:text-white px-6 py-2 md:px-5 md:py-2 rounded-lg shadow-lg md:text-xl`}
        >
          {callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
