import styled, { css } from "styled-components";

import { FlexRow, H2, Ul } from "primitives";

export const PageSectionTitle = styled(H2)`
  text-transform: lowercase;
`;

export const PageSectionHeaderContainer = styled(FlexRow)(
  ({ theme: { pageSection } }: I_Theme) => css`
    padding: ${pageSection.header.padding.vertical} 0;
  `
);

export const PageSectionCount = styled.span(
  ({ theme: { pageSection } }: I_Theme) => css`
    margin-left: ${pageSection.count.margin.left};
  `
);

export const PageSectionStarredCount = styled(PageSectionCount)(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
  `
);

export const PageSectionSvgContainer = styled.div(
  ({
    theme: {
      pageSection: {
        icon: { size }
      }
    }
  }: I_Theme) => css`
    display: flex;
    align-items: center;

    svg {
      height: ${size};
      width: ${size};
    }
  `
);

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
    padding-top: ${recipes.firstRecipe.padding.top};
  }

  > *:last-child {
    padding-bottom: ${recipes.lastRecipe.padding.bottom};
  }

  ${CSS_COMMON}
`;

const CSS_MINI_CARDS = ({
  theme: {
    pageSection: {
      panelList: { padding, miniCards }
    }
  }
}: I_Theme) => css`
  padding-bottom: ${padding.bottom};

  > * {
    padding: ${miniCards.padding.vertical} 0;
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
)(({ recipes, miniCards }: IPageSectionPanelDataTypes) =>
  recipes ? CSS_RECIPE_CARDS : miniCards ? CSS_MINI_CARDS : CSS_REGULAR_CARDS
);

export const StyledComingSoonPlaceholder = styled.div(
  ({
    theme: {
      fadedOpacity,
      pageSection: {
        comingSoon: { fontSize }
      }
    }
  }: I_Theme) => css`
    opacity: ${fadedOpacity};
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: ${fontSize};
  `
);
