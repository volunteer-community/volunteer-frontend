import { axiosImgInstance } from '@apis/axiosInstance/axiosInstance';

export interface PosterDetail {
  userId: number;
  posterId: number;
  posterTitle: string;
  posterContent: string;
  posterAuthor: string;
  heartCount: number;
  posterImgPath: string;
  profileImg: string;
  posterCreatedAt: string;
  posterUpdatedAt: string;
}

export interface Comments {
  commentId: number;
  commentContent: string;
  commentAuthor: string;
  commentCreatedAt: string;
  commentUpdatedAt: string;
  profileImg: string;
}

export const getPostDetail = async (posterId: number, communityId: number): Promise<PosterDetail> => {
  const response = await axiosImgInstance.get<PosterDetail>(`poster/${posterId}/community?communityId=${communityId}`);
  return response.data;
};

export const likePost = async (posterId: number, communityId: number) => {
  const response = await axiosImgInstance.post(`like/poster/${posterId}/community?communityId=${communityId}`);
  return response.data;
};

export const getComments = async (posterId: number, communityId: number): Promise<Comments[]> => {
  const response = await axiosImgInstance.get(`comment/poster/${posterId}/community?communityId=${communityId}`);
  return response.data;
};
