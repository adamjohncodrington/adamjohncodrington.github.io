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
  ({ theme: { fadedOpacity } }: ThemeProp) => css`
    opacity: ${fadedOpacity};
    margin-left: 0.3125rem;
    font-size: 75%;
  `
);

interface IStyledPrimaryText extends ThemeProp, I__Favourite, I_Bold, I__Star {}

export const StyledPrimaryText = styled.span(
  ({
    bold,
    favourite,
    star,
    theme: { fadedOpacity }
  }: IStyledPrimaryText) => css`
    font-weight: ${bold ? "bold" : "normal"};

    ${favourite && getPseudoElementAfter(HEART)}
    ${star && getPseudoElementAfter(STAR)}
  `
);

interface IMiniCardCount extends ThemeProp, I_Bold {
  greaterCountPadding?: boolean;
}

export const StyledPrimaryCount = styled.span(
  ({ bold, greaterCountPadding, theme: { miniCard } }: IMiniCardCount) => css`
    text-align: right;
    font-weight: ${bold ? "bold" : "normal"};

    width: ${miniCard.count.width};
    margin-left: ${!!greaterCountPadding
      ? css`
          calc(3 * ${miniCard.count.margin.left})
        `
      : miniCard.count.margin.left};
  `
);

export const StyledSecondaryCount = styled(StyledPrimaryCount)(
  ({ theme: { fadedOpacity } }: ThemeProp) => css`
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

interface IStyledLi extends ThemeProp {
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

interface IStyledDateText extends I__Favourite {}

export const StyledPanelSecondaryText = styled.div(
  ({ favourite }: IStyledDateText) => css`
    ${favourite && getPseudoElementAfter(HEART)};
  `
);

export const StyledPanelContainer = styled.div``;

export const StyledSecondaryText = styled.div`
  font-size: 87.5%;
`;
