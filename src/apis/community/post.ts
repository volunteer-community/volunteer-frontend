import { axiosImgInstance } from "@apis/axiosInstance/axiosInstance"

export const createCommunity = async ({ formData, categoryType }: { formData: FormData; categoryType: string }) => {
  const response = await axiosImgInstance.post(`community?categoryType=${categoryType}`, formData);
  return response;
};

interface UpdataCommunity {
  communityData: FormData
  communityId: number
}
export const upadateCommunity = async ({ communityData, communityId }:UpdataCommunity) => {
  const response = await axiosImgInstance.put(`community/${communityId}`, communityData);
  return response
}