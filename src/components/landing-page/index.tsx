import React from "react";
import Navbar from "../navbar";
import Hero from "./hero";
import Section1 from "./section1";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col">
      <Navbar />
      <Hero />
      <Section1 />
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default LandingPage;
