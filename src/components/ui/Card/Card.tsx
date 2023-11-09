import Image from '../Image';
import styled from 'styled-components';
import Cat from '@assets/images/cat.jpg';
const StCard = styled.li`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const ImgWrap = styled.div`
  width: 200px;
  height: 150px;
`;
const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const CommunityInfo = styled.div`
  display: flex;
`;
const TextInfo = styled.div`
  display: flex;
	gap: 26px;
  flex-direction: column;
`;
const CategoryChip = styled.div`
	padding: 5px 0;
	color: #fff;
  text-align: center;
	border-radius: 20px;
  background-color: #56c9b6;
`;

const Title = styled.p`
  font-weight: 600;
	font-size: 20px;
`
const Content = styled.span`
font-size: 18px;
  color: #464646;;
`;
const Card = () => {
  return (
    <StCard>
      <CommunityInfo>
        <ImgWrap>
          <Img src={Cat} alt="고양이" />
        </ImgWrap>
        <TextInfo>
          <CategoryChip>카테고리</CategoryChip>
          <Title>커뮤니티 이름</Title>
          <Content>소개글</Content>
        </TextInfo>
      </CommunityInfo>

      <div>
        <div>
          <Image />
          <span>10</span>
        </div>
        <div>
          <Image />
          <span>호스트 이름</span>
        </div>
      </div>
    </StCard>
  );
};

export default Card;
