import DefalutProfile from '@assets/images/default_profile_img.gif';
import * as S from './style';
import { Link } from 'react-router-dom';

interface ProfileInfoProps {
  nickname: string
  picture: string
  email: string
}

const ProfileInfo = ({ nickname, picture, email }:ProfileInfoProps) => {
  return (
    <S.ProfileWrap>
      <S.ProfileTitle>내정보</S.ProfileTitle>
      <S.ProfileImgWrap>
        <S.ProfileImg src={picture? picture:DefalutProfile} alt="기본 프로필 이미지" />
      </S.ProfileImgWrap>
      <S.ProfileTextInfo>
        <S.UserNickName>{ nickname} 님</S.UserNickName>
        <S.UserEmail>{email }</S.UserEmail>
      </S.ProfileTextInfo>
      <div>
        <S.ProfileEditButton>
          <Link to="edit">프로필 수정</Link>
        </S.ProfileEditButton>
      </div>
    </S.ProfileWrap>
  );
};

export default ProfileInfo;
