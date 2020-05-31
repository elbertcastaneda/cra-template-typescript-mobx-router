import AppConsts from "../lib/appconsts";
import axios from "axios";

const qs = require("qs");

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function (config) {
    // Set headers

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(error);
    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  }
);

export default http;
