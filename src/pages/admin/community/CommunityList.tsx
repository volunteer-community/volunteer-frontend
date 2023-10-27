import React, { useState } from 'react';
import { usePagination, useTable } from 'react-table';
import styled from 'styled-components';
import { communityColumns } from './communityColumns';
import communitydata from './communitydata.json';
export interface Data {
  communityId: number;
  categoryId: string;
  imageId: string;
  title: string;
  maxParticipant: number;
  participant: number;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  status: string;
  content: string;
  location: string;
}

export const CommunityList: React.FC = () => {
  // const [data, setData] = useState<Data[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const transformedData = React.useMemo(() => {
    return communitydata.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    })) as Data[];
  }, []);

  // 필터 사용 시 useMemo훅 사용이 최선인지 고려 중
  const filteredData = React.useMemo(() => {
    if (selectedCategory === '전체') {
      return transformedData;
    }
    return transformedData.filter((item) => item.categoryId === selectedCategory);
  }, [selectedCategory, transformedData]);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage } = useTable<Data>(
    {
      columns: communityColumns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );
  // 페이지네이션 버튼 범위 관리 상태
  const [pageRangeStartIndex, setPageRangeStartIndex] = useState(0);

  // 다음 or 이전 페이지 그룹(5페이지씩)으로 이동하는 함수
  function movePageGroup(dir: 'prev' | 'next'): void {
    if (dir === 'prev' && pageRangeStartIndex >= 5) {
      setPageRangeStartIndex(pageRangeStartIndex - 5);
    } else if (dir === 'next' && pageRangeStartIndex < pageCount - 5) {
      setPageRangeStartIndex(pageRangeStartIndex + 5);
    }
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      {/* 임시로 작성한 코드, 수정 예정 */}
      <StyledSelect value={selectedCategory} onChange={handleCategoryChange}>
        <option value="전체">전체</option>
        <option value="DIY">DIY</option>
        <option value="오프라인 캠페인">오프라인 캠페인</option>
        <option value="온라인 캠페인">온라인 캠페인</option>
        <option value="전시/홍보">전시/홍보</option>
      </StyledSelect>

      <ProductTableStyle>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 페이지네이션 */}
        <div className="pagination">
          {/* 이전 페이지 그룹 버튼 */}
          <TableButton onClick={() => movePageGroup('prev')} disabled={pageRangeStartIndex === 0}>
            {'<'}
          </TableButton>

          {/* 페이징 숫자 목록, 최대 5개의 페이지 번호 생성, 마지막 페이지 그룹에서는 남은 페이지 수만큼만 버튼 생성 */}
          {[...Array(Math.min(5, pageCount - pageRangeStartIndex))].map((_, i) => (
            <TableButton key={i} onClick={() => gotoPage(pageRangeStartIndex + i)}>
              {pageRangeStartIndex + i + 1}
            </TableButton>
          ))}

          {/* 다음 페이지 그룹 버튼 */}
          <TableButton onClick={() => movePageGroup('next')} disabled={pageRangeStartIndex >= pageCount - 5}>
            {'>'}
          </TableButton>
        </div>
      </ProductTableStyle>
    </>
  );
};

// 삭제 예정
const StyledSelect = styled.select`
  margin: 8rem 0 2rem 2.5rem;
`;

const ProductTableStyle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  table {
    border-collapse: collapse;
    width: 95%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: rgb(0, 192, 158, 0.5);
  }
  th {
    background-color: #57c8b5;
    color: white;
    text-align: center;
  }
`;

const TableButton = styled.button`
  background: #919191;
  color: #fff;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
`;
