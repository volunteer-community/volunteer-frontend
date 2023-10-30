import styled from 'styled-components';
import { setActiveIndex, selectActiveIndex } from '@stores/slices/NavCatrgorySlice.ts';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector(selectActiveIndex);

  const handleMenuClick = (index: number) => {
    if (index === activeIndex) {
      // 이미 선택한 메뉴를 다시 클릭한 경우, "전체보기"로 변경
      dispatch(setActiveIndex(-1));
    } else {
      // 다른 메뉴 클릭 시 해당 인덱스로 설정
      dispatch(setActiveIndex(index));
    }
    window.scrollTo(0, 700);
  };

  return (
    <NavList>
      <List
        className={activeIndex === -1 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(-1);
        }}
      >
        전체보기
      </List>

      <List
        className={activeIndex === 0 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(0);
        }}
      >
        오프라인 캠페인
      </List>

      <List
        className={activeIndex === 1 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(1);
        }}
      >
        온라인 캠페인
      </List>

      <List
        className={activeIndex === 2 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(2);
        }}
      >
        전시
      </List>

      <List
        className={activeIndex === 3 ? 'active' : ''}
        onClick={() => {
          handleMenuClick(3);
        }}
      >
        DIY 프로젝트
      </List>
    </NavList>
  );
};

export default Nav;

const NavList = styled.ul`
  width: 80%;
  display: flex;
  padding: 0px 0 0 30px;
`;

const List = styled.li`
  width: 17%;
  padding: 40px 0 0 0;
  cursor: pointer;
  text-align: center;
  position: relative;
  z-index: 1;
  font-size: 18px;

  &.active,
  &:hover {
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00c09e;
    transform-origin: top center;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  &.active::before,
  &:hover::before {
    transform: scaleY(1);
  }
`;
