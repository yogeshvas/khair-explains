import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://khair-explains-backend.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default apiClient;

export const getAllCourses = async () => {
  const response = await apiClient.get("/courses");
  return response.data;
};

export const getACourse = async (id) => {
  const response = await apiClient.get(`/courses/${id}`);
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
};

export const signup = async (name, email, password) => {
  const response = await apiClient.post("/signup", {
    name,
    email,
    password,
  });
  return response.data;
};

export const getMe = async () => {
  const response = await apiClient.get("/me");
  return response.data;
};
