import axios from "axios";
import { getCookie } from "./cookie";
import { useHistory } from "react-router-dom";
import { removeCookie } from "./cookie";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import history from "./history";

//const history = useHistory();

const instance1 = axios.create({
  baseURL: "http://172.16.163.153:4000",
  timeout: 1000,
  /*headers: {'Content-Type': "application/json"}*/
});

const instance2 = axios.create({
  baseURL: "http://172.16.163.153:4000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${getCookie("myToken")}`,
  },
});

instance2.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `${getCookie("myToken")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance2.interceptors.response.use(
  (response) => {
    console.log(response);

    // Return a successful response back to the calling service
    return response;
  },
  (error) => {
    // Return any error which is not due to authentication back to the calling service
    console.log(error.response);
    if (error.response.status === 401) {
      console.log("error401");
      if (confirm("인증이 만료되었습니다. 이동하시겠습니까?")) {
        removeCookie("myToken");
        history.push("/login");

        //(location.href = "/login");
        // history.pushState(null, "", "/login");
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export { instance1, instance2 };
