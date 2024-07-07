import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useGetACourse from "@/hooks/useGetACourse";
import { Button } from "@/components/ui/button";
import { Github, LogOut, Moon, Pause, Play, Sun } from "lucide-react";
import ProfileButton from "@/components/ui/ProfileButton";
import { useTheme } from "@/components/theme-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const Chapter = () => {
  const { id } = useParams();
  const { theme, setTheme } = useTheme();
  const { data, error, isLoading } = useGetACourse(id);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.chapters.length > 0) {
      const firstVideoId = new URL(data.chapters[0].videoUrl).searchParams.get(
        "v"
      );
      setSelectedVideoId(firstVideoId);
    }
  }, [data]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleVideoClick = (videoUrl) => {
    const videoId = new URL(videoUrl).searchParams.get("v");
    setSelectedVideoId(videoId);
  };
  const handleSourceCodeClick = () => {
    window.open(data.sourceCode, "_blank");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading course: {error.message}</div>;

  return (
    <div className="w-screen">
      <div className="flex">
        <div className="w-1/5 border-r-2 lg:block hidden lg:flex-col">
          <div className="w-full items-center justify-center border-b-2">
            <div className="text-2xl font-bold px-6 pt-7 pb-3">
              {data.title}!
            </div>
            <div className="flex gap-2 px-6 pb-7">
              {data.techUsed.map((item, index) => (
                <div
                  key={index}
                  className="bg-violet-400 px-2 py-1 rounded-md text-xs text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Detail accordion */}
          <div className="border-b-2 p-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="px-3">Course Details</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-2">{data.desc}</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Chapter accordion */}
          <div className="h-lvh overflow-scroll">
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}

            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
            {data.chapters.map((video) => (
              <div
                key={video._id}
                className="px-4 py-4 border-b-2 cursor-pointer hover:underline"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <div className="flex gap-2 items-center">
                  <div className="">
                    {selectedVideoId ===
                    new URL(video.videoUrl).searchParams.get("v") ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </div>
                  <div className="text-base">{video.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Videos */}
        <div className="w-full md:w-4/5">
          <div className="w-full flex border-b-2 p-2 py-5 items-end justify-end">
            <div className="flex items-center mr-2 gap-6">
              <div className="">
                <NavLink to={"/courses"}>
                  <Button variant="ghost">
                    <div className="flex items-center gap-3">
                      <LogOut /> Back to courses
                    </div>
                  </Button>
                </NavLink>
              </div>
              <div className="hidden md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle Theme"
                  className=""
                  onClick={toggleTheme}
                >
                  <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle Theme</span>
                </Button>
              </div>
              <ProfileButton />
            </div>
          </div>
          <div className="w-full border-b-2 p-4">
            {selectedVideoId ? (
              <iframe
                width="100%"
                height="600px"
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="text-center text-gray-500"></div>
            )}
          </div>
          <div className="p-6 items-end w-full">
            <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
              <Button>
                <div className="flex gap-3 items-center">
                  <Github />
                  Source Code
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
