import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://khair-explains-backend.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCourses = async () => {
  const response = await apiClient.get("/courses");
  return response.data;
};

export const getACourse = async (id) => {
  const response = await apiClient.get(`/courses/${id}`);
  return response.data;
};
