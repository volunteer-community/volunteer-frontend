import Google from '../../components/Login/Google';
import Kakao from '../../components/Login/Kakao';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginDivider />
      <LoginButtons>
        <Kakao />
        <Google />
      </LoginButtons>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LoginTitle = styled.h1`
  position: relative;
  justify-content: flex-start;
  margin-top: 200px;
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 32px;
  color: #56c9b6;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LoginDivider = styled.div`
  width: 25%;
  height: 1px;
  background-color: #56c9b6;
  margin-bottom: 100px;
`;

export default LoginPage;
