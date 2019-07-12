import axios from "axios";

export const API_KEY = "23523739d9f1492291dbaa6a7f7393a1";

export default axios.create({
  baseURL: "https://newsapi.org/v2"
});
