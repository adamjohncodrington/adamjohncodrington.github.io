import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS } from "styles";

interface IRecipeCardTitle extends IThemeProp {
  favourite?: boolean;
}

export const RecipeCardTitle = styled(H3)(
  ({ theme: { recipe }, favourite }: IRecipeCardTitle) => css`
    text-transform: lowercase;
    font-weight: ${recipe.title.fontWeight};
    flex: 1;
    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
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

export const RecipeCardPhotoContainer = styled.div`
  text-align: center;
`;
