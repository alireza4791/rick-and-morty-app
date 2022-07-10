import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const ApiCaller = (apiCallerConfig: AxiosRequestConfig) => {
  const axiosInstance: AxiosInstance = Axios.create({
    // mode: 'no-cors',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json',
  });
  axiosInstance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error?.response)
      return error.response;
    }
  );
  return axiosInstance.request(apiCallerConfig);
};
