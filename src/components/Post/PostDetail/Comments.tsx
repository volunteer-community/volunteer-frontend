import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { Input } from '@components/ui/Input';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';

function Comments() {
  const { communityId, postId } = useParams();

  // useQuery 훅을 사용하여 댓글 목록을 가져옴
  // const { isLoading, isError, data } = useQuery<Comments[], Error>(['comments', postId], () => getComments(Number(postId), Number(communityId)));

  const [comment, setComment] = useState('');

  // 더보기 버튼
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'comment') {
      setComment(value);
    }
  };

  return (
    <S.Comments>
      <div className="Comment">Comment</div>
      {/* {data.commentsData?.map((comment) => ( */}
      <S.CommentsList key={comment.commentId}>
        <S.CommentBox>
          <S.CommentProfileBox>
            <S.ProfileWrap>
              <img src={comment.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
            </S.ProfileWrap>
            <S.CommentAuthor>{comment.commentAuthor}</S.CommentAuthor>
            <S.CommentText>{comment.commentContent}</S.CommentText>
            <S.CommentDate>{comment.commentCreatedAt}</S.CommentDate>
            {showOptions && token && tokenIsValid() && tokenPayload.id === user.id && (
              <div className="optionsDropdown">
                <button className="commentEdit">수정</button>
                <button className="commentDelete">삭제</button>
              </div>
            )}
            <div className="optionsIcon" onClick={toggleOptions}>
              <img src={EllipsisIcon} alt="더보기" style={{ width: '20px', height: '20px' }} />
            </div>
          </S.CommentProfileBox>
        </S.CommentBox>
      </S.CommentsList>
      {/* ))} */}
      <S.CommentsForm>
        <S.FormBlock>
          <img src={comment.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
          <div className="commentAuthor">{comment.commentAuthor}</div>
        </S.FormBlock>
        <TextareaLabel
          name="comment"
          id="comment"
          required
          value={comment}
          placeholder="자유롭게 댓글을 작성해주세요."
          onChange={onChange}
        />
        <div className="FormBlockSubmit">
          <Input type="submit" value="등록" className="formBtnSubmit" />
        </div>
      </S.CommentsForm>
    </S.Comments>
  );
}

export default Comments;
