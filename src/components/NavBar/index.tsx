import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  ${({
    theme: {
      navBar: { iconSize, verticalPadding }
    }
  }: IThemeProp) => css`
    display: grid;
    grid-auto-flow: column;
    background: black;
    padding: ${verticalPadding} 0;

    a {
      display: flex;
      justify-content: center;
    }

    svg {
      fill: white;
      width: ${iconSize};
      height: ${iconSize};
    }
  `}
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
