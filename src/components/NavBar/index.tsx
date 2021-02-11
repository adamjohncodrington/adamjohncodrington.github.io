import React, { FC } from "react";
import styled, { css } from "styled-components";

import { RouterNavLink } from "primitives";
import { CSS, COLORS } from "styles";

const { GRAY_LIGHT, BLACK } = COLORS;

const StyledNav = styled.nav(
  ({
    theme: {
      navBar: { background, height }
    }
  }: ThemeProp) => css`
    height: ${height};
    background: ${background};
    ${CSS.GRID_COLUMN_EQUAL_WIDTHS};
  `
);

const StyledRouterNavLink = styled(RouterNavLink)(
  ({
    theme: {
      boxShadow,
      borderRadius,
      pageMargin,
      navBar: {
        navLink: {
          background: { inactive }
        },
        icon: { size }
      }
    }
  }: ThemeProp) => css`
    border-radius: ${borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;

    margin: ${pageMargin};

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

type Props = {
  pages: IPage[];
};

export const NavBar: FC<Props> = ({ pages }) => (
  <StyledNav data-test="nav-bar">
    {pages.map(({ path, SvgIcon }: IPage, i: number) => (
      <StyledRouterNavLink key={i} to={path} activeClassName="ACTIVE">
        <SvgIcon />
      </StyledRouterNavLink>
    ))}
  </StyledNav>
);
