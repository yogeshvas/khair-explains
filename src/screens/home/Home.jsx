import Header from "../../components/Header.jsx";
import React from "react";
import { ContainerScroll } from "./components/shared/Hero.jsx";
import HeroSection from "./components/custom/HeroSection.jsx";
import Courses from "./components/custom/Courses.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <hr />
      <Courses />
    </div>
  );
};

export default Home;
