import DefalutProfile from '@assets/images/default_profile_img.gif';
import back from '@assets/images/back.svg';
import * as S from './style';
import Comments from './Comments';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import LikeButton from './Like';
import { useNavigate, useParams } from 'react-router-dom';

// 게시글 상세 데이터 가져오기(axios 사용할 것)
function PostDetail({ heartCount = 0, onToggleLike }) {
  const [data, setData] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { communityId, postId } = useParams();

  //게시글 상세 정보를 불러오는 쿼리
  // const { isLoading, isError, data } = useQuery<PosterDetail, Error>('detail', () => getPostDetail(Number(postId), Number(communityId)));

  //게시물 좋아요 상태 업데이트
  // const likePostMutation = useMutation(() => likePost(Number(postId)), {
  //   onSuccess: () => {
  //     // 호출이 성공하면 게시글 상세 정보를 다시 불러옴
  //     queryClient.invalidateQueries('detail');
  //   },
  // });

  // 좋아요 관련 상태, 토글
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeButtonClick = () => {
    toggleLike(); // 좋아요 상태 토글
    likePostMutation.mutate(Number(postId)); // 좋아요 수 변경 API 호출
  };

  return (
    <>
      <S.BackLine>
        <img src={back} alt="뒤로 가기" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      </S.BackLine>
      <S.PostDetailStyle>
        <div className="postBox">
          <S.PostTime>{data.posterCreatedAt}</S.PostTime>
          <S.PostTitle>{data.posterTitle}</S.PostTitle>
          <S.PostContentBox>
            <img src={data.posterImgPath} style={{ width: '800px' }} />
            <div className="posterContent">{data.posterContent}</div>
          </S.PostContentBox>
        </div>
        <S.PostAuthorInfo>
          <S.ProfileWrap>
            <img src={data.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
            <div className="posterAuthor">{data.posterAuthor}</div>
            <LikeButton like={liked} onClick={handleLikeButtonClick} />
            <span>좋아요 {data.heartCount}개</span>
          </S.ProfileWrap>
        </S.PostAuthorInfo>
      </S.PostDetailStyle>
      {/* <Comments post={post} /> */}
      <Comments />
    </>
  );
}

export default PostDetail;
