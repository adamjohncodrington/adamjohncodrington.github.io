import styled, { css } from "styled-components";

import {
  DivWithCentredText,
  H3,
  FlexColumn,
  SeventyFivePercentSpan
} from "primitives";
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
      padding-bottom: ${recipeCard.panel.children.padding.bottom};
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
    border-radius: ${recipeCard.dietSymbol.borderRadius};
    text-align: center;
    height: ${size};
    width: ${size};
    line-height: ${size};
    font-size: ${recipeCard.dietSymbol.fontSize};

    ${color &&
    css`
      background: ${color};
      color: ${recipeCard.dietSymbol.textColor};
    `}
  `
);

export const RecipeCardPortionCost = styled(SeventyFivePercentSpan)(
  ({ theme: { recipeCard } }: IThemeProp) => css`
    margin-top: ${recipeCard.portionCost.margin.top};
  `
);

export const RecipeCardPhotoContainer = DivWithCentredText;
