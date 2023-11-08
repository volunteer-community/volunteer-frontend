import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { Input } from '@components/ui/Input';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';
import { getComments, CommentList, postComment } from '@apis/post/detail';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Comments() {
  const { communityId, postId } = useParams();
  const queryClient = useQueryClient();

  // useQuery 훅을 사용하여 댓글 목록을 가져옴
  const { isLoading, isError, data } = useQuery<CommentList[], Error>(['comments', postId], async () => {
    const result = await getComments(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

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

  // 댓글 등록
  const commentMutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    },
  });

  const handleCommentSubmit = async () => {
    try {
      await commentMutation.mutateAsync({
        postId: Number(postId),
        communityId: Number(communityId),
        commentContent: comment,
      });
    } catch (error) {
      console.error('댓글 게시 중 오류 발생', error);
    }
  };

  return (
    <S.Comments>
      <div className="Comment">Comment</div>
      {data &&
        data.commentList &&
        data.commentList.map((commentItem: any) => (
          <S.CommentsList key={commentItem.commentId}>
            <S.CommentBox>
              <S.CommentProfileBox>
                <S.ProfileWrap>
                  <img src={commentItem.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
                </S.ProfileWrap>
                <S.CommentAuthor>{commentItem.commentAuthor}</S.CommentAuthor>
                <S.CommentText>{commentItem.commentContent}</S.CommentText>
                <S.CommentDate>{commentItem.commentCreatedAt}</S.CommentDate>
                {/* {showOptions && token && tokenIsValid() && tokenPayload.id === user.id && ( */}
                {showOptions && (
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
        ))}
      <S.CommentsForm>
        <S.FormBlock>
          <img src={null} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
          <div className="commentAuthor">{null}</div>
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
          <Input type="submit" value="등록" className="formBtnSubmit" onClick={handleCommentSubmit} />
        </div>
      </S.CommentsForm>
    </S.Comments>
  );
}

export default Comments;
