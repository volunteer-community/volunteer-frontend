import { commentUserResponseDto, getPostDetail, postComment } from '@apis/post/detail';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';

function CommentForm() {
  const [comment, setComment] = useState('');

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, data } = useQuery<commentUserResponseDto, Error>('detail', async () => {
    const result = await getPostDetail(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

  // 댓글 등록
  const commentMutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', Number(postId), Number(communityId)]);
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

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'comment') {
      setComment(value);
    }
  };

  return (
    <S.CommentsForm>
      <S.FormBlock>
        <img
          src={data?.commentUserResponseDto?.commentUserProfileImg}
          style={{ width: '25px', height: '25px', borderRadius: '50%' }}
        />
        <div className="commentAuthor">{data?.commentUserResponseDto?.commentUserNickName}</div>
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
        <button type="submit" value="등록" className="formBtnSubmit" onClick={handleCommentSubmit}>
          등록
        </button>
      </div>
    </S.CommentsForm>
  );
}

export default CommentForm;
