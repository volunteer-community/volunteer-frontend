import CommunityForm from '@components/CommunityForm/CommunityForm';
import Section from '@components/ui/Section/Section';

const INITIDATA = {
   title: '',
    content: '',
    categoryType: '',
    maxParticipant: 10,
    location: '',
    file: [],
}
const CommunityCreatePage = () => {
  return (
		<Section sectionTitle='커뮤니티 생성'>
      <CommunityForm initialData={INITIDATA}/>
    </Section>
  );
};

export default CommunityCreatePage;
