import styled, { css } from "styled-components";

import { Ul } from "primitives";

export const RecipeGroupList = styled(Ul)`
  ${({
    theme: {
      recipe: { border, title, first, last }
    }
  }: IThemeProp) => css`
    > * {
      border-bottom: ${border.bottom};
      padding: ${title.padding.vertical} 0;
    }

    > *:first-child {
      padding-top: ${first.padding.top};
    }

    > *:last-child {
      border-bottom: 0;
      padding-bottom: ${last.padding.bottom};
    }
  `}
`;

interface IPageSectionList extends IThemeProp {
  extraVerticalPaddingBetweenListItems: boolean;
  isVinylCards?: boolean;
}

export const PageSectionList = styled(Ul)`
  ${({
    extraVerticalPaddingBetweenListItems,
    theme: {
      countedList,
      eventCardList,
      section: { padding }
    }
  }: IPageSectionList) => css`
    padding-bottom: ${padding.bottom};

    > * {
      border-bottom: ${countedList.border.bottom};
      padding: ${extraVerticalPaddingBetweenListItems
        ? `${eventCardList.padding.vertical} 0`
        : `${countedList.padding.vertical} 0`};
    }

    > *:last-child {
      ${extraVerticalPaddingBetweenListItems &&
      `padding-bottom: ${eventCardList.finalEventCardPaddingBottom};`}
      border-bottom: 0;
    }

    ${extraVerticalPaddingBetweenListItems &&
    css`
      > *:first-child {
        padding-top: 0;
      }
    `}
  `}
`;
