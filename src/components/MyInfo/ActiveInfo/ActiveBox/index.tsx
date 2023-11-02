import * as S from './style';
import HeartIcon from '@assets/images/heart_icon.svg'
import CommunityIcon from '@assets/images/community_icon.svg'
import  CommentIcon from '@assets/images/comment_icon.svg'
import  GetHeart from '@assets/images/get_heart_icon.svg'
const ActiveBox = () => {
  return (
    <S.ActiveBox>
      <S.ActiveBoxInfo>
        <div>
					<img src={HeartIcon } alt="" />
        </div>
        <p>좋아요 한 게시글</p>
        <S.ActiveCount>0</S.ActiveCount>
      </S.ActiveBoxInfo>
      <S.ActiveBoxInfo>
        <div>
					<img src={GetHeart } alt="" />
        </div>
        <p>좋아요 받은 게시글</p>
        <S.ActiveCount>0</S.ActiveCount>
      </S.ActiveBoxInfo>
      <S.ActiveBoxInfo>
        <div>
					<img src={CommunityIcon } alt="" />
        </div>
        <p>활동한 커뮤니티</p>
        <S.ActiveCount>0</S.ActiveCount>
      </S.ActiveBoxInfo>
      <S.ActiveBoxInfo>
        <div>
					<img src={CommentIcon } alt="" />
        </div>
        <p>내가 작성한 댓글</p>
        <S.ActiveCount>0</S.ActiveCount>
      </S.ActiveBoxInfo>
    </S.ActiveBox>
  );
};

export default ActiveBox;
