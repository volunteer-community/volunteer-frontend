import styled from 'styled-components';
import MainBN from '/src/assets/images/MainBN.png';

const MainBn = () => {
  return (
    <MainBnBox>
      <Title>떡잎마을 형제들이 알고싶다.</Title>
      <TextContent>
        다같이 환경보호 커뮤니티를
        <br /> 만들어보아요!!
      </TextContent>
    </MainBnBox>
  );
};

export default MainBn;

const MainBnBox = styled.div`
  width: 100%;
  height: 700px;
  background: url(${MainBN}) no-repeat center;
  background-size: 100% 100%;
  margin-top: 100px;
  span {
    font-family: 'BMDOHYEON';
    color: #fff;
    text-align: center;
    width: 100%;
    display: block;
  }
`;

const Title = styled.span`
  font-size: 25px;
  padding-top: 200px;
`;

const TextContent = styled.span`
  font-size: 40px;
  padding-top: 20px;
`;
