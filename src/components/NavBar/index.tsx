import React from "react";
import styled, { css } from "styled-components";

import { RouterNavLink } from "primitives";
import { CSS, COLORS } from "styles";

const {
  GRAY_LIGHT,
  GRAY_MEDIUM_LIGHT,
  GRAY_MEDIUM,
  GRAY_WHITE,
  WHITE,
  BLACK
} = COLORS;

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
      borderRadius,
      navBar: {
        navLink: {
          background: { active, inactive },
          margin
        },
        icon: { color, size }
      }
    }
  }: I_Theme) => css`
    border-radius: ${borderRadius};
    margin: ${margin};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${color};
      width: ${size};
      height: ${size};
    }

    background: ${inactive};

    :hover,
    &.ACTIVE {
      background: ${GRAY_MEDIUM_LIGHT};
      box-shadow: 0 0 3px white;

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
