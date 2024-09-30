import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Article from "../components/Article";
import Insights from "../components/Insights";
import Counter from "../components/Counter";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="w-full h-full gradient_background">
            <Navbar />
            <div id="body-refrence">
            <About />
            <Article />
            <Insights />
            <Counter />
            <ServiceSection />
            <Contact />
            <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
