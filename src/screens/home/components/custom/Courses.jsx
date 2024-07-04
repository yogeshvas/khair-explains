import React from "react";
import { EvervaultCardDemo } from "../shared/CourseCard";

const Courses = () => {
  return (
    <>
      <div className="w-full items-center flex justify-center font-bold text-3xl pt-10">
        Our Courses
      </div>
      <div className="md:flex p-10 md:p-10 md:px-48 gap-3 items-center ">
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
    </>
  );
};

export default Courses;
