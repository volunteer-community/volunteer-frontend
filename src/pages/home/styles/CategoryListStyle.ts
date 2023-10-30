import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryListWrap = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 100px 0 0 0;
`;
const CategoryListBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

const CategoryItem = styled.li`
  width: 23%;
  padding-bottom: 50px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  border: 1px solid #e1e2e3;
  display: block;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 7px 10px 1px #d2d2d2;
`;

const ImgBox = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  box-sizing: border-box;
`;

const CategoryDataBox = styled.div`
  width: 50%;
`;
const CategoryTitle = styled.h5`
  display: inline-block;
  font-family: 'NotoSans-Bold';
  font-size: 18px;
  font-weight: bold;
  background: #56c9b6;
  color: #fff;
  border-radius: 30px;
  text-align: center;
  padding: 5px 10px;
  box-sizing: border-box;
`;
const CommunityTitle = styled.span`
  font-family: 'NotoSans-Bold';
  font-size: 18px;
  font-weight: bold;
  display: block;
  padding: 10px 0 0 5px;
`;
const CommunityDescription = styled.span`
  width: 100%;
  font-family: 'NotoSans-Medium';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0 0 5px;
  color: #464646;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CategoryJoinBox = styled.div`
  width: 50%;
  padding: 25px 0 0 0;
`;
const IsJoined = styled.span`
  width: 100%;
  display: block;
  text-align: right;
`;

const IsJoinedText = styled.i`
  display: inline-block;
  font-family: 'NotoSans-Regular';
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  background: #587cd8;
  color: #fff;
  border-radius: 30px;
  text-align: center;
  padding: 3px 5px;
  box-sizing: border-box;
  width: 100px;
`;

const CommunityJoinCount = styled.span`
  display: block;
  font-family: 'NotoSans-Regular';
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  text-align: right;
  padding: 5px 5px 0 0px;
`;
const HostName = styled.span`
  display: block;
  font-family: 'NotoSans-Regular';
  font-size: 15px;
  font-weight: 400;
  color: #afafaf;
  text-align: right;
  padding: 5px 5px 0 0px;
`;

export {
  CategoryListWrap,
  FlexBox,
  CategoryListBox,
  CategoryItem,
  StyledLink,
  ImgBox,
  Img,
  CategoryDataBox,
  CategoryTitle,
  CommunityTitle,
  CommunityDescription,
  CategoryJoinBox,
  IsJoined,
  IsJoinedText,
  CommunityJoinCount,
  HostName,
};
