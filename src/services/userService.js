import axios from "../axios";

const handleLoginApi = () => {
  return axios.post("/api/login");
};

export default handleLoginApi;
