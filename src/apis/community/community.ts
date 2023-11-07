import { axiosInstance } from '@apis/axiosInstance/axiosInstance';

export const getCommunityData = async () => {
  try {
    const response = await axiosInstance.get('community');
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error) {
      console.error("Can't find community data", error);
    } else {
      console.error('An unknown error occurred.');
    }
  }
};

export const getCommunityDetail = async (communityId: number) => {
  try {
    const response = await axiosInstance.get(`community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendCommunityData = async (communityId: number) => {
  try {
    const response = await axiosInstance.post(`community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPostData = async (communityId: number) => {
  try {
    const response = await axiosInstance.get(`poster/community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
