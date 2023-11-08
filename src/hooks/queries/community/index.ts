import { Community, createCommunity } from '@apis/community/post';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateCommunity = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate } = useMutation(createCommunity,
		{
			onSuccess: () => {
				queryClient.invalidateQueries('community');
				navigate('/');
			},
			onMutate: async (newCommunity) => {
				await queryClient.cancelQueries('community')
				const previousCommunities = queryClient.getQueriesData('community')
				queryClient.setQueriesData('community', [...previousCommunities, newCommunity])
				return { previousCommunities }
			},
			onError: (error, newCommunity, context) => {
				queryClient.setQueryData('communities', context?.previousCommunities);
			}
		}
	)
	const handleCreateCommunity = (commuityData:Community) => {
		mutate(commuityData)
	}
  return { handleCreateCommunity };
};