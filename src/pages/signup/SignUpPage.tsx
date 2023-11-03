import { ChangeEvent } from 'react';
import styled from 'styled-components';

const SignUpPage = () => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <SignUpPageContainer>
      <SignUpTitle>추가 정보 입력하기</SignUpTitle>
      <SignUpDivider />
      <ProfileImage />
      <InputLabel>이메일</InputLabel>
      <TextInput disabled placeholder="test@gmail.com" />
      <InputLabel>닉네임</InputLabel>
      <TextInput placeholder="닉네임을 작성해주세요." />
      <InputLabel>전화번호</InputLabel>
      <PhoneNumberContainer>
        <PhoneNumberInput disabled value="010" />
        <PhoneNumberSeparator>-</PhoneNumberSeparator>
        <PhoneNumberInput inputMode="numeric" maxLength={4} onInput={handleInput} />
        <PhoneNumberSeparator>-</PhoneNumberSeparator>
        <PhoneNumberInput inputMode="numeric" maxLength={4} onInput={handleInput} />
      </PhoneNumberContainer>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
`;

const SignUpTitle = styled.h1`
  position: relative;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 40px;
  color: #56c9b6;
`;

const SignUpDivider = styled.div`
  width: 500px;
  height: 1px;
  background-color: #56c9b6;
  margin-bottom: 50px;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #cccccc;
  margin-bottom: 50px;
`;

const InputLabel = styled.label`
  align-self: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333333;
  text-align: left;
  width: 450px;
`;

const TextInput = styled.input`
  width: 450px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #cccccc;
  margin-bottom: 40px;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  margin-bottom: 20px;
`;

const PhoneNumberInput = styled.input`
  width: 120px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  appearance: textfield;
  margin-bottom: 20[x];
`;

const PhoneNumberSeparator = styled.span`
  font-size: 30px;
  margin: 0 10px;
  color: #cccccc;
`;

const SignUpButton = styled.button`
  width: 450px;
  height: 70px;
  background-color: #56c9b6;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 40px;
`;

export default SignUpPage;
