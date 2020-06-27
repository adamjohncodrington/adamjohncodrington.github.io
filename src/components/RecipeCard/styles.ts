import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";
import { CSS } from "@styles";

interface IRecipeCardTitle extends IThemeProp {
  favourite?: boolean;
}

export const RecipeCardTitle = styled(H3)`
  ${({ theme: { recipeCard }, favourite }: IRecipeCardTitle) => css`
    text-transform: lowercase;
    font-weight: ${recipeCard.title.fontWeight};
    flex: 1;

    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
  `}
`;

export const RecipeCardPanel = styled.div`
  padding-top: 5px;

  > * {
    padding-top: 10px;
    padding-bottom: 5px;
  }
`;

export const PaddedFlexColumn = styled(FlexColumn)`
  text-align: center;

  > *:not(:first-child) {
    padding-top: 4px;
  }
`;

interface IDietSymbol {
  color: string;
  size: string;
}

export const DietSymbol = styled.div`
  ${({ size }: IDietSymbol) => css`
    border-radius: 25%;
    text-align: center;
    height: ${size};
    width: ${size};
    line-height: ${size};
    font-size: 80%;
  `}

  ${({ color }: IDietSymbol) =>
    color &&
    css`
      background: ${color};
      color: white;
    `}
`;
