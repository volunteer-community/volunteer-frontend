import React from 'react';
import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import { useParams } from 'react-router-dom';
import { CommunityDetail, CommunityImgPath } from '@interfaces/Community.ts';

interface Props {
  DetailData: {
    data: {
      communityDetail: CommunityDetail;
      communityImgPathList: CommunityImgPath[];
    };
  };
}

const IntroPostContent: React.FC<Props> = ({ DetailData }) => {
  const { communityId } = useParams<{ communityId: string }>();

  const communityIdNumber = communityId ? parseInt(communityId, 10) : undefined;

  console.log('DetailData:', DetailData);
  console.log('DetailData.communityId:', DetailData.data.communityDetail.communityId);

  if (communityIdNumber === undefined) {
    return <div>Loading...</div>;
  }

  if (DetailData.data.communityDetail.communityId !== communityIdNumber) {
    return <div>커뮤니티를 찾을 수 없음!</div>;
  }

  return (
    <>
      <S.IntroPostBox>
        <S.IntroPostTitle>{DetailData.data.communityDetail.communityLocation}</S.IntroPostTitle>
        <S.IntroPostImg src={DetailData.data.communityImgPathList[0].communityImgPath} />
        <S.IntroPostContent>{DetailData.data.communityDetail.communityContent}</S.IntroPostContent>
      </S.IntroPostBox>
    </>
  );
};

export default IntroPostContent;
