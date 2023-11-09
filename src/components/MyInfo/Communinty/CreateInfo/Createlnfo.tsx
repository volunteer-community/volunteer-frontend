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
  height: 218px;
  margin-top: 24px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

interface CreateInfoProps {
  userCreateCommunityData: Community[];
}

const Createlnfo = ({ userCreateCommunityData }:CreateInfoProps) => {
  console.log(userCreateCommunityData)
  return (
    <StAticle articleTitle="내가 생성한 커뮤니티">
      <Ul>
        {userCreateCommunityData?.map((createCommunityItemData) => (
          <Card createCommunityItemData={createCommunityItemData} />
        ))}
      </Ul>
    </StAticle>
  );
};

export default Createlnfo;