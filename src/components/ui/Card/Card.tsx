import Image from '../Image';
import styled from 'styled-components';
import { Community } from '@interfaces/Community';
import { Link } from 'react-router-dom';

const StCard = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
`;

const ImgWrap = styled.div`
  width: 180px;
  height: 150px;
`;
const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 16px;
`;

const CommunityInfo = styled.div`
  display: flex;
`;
const TextInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  width: 60%;
  justify-content: space-evenly;
  flex-direction: column;
`;
const CategoryChip = styled.div`
  padding: 5px 4px;
  width: 146px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  background-color: #56c9b6;
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Content = styled.span`
  font-size: 18px;
  color: #464646;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 52px;
`;

interface CardProps {
  createCommunityItemData: Community;
}
const Card = ({ createCommunityItemData }: CardProps) => {
  const {
    categoryId,
    categoryType,
    communityId,
    communityTitle,
    communityParticipant,
    communityMaxParticipant,
    communityStatus,
    communityContent,
    communityLocation,
    communityMainImgPath,
  } = createCommunityItemData;
  const isParticipate = communityStatus === '모집 중';
  return (
    <StCard to={`/community/${communityId}` }>
      <>
        <CommunityInfo>
          <ImgWrap>
            <Img src={communityMainImgPath} alt="커뮤니티 썸네일" />
          </ImgWrap>
          <TextInfo>
            <CategoryChip>{categoryType}</CategoryChip>
            <Title>{communityTitle}</Title>
            <Content>{communityContent}</Content>
          </TextInfo>
        </CommunityInfo>

        <Info>
          <div>
            <Image />
            <span>{isParticipate ? `${communityParticipant} / ${communityMaxParticipant}` : communityStatus}</span>
          </div>
          <div>
            <Image />
            <span>{communityLocation}</span>
          </div>
        </Info>
      </>
    </StCard>
  );
};

export default Card;
