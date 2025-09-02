import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-test-mu-five.vercel.app/api",
});

export default API;
