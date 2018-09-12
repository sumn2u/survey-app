import axios from 'axios';
// import store from '../store'
import { BASE_URL } from '../config/environment';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 0
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const config = error.config;
    // Do something with response error
    if (typeof error === 'undefined') {
      // request cancelled
      // when backend server is not available at all
      // toast.info("We cannot seem to reach our servers. Please check your internet connection and try again", {autoClose: false});
      return Promise.reject(error);
    } else if (typeof error.response === 'undefined') {
      // when request is timeout
      // toast.info("We cannot seem to reach our servers. Please check your internet connection and try again", {autoClose: false});
      return Promise.reject(error.response);
    } else if (error.response.status === 401) {
      // unathorized access 
      return Promise.reject(error.response);
    } else if (error.response.status === 403) {
      // Forbidden
      // toast.info("You are not authorized to perform that action", {autoClose: 5000});
      return Promise.reject(error.response);
    } else if (error.response.status === 500) {
      // toast.info("Our systems are currently facing a problem. Please check back later", {autoClose: false});
      return Promise.reject(error.response);
    } else {
      // we don't know what's going on
      return Promise.reject(error.response);
    }
  }
);

export const rootURL = BASE_URL;
export default instance;

export const CancelToken = axios.CancelToken;