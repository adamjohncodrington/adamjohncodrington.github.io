import styled, { css } from "styled-components";

import { HEART, getPseudoElementAfter, TRIANGLE_RIGHT } from "styles";

export const StyledOl = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  padding-top: 7px;

  > li:not(:last-child) {
    padding-bottom: 3px;
  }
`;

interface IStyledLi extends I_Theme {
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

interface IStyledDateText extends IFavourite {
  video?: IVideo;
}

export const StyledDateText = styled.div(
  ({ favourite, video }: IStyledDateText) =>
    (favourite || video) &&
    getPseudoElementAfter(
      favourite && !video
        ? HEART
        : video && !favourite
        ? TRIANGLE_RIGHT
        : video && favourite
        ? HEART + " " + TRIANGLE_RIGHT
        : ""
    )
);

export const StyledPanelContainer = styled.div``;
