import { getACourse } from "@/service/khair";
import { useQuery } from "@tanstack/react-query";

const useGetACourse = (id) => {
  return useQuery({
    queryKey: ["getACourse", id],
    queryFn: () => getACourse(id),
  });
};

export default useGetACourse;
