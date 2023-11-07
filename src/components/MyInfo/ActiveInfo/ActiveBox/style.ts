import styled from 'styled-components';

export const ActiveBox = styled.ul`
  display: flex;
  width: 100%;
  height: 218px;
  margin-top: 24px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

export const ActiveBoxInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const ActiveCount = styled.span`
  font-size: 20px;
  color: #56c9b6;
`;
