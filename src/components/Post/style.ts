import styled from 'styled-components';

export const PostDetailStyle = styled.div`
  text-align: center;
  padding: 20px 20px 0px 20px;
  max-width: 840px;
  justify-content: center;
  margin: 0 auto;
  line-height: 1.8;
  // background-color: #fffdf7;
`;

export const PostTitle = styled.div`
  width: 100%;
  padding: 0px 0px 5px 0px;
  font-size: 22px;
  font-weight: 600;
  background-color: #f3f3f3;
`;

export const PostTime = styled.div`
  width: 100%;
  padding: 0px 5px 0px 0px;
  font-size: 10px;
  text-align: right;
  background-color: #f3f3f3;
`;

export const PostContentBox = styled.div`
  padding: 10px 0px;
  font-size: 17px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  font-size: 14px;
  background-color: #f3f3f3;
  gap: 10px;
  padding: 12px 0px 12px 12px;
`;

export const Heart = styled.img`
  display: flex;
  align-items: center;
  width: 20px;
`;

export const Comments = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 840px;
  // background-color: #fffdf7;
`;

export const CommentLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const CommentsList = styled.div`
  background-color: #f3f3f3;
`;

export const CommentBox = styled.div`
  border-bottom: 1px solid #d3d1d1;
`;

export const CommentProfileBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`;

export const CommentAuthor = styled.div`
  font-weight: 700;
`;

export const CommentDate = styled.div`
  color: #8c8c8c;
`;

export const CommentText = styled.div`
  font-size: 14px;
`;

export const FormBlock = styled.div`
  border-top: 1px solid black;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 20px 0px 0px 12px;
  background-color: #fffdfd;
`;

export const FormBlockSubmit = styled.div`
  flex-direction: row-reverse;
`;
