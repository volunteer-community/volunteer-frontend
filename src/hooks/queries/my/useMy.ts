import { getMyActive, getMyJoinCommunites, getMyMakeCommunites } from '@apis/my';
import { useQuery } from 'react-query';

export const useGetMyMakeCommunites = () => {
  const { data, isLoading, isError } = useQuery(['mypage/community'], getMyMakeCommunites);
  return { data, isLoading, isError };
};


export const useGetMyJoinCommunites = () => {
	const { data, isLoading, isError } = useQuery(['mypage/community/sign'], getMyJoinCommunites);
	return {data, isLoading, isError}
}

export const useGetMyActive = () => {
	const { data, isLoading, isError } = useQuery(['mypage/myinfo'], getMyActive);
	return {data, isLoading, isError}
}