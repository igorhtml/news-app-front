import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllNewsService() {
  const response = axios.get(`${baseURL}/news/findAll`);
  return response;
}

export function getTopNewService() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}
