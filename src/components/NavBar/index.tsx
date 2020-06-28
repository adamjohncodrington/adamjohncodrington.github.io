import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { CSS } from "@styles";

const StyledNav = styled.nav(
  ({ theme: { navBar } }: IThemeProp) => css`
    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}

    background: ${navBar.background};
    padding: ${navBar.padding.vertical} 0;

    a {
      display: flex;
      justify-content: center;

      :hover {
        svg {
          border: ${navBar.icon.hoverShrinkSize} solid transparent;
          fill: ${navBar.icon.hoverColor}
        }
      }

      svg {
        fill: ${navBar.icon.color};
        width: ${navBar.icon.size};
        height: ${navBar.icon.size};
      }
    }
  `
);

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
