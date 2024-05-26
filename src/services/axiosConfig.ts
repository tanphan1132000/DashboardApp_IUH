import {API_ENDPOINT} from '@constants';
import axios, {AxiosRequestConfig} from 'axios';

const AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
});

// Add a request interceptor to add the access token to the headers of all requests
AxiosInstance.interceptors.request.use(config => {
  return config;
});

// REQUEST INTERCEPTOR
AxiosInstance.interceptors.request.use(
  async request => {
    console.log(
      `REQUEST: ${request.method?.toUpperCase()}: ${axios.getUri(request)}`,
    );
    console.log(`HEADER: ${JSON.stringify(request.headers)}`);
    console.log(`PARAMS: ${JSON.stringify(request.params)}`);
    console.log(`REQUEST BODY: ${JSON.stringify(request.data)}`);

    return request;
  },
  err => {
    console.log('REQUEST ERROR:', err);
    return Promise.reject(err);
  },
);

/**
 * @description GET method
 * @param {string} url
 * @param {AxiosRequestConfig} config
 * @returns {Promise}
 */
export const commonGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
) => {
  const {data} = await AxiosInstance.get<T>(url, config);
  return data;
};

/**
 * @description POST method
 * @param {string} url
 * @param {unknown} requestBody
 * @param {AxiosRequestConfig} config
 * @returns {Promise}
 */
export const commonPost = async <T>(
  url: string,
  requestBody: unknown,
  config?: AxiosRequestConfig,
) => {
  const {data} = await AxiosInstance.post<T>(url, requestBody, config);
  return data;
};
