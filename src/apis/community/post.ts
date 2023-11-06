import { axiosImgInstance, axiosInstance } from "@apis/axiosInstance/axiosInstance"

export interface Community {
  communityData: FormData
  categoryType: string
}
export const createCommunity = async ({ communityData, categoryType }:Community) => {
  const response = await axiosImgInstance.post(`community?categoryType=${categoryType}`, communityData);
  return response;
};

interface UpdataCommunity extends Community{
  communityId: number
}
export const upadateCommunity = async ({ communityData, communityId }:UpdataCommunity) => {
  const response = await axiosImgInstance.put(`community/${communityId}`, communityData);
  return response
}
