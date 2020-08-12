import React from "react";
import styled, { css } from "styled-components";

import { RouterLink } from "primitives";
import { CSS } from "styles";

const StyledNav = styled.nav(
  ({ theme: { navBar } }: I_Theme) => css`
    background: ${navBar.background};
    padding: ${navBar.padding.vertical} 0;

    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}
  `
);

interface IStyledRouterLink extends I_Theme {}

const StyledRouterLink = styled(RouterLink)(
  ({
    theme: {
      navBar: {
        icon: { color, size }
      }
    }
  }: IStyledRouterLink) => css`
    display: flex;
    justify-content: center;

    svg {
      fill: ${color};
      width: ${size};
      height: ${size};
    }
  `
);

interface INavBar {
  pages: IPage[];
}

export const NavBar: React.FC<INavBar> = ({ pages }) => (
  <StyledNav>
    {pages.map(({ path, SvgIcon }: IPage, index: number) => (
      <StyledRouterLink key={index} to={path}>
        <SvgIcon />
      </StyledRouterLink>
    ))}
  </StyledNav>
);
