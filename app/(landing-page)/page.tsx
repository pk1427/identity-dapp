// import Navbar from "@/components/ui/navbar/navbar";
import React from "react";
import HeroSection from "./hero-section";
// import Section from "./sections";
import Navbar from "@/components/navbar/navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <Section/> */}
    </div>
  );
};

export default LandingPage;
