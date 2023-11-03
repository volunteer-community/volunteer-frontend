import React from 'react';
import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import CommunnityCover from '@assets/images/CommunnityCover.png';
import profile from '@assets/images/profile.png';

const IntroUserContent = () => {
  return (
    <S.IntroUserContent>
      <S.UserImgBox src={CommunnityCover} />
      <S.UserInforBox>
        <S.UserImg src={profile} />
        <S.UserName>김나라</S.UserName>
      </S.UserInforBox>
    </S.IntroUserContent>
  );
};

export default IntroUserContent;
