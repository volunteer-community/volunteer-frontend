import { useEffect, useState } from 'react';
import * as S from './style'
import { getCookie, setCookie } from '@utils/cookies/cookies';
import { access } from 'fs/promises';

interface LoginButtonProps {
  oauth: {
    [key: string]: any;
  };
  getLoading: (loading: boolean) => void;
}
const LoginButton = ({ oauth, getLoading }: LoginButtonProps) => {
  const [isLoading, setLoading] = useState(false);
  const { oauthName, korName, bgColor, img } = oauth;
  const handleClick = () => {
    setLoading(true);
    window.location.href = `${import.meta.env.VITE_SERVER_OAUTH2}/oauth2/authorization/${oauthName}`;
    getCookie('accessToken')
  };

  useEffect(() => {
    getLoading(isLoading);
  });

  return (
    <S.Button onClick={handleClick} color={bgColor} $fontColor={oauthName}>
      <S.ImgWrap>
        <S.Img src={img} alt={`${korName} 아이콘 `} />
      </S.ImgWrap>
      {korName} 로그인하기
    </S.Button>
  );
};

export default LoginButton;
