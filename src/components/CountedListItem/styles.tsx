import styled, { css } from "styled-components";

import { getPseudoElementBefore, HEART, STAR } from "styles";

interface IStyledMainText extends IThemeProp, IFavourite, IStar {
  faded: boolean;
}

export const StyledTextContainer = styled.div`
  flex: 1;
`;

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

interface ICountedListItemPastCount extends IThemeProp {
  isLeaderboardItem?: boolean;
}

export const CountedListItemPastCount = styled.span(
  ({
    isLeaderboardItem,
    theme: { countedListItem }
  }: ICountedListItemPastCount) => css`
    font-weight: bold;
    text-align: right;
    width: ${countedListItem.count.width};
    margin-left: ${isLeaderboardItem
      ? css`
          calc(3 * ${countedListItem.count.margin.left})
        `
      : countedListItem.count.margin.left};
  `
);

export const CountedListItemFutureCount = styled(CountedListItemPastCount)(
  ({ theme: { fadedOpacity } }: IThemeProp) => css`
    opacity: ${fadedOpacity};
  `
);
