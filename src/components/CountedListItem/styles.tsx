import styled, { css } from "styled-components";

import { CSS } from "styles";

interface ICountedListItemText extends IThemeProp, IFavourite, IStar {
  faded: boolean;
}

export const CountedListItemText = styled.span(
  ({ favourite, star, faded, theme }: ICountedListItemText) => css`
    flex: 1;

    ${favourite && CSS.PSEUDO_HEART_BEFORE}
    ${star && CSS.PSEUDO_STAR_BEFORE}
    ${
      faded &&
      css`
        opacity: ${theme.fadedOpacity};
      `
    }
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
