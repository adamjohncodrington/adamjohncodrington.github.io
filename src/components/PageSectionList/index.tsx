import styled, { css } from "styled-components";

import { Ul } from "primitives";

interface IPageSectionList extends IThemeProp {
  isCardList?: boolean;
  isVinylCards?: boolean;
}

export const PageSectionList = styled(Ul)`
  ${({
    isCardList,
    theme: {
      countedList,
      eventCardList,
      section: { padding }
    }
  }: IPageSectionList) => css`
    padding-bottom: ${padding.bottom};

    > * {
      border-bottom: ${countedList.border.bottom};
      padding: ${isCardList
        ? `${eventCardList.padding.vertical} 0`
        : `${countedList.padding.vertical} 0`};
    }

    > *:last-child {
      ${isCardList &&
      `padding-bottom: ${eventCardList.finalEventCardPaddingBottom};`}
      border-bottom: 0;
    }

    ${isCardList &&
    css`
      > *:first-child {
        padding-top: 0;
      }
    `}
  `}
`;
