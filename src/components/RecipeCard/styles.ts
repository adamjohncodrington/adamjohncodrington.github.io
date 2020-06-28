import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS } from "@styles";

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

interface IDietSymbol extends IThemeProp {
  color: string;
  size: string;
}

export const RecipeCardDietSymbol = styled.div(
  ({ size, color, theme: { recipeCard } }: IDietSymbol) => css`
    text-align: center;
    border-radius: ${recipeCard.dietSymbol.borderRadius};
    height: ${size};
    color: ${recipeCard.dietSymbol.textColor};
    width: ${size};
    line-height: ${size};
    font-size: ${recipeCard.dietSymbol.fontSize};

    ${color &&
    css`
      background: ${color};
    `}
  `
);

export const RecipeCardPortionCost = styled.span(
  ({ theme: { recipeCard } }: IThemeProp) => css`
    margin-top: ${recipeCard.portionCost.margin.top};
    ${CSS.FONT_SIZE_75_PERCENT}
  `
);

export const RecipeCardPhotoContainer = styled.div`
  text-align: center;
`;
