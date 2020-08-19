import React from "react";
import styled, { css } from "styled-components";

import { RouterNavLink } from "primitives";
import { CSS } from "styles";

const StyledNav = styled.nav(() => CSS.GRID_COLUMN_EQUAL_WIDTHS);

const StyledRouterNavLink = styled(RouterNavLink)(
  ({
    theme: {
      navBar: {
        background,
        padding,
        icon: { color, size }
      }
    }
  }: I_Theme) => css`
    display: flex;
    justify-content: center;

    padding: ${padding.vertical} 0;

    svg {
      fill: ${color};
      width: ${size};
      height: ${size};
    }

    background: ${background.inactive};

    :hover {
      background: ${background.active};
    }

    &.ACTIVE {
      background: ${background.active};
      :hover {
        opacity: 75%;
      }
    }
  `
);

interface INavBar {
  pages: IPage[];
}

export const NavBar: React.FC<INavBar> = ({ pages }) => {
  return (
    <StyledNav>
      {pages.map(({ path, SvgIcon }: IPage, i: number) => (
        <StyledRouterNavLink key={i} to={path} activeClassName="ACTIVE">
          <SvgIcon />
        </StyledRouterNavLink>
      ))}
    </StyledNav>
  );
};
