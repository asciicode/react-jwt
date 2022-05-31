import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = (tags) => {
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const getFlickr = (tags) => {
  return axios.get("https://spring-security-jwt-351909.uc.r.appspot.com/flickr?tags="+tags, { headers: authHeader() });
};

const axiosService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  getFlickr,
};

export default axiosService;
