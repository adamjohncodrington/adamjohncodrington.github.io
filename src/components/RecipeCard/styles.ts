import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS } from "styles";

interface IRecipeCardTitle extends IThemeProp {
  favourite?: boolean;
}

export const RecipeCardTitle = styled(H3)(
  ({ theme: { recipeCard }, favourite }: IRecipeCardTitle) => css`
    text-transform: lowercase;
    font-weight: ${recipeCard.title.fontWeight};
    flex: 1;
    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
  `
);

export const RecipeCardPanel = styled.div(
  ({ theme: { recipeCard } }: IThemeProp) => css`
    padding-top: ${recipeCard.panel.padding.top};

    > * {
      padding-top: ${recipeCard.panel.children.padding.top};
    }
  `
);

export const RecipeCardCostsContainer = styled(FlexColumn)`
  text-align: center;
`;

export const RecipeCardPortionCost = styled.span(
  ({ theme: { recipeCard } }: IThemeProp) => css`
    margin-top: ${recipeCard.portionCost.margin.top};
    ${CSS.FONT_SIZE_75_PERCENT}
  `
);

export const RecipeCardPhotoContainer = styled.div`
  text-align: center;
`;
