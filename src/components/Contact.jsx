import React from "react";
import contactContent from "../data/contactContent.json";

const Contact = () => {
    const { title, contactUs, contactDetails, form } = contactContent;

    return (
        <div className="mx-4" id="contact">
            <div
                className="flex items-center justify-center flex-col md:flex-row max-w-7xl mx-auto mt-10 px-10 bg-lightBackground rounded-3xl shadow-2xl p-10 space-y-8 space-x-4 md:space-y-0"
                data-aos="fade-right"
            >
                <div className="w-full md:w-1/2 text-center text-darkgreen">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center ">
                        {title}
                    </h1>

                    <div className="space-y-6">
                        <div className="flex flex-col items-center md:items-start">
                            <label className="text-6xl font-bold text-gray-600">
                                {contactUs.label}
                            </label>
                            <p className="text-center md:text-left mt-3">
                                {contactUs.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 w-full text-center md:text-left gap-6">
                            {contactDetails.map((detail, index) => (
                                <div key={index}>
                                    <label className="text-xl text-ramagreen">{detail.label}</label>
                                    <p className="text-gray-600">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                    <form className="flex flex-col gap-6 w-full mt-2">
                        <div className="flex items-center bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                            <i className={form.emailIconClass}></i>
                            <input
                                type="email"
                                className="w-full rounded-lg outline-none placeholder-gray-400 text-gray-700"
                                placeholder={form.emailPlaceholder}
                            />
                        </div>

                        <div className="flex items-center bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                            <i className={form.userIconClass}></i>
                            <input
                                type="text"
                                className="w-full rounded-lg outline-none placeholder-gray-400 text-gray-700"
                                placeholder={form.namePlaceholder}
                            />
                        </div>

                        <div className="flex items-start bg-white rounded-lg py-3 px-6 text-lg gap-4 shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out">
                            <i className={form.messageIconClass}></i>
                            <textarea
                                className="w-full h-32 rounded-lg outline-none placeholder-gray-400 text-gray-700 resize-none"
                                placeholder={form.messagePlaceholder}
                            ></textarea>
                        </div>

                        <button className="px-6 py-3 text-white bg-darkgreen hover:bg-darkgreen rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                            {form.submitButtonText}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
