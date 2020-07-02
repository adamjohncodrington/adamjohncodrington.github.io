import styled, { css } from "styled-components";

import { Ul } from "primitives";
import { PAGE_SECTION_PANEL_TYPES } from "constant-objects";

interface IPageSectionPanelList {
  pageSectionPanelType: string;
}

const CSS_COMMON = ({ theme: { pageSection } }: IThemeProp) => css`
  > * {
    border-bottom: ${pageSection.panelList.border.bottom};
  }

  > *:last-child {
    border-bottom: 0;
  }
`;

const CSS_RECIPE_CARDS = ({
  theme: {
    pageSection: {
      panelList: { recipeCards }
    }
  }
}: IThemeProp) => css`
  > * {
    padding: ${recipeCards.padding.vertical} 0;
  }

  > *:first-child {
    padding-top: ${recipeCards.firstRecipeCard.padding.top};
  }

  > *:last-child {
    padding-bottom: ${recipeCards.lastRecipeCard.padding.bottom};
  }

  ${CSS_COMMON}
`;

const CSS_COUNTED_LIST = ({
  theme: {
    pageSection: {
      panelList: { padding, countedListItems }
    }
  }
}: IThemeProp) => css`
  padding-bottom: ${padding.bottom};

  > * {
    padding: ${countedListItems.padding.vertical} 0;
  }

  ${CSS_COMMON}
`;

const CSS_REGULAR_CARDS = ({
  theme: {
    pageSection: {
      panelList: { padding, regularCards }
    }
  }
}: IThemeProp) => css`
  padding-bottom: ${padding.bottom};

  > * {
    padding: ${regularCards.padding.vertical} 0;
  }

  > *:first-child {
    padding-top: 0;
  }

  > *:last-child {
    padding-bottom: ${regularCards.lastRegularCard.padding.bottom};
  }

  ${CSS_COMMON}
`;

export const PageSectionPanelList = styled(
  Ul
)(({ pageSectionPanelType }: IPageSectionPanelList) =>
  pageSectionPanelType === PAGE_SECTION_PANEL_TYPES.RECIPE_CARDS
    ? CSS_RECIPE_CARDS
    : pageSectionPanelType === PAGE_SECTION_PANEL_TYPES.COUNTED_LIST
    ? CSS_COUNTED_LIST
    : CSS_REGULAR_CARDS
);
