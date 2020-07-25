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

interface IBasicListItemPastCount extends I_Theme {
  isLeaderboardItem?: boolean;
}

export const BasicListItemPastCount = styled.span(
  ({
    isLeaderboardItem,
    theme: { basicListItem }
  }: IBasicListItemPastCount) => css`
    text-align: right;
    width: ${basicListItem.count.width};
    margin-left: ${isLeaderboardItem
      ? css`
          calc(3 * ${basicListItem.count.margin.left})
        `
      : basicListItem.count.margin.left};
  `
);

export const BasicListItemFutureCount = styled(BasicListItemPastCount)(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
  `
);
