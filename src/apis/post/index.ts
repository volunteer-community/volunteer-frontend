import { axiosImgInstance } from "@apis/axiosInstance/axiosInstance"
interface PostData {
	postData: FormData
	communityId: number
}
export const createPost = async ({postData, communityId}:PostData ) => {
	const response = await axiosImgInstance.post(`poster/community/${communityId}`, postData);
	return response
}
interface UpdatePostData extends PostData {
	postId: number
}
export const updatePost = async({postData, communityId, postId}:UpdatePostData) => {
	const response = await axiosImgInstance.put(`poster/${postId}/community?communityId=${communityId}`, postData)
	return response
}