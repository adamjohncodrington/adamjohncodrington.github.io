import React from "react";
import styled from "styled-components";

import { Ul, Li } from "../../../primitives";
import {
  concatenateMakesWithDefaultIngredientsHeader,
  generateIngredientListItem
} from "../../../utils/global";

const ingredientSectionPaddingBottom = "10px";

const IngredientSection = styled.div`
  :not(:last-child) {
    padding-bottom: ${ingredientSectionPaddingBottom};
  }
`;

interface IRecipeCardIngredients {
  makes?: IRecipeMakes;
  ingredients: IRecipeIngredients;
}

export const RecipeCardIngredients: React.FC<IRecipeCardIngredients> = ({
  makes,
  ingredients
}) => {
  const ingredientsAreSeparated: boolean = ingredients.length > 1;
  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? concatenateMakesWithDefaultIngredientsHeader(
        makes,
        defaultIngredientsHeader
      )
    : defaultIngredientsHeader;

  return (
    <Ul>
      {ingredientsHeader}

      {ingredientsAreSeparated
        ? ingredients.map(
            (ingredientSection: Array<IRecipeIngredient>, index: number) => (
              <IngredientSection key={index}>
                {ingredientSection.map(
                  (ingredient: IRecipeIngredient, subIndex: number) => (
                    <Li key={subIndex}>
                      {generateIngredientListItem(ingredient)}
                    </Li>
                  )
                )}
              </IngredientSection>
            )
          )
        : ingredients[0].map((ingredient: IRecipeIngredient, index: number) => (
            <Li key={index}>{generateIngredientListItem(ingredient)}</Li>
          ))}
    </Ul>
  );
};
