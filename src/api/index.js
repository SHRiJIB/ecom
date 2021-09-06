import axios from "axios";

const API = axios.create({ baseURL: "https://ecom23.herokuapp.com" });

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
