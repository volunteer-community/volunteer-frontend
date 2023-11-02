import { FC, useCallback } from 'react';

const Kakao: FC = () => {
  const Rest_api_key = import.meta.env.VITE_APP_KAKAO_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_APP_REDIRECT_URI;

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = useCallback(() => {
    window.location.href = kakaoURL;
  }, [kakaoURL]);

  return <button onClick={handleLogin}>카카오 로그인</button>;
};

export default Kakao;
