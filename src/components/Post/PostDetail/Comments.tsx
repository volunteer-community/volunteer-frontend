import { useState } from 'react';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import EllipsisIcon from '../../../assets/images/ellipsis.svg';
import { useParams } from 'react-router-dom';
import { getComments, CommentList, putComment, deleteComment } from '@apis/post/detail';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Comments() {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const { communityId, postId, commentId } = useParams();
  const [editingComments, setEditingComments] = useState({});

  // useQuery 훅을 사용하여 댓글 목록을 가져옴
  const { isLoading, isError, data } = useQuery<CommentList[], Error>(['comments', postId], async () => {
    const result = await getComments(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

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

  const handleEditSubmit = async (commentId) => {
    try {
      await editCommentMutation.mutateAsync({
        commentId: commentId,
        communityId: Number(communityId),
        commentContent: editingComments[commentId],
      });
      setEditingComments((prev) => {
        const newState = { ...prev };
        delete newState[commentId];
        return newState;
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

  const handleDeleteComment = async (commentId, communityId) => {
    try {
      await deleteCommentMutation.mutateAsync(commentId, communityId);
      console.log('댓글 삭제 성공');
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
    }
  };

  return (
    <>
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
                {showOptions && (
                  <div className="optionsDropdown">
                    <button
                      className="commentEdit"
                      onClick={() => {
                        setEditingComments({
                          ...editingComments,
                          [commentItem.commentId]: commentItem.commentContent,
                        });
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
              {editingComments[commentItem.commentId] && (
                <>
                  <TextareaLabel
                    name="comment"
                    id="comment"
                    required
                    value={editingComments[commentItem.commentId]}
                    placeholder="댓글을 수정해주세요."
                    onChange={(event) =>
                      setEditingComments({
                        ...editingComments,
                        [commentItem.commentId]: event.target.value,
                      })
                    }
                  />
                  <button onClick={() => handleEditSubmit(commentItem.commentId)}>수정 완료</button>
                </>
              )}
            </S.CommentBox>
          </S.CommentsList>
        ))}
    </>
  );
}
export default Comments;
