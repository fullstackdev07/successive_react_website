import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Article from "./components/Article";
import Insights from "./components/Insights";
import Main from "./components/Main";
import EnterPrise from "./components/EnterPrise";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        background: "-webkit-linear-gradient(45deg, hsla(192, 19%, 89%, 1) 84%, hsla(158, 20%, 74%, 1) 98%)"
      }}
    >
      <Navbar />
      <About/>
      <Article/>
      <div style={{
        background: "-moz-linear-gradient(45deg, hsla(158, 20%, 74%, 1) 6%, hsla(192, 19%, 89%, 1) 66%)"
      }}>
      <Insights/>
      <Main/>
      <EnterPrise/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
