import React from "react";
import family from "../assets/family.png";
import awards from "../assets/awards.png";

const EnterPrise = () => {
    return (
        <div>
            <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-4 bg-mediumgreen rounded-xl p-6 space-y-8">

                <div>
                    <h1 className="text-3xl md:text-5xl max-w-lg font-extrabold text-center leading-tight">
                        Enterprise{" "}
                        <span className="text-lightpink underline">Solutions</span> for social
                        at scale
                    </h1>
                </div>


                <div className="max-w-xl text-center">
                    <p className="text-base md:text-lg text-black leading-relaxed">

                        Engagify provides a cost-effective way for taking care of our social media needs 24/7 and targets your target audience (Chat GPT and expand on this for the copywriting for this section)
                    </p>
                </div>


                <div className="w-full flex justify-center">
                    <img
                        src={family}
                        alt="family"
                        className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
                    />
                </div>


                <div className="w-full flex justify-center mt-7">
                    <img
                        src={awards}
                        alt="awards"
                        className="w-full md:w-1/3 object-contain rounded-lg shadow-lg"
                    />
                </div>


            </article>
            <div className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-20 px-4 rounded-xl p-6 space-y-8 text-center">
                <div>
                    <h1 className="font-bold text-4xl max-w-xl">Drive Smarter, faster business impact from social media.</h1>
                </div>
                <div>
                    <button className="px-6 py-2 text-white bg-green hover:bg-green-700 rounded-lg hover:bg-green-700 transition duration-200">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnterPrise;
