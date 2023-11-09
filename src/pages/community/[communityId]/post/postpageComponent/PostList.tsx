import React, { useState } from 'react';
import * as S from '@pages/community/stlyes/PostStyle.ts';
import { Link } from 'react-router-dom';
import { deletePostData } from '@apis/community/community.ts';
import { getCookie } from '@utils/cookies/cookies.ts';
import jwtDecode from 'jwt-decode';

interface Props {
  posterListData: any;
  index: any;
  post: any;
  communityIdNumber: any;
}

interface DecodedToken {
  userId: string;
}

const PostList = ({ posterListData, communityIdNumber }: Props) => {
  const token: string | null = getCookie('accessToken');
  let loggedInUserId: string | null;
  let decodedToken: DecodedToken | null = null;

  if (token) {
    decodedToken = jwtDecode<DecodedToken>(token);
    loggedInUserId = decodedToken?.sub;
    console.log('Logged in user ID:', loggedInUserId);
  }

  console.log('communityIdNumber:', communityIdNumber);

  if (!posterListData || !posterListData.data || !posterListData.data.posterList) {
    return <S.NoContent>컨텐츠가 없습니다.</S.NoContent>;
  }
  const [showToggleBox, setShowToggleBox] = useState(false);
  const handleOptionBtnClick = () => {
    setShowToggleBox(!showToggleBox);
  };
  const handleDeleteBtnClick = async () => {
    try {
      const posterId = posterListData.data.posterList[0].posterId;
      const communityId = communityIdNumber;
      const response = await deletePostData(posterId, communityId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setShowToggleBox(false);
  };
  return posterListData.data.posterList.map((post: any, index: any) => {
    console.log('Post user ID:', post.userId);
    const posterIdNumber = post.posterId;
    console.log('posterIdNumber:', posterIdNumber);
    return (
      <S.PostListBox>
        <S.PostTitleBox>
          <S.UserTitleBox>
            <S.PostListUserImg src={post.profileImg} />
            <S.PostListNameBox>
              <S.PostListNickname>{post.posterAuthor}</S.PostListNickname>
              <S.PostListTitle>{post.posterTitle}</S.PostListTitle>
            </S.PostListNameBox>
          </S.UserTitleBox>

          <S.PostListDateBox>
            {Number(post.userId) === Number(decodedToken?.sub) && (
              <S.OptionBtnBox>
                <S.OptionBtn onClick={handleOptionBtnClick}></S.OptionBtn>
                {showToggleBox && (
                  <S.ToggleBox>
                    <S.ModifyBtn>
                      <Link to={`${post.posterId}/edit`} state={{ data: post }}>
                        수정
                      </Link>
                    </S.ModifyBtn>
                    <S.DeleteBtn onClick={handleDeleteBtnClick}>삭제</S.DeleteBtn>
                  </S.ToggleBox>
                )}
              </S.OptionBtnBox>
            )}
            <S.PostListDate>
              <S.PostListDateTitle>글 작성시간 :</S.PostListDateTitle>
              <S.PostListDateContent>{post.posterCreatedAt}</S.PostListDateContent>
            </S.PostListDate>
          </S.PostListDateBox>
        </S.PostTitleBox>
        <Link to={`/community/${communityIdNumber}/post/${posterIdNumber}`} key={index}>
          <S.PostContentBox>
            <S.PostListContentImg src={post.posterImgPath} />
            <S.PostContentText>{post.posterContent}</S.PostContentText>
          </S.PostContentBox>

          <S.PostLikeCommentBox>
            <S.LikeBox>
              <S.Like>
                Like
                <S.LikeCount>{post.heartCount}</S.LikeCount>
              </S.Like>
            </S.LikeBox>

            <S.CommentBox>
              <S.Comment>
                Comment
                <S.CommentCount>11</S.CommentCount>
              </S.Comment>
            </S.CommentBox>
          </S.PostLikeCommentBox>
        </Link>
      </S.PostListBox>
    );
  });
};

export default PostList;
