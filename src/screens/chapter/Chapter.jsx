import React from "react";
import { useParams } from "react-router-dom";
import useGetACourse from "@/hooks/useGetACourse";

const Chapter = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetACourse(id);
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading course: {error.message}</div>;

  return (
    <div>
      <h1>Chapter {data.title}</h1>
      {/* <h2>{data.title}</h2>
      <p>{data.description}</p> */}
      {/* Render other course details here */}
    </div>
  );
};

export default Chapter;
