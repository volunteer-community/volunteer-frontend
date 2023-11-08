import { axiosImgInstance } from "@apis/axiosInstance/axiosInstance"

export interface CommunityPost {
  communityData: FormData
  categoryType: string
}
export const createCommunity = async (communityPostData: CommunityPost) => {
  const {communityData, categoryType } = communityPostData
  const response = await axiosImgInstance.post(`community?categoryType=${categoryType}`, communityData);
  return response
};

export interface UpdateCommunity extends CommunityPost{
  communityId: string | undefined
}
export const upadateCommunity = async (upadateCommunityPostData: UpdateCommunity) => {
  const { communityData, communityId } = upadateCommunityPostData
  const response = await axiosImgInstance.put(`community/${communityId}`, communityData);
  return response
}


