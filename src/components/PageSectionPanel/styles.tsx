import styled, { css } from "styled-components";

import { Ul } from "primitives";
import { PAGE_SECTION } from "@constants";

interface IPageSectionPanelList {
  pageSectionPanelType: string;
}

const CSS_COMMON = ({ theme: { pageSection } }: I_Theme) => css`
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
      panelList: { recipes }
    }
  }
}: I_Theme) => css`
  > * {
    padding: ${recipes.padding.vertical} 0;
  }

  > *:first-child {
    padding-top: ${recipes.firstRecipeCard.padding.top};
  }

  > *:last-child {
    padding-bottom: ${recipes.lastRecipeCard.padding.bottom};
  }

  ${CSS_COMMON}
`;

const CSS_COUNTED_LIST = ({
  theme: {
    pageSection: {
      panelList: { padding, countedListItems }
    }
  }
}: I_Theme) => css`
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
}: I_Theme) => css`
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
  pageSectionPanelType === PAGE_SECTION.PANEL_TYPES.RECIPE_CARDS
    ? CSS_RECIPE_CARDS
    : pageSectionPanelType === PAGE_SECTION.PANEL_TYPES.COUNTED_LIST
    ? CSS_COUNTED_LIST
    : CSS_REGULAR_CARDS
);

export const StyledComingSoonPlaceholder = styled.div(
  ({
    theme: {
      pageSection: {
        comingSoon: { fontSize, fontWeight }
      }
    }
  }: I_Theme) => css`
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `
);
