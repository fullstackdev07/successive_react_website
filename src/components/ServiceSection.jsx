import serviceSectionContent from "../Data/Servicesectiondata.json";
import family from "../assets/family.png";
import awards from "../assets/awards.png";

const ServiceSection = () => {
    const { sectionTitle, description, callToAction } = serviceSectionContent;

    // Assuming you want to include both family and awards images
    const images = [
        { src: family, alt: "Family"}, // Example class
        { src: awards, alt: "Awards"}, // Example class
    ];

    return (    
        <div className="mx-4">
            <article className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-10 px-4 bg-mediumgreen rounded-xl p-4 space-y-4" data-aos="fade-left">
                <div>
                    <h1 className="text-3xl md:text-5xl max-w-lg font-extrabold text-center leading-tight">
                        {sectionTitle.main}{" "}
                        <span className="text-lightpink underline">{sectionTitle.highlight}</span> {sectionTitle.subTitle}
                    </h1>
                </div>

                <div className="max-w-xl text-center">
                    <p className="text-base text-black leading-relaxed">{description}</p>
                </div>

                {images.map((image, index) => (
                    <div className="w-full flex justify-center mt-7" key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            // className={image.className}
                        />
                    </div>
                ))}
            </article>

            <div className="flex items-center justify-center flex-col max-w-7xl mx-auto mt-10 px-4 rounded-xl p-6 space-y-8 text-center">
                <div>
                    <h1 className="font-bold text-3xl md:text-5xl max-w-2xl">{callToAction.title}</h1>
                </div>
                <div>
                    <button className={callToAction.buttonClass}>
                        {callToAction.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
