import * as S from '@pages/community/stlyes/PostStyle.ts';
import PostUserProfileImg from '@assets/images/postUserProfileImg.png';

const PostUserProfile = () => {
  return (
    <S.PostUserBox>
      <S.UserProfileBox>
        <S.UserProfileImg src={PostUserProfileImg} />
        <S.UserProfileName>유저닉네임</S.UserProfileName>
      </S.UserProfileBox>
      <S.PostCommunityTitle>커뮤니티 제목</S.PostCommunityTitle>
    </S.PostUserBox>
  );
};

export default PostUserProfile;
