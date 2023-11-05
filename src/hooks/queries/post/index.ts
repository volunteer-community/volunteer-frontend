import { createPost } from '@apis/post';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const useCreatePost = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const queryCilent = useQueryClient();
  
	const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryCilent.invalidateQueries('poster');
      navigate(`community/${communityId}`);
    },
  });
  return { mutate };
};
