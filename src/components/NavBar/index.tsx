import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background: black;
  padding: 10px 0;

  a {
    display: flex;
    justify-content: center;
  }

  svg {
    fill: white;
    width: 50px;
    height: 50px;
  }
`;

interface INavBar {
  pages: Array<IPage>;
}

export const NavBar: React.FC<INavBar> = ({ pages }) => (
  <StyledNav>
    {pages.map(({ path, SvgIcon }: IPage, index: number) => (
      <Link key={index} to={path}>
        <SvgIcon />
      </Link>
    ))}
  </StyledNav>
);
