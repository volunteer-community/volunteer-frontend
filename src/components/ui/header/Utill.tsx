import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCookie } from '@utils/cookies/cookies.ts';
import { useEffect, useState } from 'react';

const Utill = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token'));

  useEffect(() => {
    setIsLoggedIn(!!getCookie('token'));
  }, [isLoggedIn]);

  console.log('isLoggedIn:', isLoggedIn);

  return (
    <SignupBox>
      {!isLoggedIn ? (
        <>
          <SignupBtn>
            <Link to="/signup">회원가입</Link>
          </SignupBtn>
          <LoginBtn>
            <Link to="/login">로그인</Link>
          </LoginBtn>
        </>
      ) : (
        <LogoutBtn>
          <Link to="/logout">로그아웃</Link>
        </LogoutBtn>
      )}
    </SignupBox>
  );
};

export default Utill;

const SignupBox = styled.div`
  width: 15.5%;
  padding: 30px 0 0 0;
  span {
    width: 100px;
    display: inline-block;
    padding: 10px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
`;
const SignupBtn = styled.span`
  background: #304647;
  color: #fff;
`;
const LoginBtn = styled.span`
  background: #3aedf9;
  color: #fff;
  margin-left: 10px;
`;

const LogoutBtn = styled.span`
  background: #314547;
  color: #fff;
  margin-left: 10px;
`;
