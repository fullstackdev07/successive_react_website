import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
    return (
        <div
            className="flex items-center justify-center flex-col md:flex-row max-w-7xl mx-auto mt-10 px-8 bg-lightBackground rounded-3xl shadow-2xl p-10 space-y-8 space-x-4 md:space-y-0"
            data-aos="fade-right"
        >
            <div className="w-full md:w-1/2 text-center md:text-left text-darkgreen">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>

                <div className="space-y-6">
                    <div className="flex flex-col items-center md:items-start">
                        <label className="text-xl font-medium text-gray-600">
                            Office Address
                        </label>
                        <p className="text-lg font-semibold text-darkgreen">
                            120 Adelaide Street West, Suite 2500
                        </p>
                        <p className="text-lg text-gray-600">Toronto, Ontario M5H 1T1</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <label className="text-xl font-medium text-gray-600">Email</label>
                        <p className="text-lg font-semibold text-ramagreen">
                            info@9thco.com
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <label className="text-xl font-medium text-gray-600">Phone</label>
                        <p className="text-lg font-semibold text-ramagreen">416.923.9898</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <form className="flex flex-col gap-6 w-full">
                    <div className="flex items-center bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                        <MdEmail className="text-ramagreen text-2xl" />
                        <input
                            type="email"
                            className="w-full rounded-lg outline-none placeholder-gray-400 text-gray-700"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div className="flex items-center bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                        <FaUserCircle className="text-ramagreen text-2xl" />
                        <input
                            type="text"
                            className="w-full rounded-lg outline-none placeholder-gray-400 text-gray-700"
                            placeholder="Enter Your Name"
                        />
                    </div>

                    <div className="flex items-start bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                        <FaMessage className="text-ramagreen text-2xl mt-2" />
                        <textarea
                            className="w-full h-32 rounded-lg outline-none placeholder-gray-400 text-gray-700 resize-none"
                            placeholder="Enter Your Message"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="px-6 py-3 text-white bg-darkgreen hover:bg-darkgreen rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
