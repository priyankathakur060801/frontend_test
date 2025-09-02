import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-test-psgo.onrender.com/api",
});

export default API;
