import { createPost } from '@apis/post';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const useCreatePost = () => {

  const queryCilent = useQueryClient();
  
	const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryCilent.invalidateQueries('poster');
      
    },
  });
  return { mutate };
};
