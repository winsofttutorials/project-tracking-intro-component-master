import React from "react";
import Hero from "./components/Hero/Hero";
import ContentSection from "./components/ContentSection/ContentSection";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="desingMarkUp"></div>
        <Hero />
        <ContentSection />
      </div>
    </>
  );
};

export default App;
