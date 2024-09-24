import React from "react";
import rating from "../assets/rating.png";
import TrustPilot from "../assets/TrustPilot.png";
import Instagram from "../assets/Instagram.png";
import Nature from "../assets/Nature.png";
import Curved from "../assets/Curved.png";
import shopping from "../assets/shopping.png";

const About = () => {
    return (
        <div className="flex items-center flex-col mt-8 md:mt-16 px-4">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold max-w-xl text-center">
                    Grow Your Business{" "}
                    <span className="text-lightpink underline">Instagram</span> & Tiktok
                    With Real Engaged Followers
                </h1>
                <p className="text-center mt-4 text-sm md:text-base">
                    Ultra Premium White Glove Service...
                </p>
            </div>
            <div className="ml-2 flex items-center relative right-80">
                    <img src={Curved} alt="Curved" className="h-12 md:h-20"/>
                </div>
            <div className="flex items-center mt-6 md:mt-6 gap-4 justify-center md:justify-start">
            
                <div>
                    <button className="px-6 py-3 text-white bg-green hover:bg-green-700 rounded-lg transition duration-200 shadow-md">
                        Get Started
                    </button>
                </div>
               
                <div className="mt-4 md:mt-0 flex items-center">
                    <img src={rating} alt="Rating" className="h-6 md:h-8" />
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                    <img src={TrustPilot} alt="TrustPilot" className="h-6 md:h-8" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-6 rounded-lg mt-20 bg-lightBackground">
                <div className="w-full md:w-2/5">
                    <img
                        src={Instagram}
                        alt="Instagram"
                        className="rounded-lg w-full h-[25rem] object-cover"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <img
                        src={Nature}
                        alt="Nature"
                        className="rounded-lg w-full h-96 object-cover"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <img
                        src={shopping}
                        alt="Shopping"
                        className="rounded-lg w-full h-96 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
