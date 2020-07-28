import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { FlexRow } from "primitives";
import { getPseudoElementBefore, getPseudoElementAfter } from "styles";

const { HEART, STAR, TRIANGLE_RIGHT } = UNICODE;

interface IStyledMainText extends I_Theme, I__Favourite, I__Star {
  faded: boolean;
}

export const StyledTextContainer = styled(FlexRow)`
  flex: 1;
  align-items: baseline;
`;

export const StyledSecondaryText = styled.span(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
    margin-left: 5px;
    font-size: 75%;
  `
);

export const StyledMainText = styled.span(
  ({ favourite, star, faded, theme: { fadedOpacity } }: IStyledMainText) => css`
    ${
      faded &&
      css`
        opacity: ${fadedOpacity};
      `
    }

    ${favourite && getPseudoElementBefore(HEART)}
    ${star && getPseudoElementBefore(STAR)}
  `
);

interface IMiniCardPastCount extends I_Theme {
  isLeaderboardItem?: boolean;
}

export const MiniCardPastCount = styled.span(
  ({ isLeaderboardItem, theme: { MiniCard } }: IMiniCardPastCount) => css`
    text-align: right;
    width: ${MiniCard.count.width};
    margin-left: ${isLeaderboardItem
      ? css`
          calc(3 * ${MiniCard.count.margin.left})
        `
      : MiniCard.count.margin.left};
  `
);

export const MiniCardFutureCount = styled(MiniCardPastCount)(
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

    ${useTriangleAsBullet && getPseudoElementBefore(TRIANGLE_RIGHT)}
  `
);

export const StyledIndex = styled.div`
  min-width: 25px;
`;

interface IStyledDateText extends I__Favourite, I_ShowVideoSymbol {}

export const StyledDateText = styled.div(
  ({ favourite, showVideoSymbol: video }: IStyledDateText) =>
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
