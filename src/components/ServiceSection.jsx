import serviceSectionContent from "../Data/Servicesectiondata.json";
import family from "../assets/family.png";

const ServiceSection = () => {
    const { sectionTitle, intro, firstpara, secondpara, callToAction } = serviceSectionContent;

    return (
        <div className="mx-4">
            <article
                className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 bg-mediumgreen rounded-xl shadow-lg p-6 space-y-6 md:space-y-0 md:gap-8 "
                data-aos="fade-left"
            >
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={family}
                        alt="family"
                        className="rounded-3xl object-cover h-96 shadow-md" 
                        data-aos="fade-up"
                    />
                </div>

                <div className="md:w-1/2 ">
                    <h1 className="text-3xl md:mt-[-4rem] mt-4 md:text-5xl max-w-lg font-bold text-left text-gray-800 
                    ">
                        {sectionTitle.main}{" "}
                        {/* <span className="text-lightpink underline">
                            {sectionTitle.highlight}
                        </span>{" "}
                        {sectionTitle.subTitle} */}
                    </h1>

                    <div className="mt-4">
                        <p className="text-base text-black leading-relaxed">{intro}</p>
                        <p className="text-base text-black leading-relaxed mt-3">{firstpara}</p>
                        <p className="text-base text-black leading-relaxed mt-3">{secondpara}</p>
                    </div>
                </div>
            </article>

            <div className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-10 px-4 rounded-xl p-6 space-y-8 text-center">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-gray-800">
                        {callToAction.title}
                    </h1>
                </div>
                <div>
                    <button className={`${callToAction.buttonClass} transition duration-300 hover:bg-lightpink hover:text-white`}>
                        {callToAction.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
