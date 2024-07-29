"use client";

import { ArrowRight, Youtube } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { NavLink } from "react-router-dom";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "solutions",
    },
    {
      text: "in",
    },
    {
      text: "Javascript!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const openYouTubeChannel = () => {
    window.open("https://www.youtube.com/@khairexplains", "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Learn Tech in Hindi!
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={openYouTubeChannel}
          className="flex items-center justify-center gap-2 w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
        >
          <div className="flex">Youtube</div>
          <Youtube size={15} />
        </button>
        <NavLink to={"/courses"}>
          <button className="flex items-center justify-center gap-2 w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            <div className="flex">Courses</div>
            <ArrowRight size={15} />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
