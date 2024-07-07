import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home/Home";
import Course from "./screens/courses/Courses";
import Header from "./components/Header";
import Chapter from "./screens/chapter/Chapter";
import SideBar from "./components/SideBar";
import Newsletter from "./screens/newsletter/Newsletter";

function App() {
  const location = useLocation();
  const hideSidebar = !["/courses", "/newsletter"].includes(location.pathname);
  const hideHeader = location.pathname.includes("/courses/");

  return (
    <>
      {!hideHeader && <Header />}
      <div className="flex">
        {!hideSidebar && <SideBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:id" element={<Chapter />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
