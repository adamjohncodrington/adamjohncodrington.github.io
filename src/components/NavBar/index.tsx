import React from "react";
import styled, { css } from "styled-components";

import { RouterNavLink } from "primitives";
import { CSS } from "styles";
import { PageHeader } from "components/PageHeader";

const StyledNav = styled.nav`
  background: black;
  ${CSS.GRID_COLUMN_EQUAL_WIDTHS}
`;

const StyledRouterNavLink = styled(RouterNavLink)(
  ({
    theme: {
      navBar: {
        navLink: {
          background: { active, inactive }
        },
        icon: { color, size }
      }
    }
  }: I_Theme) => css`
    border-radius: 0.375rem;
    margin: 0.5rem;
    display: flex;
    justify-content: center;

    padding: 0.5rem 0;

    svg {
      fill: ${color};
      width: ${size};
      height: ${size};
    }

    background: ${inactive};

    :hover,
    &.ACTIVE {
      background: ${active};
    }
  `
);

const StyledHeader = styled.header(
  ({
    theme: {
      navBar: { background }
    }
  }: I_Theme) => css`
    background: ${background};
    color: white;
  `
);

interface INavBar extends IPage {
  pages: IPage[];
}

export const NavBar: React.FC<INavBar> = ({ pages, title, count }) => {
  return (
    <>
      <PageHeader titleText={title} />

      <StyledNav>
        {pages.map(({ path, SvgIcon }: IPage, i: number) => (
          <StyledRouterNavLink key={i} to={path} activeClassName="ACTIVE">
            <SvgIcon />
          </StyledRouterNavLink>
        ))}
      </StyledNav>
    </>
  );
};
