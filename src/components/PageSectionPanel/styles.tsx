import styled, { css } from "styled-components";

import { Ul } from "primitives";
import { PAGE_SECTION_PANEL_TYPES } from "@constants";

interface IPageSectionPanelList {
  pageSectionPanelType: string;
}

const CSS_COMMON = ({ theme }: IThemeProp) => css`
  > * {
    border-bottom: ${theme.pageSectionPanelList.borderBottom};
  }
  > *:last-child {
    border-bottom: 0;
  }
`;

const CSS_RECIPE_CARDS = ({ theme }: IThemeProp) => css`
  ${CSS_COMMON}
  > * {
    padding: ${theme.recipe.title.padding.vertical} 0;
  }
  > *:first-child {
    padding-top: ${theme.recipe.first.padding.top};
  }
  > *:last-child {
    padding-bottom: ${theme.recipe.last.padding.bottom};
  }
`;

const CSS_COUNTED_LIST = ({ theme }: IThemeProp) => css`
  ${CSS_COMMON}
  padding-bottom: ${theme.section.padding.bottom};
  > * {
    padding: ${theme.countedList.padding.vertical} 0;
  }
`;

const CSS_REGULAR_CARDS = ({ theme }: IThemeProp) => css`
  ${CSS_COMMON}
  padding-bottom: ${theme.section.padding.bottom};
  > * {
    padding: ${theme.eventCardList.padding.vertical} 0;
  }
  > *:first-child {
    padding-top: 0;
  }
  > *:last-child {
    padding-bottom: ${theme.eventCardList.finalEventCardPaddingBottom};
  }
`;

export const PageSectionPanelList = styled(Ul)`
  ${({ pageSectionPanelType }: IPageSectionPanelList) =>
    pageSectionPanelType === PAGE_SECTION_PANEL_TYPES.RECIPE_CARDS
      ? CSS_RECIPE_CARDS
      : pageSectionPanelType === PAGE_SECTION_PANEL_TYPES.COUNTED_LIST
      ? CSS_COUNTED_LIST
      : CSS_REGULAR_CARDS}
`;
