import { axiosImgInstance } from "@apis/axiosInstance/axiosInstance"

export interface CommunityPost {
  communityData: FormData
  categoryType: string
}
export const createCommunity = async ({ communityData, categoryType }:CommunityPost) => {
  const response = await axiosImgInstance.post(`community?categoryType=${categoryType}`, communityData);
  return response
};

interface UpdataCommunity extends CommunityPost{
  communityId: number
}
export const upadateCommunity = async ({ communityData, communityId }:UpdataCommunity) => {
  const response = await axiosImgInstance.put(`community/${communityId}`, communityData);
  return response
}
