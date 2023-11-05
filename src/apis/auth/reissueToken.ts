
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
		const {accessToken, refreshToken, expirationDate } = res.data
		const newAccessToken = accessToken;
		const newAccessTokenExpireTime = expirationDate;
		const newRefreshToken = refreshToken;
		const expiration = new Date();
		expiration.setDate(expiration.getDate() + 14);
		const expiresStr = expiration.toUTCString();
		setCookie('accessToken', newAccessToken, newAccessTokenExpireTime)
		setCookie('refreshToken', newRefreshToken, expiresStr);
	})
	return response
}

