import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { USE_COLORS_IN_NAV_BAR } from "@config";
import { CSS } from "@styles";

const StyledNav = styled.nav(
  ({ theme: { navBar } }: IThemeProp) => css`
    background: ${navBar.background};
    padding: ${navBar.padding.vertical} 0;

    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}
  `
);

interface IStyledLink extends IThemeProp {
  color?: ColorValue;
}

const StyledLink = styled(Link)(
  ({ color, theme: { navBar } }: IStyledLink) => css`
    display: flex;
    justify-content: center;

    svg {
      fill: ${navBar.icon.color};
      width: ${navBar.icon.size};
      height: ${navBar.icon.size};
    }

    :hover {
      svg {
        border: ${navBar.icon.hoverShrinkSize} solid transparent;
        fill: ${(USE_COLORS_IN_NAV_BAR && color) ||
        navBar.icon.defaultHoverColor};
      }
    }
  `
);

interface INavBar {
  pages: Array<IPage>;
}

export const NavBar: React.FC<INavBar> = ({ pages }) => (
  <StyledNav>
    {pages.map(({ path, SvgIcon, color }: IPage, index: number) => (
      <StyledLink key={index} to={path} color={color}>
        <SvgIcon />
      </StyledLink>
    ))}
  </StyledNav>
);
