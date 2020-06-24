import styled, { css } from "styled-components";

import { Ul } from "primitives";

interface IPageSectionList extends IThemeProp {
  isCards?: boolean;
  isVinylCards?: boolean;
}

export const PageSectionList = styled(Ul)`
  ${({
    isCards,
    theme: {
      countedList,
      eventCardList,
      section: { padding }
    }
  }: IPageSectionList) => css`
    padding-bottom: ${padding.bottom};

    > * {
      border-bottom: ${countedList.border.bottom};
      padding: ${isCards
        ? `${eventCardList.padding.vertical} 0`
        : `${countedList.padding.vertical} 0`};
    }

    > *:last-child {
      ${isCards &&
      `padding-bottom: ${eventCardList.finalEventCardPaddingBottom};`}
      border-bottom: 0;
    }

    ${isCards &&
    css`
      > *:first-child {
        padding-top: 0;
      }
    `}
  `}
`;
