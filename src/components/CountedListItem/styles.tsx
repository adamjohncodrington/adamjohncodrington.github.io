import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { FlexRow } from "primitives";
import { getPseudoElementBefore } from "styles";

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

    ${favourite && getPseudoElementBefore(UNICODE.HEART)}
    ${star && getPseudoElementBefore(UNICODE.STAR)}
  `
);

interface ICountedListItemPastCount extends I_Theme {
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
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
  `
);
