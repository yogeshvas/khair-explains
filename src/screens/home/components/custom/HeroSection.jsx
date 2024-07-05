import React from "react";
import { ContainerScroll } from "../shared/Hero";

const HeroSection = () => {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            I help to build your thoughts, <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              khair Explains!
            </span>
          </h1>
        </>
      }
    >
      <img
        src={`/img/hero.gif`}
        alt="hero"
        height={"auto"}
        width={"auto"}
        className="mx-auto rounded-2xl sm:object-cover h-full object-scale-down"
        draggable={false}
      />
    </ContainerScroll>
  );
};

export default HeroSection;
