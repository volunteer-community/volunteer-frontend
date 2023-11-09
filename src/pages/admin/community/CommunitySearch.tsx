import { useState } from 'react';
import styled from 'styled-components';

function CommunitySearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCondition, setSearchCondition] = useState('title');

  const handleSearch = () => {
    onSubmit({ condition: searchCondition, title: searchTerm, author: searchTerm });
  };

  return (
    <div>
      <select value={searchCondition} onChange={(e) => setSearchCondition(e.target.value)}>
        <option value="title">제목</option>
        <option value="author">작성자</option>
      </select>
      <input
        type="text"
        placeholder={searchCondition === 'title' ? '검색할 제목을 입력하세요.' : '검색할 작성자를 입력하세요.'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AdminButton class="admin" onClick={handleSearch}>
        검색
      </AdminButton>
    </div>
  );
}

export default CommunitySearch;

export const AdminButton = styled.div`
  background-color: #00c09e;
  color: white;
  border-radius: 5px;
  size: 10px;
  margin: 10px 10px 10px 10px;
  width: 50px;
  height: 30px;
  cursor: pointer;
`;
