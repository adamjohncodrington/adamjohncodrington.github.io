import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS, getPseudoElementBefore, HEART } from "styles";

interface IRecipeCardTitle extends IPanelIsVisible, IThemeProp, IFavourite {}

export const RecipeCardTitle = styled(H3)(
  ({ panelIsVisible, theme: { recipe }, favourite }: IRecipeCardTitle) => css`
    text-transform: lowercase;
    font-weight: ${panelIsVisible ? "bold" : recipe.title.fontWeight};
    flex: 1;
    ${favourite && getPseudoElementBefore(HEART)}
  `
);

export const RecipeCardPanel = styled.div(
  ({ theme: { recipe } }: IThemeProp) => css`
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
  ({ theme: { recipe } }: IThemeProp) => css`
    margin-top: ${recipe.portionCost.margin.top};
    ${CSS.FONT_SIZE_75_PERCENT}
  `
);
