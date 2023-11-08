import * as S from '@pages/community/stlyes/PostStyle.ts';
import { PosterList } from '@interfaces/post.ts';

// interface Props {
//   posterListData: { data: { posterList: PosterList[] } } | undefined;
// }

interface Props {
  posterListData: any;
}

const PostUserProfile: React.FC<Props> = ({ posterListData }) => {
  if (!posterListData || !posterListData.data || !posterListData.data.posterList) {
    return <S.NoContent>유저정보가 없습니다.</S.NoContent>;
  }

  console.log('posterListData:', posterListData.data.posterList[0].posterAuthor);

  return (
    <S.PostUserBox>
      <S.UserProfileBox>
        <S.UserProfileImg src={posterListData.data.posterList[0].profileImg} alt="User Profile" />
        <S.UserProfileName>{posterListData.data.posterList[0].posterAuthor}</S.UserProfileName>
      </S.UserProfileBox>
      <S.PostCommunityTitle>{posterListData.data.posterList[0].posterTitle}</S.PostCommunityTitle>
    </S.PostUserBox>
  );
};

export default PostUserProfile;
