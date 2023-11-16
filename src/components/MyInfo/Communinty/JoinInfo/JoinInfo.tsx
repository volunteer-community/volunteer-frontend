import Article from '@components/ui/Aticle/Aticle';
import Card from '@components/ui/Card/Card';
import { Community } from '@interfaces/Community';
import styled from 'styled-components';

export const StAticle = styled(Article)`
  width: 100%;
  font-size: 18px;
`;
const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 24px;
  align-items: center;
	flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

interface JoinInfoProps {
  userJoinCommunityData: Community[];
}

const JoinInfo = ({ userJoinCommunityData }: JoinInfoProps) => {
  console.log(userJoinCommunityData);
  return (
    <StAticle articleTitle="내가 가입한 커뮤니티">
      <Ul>
        {userJoinCommunityData?.map((communityItemData) => (
          <Card communityItemData={communityItemData} />
        ))}
      </Ul>
    </StAticle>
  );
};

export default JoinInfo;
