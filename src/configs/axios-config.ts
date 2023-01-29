import axios from 'axios'
import defaultConfig from './base-url';

export default axios.create({
  baseURL: defaultConfig.BASE_PATH
});

export const setToken = (token: string) => {
    console.log("called setUrlConfig");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const axiosPrivate = axios.create({
  baseURL: defaultConfig.BASE_PATH,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

axiosPrivate.interceptors.response.use(
  function(response) {
    return response;
  },
  function(er) {
    if (axios.isAxiosError(er)) {
      if (er.response) {
        if (er.response.status === 401) {
        //   history.replace('/login');
        }
      }
    }

    return Promise.reject(er);
  }
);
