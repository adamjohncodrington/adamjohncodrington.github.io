import React from "react";
import styled, { css } from "styled-components";

import { USE_COLORS_IN_NAV_BAR, USE_HOVER_STYLING } from "config";
import { RouterLink } from "primitives";
import { CSS } from "styles";

const StyledNav = styled.nav(
  ({ theme: { navBar } }: IThemeProp) => css`
    background: ${navBar.background};
    padding: ${navBar.padding.vertical} 0;

    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}
  `
);

interface IStyledRouterLink extends IThemeProp {
  color?: ColorValue;
  active?: boolean;
}

const StyledRouterLink = styled(RouterLink)(
  ({ active, color, theme: { navBar } }: IStyledRouterLink) => css`
    display: flex;
    justify-content: center;

    svg {
      fill: ${navBar.icon.color};
      width: ${navBar.icon.size};
      height: ${navBar.icon.size};
    }

    ${USE_HOVER_STYLING &&
    css`
      :hover {
        svg {
          fill: ${(USE_COLORS_IN_NAV_BAR && color) ||
          navBar.icon.defaultHoverColor};

          ::after {
            fill: ${navBar.icon.color};
          }
        }
      }
    `}

    // None of the following approaches work at styling an active nav bar link
    :active {
      * {
        color: red;
      }
    }

    &.active {
      * {
        color: blue;
      }
    }

    ${active &&
    css`
      * {
        color: green;
      }
    `}
  `
);

interface INavBar {
  pages: Array<IPage>;
}

export const NavBar: React.FC<INavBar> = ({ pages }) => (
  <StyledNav>
    {pages.map(({ path, SvgIcon, color }: IPage, index: number) => (
      <StyledRouterLink key={index} to={path} color={color}>
        <SvgIcon />
      </StyledRouterLink>
    ))}
  </StyledNav>
);
