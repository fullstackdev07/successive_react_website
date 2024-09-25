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
const App = () => {
  useEffect(() => {
    Aos.init({duration : 2000});
  }, []);
  return (
    <div
      className="w-full h-full"
      style={{
        background:
          " -webkit-linear-gradient(45deg, hsla(206, 26%, 95%, 1) 75%, hsla(133, 18%, 75%, 1) 86%)",
      }}
    >
      <Navbar />
      <About />
      <Article />
      <Insights />
      <Main />
      <EnterPrise />
      <Footer />
    </div>
  );
};

export default App;
