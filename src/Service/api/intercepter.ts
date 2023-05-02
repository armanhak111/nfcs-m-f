import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'https://nfcs-m-b.vercel.app/api';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const tokent = localStorage.getItem('token');
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${tokent}`;
    return config;
  }
});

export const $refreshApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$refreshApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const tokent = await localStorage.getItem('refresh');
  if (config && config.headers) {
    config.headers.refreshToken = `${tokent}`;
    return config;
  }
});

export default $api;
