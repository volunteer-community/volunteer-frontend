import { axiosInstance } from "@apis/axiosInstance/axiosInstance"
import { setCookie } from "@utils/cookies/cookies";

interface LoginData {
	[key:string]: any
}


export const login = async (loginData: LoginData | undefined) => {
	if (loginData) {
		const { email, provider } = loginData
		console.log(provider)
		const response = await axiosInstance.post(`user/login?email=${email}&provider=${provider}`);
		const { accessToken, refreshToken, accessTokenExpireTime, refreshTokenExprieTime } = response.data.data;
		const accessTokenExpire = new Date(accessTokenExpireTime);
		const refreshTokenExprie = new Date(refreshTokenExprieTime)
		setCookie('accessToken', accessToken, accessTokenExpire)
		setCookie('refreshToken', refreshToken, refreshTokenExprie)
		return response
		
	}
}