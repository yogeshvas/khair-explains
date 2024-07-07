import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;

export const getAllCourses = async () => {
  const response = await apiClient.get("/v1/courses");
  return response.data;
};

export const getACourse = async (id) => {
  const response = await apiClient.get(`/v1/courses/${id}`);
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post("/v1/auth/login", { email, password });
  return response.data;
};

export const signup = async (name, email, password) => {
  const response = await apiClient.post("/v1/signup", {
    name,
    email,
    password,
  });
  return response.data;
};

export const getMe = async () => {
  const response = await apiClient.get("/v1/me");
  return response.data;
};
