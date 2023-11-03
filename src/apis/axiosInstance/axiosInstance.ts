import axios from 'axios';

const mainCommuAxiosInstance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'http://13.209.253.193/maple',
});

export const getCommunityData = async () => {
  try {
    const response = await mainCommuAxiosInstance.get('/community');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCommunityDetail = async (communityId: number) => {
  try {
    const response = await mainCommuAxiosInstance.get(`/community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
