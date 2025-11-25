import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_URL || "http://localhost:8000";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  return response.data;
};

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });

  return response.data;
};