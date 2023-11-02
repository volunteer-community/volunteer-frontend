import DefalutProfile from '@assets/images/default_profile_img.gif';
import * as S from './style';
import Comments from './Comments';
import { useState } from 'react';
import LikeButton from './Like';

function PostDetail({ likesCount = 0, onToggleLike }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <S.PostDetailStyle>
        <div className="postBox">
          <S.PostTime>2023/10/17 14:00</S.PostTime>
          <S.PostTitle>왈왈!(제 애마 공개합니닷)</S.PostTitle>
          <S.PostContentBox>
            <img
              src="https://it.chosun.com/news/photo/202307/2023072002552_1.png"
              alt="example"
              style={{ width: '800px' }}
            />
            <div className="postContent">멍멍멍! 멍멍!(요새 자주 애용하고 있습니다. 역시 차는 블랙앤화이트죠!)</div>
          </S.PostContentBox>
        </div>
        <S.ProfileWrap>
          <img
            src={DefalutProfile}
            alt="기본 프로필 이미지"
            style={{ width: '25px', height: '25px', borderRadius: '50%' }}
          />
          <div className="postAuthor">흰둥이</div>
          <LikeButton like={liked} onClick={toggleLike} />
          <span>좋아요 {likesCount}개</span>
        </S.ProfileWrap>
      </S.PostDetailStyle>
      {/* <Comments post={post} /> */}
      <Comments />
    </>
  );
}

export default PostDetail;
