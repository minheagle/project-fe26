import axios from "axios";
import { useDispatch } from "react-redux";
import { getRefreshToken } from "./redux/actions";

const dispatch = useDispatch;
const axiosInstance = axios.create({
  baseURL: "http://localhost/Cellphones/api",
  withCredentials: true,
  timeout: 3 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// handle before send to server !!!
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  async (error) => {
    // await console.log(error);
    return Promise.reject(error);
  }
);

//  handle before return for client
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log(err);
    const originalConfig = err.config;

    if (originalConfig.url !== "/Auth/auth.php" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosInstance.post("/Auth/refreshToken.php", {
            refreshToken: JSON.parse(localStorage.getItem("refreshToken")),
          });

          const { accessToken } = rs.data;

          dispatch(
            getRefreshToken({
              accessToken: accessToken,
            })
          );
          localStorage.setItem("accessToken", JSON.stringify(accessToken));

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
