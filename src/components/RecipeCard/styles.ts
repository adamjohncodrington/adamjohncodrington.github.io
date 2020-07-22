import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS } from "styles";

interface IRecipeCardTitle extends IPanelIsVisible, I_Theme {}

export const RecipeCardTitle = styled(H3)(
  ({ panelIsVisible, theme: { recipe } }: IRecipeCardTitle) => css`
    text-transform: lowercase;
    font-weight: ${panelIsVisible ? "bold" : recipe.title.fontWeight};
    flex: 1;
  `
);

export const RecipeCardPanel = styled.div(
  ({ theme: { recipe } }: I_Theme) => css`
    padding-top: ${recipe.panel.padding.top};

    > * {
      padding-top: ${recipe.panel.children.padding.top};
    }
  `
);

export const RecipeCardCostsContainer = styled(FlexColumn)`
  text-align: center;
`;

export const RecipeCardPortionCost = styled.span(
  ({ theme: { recipe } }: I_Theme) => css`
    margin-top: ${recipe.portionCost.margin.top};
    ${CSS.FONT_SIZE_75_PERCENT}
  `
);
