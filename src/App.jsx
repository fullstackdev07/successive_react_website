import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Article from "./components/Article";
import Insights from "./components/Insights";
import Main from "./components/Main";
import EnterPrise from "./components/EnterPrise";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        background:
          "background: -webkit-linear-gradient(90deg, hsla(134, 18%, 76%, 1) 1%, hsla(146, 18%, 84%, 1) 73%, hsla(133, 18%, 75%, 1) 93%)",
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
