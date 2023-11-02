import tokenInstance from "@apis/axiosInstance/tokenInstance"
import { setCookie } from "@utils/cookies/cookies";

export const reissueToken = (token: string) => {
	const config = {
    headers: {
      Authorization: token
    },
  };
	const response = tokenInstance.post('/user/newToken', null, config);
	response.then((res) => {
		const newAccessToken = res.data.accessToken
		const newAccessTokenExpireTime = res.data.accessTokenExpireTime;
		const newRefreshToken = res.data.refreshToken;
		setCookie('accessToken', newAccessToken, newAccessTokenExpireTime)
	})
	return response
}