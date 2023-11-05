import { createCommunity } from '@apis/community/post';
import CommunityForm from '@components/CommunityForm/CommunityForm';
import Section from '@components/ui/Section/Section';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { INITIDATA } from '@constants/community';


const CommunityCreatePage = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    AxiosResponse<any>,
    unknown,
    { communityData: FormData; categoryType: string }, 
    unknown
  >(
    ({ communityData, categoryType }) => createCommunity({ formData:communityData, categoryType }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('community');
        navigate('/')
      },
    }
  );
  return (
    <Section sectionTitle="커뮤니티 생성">
      <CommunityForm initialData={INITIDATA} onSave={mutate} />
    </Section>
  );
};

export default CommunityCreatePage;
