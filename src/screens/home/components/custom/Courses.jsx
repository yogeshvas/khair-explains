import React from "react";
import { EvervaultCardDemo } from "../shared/CourseCard";
import LinkPreview from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="my-10">
        <div className="w-full items-center flex justify-center font-bold text-3xl pt-10">
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
            Best{" "}
            <LinkPreview
              url="/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Courses
            </LinkPreview>{" "}
            curated for you.
          </p>
        </div>
        <div className="md:flex p-10 gap-3 items-center justify-center ">
          <EvervaultCardDemo
            title={"DSA"}
            desc={"Data Structure and Algorithm but better"}
            tag1="c++"
            tag2="leetcode"
          />
          <EvervaultCardDemo
            title={"DEV"}
            desc={"Learn mern dev but with lot of clone"}
            tag1="react"
            tag2="express"
          />
          <EvervaultCardDemo
            title={"DEVOPS"}
            desc={"Data Structure and Algorithm but better"}
            tag1="docker++"
            tag2="Kubernates"
          />
        </div>
        <NavLink to={"/courses"}>
          <div className="flex w-full items-center justify-center">
            <Button>Sell all Courses</Button>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Courses;
