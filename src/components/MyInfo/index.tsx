import ActiveInfo from './ActiveInfo';
import ProfileInfo from './ProfileInfo/index';
import styled from 'styled-components';
import { useGetMyActive } from '@hooks/queries/my/useMy';
import HeartIcon from '@assets/images/heart_icon.svg';
import CommunityIcon from '@assets/images/community_icon.svg';
import CommentIcon from '@assets/images/comment_icon.svg';
import GetHeart from '@assets/images/get_heart_icon.svg';
import Createlnfo from './Communinty/CreateInfo/Createlnfo';

const MyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  gap: 30px;
`;

const MyInfo = () => {
  const { data: activeData } = useGetMyActive();
  const { communityUserCount, countOfPosterLike, countOfLikedPoster, commentCount } = activeData?.data.data ?? [];
  const userActiveData = activeData
    ? [
        { icon: HeartIcon, name: '좋아요 한 게시글', value: countOfPosterLike },
        { icon: GetHeart, name: '좋아요 받은 게시글', value: countOfLikedPoster },
        { icon: CommunityIcon, name: '내가 활동한 커뮤니티', value: communityUserCount },
        { icon: CommentIcon, name: '내가 작성한 댓글', value: commentCount },
      ]
    : [];
  return (
    <MyInfoWrap>
      <ProfileInfo />
      <ActiveInfo userActiveData={userActiveData} />
      <Createlnfo/>
    </MyInfoWrap>
  );
};

export default MyInfo;
