import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { getPseudoElementAfter } from "styles";

export const StyledOl = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  padding-top: 6px;

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

interface IStyledDateText extends I__Favourite {
  video?: IVideo;
}

export const StyledDateText = styled.div(
  ({ favourite, video }: IStyledDateText) =>
    (favourite || video) &&
    getPseudoElementAfter(
      favourite && !video
        ? UNICODE.HEART
        : video && !favourite
        ? UNICODE.TRIANGLE_RIGHT
        : video && favourite
        ? UNICODE.HEART + " " + UNICODE.TRIANGLE_RIGHT
        : ""
    )
);

export const StyledPanelContainer = styled.div``;
