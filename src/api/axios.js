import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    language: "ko-KR",
  }
})

export default instance;