import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Utill = () => {
  return (
    <SignupBox>
      <SignupBtn>
        <Link to="/signup">회원가입</Link>
      </SignupBtn>
      <LoginBtn>
        <Link to="/login">로그인</Link>
      </LoginBtn>
    </SignupBox>
  );
};

export default Utill;

const SignupBox = styled.div`
  width: 20%;
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
