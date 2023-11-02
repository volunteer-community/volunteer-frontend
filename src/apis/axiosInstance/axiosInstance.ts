import { reissueToken } from '@apis/auth/reissueToken';
import { getCookie } from '@utils/cookies/cookies';
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

  instance.interceptors.response.use((response) => response,
    async (error) => {
      const { status } = error.response
      const refreshToken = getCookie('refreshToken')
      if (status === 400) {
        const response = await reissueToken(refreshToken)
        return response
      } else {
        window.location.href ='/login'
      }
    },
  );

  return instance;
};

export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');
