import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "@/service/khair";

const useGetCourses = () => {
  return useQuery({
    queryKey: ["getAllCourses"],
    queryFn: getAllCourses,
  });
};

export default useGetCourses;
