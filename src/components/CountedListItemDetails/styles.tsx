import styled, { css } from "styled-components";

import { CSS } from "styles";

export const StyledOl = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  padding-top: 7px;

  > li:not(:last-child) {
    padding-bottom: 3px;
  }
`;

interface IStyledLi extends IThemeProp {
  isInFuture: boolean;
}

export const StyledLi = styled.li(
  ({ isInFuture, theme: { fadedOpacity } }: IStyledLi) => css`
    font-size: 85%;

    ${isInFuture &&
    css`
      opacity: ${fadedOpacity};
    `}
  `
);

export const StyledMainText = styled.div`
  flex: 1;
  margin-right: 15px;
`;

export const StyledIndex = styled.div`
  min-width: 25px;
`;

export const StyledDateText = styled.div(
  ({ favourite }: IFavourite) => favourite && CSS.PSEUDO_HEART_AFTER
);

//TODO: move this to theme, all of this tbh
const svgSize: string = "14px";
export const StyledSvgContainer = styled.div`
  margin-top: 1px;
  // display: flex;
  // align-items: center;

  svg {
    margin-left: 5px;
    height: ${svgSize};
    width: ${svgSize};
  }
`;
