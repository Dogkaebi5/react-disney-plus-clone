import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8c7c478de1e8748c7b48fee7c920fe94",
    language: "ko-KR",
  }
})

export default instance;