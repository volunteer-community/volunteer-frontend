import back from '@assets/images/back.svg';
import * as S from './style';
import Comments from './Comments';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import LikeButton from './Like';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostDetail, likePost, PosterDetail } from '@apis/post/detail';

// 게시글 상세 데이터 가져오기(axios 사용할 것)
function PostDetail() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { communityId, postId } = useParams();

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, data } = useQuery<PosterDetail, Error>('detail', async () => {
    const result = await getPostDetail(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

  // 게시물 좋아요 상태 업데이트
  const likePostMutation = useMutation(() => likePost(Number(postId), Number(communityId)), {
    onSuccess: () => {
      // 호출이 성공하면 게시글 상세 정보를 다시 불러옴
      queryClient.invalidateQueries('detail');
    },
  });

  // 좋아요 관련 상태, 토글
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeButtonClick = () => {
    toggleLike(); // 좋아요 상태 토글
    likePostMutation.mutate(Number(postId), Number(communityId)); // 좋아요 수 변경 API 호출
  };

  // 로딩 중이거나 에러가 발생했을 때 렌더링할 내용
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>에러가 발생하였습니다.{isError.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.BackLine>
        <img src={back} alt="뒤로 가기" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      </S.BackLine>
      <S.PostDetailStyle>
        <div className="postBox">
          <S.PostTime>{data.posterDetail.posterCreatedAt}</S.PostTime>
          <S.PostTitle>{data.posterDetail.posterTitle}</S.PostTitle>
          <S.PostContentBox>
            <img src={data?.posterDetail.posterImgPath} style={{ width: '800px' }} />
            <div className="posterContent">{data.posterDetail.posterContent}</div>
          </S.PostContentBox>
        </div>
        <S.PostAuthorInfo>
          <S.ProfileWrap>
            <img src={data?.posterDetail.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
            <div className="posterAuthor">{data.posterDetail.posterAuthor}</div>
            <LikeButton like={liked} onClick={handleLikeButtonClick} />
            <span>좋아요 {data.posterDetail.heartCount}개</span>
          </S.ProfileWrap>
        </S.PostAuthorInfo>
      </S.PostDetailStyle>
      {/* <Comments post={post} /> */}
      <Comments />
    </>
  );
}

export default PostDetail;
