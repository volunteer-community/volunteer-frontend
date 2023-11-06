import DefalutProfile from '@assets/images/default_profile_img.gif';
import back from '@assets/images/back.svg';
import * as S from './style';
import Comments from './Comments';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import LikeButton from './Like';
import { axiosInstance } from '../../../apis/axiosInstance/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

// 게시글 상세 데이터 가져오기
const getPostDetail = async (posterId: any, communityId: any) => {
  try {
    const response = await axiosInstance.get(`poster/${posterId}/community`, {
      params: {
        communityId: communityId,
      },
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

function PostDetail({ likesCount = 0, onToggleLike }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.id;

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, data } = useQuery('detail', () => detailRequest(postId));

  //게시물 좋아요 상태 업데이트
  // const mutation = useMutation(isLikeAxios, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('detail');
  //   },
  // });

  // 좋아요 관련 상태, 토글
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  // 좋아요 버튼 클릭 시 호출
  const handleClickLikeButton = () => {
    mutation.mutate(postId);
  };

  const handleLikeButtonClick = () => {
    toggleLike(); // toggleLike 함수 호출
    handleClickLikeButton(); // handleClickLikeButton 함수 호출
  };

  return (
    <>
      <S.BackLine>
        <img src={back} alt="뒤로 가기" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      </S.BackLine>
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
        <S.PostAuthorInfo>
          <S.ProfileWrap>
            <img
              src={DefalutProfile}
              alt="기본 프로필 이미지"
              style={{ width: '25px', height: '25px', borderRadius: '50%' }}
            />
            <div className="postAuthor">흰둥이</div>
            <LikeButton like={liked} onClick={handleLikeButtonClick} />
            <span>좋아요 {likesCount}개</span>
          </S.ProfileWrap>
        </S.PostAuthorInfo>
      </S.PostDetailStyle>
      {/* <Comments post={post} /> */}
      <Comments />
    </>
  );
}

export default PostDetail;
