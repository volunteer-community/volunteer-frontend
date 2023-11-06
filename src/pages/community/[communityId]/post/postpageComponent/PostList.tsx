import React, { useState } from 'react';
import * as S from '@pages/community/stlyes/PostStyle.ts';
import PostListUserImg from '@assets/images/PostListUserImg.png';
import PostListContentImg from '@assets/images/PostListContentImg.png';
import { Link } from 'react-router-dom';

type PostListProps = {
  communityIdNumber: number | undefined;
};

const PostList: React.FC<PostListProps> = ({ communityIdNumber }) => {
  const [showToggleBox, setShowToggleBox] = useState(false);

  const handleOptionBtnClick = () => {
    setShowToggleBox(!showToggleBox);
  };

  const handleDeleteBtnClick = () => {
    setShowToggleBox(false);
  };

  return (
    <Link to="/">
      <S.PostListBox>
        <S.PostTitleBox>
          <S.UserTitleBox>
            <S.PostListUserImg src={PostListUserImg} />
            <S.PostListNameBox>
              <S.PostListNickname>유저 닉네임</S.PostListNickname>
              <S.PostListTitle>게시글 제목</S.PostListTitle>
            </S.PostListNameBox>
          </S.UserTitleBox>

          <S.PostListDateBox>
            <S.OptionBtnBox>
              <S.OptionBtn onClick={handleOptionBtnClick}>수정삭제버튼</S.OptionBtn>
              {showToggleBox && (
                <S.ToggleBox>
                  <S.ModifyBtn>
                    <Link to="community/:communityId/post/:postId/edit">수정</Link>
                  </S.ModifyBtn>
                  <S.DeleteBtn onClick={handleDeleteBtnClick}>삭제</S.DeleteBtn>
                </S.ToggleBox>
              )}
            </S.OptionBtnBox>

            <S.PostListDate>
              <S.PostListDateTitle>글 작성시간 :</S.PostListDateTitle>
              <S.PostListDateContent>2021-01-01</S.PostListDateContent>
            </S.PostListDate>
          </S.PostListDateBox>
        </S.PostTitleBox>

        <S.PostContentBox>
          <S.PostListContentImg src={PostListContentImg} />
          <S.PostContentText>게시물 내용입니다.</S.PostContentText>
        </S.PostContentBox>

        <S.PostLikeCommentBox>
          <S.LikeBox>
            <S.Like>
              Like
              <S.LikeCount>16</S.LikeCount>
            </S.Like>
          </S.LikeBox>

          <S.CommentBox>
            <S.Comment>
              Comment
              <S.CommentCount>11</S.CommentCount>
            </S.Comment>
          </S.CommentBox>
        </S.PostLikeCommentBox>
      </S.PostListBox>
    </Link>
  );
};

export default PostList;
