import { Column } from 'react-table';
import { Data } from './CommunityList';

export const communityColumns: Column<Data>[] = [
  {
    Header: '번호',
    accessor: 'communityId',
  },
  {
    Header: '카테고리',
    accessor: 'categoryId',
  },
  {
    Header: '커뮤니티이미지',
    accessor: 'imageId',
    Cell: ({ value }: { value: string }) => (
      <img src={value} alt="커뮤니티 사진" style={{ width: '100px', height: '100px' }} />
    ),
  },
  {
    Header: '커뮤니티제목',
    accessor: 'title',
  },
  {
    Header: '커뮤니티모집인원',
    accessor: 'maxParticipant',
  },
  {
    Header: '커뮤니티참여인원',
    accessor: 'participant',
  },
  {
    Header: '커뮤니티생성시간',
    accessor: 'createdAt',
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: '커뮤니티수정시간',
    accessor: 'updatedAt',
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: '커뮤니티작성자',
    accessor: 'author',
  },
  {
    Header: '커뮤니티활동상태',
    accessor: 'status',
  },
  {
    Header: '커뮤니티내용',
    accessor: 'content',
  },
  {
    Header: '커뮤니티활동장소',
    accessor: 'location',
  },
];
