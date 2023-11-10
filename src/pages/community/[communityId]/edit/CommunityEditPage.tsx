import CommunityForm from "@components/CommunityForm/CommunityForm"
import Section from "@components/ui/Section/Section"
import { useLocation } from "react-router-dom";



const CommunityEditPage = () => {
  const { data } = useLocation().state;
  const { communityTitle, communityContent, categoryType, communityMaxParticipant, communityLocation } =
    data.communityDetail;
  const { communityImgPathList } = data;

  const initialData = {
    communityTitle,
    communityContent,
    categoryType,
    communityMaxParticipant,
    communityLocation,
    file: communityImgPathList
  };

  return (
    <Section sectionTitle="커뮤니티 수정">
      <CommunityForm initialData={initialData} initialImageURLs={communityImgPathList} />
    </Section>
  );
}

export default CommunityEditPage