import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const createInstance = (contentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
  };
  const instance = axios.create(config);
  instance.interceptors.request.use((config) => {
    const token = '안녕';
    if (token) {
      config.headers = config.headers || {};
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
