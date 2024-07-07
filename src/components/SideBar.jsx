import { Compass, Mail } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light"); // Assuming you have a state for theme

  // Function to determine active route
  const isActiveRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Function to get background color based on theme and active route
  const getBackgroundColor = (routeName) => {
    if (isActiveRoute(routeName)) {
      return " bg-red-200 dark:bg-gray-900"; // Green background for light theme
    }
  };

  return (
    <>
      <div className="lg:w-1/5 lg:block hidden lg:flex-col border-r-2 rest-height  ">
        <div className="h-[90%] space-between">
          <ul className="mt-5 flex-col space-y-3 h-full">
            <li className="px-5">
              <NavLink
                to="/courses"
                className={`flex items-center py-2 px-4 gap-4 text-xl rounded-lg ${getBackgroundColor(
                  "courses"
                )}`}
              >
                <Compass size={20} />
                Browse
              </NavLink>
            </li>
            <li className="px-5 ">
              <NavLink
                to="/newsletter"
                className={`flex items-center py-2 gap-4 px-4 text-xl rounded-lg ${getBackgroundColor(
                  "newsletter"
                )}`}
              >
                <Mail size={20} />
                Newsletter
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="h-[5%] opacity-50 flex items-center w-full border-t-2 
        
        justify-center"
        >
          <h1> © 2024 Khair LTD</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;
