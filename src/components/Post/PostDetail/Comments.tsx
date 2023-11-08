import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { Input } from '@components/ui/Input';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';
import { getComments, CommentList, postComment, putComment, deleteComment } from '@apis/post/detail';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';
import { useCommentId } from '@hooks/useParamsId/useCommentId';

function Comments() {
  const { communityId, postId, commentId } = useParams();
  const queryClient = useQueryClient();
  const communityIdNumber: any = useCommunityId();
  const commentIdNumber: any = useCommentId();

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
      queryClient.invalidateQueries(['comments', Number(postId), Number(communityId)]);
    },
  });

  // 댓글 수정
  const editCommentMutation = useMutation(putComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', Number(communityId), Number(commentId)]);
      setEditingCommentId(null); // 댓글 수정 모드 종료
    },
  });

  // 댓글 삭제
  const deleteCommentMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', Number(communityId), Number(commentId)]);
    },
  });

  const handleCommentSubmit = async () => {
    try {
      await commentMutation.mutateAsync({
        postId: Number(postId),
        communityId: Number(communityId),
        commentContent: comment,
      });
      setComment(''); // 댓글 입력 필드 초기화
    } catch (error) {
      console.error('댓글 게시 중 오류 발생', error);
    }
  };

  const handleEditComment = async (commentId, newCommentText) => {
    try {
      await editCommentMutation.mutateAsync(commentId, {
        communityId: Number(communityId),
        commentContent: newCommentText,
      });
    } catch (error) {
      console.error('댓글 수정 중 오류 발생', error);
    }
  };

  // const handleDeleteComment = async (communityId, commentId) => {
  //   try {
  //     await deleteCommentMutation.mutateAsync(communityId, commentId);
  //   } catch (error) {
  //     console.error('댓글 삭제 중 오류 발생', error);
  //   }
  // };

  const handleDeleteComment = async () => {
    try {
      const commentId = commentIdNumber;
      console.log('commentId:', commentId);

      const communityId = communityIdNumber;
      const response = await deleteComment(commentId, communityId);
      console.log(response);
    } catch (error) {
      console.error(error);
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
                    <button className="commentEdit" onClick={() => setEditingCommentId(commentItem.commentId)}>
                      수정
                    </button>
                    <button className="commentDelete" onClick={() => handleDeleteComment(commentItem.commentId)}>
                      삭제
                    </button>
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
