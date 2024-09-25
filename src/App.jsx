import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Article from "./components/Article";
import Insights from "./components/Insights";
import Main from "./components/Main";
import EnterPrise from "./components/EnterPrise";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Contact from "./components/Contact";
const App = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  }, []);
  return (
    <div
      className="w-full h-full"
      style={{
        background:
          "-webkit-linear-gradient(45deg, hsla(133, 18%, 75%, 1) 62%, hsla(180, 18%, 93%, 1) 78%, hsla(135, 19%, 75%, 1) 100%)",
      }}
    >
      <Navbar />
      <About />
      <Article />
      <Insights />
      <Main />
      <EnterPrise />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
