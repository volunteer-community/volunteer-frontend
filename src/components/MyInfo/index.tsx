import ActiveInfo from './ActiveInfo';
import ProfileInfo from './ProfileInfo/index';
import styled from 'styled-components';

const MyInfoWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  gap: 30px;
`;
const MyInfo = () => {
  return (
    <MyInfoWrap>
      <ProfileInfo />
      <ActiveInfo />
    </MyInfoWrap>
  );
};

export default MyInfo;
