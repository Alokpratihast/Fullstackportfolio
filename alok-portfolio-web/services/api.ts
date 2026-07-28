import axios from "axios";


console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});



export default api;