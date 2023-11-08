import { FormEvent } from 'react';

interface SearchProps {
  onSubmit: (filter: string) => void;
}

function TableSearch({ onSubmit }: SearchProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filterInput = event.currentTarget.elements.namedItem('filter') as HTMLInputElement;
    if (filterInput) {
      const filterValue = filterInput.value;
      onSubmit(filterValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="filter" />
      <button type="submit">Search</button>
    </form>
  );
}
// 서버에서 조회 시 검색 코드
// import React, { useState } from "react";

// function TableSearch({ onSubmit }) {
//   const [searchNickname, setSearchNickname] = useState("");

//   const handleSearch = () => {
//     // 검색어가 입력되었을 때, 부모 컴포넌트로 검색어를 전달합니다.
//     onSubmit(searchNickname);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="닉네임 검색"
//         value={searchNickname}
//         onChange={(e) => setSearchNickname(e.target.value)}
//       />
//       <button onClick={handleSearch}>검색</button>
//     </div>
//   );
// }

export default TableSearch;
