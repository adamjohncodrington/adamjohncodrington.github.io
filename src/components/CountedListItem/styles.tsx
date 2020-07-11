import styled, { css } from "styled-components";

import { CSS } from "styles";

interface ICountedListItemText extends IThemeProp {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

export const CountedListItemText = styled.span(
  ({ favourite, star, faded, theme }: ICountedListItemText) => css`
    flex: 1;

    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
    ${star && CSS.PSEUDO_ELEMENT_STAR}
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

interface IStyledLi extends IThemeProp {
  isInFuture: boolean;
}

export const StyledLi = styled.li(
  ({ isInFuture, theme: { fadedOpacity } }: IStyledLi) => css`
    font-size: 85%;

    // border: 1px dashed green;

    ${isInFuture &&
    css`
      opacity: ${fadedOpacity};
    `}
  `
);

export const StyledOl = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  padding-top: 10px;
  padding-bottom: 5px;

  > li:not(:last-child) {
    padding-bottom: 2px;
  }
`;

export const StyledSummary = styled.summary`
  cursor: pointer;
  outline: 0;
`;

export const StyledDetails = styled.details`
  outline: 0;
`;
