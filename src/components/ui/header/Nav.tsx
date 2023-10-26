import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <NavList>
      <List className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuClick(0)}>
        전체보기
      </List>

      <List className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuClick(1)}>
        오프라인 캠페인
      </List>

      <List className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuClick(2)}>
        온라인 캠페인
      </List>

      <List className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuClick(3)}>
        전시
      </List>

      <List className={activeIndex === 4 ? 'active' : ''} onClick={() => handleMenuClick(4)}>
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
