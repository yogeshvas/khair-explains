import Header from "../../components/Header.jsx";
import React from "react";
import { ContainerScroll } from "./components/shared/Hero.jsx";
import HeroSection from "./components/custom/HeroSection.jsx";
import Courses from "./components/custom/Courses.jsx";
import Footer from "./components/custom/Footer.jsx";
import { TypewriterEffectDemo } from "../../components/HeroSectionTypeWriter.jsx";

const Home = () => {
  return (
    <div className={"w-screen"}>
      {/* <Header /> */}

      <HeroSection />
      <hr />
      <Courses />
      <hr />
      <TypewriterEffectDemo />
      <hr />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
