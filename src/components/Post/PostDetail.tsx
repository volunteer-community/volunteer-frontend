import DefalutProfile from '@assets/images/default_profile_img.gif';
import * as S from '../MyInfo/ProfileInfo/style';

function PostDetail() {
  return (
    <>
      <div className="postDetail">
        <div className="postBox">
          <div className="postTitle">제 애마 공개합니닷</div>
          <S.ProfileImgWrap>
            <S.ProfileImg src={DefalutProfile} alt="기본 프로필 이미지" />
          </S.ProfileImgWrap>
          <div className="postAuthor">흰둥이</div>
          <div className="postDate">2023.10.27</div>
          <div className="postContent">요새 자주 애용하고 있습니다. 역시 차는 블랙앤화이트죠!</div>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
