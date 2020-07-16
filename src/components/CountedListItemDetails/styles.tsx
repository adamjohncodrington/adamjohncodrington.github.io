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

interface IStyledDateText extends IFavourite, IVideo {}
export const StyledDateText = styled.div(
  ({ favourite, youtubeId }: IStyledDateText) => css`
    ${favourite && !youtubeId && CSS.PSEUDO_HEART_AFTER}
    ${youtubeId && !favourite && CSS.PSEUDO_PLAY_AFTER}
  `
);
