import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getFlickr = (tags) => {
  return axios.get(API_URL + "/flickr?tags="+tags, { headers: authHeader() });
};

const axiosService = {
  getFlickr,
};

export default axiosService;
