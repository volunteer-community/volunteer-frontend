import axios from 'axios';

const mainCommuAxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getCommunityData = async () => {
  try {
    const response = await mainCommuAxiosInstance.get('/community');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
