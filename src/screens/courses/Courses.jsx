import useGetCourses from "@/hooks/useGetCourses";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Compass, Mail } from "lucide-react";
import SideBar from "@/components/SideBar";
import Spinner from "@/components/Spinner";
import { useToast } from "@/components/ui/use-toast";
const Course = () => {
  const { data, error, isLoading, isSuccess } = useGetCourses();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(data);

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (error) {
    return <h1>Error...{error.message}</h1>;
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter courses based on search query
  const filteredCourses = data.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row md:w-4/5">
      {/* Course Cards */}
      <div className="flex flex-wrap  md:px-10 pt-5 h-80 ">
        <div className="w-full flex space-x-4 px-4">
          <Input
            placeholder="Search a course"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <Button>Search</Button>
        </div>

        {filteredCourses.map((item) => (
          <div key={item._id} className="w-full lg:w-1/3 p-4">
            <NavLink
              to={`/courses/${item._id}`}
              className="block border rounded-lg"
            >
              <img
                className="w-full h-auto rounded-t-lg"
                src={item.cover}
                alt={item.title}
              />
              <div className="px-5 py-4">
                <div className="text-xl font-semibold">{item.title}</div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center bg-blue-400 px-3 py-1 gap-3 rounded-md text-xs text-white">
                    <BookOpen size={15} />
                    {item.chapters.length} chapters
                  </div>
                  <div
                    className={item.paid ? "text-green-500" : "text-blue-500"}
                  >
                    {item.paid ? "Paid" : "Free"}
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
