import axios from 'axios';
import config from '../config';
import {dispatch, getStore} from '../store';
// Create Instance
const AxiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: 20000,
  headers: {'Content-Type': 'application/json'},
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('ERROR', error);
    console.log('ERROR CONFIG', error);
    if (!error.response) {
      return Promise.reject({
        status: 'failure',
        message: 'Please check your internet connection',
      });
    } else {
      return error.response;
    }
  },
);

export default AxiosInstance;
