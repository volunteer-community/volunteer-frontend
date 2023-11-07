import { useEffect, useState } from 'react';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import styled from 'styled-components';
import { memberColumns } from './memberColumns';
import TableSearch from './TableSearch';
import { getAllUser } from '@apis/admin';

export const MemberList: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser();
        if (Array.isArray(response)) {
          setData(response); // 데이터가 배열인 경우에만 설정
        } else {
          console.error('Invalid data format:', response);
          // 오류 처리 또는 다른 조치 추가
        }
        setLoading(false); // 데이터 로딩 완료 후 로딩 상태를 업데이트
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // 오류가 발생한 경우에도 로딩 상태를 업데이트
      }
    };
    fetchData();
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage, setGlobalFilter } =
    useTable(
      {
        columns: memberColumns,
        data: data, // 데이터 상태를 사용
        initialState: { pageIndex: 0, pageSize: 5 },
      },
      useGlobalFilter,
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

  return (
    <ProductTableStyle>
      <TableSearch onSubmit={setGlobalFilter} />
      {/* <TableSearch onSubmit={handleSearch} /> */}
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
  );
};

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
