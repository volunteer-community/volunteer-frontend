import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { Input } from '@components/ui/Input';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';
import { getComments, CommentList, postComment, putComment, deleteComment } from '@apis/post/detail';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Comments() {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const { communityId, postId, commentId } = useParams();

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
      // 댓글 삭제가 성공하면 댓글 목록 쿼리를 다시 불러옵니다.
      queryClient.invalidateQueries('comments');
    },
  });

  // const handleCommentSubmit = async () => {
  //   try {
  //     await commentMutation.mutateAsync({
  //       postId: Number(postId),
  //       communityId: Number(communityId),
  //       commentContent: comment,
  //     });
  //     setComment(''); // 댓글 입력 필드 초기화
  //   } catch (error) {
  //     console.error('댓글 게시 중 오류 발생', error);
  //   }
  // };

  const handleCommentSubmit = async () => {
    try {
      if (editingCommentId) {
        // 수정 중인 댓글이 있는 경우
        await editCommentMutation.mutateAsync({
          commentId: editingCommentId,
          communityId: Number(communityId),
          commentContent: comment,
        });
      } else {
        // 새 댓글을 등록하는 경우
        await commentMutation.mutateAsync({
          postId: Number(postId),
          communityId: Number(communityId),
          commentContent: comment,
        });
      }
      setComment(''); // 댓글 입력 필드 초기화
      setEditingCommentId(null); // 댓글 수정 모드 종료
    } catch (error) {
      console.error('댓글 게시 중 오류 발생', error);
    }
  };

  // const handleEditComment = async (commentId, newCommentText) => {
  //   try {
  //     await editCommentMutation.mutateAsync(commentId, {
  //       communityId: Number(communityId),
  //       commentContent: newCommentText,
  //     });
  //   } catch (error) {
  //     console.error('댓글 수정 중 오류 발생', error);
  //   }
  // };

  // const handleDeleteComment = async (communityId, commentId) => {
  //   try {
  //     await deleteCommentMutation.mutateAsync(communityId, commentId);
  //   } catch (error) {
  //     console.error('댓글 삭제 중 오류 발생', error);
  //   }
  // };

  const handleDeleteComment = async (commentId, communityId) => {
    try {
      await deleteCommentMutation.mutateAsync(commentId, communityId);
      console.log('댓글 삭제 성공');
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
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
                    <button
                      className="commentEdit"
                      onClick={() => {
                        setEditingCommentId(commentItem.commentId);
                        setComment(commentItem.commentContent); // 댓글 내용을 TextArea에 설정
                      }}
                    >
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
