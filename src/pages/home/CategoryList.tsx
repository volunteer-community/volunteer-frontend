import { useQuery } from 'react-query';
import { getCommunityData } from '../../apis/axiosInstance/mainCommuAxiosInstance';
import * as S from '@pages/home/styles/CategoryListStyle';
import 'aos/dist/aos.css';

interface Community {
  communityId: number;
  communityTitle: string;
  communityContent: string;
  imagePath: string;
  communityParticipant: number;
  authorName: string;
  participantsCompleted: number;
  category: {
    categoryId: number;
    categoryName: string;
  };
}

const CategoryList = () => {
  const { data: communityData, isLoading, error } = useQuery<Community[], Error>('communityData', getCommunityData);

  console.log(communityData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: 에러발생</div>;
  }

  return (
    <S.CategoryListWrap>
      <S.CategoryListBox>
        {communityData &&
          communityData.map((community) => (
            <S.CategoryItem key={community.communityId} data-aos="fade-up">
              <S.StyledLink to={`/community/${community.communityId}`}>
                <S.ImgBox>
                  <S.Img src={community.imagePath} />
                </S.ImgBox>

                <S.FlexBox>
                  <S.CategoryDataBox>
                    <S.CategoryTitle>{community.category.categoryName}</S.CategoryTitle>
                    <S.CommunityTitle>{community.communityTitle}</S.CommunityTitle>
                    <S.CommunityDescription>{community.communityContent}</S.CommunityDescription>
                  </S.CategoryDataBox>

                  <S.CategoryJoinBox>
                    <S.IsJoined>
                      <S.IsJoinedText>{community.participantsCompleted}</S.IsJoinedText>
                    </S.IsJoined>
                    <S.CommunityJoinCount>{community.communityParticipant}</S.CommunityJoinCount>
                    <S.HostName>{community.authorName}</S.HostName>
                  </S.CategoryJoinBox>
                </S.FlexBox>
              </S.StyledLink>
            </S.CategoryItem>
          ))}
      </S.CategoryListBox>
    </S.CategoryListWrap>
  );
};

export default CategoryList;
