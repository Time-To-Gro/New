import axios from "axios";

const API_URL = "http://localhost:5555/api/users";

// Axios default settings
axios.defaults.withCredentials = true; // Ensures cookies are included

// Signup Function
export const signup = async (name, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/signup`, { name, email, password });
    return res.data;
  } catch (error) {
    console.log("hello");
    return error;
  }
};

// Login Function
export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    return error;
  }
};

// Logout Function
export const logout = async () => {
  try {
    const res = await axios.get(`${API_URL}/logout`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// Check Authentication
export const checkAuth = async () => {
  try {
    const res = await axios.get(`${API_URL}/me`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log("error");
    return null; // User is not authenticated
  }
};
