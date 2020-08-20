import React from "react";
import styled, { css } from "styled-components";

import { RouterNavLink } from "primitives";
import { CSS, COLORS } from "styles";

const { GRAY_LIGHT, BLACK } = COLORS;

const StyledNav = styled.nav(
  ({
    theme: {
      navBar: { background, height }
    }
  }: I_Theme) => css`
    height: ${height};
    background: ${background};
    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}
  `
);

const StyledRouterNavLink = styled(RouterNavLink)(
  ({
    theme: {
      boxShadow,
      borderRadius,
      navBar: {
        navLink: {
          background: { inactive }
        },
        icon: { size }
      }
    }
  }: I_Theme) => css`
    border-radius: ${borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${GRAY_LIGHT};
      width: ${size};
      height: ${size};
    }

    background: ${inactive};

    :hover,
    &.ACTIVE {
      background: ${GRAY_LIGHT};
      box-shadow: ${boxShadow.light};
      svg {
        fill: ${BLACK};
      }
    }
  `
);

interface INavBar {
  pages: IPage[];
}

export const NavBar: React.FC<INavBar> = ({ pages }) => (
  <StyledNav>
    {pages.map(({ path, SvgIcon }: IPage, i: number) => (
      <StyledRouterNavLink key={i} to={path} activeClassName="ACTIVE">
        <SvgIcon />
      </StyledRouterNavLink>
    ))}
  </StyledNav>
);
