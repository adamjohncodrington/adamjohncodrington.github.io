import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { FlexRow } from "primitives";
import { getPseudoElementBefore, getPseudoElementAfter } from "styles";

const { HEART, STAR, TRIANGLE_PLAY } = UNICODE;

export const StyledPrimaryTextContainer = styled(FlexRow)`
  flex: 1;
  align-items: baseline;
`;

export const StyledPrimaryAltText = styled.span(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
    margin-left: 5px;
    font-size: 75%;
    font-weight: normal;
  `
);

interface IStyledPrimaryText extends I_Theme, I__Video, I__Favourite, I__Star {
  faded: boolean;
}

export const StyledPrimaryText = styled.span(
  ({
    favourite,
    star,
    faded,
    video,
    theme: { fadedOpacity }
  }: IStyledPrimaryText) => css`
    ${
      faded &&
      css`
        opacity: ${fadedOpacity};
      `
    }

    ${video && getPseudoElementBefore(TRIANGLE_PLAY)}
    ${favourite && getPseudoElementBefore(HEART)}
    ${star && getPseudoElementBefore(STAR)}
  `
);

interface IMiniCardPastCount extends I_Theme {
  greaterCountPadding?: boolean;
}

export const StyledPrimaryCount = styled.span(
  ({ greaterCountPadding, theme: { miniCard } }: IMiniCardPastCount) => css`
    text-align: right;
    width: ${miniCard.count.width};
    margin-left: ${!!greaterCountPadding
      ? css`
          calc(3 * ${miniCard.count.margin.left})
        `
      : miniCard.count.margin.left};
  `
);

export const StyledSecondaryCount = styled(StyledPrimaryCount)(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
  `
);

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

export const StyledLevel1MainText = styled.div(
  ({ useTriangleAsBullet }: I_UseTriangleAsBullet) => css`
    flex: 1;
    margin-right: 15px;

    ${useTriangleAsBullet && getPseudoElementBefore(TRIANGLE_PLAY)}
  `
);

export const StyledIndex = styled.div`
  min-width: 25px;
`;

interface IStyledDateText extends I__Favourite, I_ShowVideoSymbol {}

export const StyledPanelSecondaryText = styled.div(
  ({ favourite, showVideoSymbol: video }: IStyledDateText) => css`
    ${favourite && !video && getPseudoElementAfter(HEART)};
    ${video && !favourite && getPseudoElementAfter(TRIANGLE_PLAY)};
    ${favourite && video && getPseudoElementAfter(HEART + " " + TRIANGLE_PLAY)};
  `
);

export const StyledPanelContainer = styled.div``;
