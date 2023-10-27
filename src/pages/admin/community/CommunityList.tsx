import { useEffect, useState } from 'react';
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
  const [data, setData] = useState<Data[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    const transformedData = communitydata.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));
    setData(transformedData as Data[]);
  }, []);

  // useEffect 훅 외에 다른 방법을 찾자
  useEffect(() => {
    if (selectedCategory === '전체') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.categoryId === selectedCategory);
      setFilteredData(filtered);
    }
  }, [selectedCategory, data]);

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
      {/* 선미님이 만든 셀렉트 적용할 것 */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="전체">전체</option>
        <option value="DIY">DIY</option>
        <option value="오프라인 캠페인">오프라인 캠페인</option>
        <option value="온라인 캠페인">온라인 캠페인</option>
        <option value="전시/홍보">전시/홍보</option>
      </select>

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

const ProductTableStyle = styled.div`
  padding: 50px 0 50px 0;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }
  th {
    background-color: #02c75a;
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
