import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavList>
      <List>전체보기</List>

      <List>오프라인 캠페인</List>

      <List>온라인 캠페인</List>

      <List>전시</List>

      <List>DIY 프로젝트</List>
    </NavList>
  );
};

export default Nav;

const NavList = styled.ul`
  width: 70%;
  display: flex;
  padding: 0px 0 0 30px;
`;

const List = styled.li`
  width: 17%;
  padding: 45px 0 0 0;
  cursor: pointer;
  text-align: center;
  position: relative;
  z-index: 1;

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

  &:hover::before {
    transform: scaleY(1);
  }
`;
