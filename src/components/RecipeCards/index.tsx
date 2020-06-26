import React from "react";
import styled, { css } from "styled-components";

import { Ul, Li } from "primitives";

import { RecipeCard } from "../RecipeCard";

const RecipeGroupList = styled(Ul)`
  ${({
    theme: {
      recipe: { border, title, first, last }
    }
  }: IThemeProp) => css`
    > * {
      border-bottom: ${border.bottom};
      padding: ${title.padding.vertical} 0;
    }

    > *:first-child {
      padding-top: ${first.padding.top};
    }

    > *:last-child {
      border-bottom: 0;
      padding-bottom: ${last.padding.bottom};
    }
  `}
`;

interface IRecipeCards {
  recipeCards: Array<IRecipeCard>;
}

export const RecipeCards: React.FC<IRecipeCards> = ({ recipeCards }) => (
  <RecipeGroupList>
    {recipeCards.map(
      (recipeCard: IRecipeCard, index: number) =>
        !recipeCard.hide && (
          <Li key={index}>
            <RecipeCard key={index} {...recipeCard} />
          </Li>
        )
    )}
  </RecipeGroupList>
);
