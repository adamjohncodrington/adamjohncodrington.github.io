import React from "react";
import styled, { css } from "styled-components";

import { Link } from "primitives";
import { PAGE_ROUTES } from "config";

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "col1 col2";
`;

const StyledSvg = styled.img(({ theme }: IThemeProp) => {
  const iconSizeDesktop = theme.homePage.icon.size.desktop;
  const iconSizePhone = theme.homePage.icon.size.phone;
  const iconSizePadding = theme.homePage.icon.padding;

  return css`
    padding: ${iconSizePadding};
    width: ${iconSizeDesktop};
    height: ${iconSizeDesktop};

    @media (max-width: ${theme.breakpoints.phone.maxWidth}) {
      width: ${iconSizePhone};
      height: ${iconSizePhone};
    }
  `;
});

export const HomePage: React.FC = () => (
  <FlexContainer>
    <GridContainer>
      {PAGE_ROUTES.map(({ icon, dest }: IPageRoute, index: number) => (
        <Link key={index} to={dest}>
          <StyledSvg src={icon} />
        </Link>
      ))}
    </GridContainer>
  </FlexContainer>
);
