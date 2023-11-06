import { axiosInstance } from "@apis/axiosInstance/axiosInstance"
import { setCookie } from "@utils/cookies/cookies";


export const createUserAddInfo = async (addInfoData: Blob) => {
	try { 
		const response = await axiosInstance.post('user/signup', addInfoData)	
		const { accessToken, refreshToken, accessTokenExpireTime } = response.data.data;
    const date = new Date(accessTokenExpireTime)
		setCookie('accessToken', accessToken, date);
		setCookie('refreshToken', refreshToken, date);
		return response
		
	} catch (error) {
		console.error(error)
	}
}